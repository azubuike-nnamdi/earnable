"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogTrigger, DialogClose, DialogTitle } from "@/components/ui/dialog"
import { User, Lock, SlidersHorizontal, X, Menu } from "lucide-react"
import { ProfileTab } from "./profile-tab"
import { PasswordTab } from "./password-tab"
import { AccountTab } from "./account-tab"

type Tab = "profile" | "password" | "account"
type MobileView = "menu" | "content"

export function ProfileDialog({ children }: { readonly children: React.ReactNode }) {
  const [activeTab, setActiveTab] = useState<Tab>("profile")
  const [mobileView, setMobileView] = useState<MobileView>("menu")
  const [open, setOpen] = useState(false)

  // Reset mobile view when dialog closes
  useEffect(() => {
    if (!open) {
      setTimeout(() => setMobileView("menu"), 300)
    }
  }, [open])

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "password", label: "Password", icon: Lock },
    { id: "account", label: "Account", icon: SlidersHorizontal },
  ] as const

  const getActiveTabLabel = () => {
    if (activeTab === "profile") return "Update profile"
    if (activeTab === "password") return "Update password"
    return "Account settings"
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTitle className="sr-only">Settings</DialogTitle>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="p-0 overflow-hidden w-full max-w-full md:max-w-[800px] flex flex-col md:flex-row h-dvh max-h-dvh md:h-auto md:max-h-[85vh] md:min-h-[500px] rounded-none sm:rounded-2xl border-0 md:border gap-0 bg-white"
      >
        {/* Sidebar */}
        <div className={`w-full md:w-64 bg-white md:bg-[#fcfcfc] border-b md:border-b-0 md:border-r border-gray-100 flex-col p-5 md:p-6 shrink-0 ${mobileView === 'content' ? 'hidden md:flex' : 'flex'}`}>
          {/* Mobile Header for Settings */}
          <div className="md:hidden grid grid-cols-3 items-center mb-8 pt-1">
            <div className="flex justify-start">
              <button
                onClick={() => setOpen(false)}
                className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200"
              >
                <Menu className="w-4 h-4 text-gray-700" strokeWidth={1.5} />
              </button>
            </div>
            <div className="flex justify-center text-[17px] font-semibold text-gray-900">Settings</div>
            <div></div>
          </div>

          {/* Desktop header with X */}
          <div className="hidden md:flex mb-8">
            <DialogClose className="p-2 -ml-2 w-fit hover:bg-black/5 rounded-full transition-colors cursor-pointer outline-none">
              <X className="w-5 h-5 text-gray-600" />
              <span className="sr-only">Close</span>
            </DialogClose>
          </div>

          <nav className="flex flex-col gap-1.5 -mx-1 md:mx-0">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id as Tab)
                    setMobileView("content")
                  }}
                  className={`flex items-center gap-3 px-3 py-3.5 md:py-2.5 rounded-xl text-[15px] md:text-sm font-medium transition-colors cursor-pointer shrink-0 ${isActive
                    ? "bg-[#fafafa] md:bg-[#efefef] text-black"
                    : "text-gray-600 hover:bg-black/5"
                    }`}
                >
                  <tab.icon className="w-[18px] h-[18px] md:w-4 md:h-4 text-gray-500" strokeWidth={1.5} />
                  {tab.label}
                </button>
              )
            })}
          </nav>
        </div>

        {/* Content */}
        <div className={`flex-1 p-5 pt-6 md:p-8 overflow-y-auto bg-white flex-col ${mobileView === 'menu' ? 'hidden md:flex' : 'flex'}`}>
          {/* Mobile Header for Content View */}
          <div className="md:hidden grid grid-cols-[auto_1fr_auto] items-center mb-6 pt-0">
            <button
              onClick={() => setMobileView("menu")}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200"
            >
              <Menu className="w-4 h-4 text-gray-700" strokeWidth={1.5} />
            </button>
            <div className="flex justify-center text-[17px] font-semibold truncate px-2 text-center text-gray-900">
              {getActiveTabLabel()}
            </div>
            <div className="w-10"></div>
          </div>

          <div className="flex-1 flex flex-col md:pt-0">
            {activeTab === "profile" && <ProfileTab onClose={() => setOpen(false)} />}
            {activeTab === "password" && <PasswordTab onClose={() => setOpen(false)} />}
            {activeTab === "account" && <AccountTab />}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
