return (
  <div style={{minHeight: '100vh', background: COLORS.bg, paddingBottom: '80px'}}>
    {/* Responsive wrapper */}
    <div style={{maxWidth: '1200px', margin: '0 auto'}}>
      
      {/* Header with Logo - now full width on desktop */}
      <header style={{
        position: 'sticky', top: 0, 
        background: `linear-gradient(135deg, ${COLORS.navy} 0%, #1a365d 100%)`, 
        color: 'white', padding: '16px', zIndex: 10
      }}>
        <div style={{maxWidth: '480px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '12px'}}>
          <img src="/logo.png" alt="EvidLens Logo" width={40} height={40}
            style={{borderRadius: '10px', background: 'white', padding: '4px'}}/>
          <div>
            <div style={{fontSize: '20px', fontWeight: 'bold'}}>
              <span>Evid</span><span style={{color: COLORS.teal}}>Lens</span>
            </div>
            <div style={{fontSize: '11px', opacity: 0.8}}>Decision Intelligence</div>
          </div>
        </div>
      </header>

      {/* All your other sections... keep them same but wrap content in maxWidth 480px */}
      <div style={{maxWidth: '480px', margin: '0 auto', padding: '0 16px'}}>
        {/* Search, Stats, Trending, 9 Lanes go here */}
      </div>

    </div>

    {/* Bottom Nav - center it on desktop */}
    <nav style={{
      position: 'fixed', bottom: 0, left: 0, right: 0,
      height: '70px', background: 'white', 
      borderTop: `1px solid #e2e8f0`,
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      boxShadow: '0 -4px 20px rgba(10,31,68,0.08)'
    }}>
      <div style={{width: '100%', maxWidth: '480px', display: 'flex', justifyContent: 'space-around'}}>
        <button onClick={() => window.location.href = '/'} style={{color: '#0A1F44', border: 'none', background: 'none', fontSize: '12px', fontWeight: 'bold'}}>Home</button>
        <button onClick={() => window.location.href = '/lanes'} style={{color: '#94a3b8', border: 'none', background: 'none', fontSize: '12px'}}>Lanes</button>
        <button onClick={() => window.location.href = '/chat'} style={{color: '#94a3b8', border: 'none', background: 'none', fontSize: '12px'}}>Chat</button>
        <button onClick={() => window.location.href = '/login'} style={{color: '#94a3b8', border: 'none', background: 'none', fontSize: '12px'}}>Profile</button>
      </div>
    </nav>
  </div>
)
