


import Layout from '../components/Layout';

export default function AccountPage() {
  return (
    <Layout header="👤 Account">
      <div style={{textAlign: 'center', marginTop: 32}}>
        <h2 style={{
          color: '#fff',
          fontWeight: 800,
          letterSpacing: 1,
          fontSize: 28,
          marginBottom: 18,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10
        }}>
          Profile & Settings
          <span style={{display: 'inline-flex', alignItems: 'center'}}>
            <svg width="26" height="26" fill="none" stroke="#bdbdfc" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.2"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 8 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 8a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 8 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09A1.65 1.65 0 0 0 16 4.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 8c.14.31.22.65.22 1s-.08.69-.22 1z"/></svg>
          </span>
        </h2>
        <div style={{
          display: 'inline-block',
          background: '#181A20',
          color: '#fff',
          borderRadius: 22,
          padding: '32px 32px 26px 32px',
          margin: '24px auto',
          minWidth: 260,
          boxShadow: '0 6px 24px #232336cc, 0 2px 12px #23233655',
          border: '1.5px solid #232336',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Blue glow top right */}
          <div style={{
            position: 'absolute',
            top: -40, right: -40,
            width: 120, height: 120,
            background: 'radial-gradient(circle, #3b82f6 0%, rgba(59,130,246,0.10) 70%, transparent 100%)',
            filter: 'blur(10px)',
            zIndex: 0,
            pointerEvents: 'none',
          }} />
          {/* Avatar */}
          <div style={{
            width: 70, height: 70,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #232336 0%, #232336 100%)',
            margin: '0 auto 18px auto',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 32, fontWeight: 900, color: '#bdbdfc',
            boxShadow: '0 2px 12px #23233655',
            border: '2.5px solid #232336',
            zIndex: 1,
          }}>
            JD
          </div>
          <div style={{fontWeight: 700, fontSize: 22, marginBottom: 6, color: '#fff', zIndex: 1}}>John Doe</div>
          <div style={{color: '#bdbdfc', marginBottom: 8, fontSize: 16, fontWeight: 500, zIndex: 1}}>@username</div>
          <div style={{fontSize: 15, color: '#bdbdfc', zIndex: 1}}>Email: john@example.com</div>
        </div>
        <p style={{color: '#bdbdfc', fontWeight: 500, marginTop: 18}}>Edit your profile and settings here soon!</p>
      </div>
    </Layout>
  );
}
