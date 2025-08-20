'use client'
import { useState } from "react";
import Background from "./components/Background";
import LoadingPage from "./components/LoadingPage";

export default function Home() {
  const [startGame, setStartGame] = useState(false)

  const startHandler = () => {
    setStartGame(true)
  }
  if(startGame) return <LoadingPage/>
  return (
    <main className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-b from-[#0a0a0a] to-[#111827] text-cyan-400 font-mono px-6 text-center overflow-hidden">
      <Background />

      <div className="relative z-10 max-w-lg space-y-8">
        {/* Game Title */}
        <h1 className="text-6xl font-extrabold tracking-tight text-cyan-300 drop-shadow-md">
          ROOMING
        </h1>

        {/* Tagline */}
        <p className="text-2xl font-light text-cyan-200 max-w-md mx-auto leading-relaxed">
          Escape, Solve, Explore
        </p>

        {/* Subtitle */}
        <p className="text-sm text-cyan-400/60 uppercase tracking-widest font-semibold">
          The only way out is solving the puzzles.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-8 mt-4">
          <button
          onClick={startHandler}
            className="px-10 py-3 bg-gradient-to-r from-cyan-500 to-cyan-700 rounded-xl text-white font-semibold tracking-wide
            shadow-lg hover:shadow-xl hover:scale-[1.05] transition transform duration-300 ease-in-out active:scale-95"
          >
            Start Game
          </button>

          <button
            className="px-10 py-3 border-2 border-cyan-500 rounded-xl text-cyan-300 font-semibold tracking-wide
            hover:bg-cyan-600/30 hover:text-white shadow-md hover:shadow-lg transition duration-300 ease-in-out active:scale-95"
          >
            How to Play
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-10 mt-12 text-cyan-300 opacity-80 hover:opacity-100 transition-opacity duration-300">
        {/* LinkedIn */}
<a
  href="https://linkedin.com"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="LinkedIn"
  className="hover:text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.039-1.852-3.039-1.854 0-2.136 1.445-2.136 2.939v5.669h-3.554V9h3.414v1.561h.049c.476-.9 1.635-1.852 3.367-1.852 3.602 0 4.269 2.37 4.269 5.455v6.288zM5.337 7.433a2.07 2.07 0 110-4.139 2.07 2.07 0 010 4.139zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .77 0 1.722v20.555C0 23.23.792 24 1.771 24h20.451C23.2 24 24 23.23 24 22.277V1.722C24 .77 23.2 0 22.225 0z" />
  </svg>
</a>

{/* GitHub */}
<a
  href="https://github.com"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="GitHub"
  className="hover:text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M12 0C5.372 0 0 5.372 0 12c0 5.302 3.438 9.8 8.207 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.335-5.466-5.933 0-1.31.467-2.382 1.235-3.222-.123-.303-.535-1.52.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.656.242 2.873.12 3.176.77.84 1.233 1.912 1.233 3.222 0 4.61-2.807 5.628-5.48 5.922.43.37.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.628-5.372-12-12-12z" />
  </svg>
</a>

        </div>
      </div>
    </main>
  );
}
