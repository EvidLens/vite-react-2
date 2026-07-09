'use client'
const COLORS = { navy: '#0A1F44', teal: '#14B8A6', bg: '#F8FAFC' }

const lanes = [
  {id: 'policy', name: 'Policy', icon: 'P', count: 24, trend: '+12%'},
  {id: 'economy', name: 'Economy', icon: 'E', count: 18, trend: '+8%'},
  {id: 'health', name: 'Health', icon: 'H', count: 31, trend: '+23%'},
  {id: 'education', name: 'Education', icon: 'E', count: 15, trend: '+5%'},
  {id: 'security', name: 'Security', icon: 'S', count: 9, trend: '-2%'},
  {id: 'agriculture', name: 'Agriculture', icon: 'A', count: 22, trend: '+17%'},
  {id: 'infrastructure', name: 'Infrastructure', icon: 'I', count: 16, trend: '+9%'},
  {id: 'energy', name: 'Energy', icon: 'EN', count: 11, trend: '+14%'},
  {id: 'tech', name: 'Technology', icon: 'T', count: 19, trend: '+31%'}
]

export default function Dashboard() {
  return (
    <div style={{minHeight: '100vh', background: COLORS.bg, paddingBottom: '80px'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto'}}>
        <header style={{position: 'sticky', top: 0, background: `linear-gradient(135deg, ${COLORS.navy} 0%, #1a365d 100%)`, color: 'white', padding: '16px', zIndex: 10}}>
          <div style={{maxWidth: '480px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '12px'}}>
            <img src="/logo.png" width={40} height={40} style={{borderRadius: '10px', background: 'white', padding: '4px'}}/>
            <div><div style={{fontSize: '20px', fontWeight: 'bold'}}><span>Evid</span><span style={{color: COLORS.teal}}>Lens</span></div><div style={{fontSize: '11px', opacity: 0.8}}>Decision Intelligence</div></div>
          </div>
        </header>
        
        <div style={{maxWidth: '480px', margin: '0 auto', padding: '0 16px'}}>
          <input placeholder="🔍 Search insights, lanes, or questions..." style={{width: '100%', padding: '14px 16px', margin: '16px 0', borderRadius: '12px', border: 'none', background: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.05)'}}/>
          
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px'}}>
            <div style={{background: 'white', padding: '16px', borderRadius: '16px', borderTop: `4px solid ${COLORS.teal}`}}><div style={{fontSize: '12px', color: '#64748b'}}>Total Insights</div><div style={{fontSize: '28px', fontWeight: 'bold', color: COLORS.navy}}>198</div><div style={{fontSize: '12px', color: COLORS.teal}}>+18% this week</div></div>
            <div style={{background: 'white', padding: '16px', borderRadius: '16px', borderTop: `4px solid ${COLORS.teal}`}}><div style={{fontSize: '12px', color: '#64748b'}}>Active Lanes</div><div style={{fontSize: '28px', fontWeight: 'bold', color: COLORS.navy}}>9</div><div style={{fontSize: '12px', color: COLORS.teal}}>All monitoring</div></div>
          </div>

          <h3 style={{color: COLORS.navy, margin: '24px 0 12px'}}>🔥 Trending Now</h3>
          <div style={{background: `linear-gradient(135deg, ${COLORS.teal} 0%, #0d9488 100%)`, color: 'white', padding: '20px', borderRadius: '16px'}}>
            <div style={{fontSize: '11px', opacity: 0.9}}>ECONOMY</div>
            <div style={{fontSize: '15px', fontWeight: '600', marginTop: '8px'}}>"Kenya inflation drops to 4.2% - Lowest in 18 months"</div>
          </div>

          <h3 style={{color: COLORS.navy, margin: '24px 0 12px'}}>9 Intelligence Lanes</h3>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px'}}>
            {lanes.map(lane => (
              <div key={lane.id} onClick={() => alert(`${lane.name} Lane - Coming Next`)} style={{background: 'white', padding: '16px', borderRadius: '16px', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.04)'}}>
                <div style={{width: '44px', height: '44px', borderRadius: '12px', background: `linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.teal} 100%)`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', marginBottom: '12px'}}>{lane.icon}</div>
                <div style={{fontSize: '16px', fontWeight: 'bold', color: COLORS.navy}}>{lane.name}</div>
                <div style={{fontSize: '12px', color: '#64748b'}}>{lane.count} Insights</div>
                <div style={{fontSize: '12px', color: COLORS.teal, fontWeight: '600'}}>{lane.trend}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <nav style={{position: 'fixed', bottom: 0, left: 0, right: 0, height: '70px', background: 'white', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'center'}}>
        <div style={{width: '100%', maxWidth: '480px', display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
          <button onClick={() => window.location.href = '/'} style={{color: COLORS.navy, border: 'none', background: 'none', fontSize: '12px', fontWeight: 'bold'}}>Home</button>
          <button onClick={() => window.location.href = '/lanes'} style={{color: '#94a3b8', border: 'none', background: 'none', fontSize: '12px'}}>Lanes</button>
          <button onClick={() => window.location.href = '/chat'} style={{color: '#94a3b8', border: 'none', background: 'none', fontSize: '12px'}}>Chat</button>
          <button onClick={() => window.location.href = '/login'} style={{color: '#94a3b8', border: 'none', background: 'none', fontSize: '12px'}}>Profile</button>
        </div>
      </nav>
    </div>
  )
}
