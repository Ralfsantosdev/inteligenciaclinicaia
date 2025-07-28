const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function gerarAnuncio(nicho: string, objetivo: string) {
  const res = await fetch(`${API_URL}/ads/gerar`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nicho, objetivo }),
  })
  const data = await res.json()
  return data.anuncio
}

