
"use client";

export default function WhatsAppButton() {
  const phone = "919172750077";

  const message =
    "Hello Padhye Synergetic, I would like to know more about your financial services.";

  const whatsappLink =
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Padhye Synergetic on WhatsApp"
      title="Chat with us on WhatsApp"
      style={{
        position: "fixed",
        right: "22px",
        bottom: "22px",
        zIndex: 99999,
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        backgroundColor: "#25D366",
        color: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
        textDecoration: "none",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="34"
        height="34"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16 .8A15.1 15.1 0 0 0 3.1 23.7L1 31l7.5-2A15.1 15.1 0 1 0 16 .8zm0 27.5a12.3 12.3 0 0 1-6.3-1.7l-.5-.3-4.5 1.2 1.2-4.4-.3-.5A12.4 12.4 0 1 1 16 28.3zm6.8-9.3c-.4-.2-2.1-1.1-2.5-1.2-.3-.1-.6-.2-.8.2-.3.4-1 1.2-1.2 1.4-.2.2-.4.3-.8.1a10 10 0 0 1-3-1.8 11.2 11.2 0 0 1-2-2.5c-.2-.4 0-.6.2-.8l.6-.7c.2-.2.3-.4.4-.6.1-.2 0-.5 0-.7l-1.1-2.7c-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.4 1.4 3.6c.2.2 2.4 3.8 5.9 5.2.8.3 1.5.5 2 .6.8.2 1.6.2 2.2.1.7-.1 2.1-.9 2.4-1.7.3-.8.3-1.5.2-1.7-.1-.2-.3-.3-.7-.5z" />
      </svg>
    </a>
  );
}
