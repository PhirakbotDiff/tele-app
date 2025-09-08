


import Layout from '../components/Layout';

export default function AccountPage() {
  return (
    <Layout header="👤 Account">
      <div style={{textAlign: 'center', marginTop: 32}}>
        <h2 style={{color: '#fff'}}>Profile & Settings</h2>
        <div style={{
          display: 'inline-block',
          background: 'linear-gradient(135deg, #232323 0%, #18181b 100%)',
          color: '#fff',
          borderRadius: 16,
          padding: 24,
          margin: '24px auto',
          minWidth: 220,
          boxShadow: '0 2px 8px #fff2',
        }}>
          <div style={{fontWeight: 600, fontSize: 20, marginBottom: 8}}>John Doe</div>
          <div style={{color: '#fff', marginBottom: 8}}>@username</div>
          <div style={{fontSize: 15}}>Email: john@example.com</div>
        </div>
        <p style={{color: '#fff'}}>Edit your profile and settings here soon!</p>
      </div>
    </Layout>
  );
}
