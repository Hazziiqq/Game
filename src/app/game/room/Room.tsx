/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import {useDispatch, useSelector } from 'react-redux'
import { solveNote, solveDesk, solveBookShelf } from '@/app/store/gameSlice'

const Room = () => {
    const dispatch = useDispatch()
      const { noteSolved, deskSolved, bookShelfSolved } = useSelector(
      (state: any) => state.game || {}
     )

     const [noteModal, setNoteModal] = useState(false)
     const [deskModal, setDeskModal] = useState(false)
     const [BookShelfModal, setbookShelfModal] = useState(false)
     const [doorPopup, setDoorPopup] = useState(false)
     const [doorMessage, setDoorMessage] = useState('')

  return (
    <div className='relative w-full h-screen'>
      <Image src='/dec.jpg' alt='room'
      priority
      fill
      className='object-cover'
      />
        {/* clickable note */}
      <div className="absolute top-[63%] left-[40%] w-[8%] h-[12%] cursor-pointer"
     onClick={() => {
      setNoteModal(true)
      dispatch(solveNote())
    }} 
    
     />

      {/* clickable desk */}
     <div className="absolute top-[68%] left-[50%] w-[8%] h-[12%] cursor-pointer"
     onClick={() => {
      setNoteModal(true)
      dispatch(solveDesk())
      }} />

      {/* clickable shelf */}
      <div className="absolute top-[40%] left-[5%] w-[8%] h-[12%] cursor-pointer"
     onClick={() => {
      setbookShelfModal(true)
      dispatch(solveBookShelf())
      }} />

      {/* clickable door */}
      <div className="absolute top-[40%] left-[80%] w-[8%] h-[12%] cursor-pointer"
     onClick={() => {
      if(noteModal && deskModal && bookShelfSolved){
        setDoorMessage('🎉 Door unlocked! You escaped!')
      }
      else{
        setDoorMessage('Solve all tasks to unlock the door.')
      }
      setDoorPopup(true)
     }}
     />

     {/* door popup */}
      {doorPopup && (
         <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
          <div className="bg-[#1E1E2E] text-cyan-300 p-6 rounded-xl shadow-lg w-[320px] text-center">
            <p className="text-lg mb-4">{doorMessage}</p>
            <button
              className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600 font-mono"
              onClick={() => setDoorPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
    
  )
}

export default Room



