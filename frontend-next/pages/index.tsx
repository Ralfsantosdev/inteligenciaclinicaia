import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-4xl font-bold">Gerador de Anúncios para Clínicas</h1>
      <p className="mt-4">Crie anúncios profissionais em segundos. Sem agência. Com IA.</p>
      <Link href="/login">
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-xl">Começar Agora</button>
      </Link>
    </div>
  )
}

