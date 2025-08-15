'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { log } from 'console'

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const router = useRouter()

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 10
        if (next >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            
            router.push('/game/room1')
          }, 300)
        }
        return next
      })
    }, 150)

    return () => clearInterval(interval)
  }, [router])

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-black text-white font-mono">
      <h1 className="text-3xl mb-6">Loading Room 1...</h1>
      <div className="w-64 h-3 bg-gray-700 rounded overflow-hidden">
        <div
          className="h-full bg-cyan-500 transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-2 text-sm text-gray-400">{progress}%</p>
    </div>
  )
}
