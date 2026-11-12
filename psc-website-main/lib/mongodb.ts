import { MongoClient } from 'mongodb'

const g = globalThis as unknown as { _mongoClient?: Promise<MongoClient> }

export function getClient(): Promise<MongoClient> {
  const uri = process.env.MONGODB_URI
  if (!uri) throw new Error('MONGODB_URI is not set')
  if (!g._mongoClient) {
    g._mongoClient = new MongoClient(uri).connect()
  }
  return g._mongoClient
}
