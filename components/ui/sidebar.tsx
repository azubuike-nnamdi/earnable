"use client"

import { useState } from "react"
import Image from "next/image"
import { Link as LinkIcon, X, Menu, ChevronRight, User } from "lucide-react"

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  // These could be props or fetched from an API in a real app
  const accounts = [
    { name: "fintechwithtunde" },
    { name: "The Naija Press" },
    { name: "Legggo" },
  ]

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-6 right-6 z-40 bg-white text-black p-3 rounded-full shadow-md hover:bg-gray-50 active:scale-95 transition-all"
        aria-label="Open menu"
      >
        <Menu className="w-5 h-5" />
      </button>

      {isOpen && (
        <button
          className="md:hidden fixed inset-0 bg-black/40 z-40 transition-opacity backdrop-blur-sm w-full outline-none border-none cursor-default"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu backdrop"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-[80%] max-w-[320px] md:w-[280px] bg-[#0c080d] transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 overflow-hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/assets/images/auth-bg.png"
            alt="Sidebar Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative flex flex-col h-full p-6 z-10 w-full text-white">
          <div className="mb-12">
            <h1 className="text-xl font-bold tracking-tight text-white/90">Earnable</h1>
          </div>

          <nav className="flex-1 w-full flex flex-col gap-6">
            <button className="flex items-center justify-between w-full text-[15px] text-gray-300 hover:text-white transition-colors group">
              <div className="flex items-center gap-3">
                <LinkIcon className="w-[18px] h-[18px] text-gray-400 group-hover:text-gray-200 transition-colors" strokeWidth={2} />
                <span className="font-medium">Add link</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-gray-300 transition-colors" />
            </button>

            <div className="space-y-5 pt-2">
              {accounts.map((account, i) => (
                <div key={i} className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <Image
                      src={`https://i.pravatar.cc/150?u=${account.name}`}
                      alt={account.name}
                      className="w-7 h-7 rounded-full bg-gray-800 object-cover border border-white/5"
                      height={50}
                      width={50}
                    />
                    <span className="text-[14px] text-gray-300 group-hover:text-white transition-colors">
                      {account.name}
                    </span>
                  </div>
                  <button className="text-gray-600 hover:text-gray-300 transition-colors p-1 cursor-pointer" aria-label="Remove">
                    <X className="w-4 h-4" strokeWidth={1.5} />
                  </button>
                </div>
              ))}
            </div>
          </nav>

          {/* open profile dialog */}
          <div className="mt-auto pt-6">
            <button className="flex items-center w-full p-3 rounded-2xl bg-[#1e151b]/80 border border-white/5 hover:bg-white/10 transition-colors group cursor-pointer">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div className="shrink-0 w-9 h-9 rounded-full bg-gray-600 flex items-center justify-center overflow-hidden border border-white/10">
                  <User className="w-5 h-5 text-gray-300" strokeWidth={1.5} />
                </div>
                <span className="text-[14px] font-medium text-white truncate">Chike Opara</span>
              </div>
              <ChevronRight className="shrink-0 w-4 h-4 text-gray-500 group-hover:text-gray-300 transition-colors" />
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}
