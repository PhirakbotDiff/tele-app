import React from "react";
import { useRouter } from 'next/router';

export default function Layout({ children, header = "💳 Dashboard" }) {
  const router = useRouter();
  return (
    <>
      <main style={{
        maxWidth: 480,
        margin: "2rem auto",
        padding: 24,
        background: "linear-gradient(135deg, #18181b 0%, #232323 100%)",
        borderRadius: 18,
        boxShadow: "0 4px 24px #0008",
        border: "1.5px solid #333",
        minHeight: '80vh',
      }}>
        <h1 style={{ color: '#FFD700', letterSpacing: 1, marginBottom: 16 }}>{header}</h1>
        {children}
      </main>
      {/* Navigation Bar */}
      <nav style={{
        display: 'flex',
        gap: 8,
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(90deg, #232323 0%, #18181b 100%)',
        borderTop: '1.5px solid #333',
        padding: '8px 0',
        justifyContent: 'space-around',
        zIndex: 100,
        boxShadow: '0 -2px 12px #0008'
      }}>
        <button style={{ flex: 1, padding: 10, border: 'none', background: 'none', fontWeight: 700, color: router.pathname === '/' ? '#FFD700' : '#bbb', fontSize: 16, letterSpacing: 1 }} onClick={() => router.push('/')}>Dashboard</button>
        <button style={{ flex: 1, padding: 10, border: 'none', background: 'none', fontWeight: 700, color: router.pathname === '/card' ? '#FFD700' : '#bbb', fontSize: 16, letterSpacing: 1 }} onClick={() => router.push('/card')}>Card</button>
        <button style={{ flex: 1, padding: 10, border: 'none', background: 'none', fontWeight: 700, color: router.pathname === '/account' ? '#FFD700' : '#bbb', fontSize: 16, letterSpacing: 1 }} onClick={() => router.push('/account')}>Account</button>
        <button style={{ flex: 1, padding: 10, border: 'none', background: 'none', fontWeight: 700, color: router.pathname === '/saving' ? '#FFD700' : '#bbb', fontSize: 16, letterSpacing: 1 }} onClick={() => router.push('/saving')}>Saving</button>
      </nav>
    </>
  );
}
