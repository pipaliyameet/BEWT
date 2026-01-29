import Link from 'next/link'
import React from 'react'

function lab_20_layout({children}:{children:React.ReactNode}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white">
  
  {/* Navbar (normal position) */}
  <nav className="backdrop-blur-lg bg-white/10 border-b border-white/10">
    <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-8 text-sm font-medium">
      
      <Link href="/Lab-20/" className="relative group transition">
        Home
        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-indigo-400 transition-all group-hover:w-full"></span>
      </Link>

      <Link href="/Lab-20/about" className="relative group transition">
        About
        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-indigo-400 transition-all group-hover:w-full"></span>
      </Link>

      <Link href="/Lab-20/contect" className="relative group transition">
        Contact
        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-indigo-400 transition-all group-hover:w-full"></span>
      </Link>
    </div>
  </nav>

  {/* Page Content */}
  <main className="max-w-6xl mx-auto px-6 py-10">
    <div className="rounded-2xl bg-white/5 border border-white/10 shadow-xl p-6">
      {children}
    </div>
  </main>
</div>

  )
}

export default lab_20_layout
