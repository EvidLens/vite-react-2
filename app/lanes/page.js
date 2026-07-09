'use client'

export default function LanesPage() {
  const lanes = ['Agriculture', 'Health', 'Education', 'Finance', 'Trade', 'Infrastructure', 'Energy', 'Water', 'Governance']
  
  return (
    <div style={{padding: '20px', minHeight: '100vh', background: '#F8FAFC'}}>
      <h1 style={{color: '#0A1F44', textAlign: 'center', fontSize: '32px'}}>9 Lanes</h1>
      <p style={{color: '#64748b', textAlign: 'center', marginBottom: '30px'}}>Browse by sector</p>
      
      <div style={{maxWidth: '480px', margin: '0 auto'}}>
        {lanes.map((lane, i) => (
          <div key={i} style={{background: 'white', padding: '16px', borderRadius: '12px', marginBottom: '12px', border: '1px solid #e2e8f0'}}>
            {lane}
          </div>
        ))}
      </div>
      
      <div style={{textAlign: 'center', marginTop: '30px'}}>
        <button 
          onClick={() => window.location.href = '/'} 
          style={{background: '#14B8A6', color: 'white', padding: '14px 24px', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer'}}>
          Back Home
        </button>
      </div>
    </div>
  )
}
