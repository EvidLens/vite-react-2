'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

const COLORS = { navy: '#0A1F44', teal: '#14B8A6' }

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSignUp, setIsSignUp] = useState(false)

  const handleAuth = async () => {
    const { error } = isSignUp 
      ? await supabase.auth.signUp({ email, password })
      : await supabase.auth.signInWithPassword({ email, password })
    
    if (!error) window.location.href = '/'
    else alert(error.message)
  }

  return (
    <div style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: COLORS.bg, padding: '20px'}}>
      <div style={{background: 'white', padding: '40px', borderRadius: '16px', width: '100%', maxWidth: '400px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)'}}>
        <img src="/logo.png" width={60} height={60} style={{margin: '0 auto 20px', display: 'block', background: 'white', padding: '8px', borderRadius: '12px'}}/>
        <h1 style={{color: COLORS.navy, textAlign: 'center', marginBottom: '20px'}}><span>Evid</span><span style={{color: COLORS.teal}}>Lens</span></h1>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} style={{width: '100%', padding: '12px', margin: '10px 0', borderRadius: '8px', border: '1px solid #ddd'}}/>
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} style={{width: '100%', padding: '12px', margin: '10px 0', borderRadius: '8px', border: '1px solid #ddd'}}/>
        <button onClick={handleAuth} style={{width: '100%', padding: '14px', background: COLORS.teal, color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', marginTop: '10px'}}>{isSignUp ? 'Sign Up' : 'Sign In'}</button>
        <button onClick={() => setIsSignUp(!isSignUp)} style={{width: '100%', marginTop: '12px', background: 'none', border: 'none', color: COLORS.navy, textDecoration: 'underline'}}>{isSignUp ? 'Have account? Sign In' : 'No account? Sign Up'}</button>
      </div>
    </div>
  )
}
