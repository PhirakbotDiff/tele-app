


import React, { useState, useEffect } from "react";
import QRCode from 'react-qr-code';
import Layout from '../components/Layout';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const mockBalance = 1250.75;
const mockWallets = [
  { currency: "USD", balance: 800.5 },
  { currency: "EUR", balance: 320.2 },
  { currency: "THB", balance: 4500 },
];

const mockCrypto = [
  { symbol: 'BTC', name: 'Bitcoin', price: 67000, change: 2.1 },
  { symbol: 'ETH', name: 'Ethereum', price: 3500, change: 1.5 },
  { symbol: 'BNB', name: 'Binance Coin', price: 600, change: -0.8 },
  { symbol: 'SOL', name: 'Solana', price: 150, change: 3.2 },
  { symbol: 'DOGE', name: 'Dogecoin', price: 0.15, change: -1.2 },
];

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [balance, setBalance] = useState(mockBalance);
  const [wallets, setWallets] = useState(mockWallets);
  const [crypto, setCrypto] = useState(mockCrypto);
  const [showSaving, setShowSaving] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [showBalance, setShowBalance] = useState(true);

  // Mock savings data for the graph
  const savingsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [
      {
        label: 'Savings',
        data: [200, 350, 500, 700, 900, 1200, 1500, 1800],
        borderColor: '#4e54c8',
        backgroundColor: 'rgba(78,84,200,0.1)',
        tension: 0.4,
        fill: true,
        pointRadius: 4,
        pointBackgroundColor: '#6366f1',
      }
    ]
  };

  const savingsOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Savings Over Time',
        color: '#4e54c8',
        font: { size: 18 }
      }
    },
    scales: {
      x: { ticks: { color: '#6366f1' } },
      y: { ticks: { color: '#6366f1' } }
    }
  };

  return (
    <Layout header={null}>
      {/* Profile Row */}
      <section style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 0 18px 0', marginBottom: 8, borderBottom: '1px solid #23263a',
        background: 'none',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <img
            src={`https://api.dicebear.com/7.x/identicon/svg?seed=${user?.id || 'user'}`}
            alt="avatar"
            width={48}
            height={48}
            style={{ borderRadius: '50%', border: '2px solid #23263a', background: '#23263a' }}
          />
          <div>
            <div style={{ fontWeight: 700, fontSize: 20, color: '#fff' }}>{user ? `${user.first_name} ${user.last_name || ''}` : 'Diff'}</div>
            <div style={{ color: '#8a94b9', fontSize: 15 }}>@{user?.username || 'diff'}</div>
          </div>
        </div>
        <div style={{ color: '#8a94b9', fontSize: 22, marginRight: 4 }}>
          <span style={{ display: 'inline-block', background: '#23263a', borderRadius: '50%', padding: 6 }}>
            <svg width="22" height="22" fill="none" stroke="#8a94b9" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v.01"/><path d="M12 8v4"/></svg>
          </span>
        </div>
      </section>

      {/* Balance Card */}
      <section style={{ marginBottom: 24 }}>
        <div style={{
          background: 'rgba(36, 41, 61, 0.85)',
          borderRadius: 18,
          boxShadow: '0 4px 32px #23263a80',
          padding: 24,
          border: '1.5px solid #23263a',
          position: 'relative',
          marginBottom: 8,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
            <span style={{ color: '#8a94b9', fontSize: 16, fontWeight: 500 }}>Current Balance</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ background: '#23263a', borderRadius: 8, padding: '2px 10px', color: '#8a94b9', fontWeight: 600, fontSize: 15, marginRight: 4 }}>$ USD</span>
              <svg width="22" height="22" fill="none" stroke="#8a94b9" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v.01"/><path d="M12 8v4"/></svg>
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
            <span style={{ fontSize: 38, fontWeight: 800, color: '#fff', letterSpacing: 1 }}>
              {showBalance ? `$${balance.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}` : '****'}
            </span>
            <span
              style={{ color: '#8a94b9', fontSize: 28, cursor: 'pointer', display: 'flex', alignItems: 'center' }}
              onClick={() => setShowBalance(v => !v)}
              title={showBalance ? 'Hide Balance' : 'Show Balance'}
            >
              {showBalance ? (
                // Eye icon
                <svg width="28" height="28" fill="none" stroke="#8a94b9" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/>
                  <circle cx="12" cy="12" r="3.5"/>
                </svg>
              ) : (
                // Eye-off icon
                <svg width="28" height="28" fill="none" stroke="#8a94b9" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-7 0-11-7-11-7a21.77 21.77 0 0 1 5.06-6.06"/>
                  <path d="M1 1l22 22"/>
                  <path d="M9.53 9.53A3.5 3.5 0 0 0 12 15.5a3.5 3.5 0 0 0 2.47-5.97"/>
                  <path d="M14.47 14.47A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1-2.47 5.97"/>
                </svg>
              )}
            </span>
          </div>
          <div style={{ display: 'flex', gap: 18, justifyContent: 'space-between', marginTop: 8 }}>
            <button style={{ flex: 1, background: 'rgba(44, 48, 71, 0.7)', border: 'none', borderRadius: 12, color: '#fff', fontWeight: 600, fontSize: 16, padding: '12px 0', marginRight: 8, boxShadow: '0 2px 8px #23263a30', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: 22, marginBottom: 2 }}>↗️</span>
              <span style={{ fontSize: 13, color: '#8a94b9', fontWeight: 500 }}>Send</span>
            </button>
            <button
              style={{ flex: 1, background: 'rgba(44, 48, 71, 0.7)', border: 'none', borderRadius: 12, color: '#fff', fontWeight: 600, fontSize: 16, padding: '12px 0', marginRight: 8, boxShadow: '0 2px 8px #23263a30', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              onClick={() => setShowQR(true)}
            >
              <span style={{ fontSize: 22, marginBottom: 2 }}>⬇️</span>
              <span style={{ fontSize: 13, color: '#8a94b9', fontWeight: 500 }}>Receive</span>
            </button>
            <button style={{ flex: 1, background: 'rgba(44, 48, 71, 0.7)', border: 'none', borderRadius: 12, color: '#fff', fontWeight: 600, fontSize: 16, padding: '12px 0', boxShadow: '0 2px 8px #23263a30', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: 22, marginBottom: 2 }}>🧾</span>
              <span style={{ fontSize: 13, color: '#8a94b9', fontWeight: 500 }}>History</span>
            </button>
          </div>
        </div>
        {/* QR Code Modal */}
        {showQR && (
          <div style={{
            position: 'fixed',
            top: 0, left: 0, width: '100vw', height: '100vh',
            background: 'rgba(0,0,0,0.45)',
            zIndex: 1000,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
            onClick={() => setShowQR(false)}
          >
            <div style={{
              background: '#23263a',
              borderRadius: 18,
              padding: 32,
              boxShadow: '0 8px 32px #23263a80',
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              minWidth: 280,
            }} onClick={e => e.stopPropagation()}>
              <div style={{ marginBottom: 18, color: '#fff', fontWeight: 700, fontSize: 18 }}>Receive Address</div>
              <div style={{ background: '#fff', padding: 12, borderRadius: 12 }}>
                <QRCode value="0xB1a15d04A83b9083c9e61d81715eFD566E2d5E0E" size={180} bgColor="#fff" fgColor="#23263a" />
              </div>
              <div style={{ marginTop: 18, color: '#8a94b9', fontSize: 15, wordBreak: 'break-all', textAlign: 'center' }}>
                0xB1a15d04A83b9083c9e61d81715eFD566E2d5E0E
              </div>
              <button style={{ marginTop: 22, padding: '10px 28px', borderRadius: 999, background: 'linear-gradient(90deg, #8f5cff, #FFD700 60%, #6366f1)', color: '#fff', fontWeight: 700, fontSize: 16, border: 'none', boxShadow: '0 2px 12px #8f5cff40', cursor: 'pointer', letterSpacing: 1 }} onClick={() => setShowQR(false)}>Close</button>
            </div>
          </div>
        )}
      </section>

      {/* Your Assets */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, marginTop: 8 }}>
        <span style={{ color: '#8a94b9', fontSize: 17, fontWeight: 600 }}>Your Assets</span>
        <span style={{ color: '#8a94b9', fontSize: 15, fontWeight: 500, cursor: 'pointer' }}>Hide 0 Balance</span>
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 18,
        marginBottom: 24,
      }}>
        {crypto.slice(0, 4).map((c, idx) => {
          const iconMap = {
            BTC: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/bitcoin/info/logo.png',
            ETH: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png',
            BNB: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/binance/info/logo.png',
            SOL: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/solana/info/logo.png',
            DOGE: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/dogecoin/info/logo.png',
          };
          const iconUrl = iconMap[c.symbol] || 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png';
          return (
            <div key={c.symbol} style={{
              background: 'rgba(36, 41, 61, 0.85)',
              borderRadius: 16,
              boxShadow: '0 2px 12px #23263a40',
              padding: '18px 16px',
              border: '1.5px solid #23263a',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              minHeight: 110,
              position: 'relative',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                <img src={iconUrl} alt={c.symbol} style={{ width: 32, height: 32, background: '#fff', borderRadius: '50%', boxShadow: '0 1px 4px #0002' }} />
                <span style={{ fontWeight: 700, color: '#fff', fontSize: 16 }}>{c.name}</span>
              </div>
              <div style={{ color: '#8a94b9', fontSize: 13, marginBottom: 2 }}>0.00 {c.symbol}</div>
              <div style={{ fontWeight: 700, color: '#fff', fontSize: 22, marginBottom: 2 }}>${c.price.toLocaleString()}</div>
              <div style={{ color: c.change >= 0 ? '#22c55e' : '#ef4444', fontSize: 14, fontWeight: 600 }}>
                {c.change >= 0 ? '+' : ''}{c.change}%
              </div>
              <div style={{ color: '#8a94b9', fontSize: 13, marginTop: 2 }}>
                ${((c.price * (c.symbol === 'BTC' ? 17 : c.symbol === 'ETH' ? 2 : c.symbol === 'BNB' ? 10 : 2500)).toLocaleString())} {c.change >= 0 ? '' : ''}
              </div>
            </div>
          );
        })}
      </div>
      {/* Top 5 Coins */}
      <div style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 18, marginBottom: 8, color: '#8a94b9', letterSpacing: 1 }}>Top Coins</h2>
        <div style={{ display: 'flex', gap: 14, overflowX: 'auto', paddingBottom: 4 }}>
          {crypto.slice(0, 5).map((c) => {
            // Use TrustWallet assets CDN for official icons
            const iconMap = {
              BTC: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/bitcoin/info/logo.png',
              ETH: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png',
              BNB: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/binance/info/logo.png',
              SOL: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/solana/info/logo.png',
              DOGE: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/dogecoin/info/logo.png',
            };
            const iconUrl = iconMap[c.symbol] || 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png';
            return (
              <div key={c.symbol} style={{
                minWidth: 110,
                background: 'linear-gradient(135deg, #23263a 0%, #18181b 100%)',
                borderRadius: 14,
                padding: 14,
                textAlign: 'center',
                boxShadow: '0 2px 8px #4e54c820',
                border: '1px solid #23263a',
                display: 'flex', flexDirection: 'column', alignItems: 'center',
              }}>
                <img src={iconUrl} alt={c.symbol} style={{ width: 36, height: 36, marginBottom: 6, background: '#fff', borderRadius: '50%', boxShadow: '0 1px 4px #0002' }} />
                <span style={{ fontWeight: 700, color: '#fff', fontSize: 15 }}>{c.symbol}</span>
                <span style={{ fontSize: 13, color: '#bdbdfc', marginBottom: 2 }}>{c.name}</span>
                <span style={{ fontWeight: 600, color: '#fff', fontSize: 15 }}>${c.price.toLocaleString()}</span>
                <span style={{ color: c.change >= 0 ? '#22c55e' : '#ef4444', fontSize: 13, fontWeight: 600 }}>
                  {c.change >= 0 ? '+' : ''}{c.change}%
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
