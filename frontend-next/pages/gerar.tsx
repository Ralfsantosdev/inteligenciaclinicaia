import { useState } from 'react'
import { gerarAnuncio } from '../lib/api'

export default function Gerar() {
  const [nicho, setNicho] = useState('')
  const [objetivo, setObjetivo] = useState('')
  const [anuncio, setAnuncio] = useState('')

  const handleGerar = async () => {
    const result = await gerarAnuncio(nicho, objetivo)
    setAnuncio(result)
  }

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl mb-4">Gerar Anúncio</h1>
      <div className="flex flex-col gap-4">
        <input placeholder="Nicho (ex.: estética)" value={nicho} onChange={e => setNicho(e.target.value)} className="border p-2" />
        <input placeholder="Objetivo (ex.: captar pacientes)" value={objetivo} onChange={e => setObjetivo(e.target.value)} className="border p-2" />
        <button onClick={handleGerar} className="bg-blue-600 text-white px-4 py-2 rounded-xl">Gerar</button>
        {anuncio && (
          <div className="border p-4 mt-4">
            <h2 className="font-bold mb-2">Anúncio Gerado:</h2>
            <p>{anuncio}</p>
          </div>
        )}
      </div>
    </div>
  )
}

