'use client'

export default function LoginPage() {
  return (
    <div style={{padding: '40px', textAlign: 'center', minHeight: '100vh', background: '#F8FAFC'}}>
      <h1 style={{color: '#0A1F44', fontSize: '32px'}}>Login</h1>
      <p style={{color: '#64748b', marginBottom: '30px'}}>Login page coming soon</p>
      <button 
        onClick={() => window.location.href = '/'} 
        style={{background: '#14B8A6', color: 'white', padding: '14px 24px', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer'}}>
        Back Home
      </button>
    </div>
  )
}
