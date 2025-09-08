import React from "react";

export default function Home() {
  return (
    <main style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
      <h1>Telegram Mini App (Next.js Frontend)</h1>
      <p>Welcome! This is the web interface for your Telegram Mini App.</p>
      <p>Connect this frontend to your FastAPI backend for full functionality.</p>
    </main>
  );
}
