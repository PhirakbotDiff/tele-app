

import Layout from '../components/Layout';
import { useState } from 'react';

const mockTransactions = [
  { id: 1, date: '2025-09-01', desc: 'Deposit', amount: 500, type: 'in' },
  { id: 2, date: '2025-09-03', desc: 'Coffee Shop', amount: -4.5, type: 'out' },
  { id: 3, date: '2025-09-04', desc: 'Salary', amount: 1200, type: 'in' },
  { id: 4, date: '2025-09-05', desc: 'Groceries', amount: -60, type: 'out' },
  { id: 5, date: '2025-09-06', desc: 'Transfer to Savings', amount: -200, type: 'out' },
];

export default function CardPage() {
  const [selectedTx, setSelectedTx] = useState(null);
  // Example details for demo
  const txDetails = selectedTx && {
    ...selectedTx,
    status: 'Successful',
    orderId: '686530262047292',
    paymentMethod: 'USDT (TRC20)',
    fundsUsed: Math.abs(selectedTx.amount) + ' USDT',
    hash: '0x2fa8...9c1d',
    time: '21-08-25, 5:43PM',
  };

  return (
    <Layout header="Card">
      <div style={{textAlign: 'left', marginTop: 32, padding: '0 0 18px 0'}}>
        <h2 style={{color: '#8a94b9', textAlign: 'left', marginLeft: 40}}>Your Card</h2>
        <div style={{
          background: '#181A20',
          color: '#fff',
          borderRadius: 22,
          padding: '28px 28px 20px 28px',
          margin: '20px auto',
          maxWidth: 340,
          minHeight: 170,
          boxShadow: '0 6px 24px #232336cc, 0 2px 12px #23233655',
          border: '1.5px solid #232336',
          position: 'relative',
          overflow: 'hidden',
          fontSize: 22,
          fontWeight: 700,
          letterSpacing: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
          {/* Blue glow top right */}
          <div style={{
            position: 'absolute',
            top: -50, right: -50,
            width: 140, height: 140,
            background: 'radial-gradient(circle, #3b82f6 0%, rgba(59,130,246,0.10) 70%, transparent 100%)',
            filter: 'blur(10px)',
            zIndex: 0,
            pointerEvents: 'none',
          }} />
          {/* Card chip */}
          <div style={{
            width: 44, height: 28,
            borderRadius: 8,
            background: 'linear-gradient(90deg, #bdbdfc 0%, #232336 100%)',
            marginBottom: 18,
            marginTop: 2,
            boxShadow: '0 1.5px 8px #23233655',
            opacity: 0.7,
          }} />
          <div style={{fontSize: 23, fontWeight: 800, letterSpacing: 2, color: '#fff', zIndex: 1, marginBottom: 8}}>
            **** **** **** 1234
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1 }}>
            <div style={{ fontSize: 15, color: '#bdbdfc', fontWeight: 600 }}>Exp: 12/29</div>
            <div style={{ fontSize: 18, color: '#bdbdfc', fontWeight: 700, letterSpacing: 1 }}>VISA</div>
          </div>
        </div>

        <h2 style={{color: '#8a94b9', textAlign: 'left', marginLeft: 40}}>Transaction History</h2>
        <div style={{
          background: '#181A20',
          borderRadius: 18,
          padding: 22,
          margin: '0 auto',
          maxWidth: 360,
          boxShadow: '0 6px 24px #232336cc, 0 2px 12px #23233655',
          color: '#fff',
          textAlign: 'left',
          backdropFilter: 'blur(16px)',
          border: '1.5px solid #232336',
          position: 'relative',
        }}>
          <div style={{display: 'flex', flexDirection: 'column', gap: 16}}>
            {mockTransactions.map(tx => (
              <div
                key={tx.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: '#181A20',
                  borderRadius: 14,
                  boxShadow: '0 1.5px 8px #23233633',
                  padding: '14px 18px',
                  marginBottom: 0,
                  border: '1.2px solid #232336',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'transform 0.13s, box-shadow 0.13s',
                  cursor: 'pointer',
                }}
                onClick={() => setSelectedTx(tx)}
                onMouseOver={e => {
                  e.currentTarget.style.transform = 'scale(1.025)';
                  e.currentTarget.style.boxShadow = '0 4px 18px #23233688, 0 2px 12px #23233655';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 1.5px 8px #23233633';
                }}
              >
                <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    background: tx.amount > 0 ? '#232336' : '#232336',
                    boxShadow: '0 0 8px #23233655',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: 20,
                    marginRight: 8,
                  }}>
                    {tx.amount > 0 ? (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#bdbdfc" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 19V5"/>
                        <path d="M5 12l7-7 7 7"/>
                      </svg>
                    ) : (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#bdbdfc" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14"/>
                        <path d="M19 12l-7 7-7-7"/>
                      </svg>
                    )}
                  </span>
                  <div>
                    <div style={{fontWeight: 800, color: '#fff', fontSize: 16, letterSpacing: 0.2}}>{tx.desc}</div>
                    <div style={{fontSize: 12, color: '#bdbdfc', marginTop: 2, fontWeight: 500}}>{tx.date}</div>
                  </div>
                </div>
                <div style={{
                  textAlign: 'right',
                  color: tx.amount > 0 ? '#fff' : '#fff',
                  fontWeight: 900,
                  fontSize: 18,
                  textShadow: '0 0 4px #23233680',
                  minWidth: 80,
                  letterSpacing: 0.5,
                  fontFamily: 'inherit',
                }}>
                  {tx.amount > 0 ? '+' : ''}{tx.amount}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transaction Detail Modal */}
        {selectedTx && (
          <div style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(10,12,20,0.55)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{
              background: '#181A20',
              borderRadius: 22,
              boxShadow: '0 8px 32px #232336cc, 0 2px 12px #23233655',
              border: '1.5px solid #232336',
              minWidth: 340,
              maxWidth: 400,
              padding: '32px 28px 24px 28px',
              color: '#fff',
              position: 'relative',
              backdropFilter: 'blur(16px)',
              fontFamily: 'inherit',
              overflow: 'hidden',
            }}>
              {/* Blue glow top right */}
              <div style={{
                position: 'absolute',
                top: -60, right: -60,
                width: 180, height: 180,
                background: 'radial-gradient(circle, #3b82f6 0%, rgba(59,130,246,0.12) 70%, transparent 100%)',
                filter: 'blur(12px)',
                zIndex: 0,
                pointerEvents: 'none',
              }} />
              <button
                onClick={() => setSelectedTx(null)}
                style={{
                  position: 'absolute',
                  left: 18, top: 18,
                  background: 'none',
                  border: 'none',
                  color: '#bdbdfc',
                  fontSize: 22,
                  cursor: 'pointer',
                  zIndex: 2,
                }}
                aria-label="Back"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#bdbdfc" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <div style={{textAlign: 'center', marginBottom: 18, marginTop: 2, position: 'relative', zIndex: 1}}>
                <div style={{fontSize: 15, color: '#bdbdfc', fontWeight: 600, marginBottom: 2}}>Amount</div>
                <div style={{fontSize: 32, fontWeight: 900, color: txDetails.amount > 0 ? '#fff' : '#fff', letterSpacing: 1, marginBottom: 8}}>
                  {txDetails.amount > 0 ? '+' : ''}{txDetails.amount} USDT
                </div>
                <div style={{display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(34,197,94,0.13)', borderRadius: 8, padding: '3px 14px', fontSize: 16, color: '#22c55e', fontWeight: 700, marginBottom: 2, border: '1px solid #1e3a1e'}}>
                  <svg width="18" height="18" fill="none" stroke="#22c55e" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>
                  Successful
                </div>
              </div>
              <div style={{borderTop: '1.5px solid #232336', margin: '18px 0 0 0', paddingTop: 18, position: 'relative', zIndex: 1}}>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 12}}>
                  <span style={{color: '#bdbdfc', fontWeight: 500}}>Description</span>
                  <span style={{fontWeight: 700, color: '#fff'}}>{txDetails.desc}</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 12}}>
                  <span style={{color: '#bdbdfc', fontWeight: 500}}>Time</span>
                  <span style={{fontWeight: 700, color: '#fff'}}>{txDetails.time}</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 12}}>
                  <span style={{color: '#bdbdfc', fontWeight: 500}}>Order ID</span>
                  <span style={{fontWeight: 700, color: '#fff', display: 'flex', alignItems: 'center', gap: 6}}>
                    {txDetails.orderId}
                    <button style={{background: 'none', border: 'none', cursor: 'pointer', color: '#bdbdfc', padding: 0}} title="Copy Order ID" onClick={() => navigator.clipboard.writeText(txDetails.orderId)}>
                      <svg width="16" height="16" fill="none" stroke="#bdbdfc" strokeWidth="1.7" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><rect x="3" y="3" width="13" height="13" rx="2"/></svg>
                    </button>
                  </span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 12}}>
                  <span style={{color: '#bdbdfc', fontWeight: 500}}>Payment Method</span>
                  <span style={{fontWeight: 700, color: '#fff'}}>{txDetails.paymentMethod}</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 12}}>
                  <span style={{color: '#bdbdfc', fontWeight: 500}}>Funds Used</span>
                  <span style={{fontWeight: 700, color: '#fff'}}>{txDetails.fundsUsed}</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 0}}>
                  <span style={{color: '#bdbdfc', fontWeight: 500}}>Transaction Hash</span>
                  <span style={{fontWeight: 700, color: '#fff', display: 'flex', alignItems: 'center', gap: 6}}>
                    {txDetails.hash}
                    <button style={{background: 'none', border: 'none', cursor: 'pointer', color: '#bdbdfc', padding: 0}} title="Copy Hash" onClick={() => navigator.clipboard.writeText(txDetails.hash)}>
                      <svg width="16" height="16" fill="none" stroke="#bdbdfc" strokeWidth="1.7" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><rect x="3" y="3" width="13" height="13" rx="2"/></svg>
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
