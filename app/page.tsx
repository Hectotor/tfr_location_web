'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.push('/maintenance')
  }, [router])

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <p>Redirection vers la page de maintenance...</p>
    </div>
  )
}
