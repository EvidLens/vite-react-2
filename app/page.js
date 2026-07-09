'use client'
export const dynamic = 'force-dynamic'
import { useState, useEffect } from 'react'

const COLORS = { navy: '#0A1F44', teal: '#14B8A6', bg: '#F8FAFC' }

export default function Dashboard() {
  const [user] = useState({ name: 'Guest' })

  return (
    <div style={{minHeight: '100vh', background: COLORS.bg, paddingBottom: '80px'}}>
      <header style={{background: `linear-gradient(135deg, ${COLORS.navy} 0%, #1a365d 100%)`, color: 'white', padding: '16px'}}>
        <div style={{maxWidth: '480px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '12px'}}>
          <img src="/logo.png" width={36} height={36} style={{borderRadius: '8px', background: 'white', padding: '3px'}}/>
          <div style={{fontSize: '18px', fontWeight: 'bold'}}><span>Evid</span><span style={{color: COLORS.teal}}>Lens</span></div>
        </div>
      </header>

      <div style={{padding: '20px', maxWidth: '480px', margin: '0 auto'}}>
        <h1 style={{color: COLORS.navy}}>Welcome, {user.name}!</h1>
        <p style={{color: '#64748b'}}>Kenya's Decision Intelligence Platform</p>
        
        <button onClick={() => window.location.href = '/chat'} style={{background: COLORS.teal, color: 'white', padding: '14px', border: 'none', borderRadius: '12px', width: '100%', marginTop: '12px', fontWeight: 'bold'}}>Ask Lens AI</button>
        <button onClick={() => window.location.href = '/lanes'} style={{background: 'white', color: COLORS.navy, padding: '14px', border: `2px solid ${COLORS.teal}`, borderRadius: '12px', width: '100%', marginTop: '12px', fontWeight: 'bold'}}>Browse 9 Lanes</button>
        <button onClick={() => window.location.href = '/login'} style={{background: 'white', color: COLORS.navy, padding: '14px', border: `2px solid #e2e8f0`, borderRadius: '12px', width: '100%', marginTop: '12px', fontWeight: 'bold'}}>Login / Profile</button>
      </div>
    </div>
  )
}
