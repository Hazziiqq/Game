"use client"
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'


const RoomOne = () => {
  const [doorUnlocked, setDoorUnlocked] = useState(false)
  const [message, setMessage] = useState('')
  const router = useRouter()

  const doorHandler = () => {
    if(doorUnlocked){
      router.push('/room2')
    }
    else{
      setMessage('Door is lock, find the code.')
      setTimeout(() => setMessage(''),3000)
    }
  }

  return (
    <>
    <Image 
    src='/room1.jpg' 
    alt = 'first room to solve'
    fill
    style={{objectFit: 'cover'}}
    priority
    />
    <div style={{
     position: 'absolute',
      top: '2%',     // approximate position of ESCAPE sign in your image
      left: '55%',
      transform: 'translateX(-50%)',
      width: '220px', // approximate width of sign
      height: '50px', // approximate height of sign
      backgroundColor: 'rgba(255, 80, 0, 0.4)', // orange-red glow color
      filter: 'blur(8px)',
      borderRadius: '8px',
      animation: 'blink 1.5s infinite',
      pointerEvents: 'none',
      mixBlendMode: 'screen',
    }}/>
    <style>{`
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.4; }
    }
  `}</style>

    <button className='bg-cyan-500 '>

    </button>

    </>
  )
}

export default RoomOne