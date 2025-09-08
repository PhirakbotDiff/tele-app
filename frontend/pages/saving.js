
import React, { useState } from "react";
import Layout from '../components/Layout';
import { Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);
// Mock savings distribution for pie chart
const savingsPieData = {
  labels: ['Emergency', 'Travel', 'Investments', 'Education', 'Other'],
  datasets: [
    {
      label: 'Savings Distribution',
      data: [600, 400, 300, 200, 100],
      backgroundColor: [
        'rgba(78,84,200,0.85)',
        'rgba(143,92,255,0.85)',
        'rgba(99,102,241,0.85)',
        'rgba(34,197,94,0.85)',
        'rgba(255,206,86,0.85)'
      ],
      borderColor: [
        '#4e54c8',
        '#8f5cff',
        '#6366f1',
        '#22c55e',
        '#FFD700'
      ],
      borderWidth: 2,
    },
  ],
};

const savingsPieOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'bottom',
      labels: { color: '#fff', font: { size: 14 } }
    },
    title: {
      display: true,
      text: 'Savings Distribution',
      color: '#4e54c8',
      font: { size: 18 }
    },
  },
};

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

const mockTransactions = [
  { id: 1, date: '2025-09-01', desc: 'Deposit', amount: 500, type: 'in' },
  { id: 2, date: '2025-09-03', desc: 'Coffee Shop', amount: -4.5, type: 'out' },
  { id: 3, date: '2025-09-04', desc: 'Salary', amount: 1200, type: 'in' },
  { id: 4, date: '2025-09-05', desc: 'Groceries', amount: -60, type: 'out' },
  { id: 5, date: '2025-09-06', desc: 'Transfer to Savings', amount: -200, type: 'out' },
];


export default function SavingPage() {
  const [tab, setTab] = useState('line');
  const assets = [
    { symbol: 'ETH', name: 'Ethereum', amount: 42.98, logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png' },
    { symbol: 'TRX', name: 'Tron', amount: 45784.20, logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/tron/info/logo.png' },
    { symbol: 'XRP', name: 'XRP', amount: 597.11, logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ripple/info/logo.png' },
    { symbol: 'USDT', name: 'Tether', amount: 0, logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/tether/info/logo.png' },
    { symbol: 'ADA', name: 'Cardano', amount: 0, logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/cardano/info/logo.png' },
    { symbol: 'SOL', name: 'Solana', amount: 0, logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/solana/info/logo.png' },
    { symbol: 'SHIB', name: 'SHIB', amount: 0, logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE/logo.png' },
  ];
  const totalBalance = assets.reduce((sum, a) => sum + a.amount, 0);
  return (
    <Layout header="Saving">
      <div style={{ width: '100%', maxWidth: 420, margin: '0 auto', padding: '0 0 40px 0' }}>
        {/* Balance Card */}
        <section style={{ marginBottom: 24, marginTop: 32 }}>
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
              <span style={{ color: '#8a94b9', fontSize: 16, fontWeight: 500 }}>Total Balance</span>
              <span style={{ background: '#23263a', borderRadius: 8, padding: '2px 10px', color: '#8a94b9', fontWeight: 600, fontSize: 15, marginRight: 4 }}>USD</span>
            </div>
            <div style={{ fontSize: 38, fontWeight: 800, color: '#fff', letterSpacing: 1, marginBottom: 8 }}>
              ${totalBalance.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}
            </div>
          </div>
        </section>
        {/* Chart Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 28 }}>
          <button
            onClick={() => setTab('line')}
            style={{
              padding: '8px 24px',
              borderRadius: 8,
              border: 'none',
              background: tab === 'line' ? 'linear-gradient(90deg, #8f5cff 0%, #4e54c8 100%)' : '#232323',
              color: tab === 'line' ? '#fff' : '#8f5cff',
              fontWeight: 700,
              fontSize: 16,
              cursor: 'pointer',
              boxShadow: tab === 'line' ? '0 2px 8px #8f5cff40' : 'none',
              transition: 'all 0.2s',
            }}
          >Line Chart</button>
          <button
            onClick={() => setTab('pie')}
            style={{
              padding: '8px 24px',
              borderRadius: 8,
              border: 'none',
              background: tab === 'pie' ? 'linear-gradient(90deg, #8f5cff 0%, #4e54c8 100%)' : '#232323',
              color: tab === 'pie' ? '#fff' : '#8f5cff',
              fontWeight: 700,
              fontSize: 16,
              cursor: 'pointer',
              boxShadow: tab === 'pie' ? '0 2px 8px #8f5cff40' : 'none',
              transition: 'all 0.2s',
            }}
          >Pie Chart</button>
        </div>
        {tab === 'line' && (
          <div style={{background: '#181A20', borderRadius: 18, padding: '18px 18px', boxShadow: '0 2px 8px #23233633', border: '1.5px solid #232336', marginBottom: 26, maxWidth: 380, marginLeft: 'auto', marginRight: 'auto'}}>
            <Line data={savingsData} options={savingsOptions} />
          </div>
        )}
        {tab === 'pie' && (
          <div style={{ background: 'rgba(24,24,27,0.85)', borderRadius: 18, padding: 18, boxShadow: '0 2px 8px #4e54c820', border: '1.5px solid #232336', marginBottom: 26, maxWidth: 380, marginLeft: 'auto', marginRight: 'auto' }}>
            <Pie data={savingsPieData} options={savingsPieOptions} />
          </div>
        )}
        {/* Asset List Title */}
        <div style={{
          margin: '0 0 10px 0',
          maxWidth: 380,
          textAlign: 'left',
          paddingLeft: 8,
        }}>
          <div style={{
            fontWeight: 800,
            fontSize: 20,
            color: '#fff',
            letterSpacing: 0.5,
            marginBottom: 2,
          }}>
            Crypto Assets
          </div>
        </div>
        <div style={{
          background: '#232336',
          borderRadius: 18,
          margin: '0',
          maxWidth: 380,
          boxShadow: '0 2px 12px #23233655',
          border: '1.5px solid #232336',
          padding: '10px 0 4px 0',
        }}>
          {assets.map(asset => (
            <div key={asset.symbol} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '10px 22px',
              borderBottom: '1px solid #232336',
              minHeight: 54,
            }}>
              <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
                <img src={asset.logo} alt={asset.symbol} style={{width: 38, height: 38, borderRadius: '50%', background: '#181A20', border: '1.5px solid #232336', objectFit: 'cover'}} />
                <div style={{textAlign: 'left'}}>
                  <div style={{fontWeight: 800, color: '#fff', fontSize: 17, letterSpacing: 0.2}}>{asset.symbol}</div>
                  <div style={{fontSize: 13, color: '#bdbdfc', marginTop: 1, fontWeight: 500}}>{asset.name}</div>
                </div>
              </div>
              <div style={{fontWeight: 700, color: '#fff', fontSize: 16, letterSpacing: 0.2}}>{asset.amount.toLocaleString(undefined, {minimumFractionDigits: asset.amount > 0 ? 2 : 0, maximumFractionDigits: 2})}</div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}