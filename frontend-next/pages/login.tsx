import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { useRouter } from 'next/router'

export default function Login() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e: any) => {
    e.preventDefault()
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) alert('Erro no login')
    else router.push('/dashboard')
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl mb-4">Login</h1>
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="border p-2" />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Senha" className="border p-2" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-xl">Entrar</button>
      </form>
    </div>
  )
}

