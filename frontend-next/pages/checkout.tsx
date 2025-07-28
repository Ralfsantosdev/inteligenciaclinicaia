import { useEffect } from 'react'

export default function Checkout() {
  useEffect(() => {
    window.location.href = 'https://link-do-checkout-stripe.com'
  }, [])

  return <p>Redirecionando para o checkout...</p>
}

