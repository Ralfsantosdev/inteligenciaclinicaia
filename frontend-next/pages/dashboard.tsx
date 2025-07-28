import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Dashboard() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const session = supabase.auth.getSession()
    session.then(({ data: { session } }) => {
      if (!session) router.push('/login')
      else setUser(session.user)
    })
  }, [])

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl mb-4">Bem-vindo, {user?.email}</h1>
      <Link href="/gerar">
        <button className="bg-green-600 text-white px-4 py-2 rounded-xl">Gerar Novo Anúncio</button>
      </Link>
    </div>
  )
}

