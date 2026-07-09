'use client'
import { useState } from 'react'
import { askLens } from '@/lib/api'

const COLORS = { navy: '#0A1F44', teal: '#14B8A6' }

export default function Chat() {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [loading, setLoading] = useState(false)

  const handleAsk = async () => {
    setLoading(true)
    const res = await askLens(question)
    setAnswer(res.answer)
    setLoading(false)
  }

  return (
    <div style={{padding: '20px', paddingBottom: '100px', maxWidth: '480px', margin: '0 auto'}}>
      <h2 style={{color: COLORS.navy}}>Ask Lens AI</h2>
      <textarea value={question} onChange={e => setQuestion(e.target.value)} placeholder="Ask about Kenya policy, economy, inflation..." style={{width: '100%', height: '120px', padding: '12px', borderRadius: '12px', border: `2px solid ${COLORS.teal}`}}/>
      <button onClick={handleAsk} disabled={loading} style={{background: COLORS.teal, color: 'white', padding: '14px 24px', border: 'none', borderRadius: '12px', marginTop: '10px', fontWeight: 'bold', width: '100%'}}>{loading ? 'Thinking...' : 'Ask Lens'}</button>
      {answer && <div style={{background: 'white', padding: '16px', borderRadius: '12px', marginTop: '20px', lineHeight: '1.6'}}>{answer}</div>}
    </div>
  )
}
