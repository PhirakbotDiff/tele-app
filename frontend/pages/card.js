
import Layout from '../components/Layout';

const mockTransactions = [
  { id: 1, date: '2025-09-01', desc: 'Deposit', amount: 500, type: 'in' },
  { id: 2, date: '2025-09-03', desc: 'Coffee Shop', amount: -4.5, type: 'out' },
  { id: 3, date: '2025-09-04', desc: 'Salary', amount: 1200, type: 'in' },
  { id: 4, date: '2025-09-05', desc: 'Groceries', amount: -60, type: 'out' },
  { id: 5, date: '2025-09-06', desc: 'Transfer to Savings', amount: -200, type: 'out' },
];

export default function CardPage() {
  return (
    <Layout header="Card">
      <div style={{textAlign: 'center', marginTop: 32}}>
        <h2 style={{color: '#4e54c8'}}>Your Card</h2>
        <div style={{
          background: 'linear-gradient(135deg, #818cf8 0%, #4e54c8 100%)',
          color: '#fff',
          borderRadius: 14,
          padding: 8,
          margin: '20px auto',
          maxWidth: 340,
          boxShadow: '0 4px 16px #4e54c830',
          position: 'relative',
          overflow: 'hidden',
          border: '1.5px solid #6366f1',
          fontSize: 22,
          fontWeight: 700,
          letterSpacing: 2
        }}>
          VISA<br />**** **** **** 1234
          <div style={{ fontSize: 15, color: '#e0e7ff', marginTop: 12 }}>Exp: 12/29</div>
        </div>
        <p style={{color: '#6366f1'}}>Manage your virtual and physical cards here soon!</p>

        <h2 style={{
          color: 'linear-gradient(90deg, #8f5cff 0%, #4e54c8 100%)',
          marginTop: 40,
          background: 'linear-gradient(90deg, #8f5cff 0%, #4e54c8 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 800,
          letterSpacing: 1
        }}>Transaction History</h2>
        <div style={{
          background: 'rgba(24,24,27,0.85)',
          borderRadius: 14,
          padding: 22,
          margin: '0 auto',
          maxWidth: 340,
          boxShadow: '0 4px 18px #4e54c860, 0 1.5px 8px #8f5cff30',
          color: '#fff',
          textAlign: 'left',
          backdropFilter: 'blur(8px)',
          border: '1.5px solid #4e54c8',
        }}>
          <div style={{display: 'flex', flexDirection: 'column', gap: 14}}>
            {mockTransactions.map(tx => (
              <div key={tx.id} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'linear-gradient(90deg, rgba(78,84,200,0.13) 0%, rgba(143,92,255,0.13) 100%)',
                borderRadius: 12,
                boxShadow: tx.amount > 0 ? '0 1px 6px #8f5cff22' : '0 1px 6px #ff666622',
                padding: '12px 16px',
                marginBottom: 0,
                border: '1px solid #232336',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    background: tx.amount > 0 ? 'linear-gradient(135deg, #4e54c8 0%, #8f5cff 100%)' : 'linear-gradient(135deg, #ff6666 0%, #4e54c8 100%)',
                    boxShadow: tx.amount > 0 ? '0 0 10px #8f5cff60' : '0 0 10px #ff666660',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: 18,
                    marginRight: 8
                  }}>
                    {tx.amount > 0 ? '⬆️' : '⬇️'}
                  </span>
                  <div>
                    <div style={{fontWeight: 700, color: '#fff', fontSize: 15}}>{tx.desc}</div>
                    <div style={{fontSize: 12, color: '#bdbdfc', marginTop: 2}}>{tx.date}</div>
                  </div>
                </div>
                <div style={{
                  textAlign: 'right',
                  color: tx.amount > 0 ? '#8f5cff' : '#ff6666',
                  fontWeight: 800,
                  fontSize: 16,
                  textShadow: tx.amount > 0 ? '0 0 2px #8f5cff60' : '0 0 2px #ff666660',
                  minWidth: 70
                }}>
                  {tx.amount > 0 ? '+' : ''}{tx.amount}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
