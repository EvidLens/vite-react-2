'use client'
import { useState } from 'react'
import { askLens } from '@/lib/api'

const COLORS = { navy: '#0A1F44', teal: '#14B8A6', bg: '#F8FAFC' }

export default function Chat() {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [loading, setLoading] = useState(false)

  const handleAsk = async () => {
    if (!question.trim()) return alert('Ask a question first')
    setLoading(true)
    setAnswer('')
    const res = await askLens(question)
    setAnswer(res.answer)
    setLoading(false)
  }

  return (
    <div style={{minHeight: '100vh', background: COLORS.bg, paddingBottom: '100px'}}>
      <header style={{background: `linear-gradient(135deg, ${COLORS.navy} 0%, #1a365d 100%)`, color: 'white', padding: '16px'}}>
        <div style={{maxWidth: '480px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '12px'}}>
          <img src="/logo.png" width={36} height={36} style={{borderRadius: '8px', background: 'white', padding: '3px'}}/>
          <div style={{fontSize: '18px', fontWeight: 'bold'}}><span>Evid</span><span style={{color: COLORS.teal}}>Lens</span> AI</div>
        </div>
      </header>

      <div style={{padding: '20px', maxWidth: '480px', margin: '0 auto'}}>
        <h2 style={{color: COLORS.navy, marginBottom: '8px'}}>Ask Lens AI</h2>
        <p style={{color: '#64748b', fontSize: '14px', marginBottom: '16px'}}>Ask about Kenya policy, economy, health, etc.</p>
        
        <textarea 
          value={question} 
          onChange={e => setQuestion(e.target.value)} 
          placeholder="e.g. What is Kenya's current inflation rate?" 
          style={{width: '100%', height: '120px', padding: '12px', borderRadius: '12px', border: `2px solid ${COLORS.teal}`, fontSize: '15px', outline: 'none', resize: 'none'}}
        />
        
        <button 
          onClick={handleAsk} 
          disabled={loading} 
          style={{
            background: loading ? '#94a3b8' : COLORS.teal, 
            color: 'white', 
            padding: '14px 24px', 
            border: 'none', 
            borderRadius: '12px', 
            marginTop: '12px', 
            fontWeight: 'bold', 
            width: '100%',
            cursor: loading ? 'not-allowed' : 'pointer'
          }}
        >
          {loading ? 'Thinking...' : 'Ask Lens'}
        </button>

        {answer && (
          <div style={{background: 'white', padding: '16px', borderRadius: '12px', marginTop: '20px', lineHeight: '1.6', borderLeft: `4px solid ${COLORS.teal}`}}>
            <div style={{fontSize: '12px', color: COLORS.teal, fontWeight: 'bold', marginBottom: '8px'}}>LENS AI RESPONSE</div>
            <div style={{color: COLORS.navy}}>{answer}</div>
          </div>
        )}
      </div>

      <nav style={{position: 'fixed', bottom: 0, left: 0, right: 0, height: '70px', background: 'white', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'center'}}>
        <div style={{width: '100%', maxWidth: '480px', display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
          <button onClick={() => window.location.href = '/'} style={{color: '#94a3b8', border: 'none', background: 'none', fontSize: '12px'}}>Home</button>
          <button onClick={() => window.location.href = '/lanes'} style={{color: '#94a3b8', border: 'none', background: 'none', fontSize: '12px'}}>Lanes</button>
          <button onClick={() => window.location.href = '/chat'} style={{color: COLORS.navy, border: 'none', background: 'none', fontSize: '12px', fontWeight: 'bold'}}>Chat</button>
          <button onClick={() => window.location.href = '/login'} style={{color: '#94a3b8', border: 'none', background: 'none', fontSize: '12px'}}>Profile</button>
        </div>
      </nav>
    </div>
  )
}
