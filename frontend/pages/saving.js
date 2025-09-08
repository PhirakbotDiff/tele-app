
import React, { useState } from "react";
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
  const [tab, setTab] = useState('saving');
  return (
    <Layout header="4b0 Saving">
      <div style={{textAlign: 'center', marginTop: 32}}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 24 }}>
          <button
            onClick={() => setTab('saving')}
            style={{
              padding: '8px 24px',
              borderRadius: 8,
              border: 'none',
              background: tab === 'saving' ? 'linear-gradient(90deg, #FFD700 0%, #bfa100 100%)' : '#232323',
              color: tab === 'saving' ? '#232323' : '#FFD700',
              fontWeight: 700,
              fontSize: 16,
              cursor: 'pointer',
              boxShadow: tab === 'saving' ? '0 2px 8px #FFD70040' : 'none',
              transition: 'all 0.2s',
            }}
          >Saving</button>
          <button
            onClick={() => setTab('transactions')}
            style={{
              padding: '8px 24px',
              borderRadius: 8,
              border: 'none',
              background: tab === 'transactions' ? 'linear-gradient(90deg, #FFD700 0%, #bfa100 100%)' : '#232323',
              color: tab === 'transactions' ? '#232323' : '#FFD700',
              fontWeight: 700,
              fontSize: 16,
              cursor: 'pointer',
              boxShadow: tab === 'transactions' ? '0 2px 8px #FFD70040' : 'none',
              transition: 'all 0.2s',
            }}
          >Transactions</button>
        </div>
        {tab === 'saving' && (
          <Line data={savingsData} options={savingsOptions} />
        )}
        {tab === 'transactions' && (
          <>
            <h2 style={{color: '#FFD700'}}>Transaction History</h2>
            <div style={{
              background: '#18181b',
              borderRadius: 12,
              padding: 16,
              margin: '0 auto',
              maxWidth: 340,
              boxShadow: '0 2px 8px #FFD70020',
              color: '#fff',
              textAlign: 'left',
            }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', color: '#fff' }}>
                <thead>
                  <tr style={{ color: '#FFD700', fontWeight: 700 }}>
                    <th style={{ textAlign: 'left', padding: '6px 0' }}>Date</th>
                    <th style={{ textAlign: 'left', padding: '6px 0' }}>Description</th>
                    <th style={{ textAlign: 'right', padding: '6px 0' }}>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {mockTransactions.map(tx => (
                    <tr key={tx.id}>
                      <td style={{ padding: '6px 0', color: '#bbb' }}>{tx.date}</td>
                      <td style={{ padding: '6px 0' }}>{tx.desc}</td>
                      <td style={{ padding: '6px 0', textAlign: 'right', color: tx.amount > 0 ? '#FFD700' : '#ff6666', fontWeight: 700 }}>
                        {tx.amount > 0 ? '+' : ''}{tx.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}