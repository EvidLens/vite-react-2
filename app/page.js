'use client'
import Image from 'next/image'

const COLORS = {
  navy: '#0A1F44', // Evid
  teal: '#14B8A6', // Lens
  white: '#FFFFFF',
  bg: '#F8FAFC'
}

const LANES = [
  {name: 'Policy', stat: '24 Insights', trend: '+12%'},
  {name: 'Economy', stat: '18 Insights', trend: '+8%'},
  {name: 'Health', stat: '31 Insights', trend: '+23%'},
  {name: 'Education', stat: '15 Insights', trend: '+5%'},
  {name: 'Security', stat: '9 Insights', trend: '-2%'},
  {name: 'Agriculture', stat: '22 Insights', trend: '+17%'},
  {name: 'Tech', stat: '40 Insights', trend: '+31%'},
  {name: 'Climate', stat: '12 Insights', trend: '+9%'},
  {name: 'Business', stat: '27 Insights', trend: '+14%'}
]

export default function PremiumDashboard() {
  return (
    <div style={{minHeight: '100vh', background: COLORS.bg, paddingBottom: '80px'}}>
      {/* Header with Logo */}
      <header style={{
        position: 'sticky', top: 0, 
        background: `linear-gradient(135deg, ${COLORS.navy} 0%, #1a365d 100%)`, 
        color: 'white', padding: '16px', zIndex: 10
      }}>
        <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
          {/* LOGO GOES HERE */}
          <img 
            src="/logo.png" 
            alt="EvidLens Logo"
            width={40} 
            height={40}
            style={{borderRadius: '10px', background: 'white', padding: '4px'}}
          />
          <div>
            <div style={{fontSize: '20px', fontWeight: 'bold'}}>
              <span>Evid</span><span style={{color: COLORS.teal}}>Lens</span>
            </div>
            <div style={{fontSize: '11px', opacity: 0.8}}>Decision Intelligence</div>
          </div>
        </div>
      </header>

      {/* Search */}
      <div style={{padding: '20px 16px'}}>
        <div style={{
          display: 'flex', alignItems: 'center', background: COLORS.white,
          padding: '14px 16px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(10,31,68,0.08)'
        }}>
          <span style={{marginRight: '10px', color: COLORS.teal}}>🔍</span>
          <input 
            placeholder="Search insights, lanes, or questions..." 
            style={{border: 'none', outline: 'none', width: '100%', fontSize: '15px'}}
          />
        </div>
      </div>

      {/* Stats */}
      <div style={{padding: '0 16px 20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px'}}>
        <div style={{background: COLORS.white, padding: '16px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(10,31,68,0.06)', borderTop: `3px solid ${COLORS.teal}`}}>
          <div style={{fontSize: '12px', color: '#64748b'}}>Total Insights</div>
          <div style={{fontSize: '24px', fontWeight: 'bold', color: COLORS.navy}}>198</div>
          <div style={{fontSize: '12px', color: COLORS.teal}}>+18% this week</div>
        </div>
        <div style={{background: COLORS.white, padding: '16px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(10,31,68,0.06)', borderTop: `3px solid ${COLORS.teal}`}}>
          <div style={{fontSize: '12px', color: '#64748b'}}>Active Lanes</div>
          <div style={{fontSize: '24px', fontWeight: 'bold', color: COLORS.navy}}>9</div>
          <div style={{fontSize: '12px', color: COLORS.teal}}>All monitoring</div>
        </div>
      </div>

      {/* Trending */}
      <div style={{padding: '0 16px 20px'}}>
        <h3 style={{color: COLORS.navy, marginBottom: '12px', fontSize: '16px'}}>🔥 Trending Now</h3>
        <div style={{
          background: `linear-gradient(135deg, ${COLORS.teal} 0%, #0d9488 100%)`, 
          padding: '20px', borderRadius: '16px', color: 'white',
          boxShadow: '0 8px 30px rgba(20,184,166,0.25)'
        }}>
          <div style={{fontSize: '12px', opacity: 0.9}}>ECONOMY</div>
          <div style={{fontSize: '16px', fontWeight: 'bold', marginTop: '4px'}}>
            "Kenya inflation drops to 4.2% - Lowest in 18 months"
          </div>
        </div>
      </div>

      {/* 9 Lanes */}
      <div style={{padding: '0 16px'}}>
        <h3 style={{color: COLORS.navy, marginBottom: '12px', fontSize: '16px'}}>9 Intelligence Lanes</h3>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px'}}>
          {LANES.map((lane) => (
            <div key={lane.name} style={{
              background: COLORS.white, padding: '16px', borderRadius: '16px',
              boxShadow: '0 4px 20px rgba(10,31,68,0.06)', border: `1px solid #e2e8f0`
            }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '12px',
                background: `linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.teal} 100%)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white', fontWeight: 'bold', marginBottom: '10px'
              }}>
                {lane.name[0]}
              </div>
              <div style={{fontWeight: 'bold', color: COLORS.navy, fontSize: '15px'}}>{lane.name}</div>
              <div style={{fontSize: '12px', color: '#64748b', marginTop: '2px'}}>{lane.stat}</div>
              <div style={{fontSize: '12px', color: lane.trend.includes('+')? COLORS.teal : '#ef4444', marginTop: '4px', fontWeight: '600'}}>
                {lane.trend}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Nav */}
      <nav style={{
        position: 'fixed', bottom: 0, width: '100%', maxWidth: '480px',
        height: '70px', background: COLORS.white, 
        borderTop: `1px solid #e2e8f0`,
        display: 'flex', justifyContent: 'space-around', alignItems: 'center',
        boxShadow: '0 -4px 20px rgba(10,31,68,0.08)'
      }}>
        {['Home', 'Lanes', 'Chat', 'Profile'].map((tab, i) => (
          <button key={tab} style={{
            color: i === 0? COLORS.navy : '#94a3b8', 
            border: 'none', background: 'none',
            fontSize: '12px', fontWeight: i === 0? 'bold' : '500'
          }}>
            {tab}
          </button>
        ))}
      </nav>
    </div>
  )
}
