export type ContributionTiming = 'beginning' | 'end'

export type SipResult = {
  futureValue: number
  invested: number
  returns: number
  schedule: { month: number; contribution: number; balance: number }[]
}

export function calculateSip({
  monthlyContribution,
  annualReturn,
  years,
  annualStepUp = 0,
  timing = 'end',
}: {
  monthlyContribution: number
  annualReturn: number
  years: number
  annualStepUp?: number
  timing?: ContributionTiming
}): SipResult {
  const contribution = Math.max(0, monthlyContribution)
  const months = Math.max(0, Math.round(years * 12))
  const monthlyRate = annualReturn / 100 / 12
  let balance = 0
  let invested = 0
  const schedule: SipResult['schedule'] = []

  for (let month = 1; month <= months; month += 1) {
    const currentContribution = contribution * Math.pow(1 + Math.max(-0.99, annualStepUp / 100), Math.floor((month - 1) / 12))
    if (timing === 'beginning') balance += currentContribution
    if (monthlyRate !== 0) balance *= 1 + monthlyRate
    if (timing === 'end') balance += currentContribution
    invested += currentContribution
    schedule.push({ month, contribution: currentContribution, balance })
  }

  return { futureValue: balance, invested, returns: balance - invested, schedule }
}

export type SwpResult = {
  remaining: number
  withdrawn: number
  monthsLasted: number
  schedule: { month: number; withdrawal: number; balance: number }[]
}

export function calculateSwp({
  corpus,
  monthlyWithdrawal,
  annualReturn,
  years,
  annualIncrease = 0,
  timing = 'end',
}: {
  corpus: number
  monthlyWithdrawal: number
  annualReturn: number
  years: number
  annualIncrease?: number
  timing?: ContributionTiming
}): SwpResult {
  const months = Math.max(0, Math.round(years * 12))
  const monthlyRate = annualReturn / 100 / 12
  let balance = Math.max(0, corpus)
  let withdrawn = 0
  const schedule: SwpResult['schedule'] = []

  for (let month = 1; month <= months && balance > 0; month += 1) {
    const planned = Math.max(0, monthlyWithdrawal) * Math.pow(1 + Math.max(-0.99, annualIncrease / 100), Math.floor((month - 1) / 12))
    if (timing === 'beginning') {
      const actual = Math.min(balance, planned)
      balance -= actual
      withdrawn += actual
      if (balance > 0 && monthlyRate !== 0) balance *= 1 + monthlyRate
      schedule.push({ month, withdrawal: actual, balance })
    } else {
      if (monthlyRate !== 0) balance *= 1 + monthlyRate
      const actual = Math.min(balance, planned)
      balance -= actual
      withdrawn += actual
      schedule.push({ month, withdrawal: actual, balance })
    }
  }

  return { remaining: Math.max(0, balance), withdrawn, monthsLasted: schedule.length, schedule }
}

export function calculateLumpSum(principal: number, annualReturn: number, years: number, compoundsPerYear = 1) {
  const p = Math.max(0, principal)
  const periods = Math.max(1, compoundsPerYear)
  const value = p * Math.pow(1 + annualReturn / 100 / periods, periods * Math.max(0, years))
  return { futureValue: value, invested: p, returns: value - p }
}

export function calculateEmi(principal: number, annualRate: number, months: number) {
  const p = Math.max(0, principal)
  const n = Math.max(1, Math.round(months))
  const rate = annualRate / 100 / 12
  const emi = rate === 0 ? p / n : (p * rate * Math.pow(1 + rate, n)) / (Math.pow(1 + rate, n) - 1)
  return { emi, total: emi * n, interest: emi * n - p }
}

export type TaxRegime = 'old' | 'new'

// Indicative FY 2025-26 individual (resident, below 60) tax, salaried standard deduction assumed.
// Surcharge, special-rate income and other reliefs are not modelled.
export function calculateIncomeTax(grossIncome: number, regime: TaxRegime, deductions = 0) {
  const gross = Math.max(0, grossIncome)
  const slabs: [number, number][] = regime === 'new'
    ? [[400000, 0], [800000, 0.05], [1200000, 0.1], [1600000, 0.15], [2000000, 0.2], [2400000, 0.25], [Infinity, 0.3]]
    : [[250000, 0], [500000, 0.05], [1000000, 0.2], [Infinity, 0.3]]
  const standardDeduction = regime === 'new' ? 75000 : 50000
  const taxable = Math.max(0, gross - standardDeduction - (regime === 'old' ? Math.max(0, deductions) : 0))
  let tax = 0
  let lower = 0
  for (const [upper, rate] of slabs) {
    if (taxable > lower) tax += (Math.min(taxable, upper) - lower) * rate
    lower = upper
  }
  const rebateLimit = regime === 'new' ? 1200000 : 500000
  const rebateMax = regime === 'new' ? 60000 : 12500
  if (taxable <= rebateLimit) tax = Math.max(0, tax - rebateMax)
  else if (regime === 'new') tax = Math.min(tax, taxable - rebateLimit) // marginal relief just above the rebate limit
  const cess = tax * 0.04
  return { taxable, tax, cess, total: tax + cess }
}
