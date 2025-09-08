


import React, { useState, useEffect } from "react";
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
      },
    ],
  };

  const savingsOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: 'Savings Over Time', color: '#4e54c8', font: { size: 18 } },
    },
    scales: {
      x: { ticks: { color: '#6366f1' } },
      y: { ticks: { color: '#6366f1' } },
    },
  };

  return (
    <Layout header="💳 Dashboard">
      {/* Profile & Balance Row */}
      <section style={{ marginBottom: 24, display: 'flex', alignItems: 'center', gap: 16, justifyContent: 'space-between', background: 'linear-gradient(135deg, #6366f1 0%, #818cf8 100%)', borderRadius: 14, padding: 16, boxShadow: '0 2px 8px #6366f120' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <img
            src={`https://api.dicebear.com/7.x/identicon/svg?seed=${user?.id || 'user'}`}
            alt="avatar"
            width={56}
            height={56}
            style={{ borderRadius: '50%', border: '2px solid #fff', background: '#f3f6fd' }}
          />
          <div>
            <div style={{ fontWeight: 600, fontSize: 18, color: '#fff' }}>{user ? `${user.first_name} ${user.last_name || ''}` : 'Guest'}</div>
            <div style={{ color: '#e0e7ff' }}>@{user?.username || 'username'}</div>
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 14, color: '#e0e7ff' }}>Total Balance</div>
          <div style={{ fontSize: 28, fontWeight: 700, margin: '4px 0', color: '#fff' }}>${balance.toLocaleString()}</div>
        </div>
      </section>

      {/* Visa Card */}
      <section style={{ marginBottom: 24 }}>
        <div style={{
          background: 'linear-gradient(135deg, #818cf8 0%, #4e54c8 100%)',
          color: '#fff',
          borderRadius: 18,
          padding: 22,
          boxShadow: '0 4px 16px #4e54c830',
          position: 'relative',
          overflow: 'hidden',
          border: '1.5px solid #6366f1'
        }}>
          <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: 2, color: '#e0e7ff' }}>VISA</div>
          <div style={{ letterSpacing: 2, fontSize: 22, margin: '18px 0 10px', color: '#fff' }}>**** **** **** 1234</div>
          <div style={{ fontSize: 15, color: '#e0e7ff' }}>Exp: 12/29</div>
          <div style={{ position: 'absolute', bottom: 14, right: 24, fontSize: 13, opacity: 0.7, color: '#e0e7ff' }}>Virtual Card</div>
        </div>
      </section>

      {/* Multi-currency Wallets */}
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 18, marginBottom: 12, color: '#4e54c8' }}>Wallets</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {wallets.map((w, i) => (
            <div key={w.currency} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'linear-gradient(90deg, #e0e7ff 0%, #f8fafc 100%)',
              borderRadius: 12,
              padding: '14px 20px',
              boxShadow: '0 1px 4px #4e54c810',
              border: '1px solid #e0e7ff'
            }}>
              <span style={{ fontWeight: 600, color: '#4e54c8' }}>{w.currency}</span>
              <span style={{ fontWeight: 700, color: '#222' }}>{w.balance.toLocaleString()} {w.currency}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Top 5 Crypto Widget */}
      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 18, marginBottom: 8, color: '#4e54c8', letterSpacing: 1 }}>Top 5 Crypto</h2>
        <div style={{ display: 'flex', gap: 10, overflowX: 'auto' }}>
          {crypto.map((c) => (
            <div key={c.symbol} style={{
              minWidth: 90,
              background: 'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)',
              borderRadius: 12,
              padding: 12,
              textAlign: 'center',
              boxShadow: '0 2px 8px #4e54c820',
              border: '1px solid #c7d2fe'
            }}>
              <div style={{ fontWeight: 700, color: '#4e54c8', fontSize: 16 }}>{c.symbol}</div>
              <div style={{ fontSize: 13, color: '#6366f1' }}>{c.name}</div>
              <div style={{ fontWeight: 600, margin: '6px 0', color: '#222' }}>${c.price.toLocaleString()}</div>
              <div style={{ color: c.change >= 0 ? '#22c55e' : '#ef4444', fontSize: 13 }}>
                {c.change >= 0 ? '+' : ''}{c.change}%
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
