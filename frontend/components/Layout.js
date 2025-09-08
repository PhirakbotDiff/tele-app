import React from "react";
import { useRouter } from 'next/router';

export default function Layout({ children, header = "💳 Dashboard" }) {
  const router = useRouter();
  const navItems = [
    { label: 'Dashboard', icon: '🏠', path: '/' },
    { label: 'Card', icon: '💳', path: '/card' },
    { label: 'Account', icon: '👤', path: '/account' },
    { label: 'Saving', icon: '💰', path: '/saving' },
  ];
  return (
    <>
      <main style={{
        maxWidth: 480,
        margin: "0 auto",
        padding: '12px 24px 80px 24px',
        background: "linear-gradient(135deg, #18181b 0%, #232323 100%)",
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        boxShadow: "0 4px 24px #0008",
        border: "1.5px solid #333",
        borderBottom: 'none',
        minHeight: '80vh',
        transition: 'border-radius 0.2s',
      }}>
        {/* Back button except on dashboard */}
        {router.pathname !== '/' && (
          <button
            onClick={() => router.back()}
            style={{
              background: 'none',
              border: 'none',
              color: '#FFD700',
              fontSize: 22,
              fontWeight: 700,
              cursor: 'pointer',
              marginBottom: 8,
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              padding: 0,
              transition: 'color 0.2s',
            }}
            aria-label="Back"
          >
            <span style={{fontSize: 22, display: 'inline-block', transform: 'translateY(1px)'}}>←</span>
            <span style={{fontSize: 15, fontWeight: 600}}>Back</span>
          </button>
        )}
        <h1 style={{ color: '#8a94b9', letterSpacing: 1, marginBottom: 16 }}>{header}</h1>
        {children}
      </main>
      {/* Enhanced Navigation Bar */}
      <nav style={{
        display: 'flex',
        gap: 0,
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(90deg, #232323 0%, #18181b 100%)',
        borderTop: '1.5px solid #333',
        padding: '0',
        justifyContent: 'space-around',
        zIndex: 100,
        boxShadow: '0 -2px 12px #0008',
        height: 64
      }}>
        {navItems.map((item) => {
          const isActive = router.pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => router.push(item.path)}
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                border: 'none',
                background: 'none',
                fontWeight: 700,
                color: isActive ? '#fff' : '#bbb',
                fontSize: 15,
                letterSpacing: 1,
                cursor: 'pointer',
                position: 'relative',
                transition: 'color 0.2s',
                outline: 'none',
                padding: 0,
                height: 64,
                WebkitTapHighlightColor: 'transparent',
              }}
              onMouseDown={e => e.currentTarget.style.transform = 'scale(0.93)'}
              onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              <span style={{
                fontSize: 22,
                marginBottom: 2,
                filter: isActive ? 'drop-shadow(0 0 6px #8f5cff)' : 'none',
                transition: 'filter 0.2s',
              }}>{item.icon}</span>
              <span style={{
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: 1,
                marginTop: 1,
                color: isActive ? 'linear-gradient(90deg, #8f5cff 0%, #4e54c8 100%)' : '#bbb',
                background: isActive ? 'linear-gradient(90deg, #8f5cff 0%, #4e54c8 100%)' : 'none',
                WebkitBackgroundClip: isActive ? 'text' : 'unset',
                WebkitTextFillColor: isActive ? 'transparent' : 'unset',
                transition: 'color 0.2s',
              }}>{item.label}</span>
              {/* Animated underline for active */}
              <span style={{
                position: 'absolute',
                left: '50%',
                bottom: 8,
                transform: 'translateX(-50%)',
                width: isActive ? 32 : 0,
                height: 4,
                borderRadius: 2,
                background: 'linear-gradient(90deg, #8f5cff 0%, #4e54c8 100%)',
                boxShadow: isActive ? '0 0 8px #8f5cff80' : 'none',
                opacity: isActive ? 1 : 0,
                transition: 'width 0.25s cubic-bezier(.4,2,.6,1), opacity 0.2s',
              }} />
            </button>
          );
        })}
      </nav>
    </>
  );
}
