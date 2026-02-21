import { useState } from 'react'
import Home from './components/Home'
import Blog from './components/Blog'
import ShineAnchor from './components/ShineAnchor'
import FloatingCTA from './components/FloatingCTA'

function App() {
  const [activeTab, setActiveTab] = useState('home') // 'home' or 'blog'

  const pageContainer = "mx-auto w-full max-w-[920px] px-4 sm:px-6"

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E8F6FF] via-[#C5E4FF] to-[#1E5AA8] text-[#062447]">

      {/* ========== Header (Sticky) ========== */}
      <header className="bg-white/70 backdrop-blur-xl sticky top-0 z-40 border-b border-blue-900/10">
        <div className={pageContainer}>
          <div className="flex justify-between items-center py-4 gap-4">

            {/* Logo area：画像 + サイト名 */}
            <button
              type="button"
              onClick={() => setActiveTab('home')}
              className="flex items-center gap-2 sm:gap-3 shrink-0 bg-transparent hover:opacity-85 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#062447]/30 focus-visible:ring-offset-2 rounded-lg"
              aria-label="ホームへ"
            >
              <img
                src="/logo.png"
                alt=""
                className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-contain flex-shrink-0 bg-transparent"
              />
              <span className="font-bold text-[#062447] text-sm sm:text-base md:text-lg whitespace-nowrap">
                不動産お悩み相談室
              </span>
            </button>

            {/* Navigation Tabs (Centered for Desktop, or kept simple) */}
            <nav className="flex items-center gap-1 bg-[#0A2540]/5 p-1 rounded-full">
              <button
                onClick={() => setActiveTab('home')}
                className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${activeTab === 'home'
                    ? 'bg-white text-[#0A2540] shadow-sm'
                    : 'text-[#0A2540]/60 hover:text-[#0A2540]'
                  }`}
              >
                ホーム
              </button>
              <button
                onClick={() => setActiveTab('blog')}
                className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${activeTab === 'blog'
                    ? 'bg-white text-[#0A2540] shadow-sm'
                    : 'text-[#0A2540]/60 hover:text-[#0A2540]'
                  }`}
              >
                ブログ
              </button>
            </nav>

            {/* CTA Button (Desktop only?) - Let's keep it but hide on very small screens if needed, 
                or just keep the link "Line相談" simplified */}
            <ShineAnchor
              href="https://line.me/ti/p/AbtvfPG8Wt"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:block text-sm bg-[#0A2540] hover:bg-[#143D66] text-white px-5 py-2.5 rounded-full font-medium shadow-lg shadow-[#0A2540]/20 transition"
            >
              相談する（無料）
            </ShineAnchor>
          </div>
        </div>
      </header>

      {/* ========== Main Content Area（スマホ時はフローティングCTA分の余白） ========== */}
      <div className="pb-20 md:pb-0">
        {activeTab === 'home' ? <Home /> : <Blog />}
      </div>

      {/* ========== フローティングCTA（スマホのみ表示） ========== */}
      <FloatingCTA />

      {/* ========== Footer (Common) ========== */}
      <footer className="py-8 text-center text-[#062447]/40 text-xs">
        <div className={pageContainer}>
          <p>© 2025 困った不動産のお悩み相談室</p>
        </div>
      </footer>
    </div>
  )
}

export default App
