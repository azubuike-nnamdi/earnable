"use client"

import { PasswordInput } from "@/components/ui/password-input"
import { Button } from "@/components/ui/button"

export function PasswordTab({ onClose }: { onClose: () => void }) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle save
    onClose()
  }

  return (
    <div className="flex flex-col h-full w-full mx-auto md:mx-0 max-w-lg">
      <h2 className="text-xl font-semibold mb-6 hidden md:block text-gray-900">Update password</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6 md:gap-5 flex-1 w-full pb-6 md:pb-0">
        <PasswordInput
          label="Enter current password"
          name="currentPassword"
          placeholder="Enter password"
        />

        <PasswordInput
          label="Enter new password"
          name="newPassword"
          placeholder="Enter new password"
        />

        <PasswordInput
          label="Confirm new password"
          name="confirmPassword"
          placeholder="Confirm new password"
        />

        <div className="mt-8 flex flex-col sm:flex-row gap-3 pt-4 sm:mt-auto border-t border-transparent">
          <Button type="button" variant="outline" onClick={onClose} className="w-full sm:flex-1 order-2 sm:order-1 rounded-full py-6 md:py-5 border-gray-200 shadow-none font-medium text-[15px]">
            Cancel
          </Button>
          <Button type="submit" className="w-full sm:flex-1 order-1 sm:order-2 rounded-full py-6 md:py-5 bg-black text-white hover:bg-black/90 shadow-none font-medium text-[15px]">
            Save changes
          </Button>
        </div>
      </form>
    </div>
  )
}
