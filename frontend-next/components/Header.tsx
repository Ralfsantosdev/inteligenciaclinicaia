import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex justify-between p-4 border-b">
      <Link href="/">Home</Link>
      <nav className="flex gap-4">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/login">Login</Link>
      </nav>
    </header>
  )
}

