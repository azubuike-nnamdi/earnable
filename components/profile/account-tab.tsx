"use client"

import { Button } from "@/components/ui/button"

export function AccountTab() {
  return (
    <div className="flex flex-col h-full w-full mx-auto md:mx-0 max-w-lg">
      <h2 className="text-xl font-semibold mb-6 hidden md:block text-gray-900">Account settings</h2>

      <div className="flex flex-col flex-1 pb-6 md:pb-0">
        <div className="flex items-center justify-between border border-gray-100 rounded-2xl p-4 md:p-6 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.02)]">
          <span className="text-[15px] text-gray-700">Delete account</span>
          <Button
            variant="outline"
            className="text-[#f04438] border-[#fda29b] font-normal hover:bg-[#fef3f2] hover:text-[#b42318] rounded-full px-6 h-9"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  )
}
