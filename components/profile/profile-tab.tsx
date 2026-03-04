"use client"

import { FormInput } from "@/components/ui/form-input"
import { Button } from "@/components/ui/button"

export function ProfileTab({ onClose }: { onClose: () => void }) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle save
    onClose()
  }

  return (
    <div className="flex flex-col h-full w-full mx-auto md:mx-0 max-w-lg">
      <h2 className="text-xl font-semibold mb-6 hidden md:block text-gray-900">Update profile</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6 md:gap-5 flex-1 w-full pb-6 md:pb-0">
        <FormInput
          label="First name"
          name="firstName"
          placeholder="Chike"
          defaultValue="Chike"
        />
        <FormInput
          label="Last name"
          name="lastName"
          placeholder="Opara"
          defaultValue="Opara"
        />

        <FormInput
          label="Email"
          name="email"
          type="email"
          placeholder="mailtochike@email.com"
          defaultValue="mailtochike@email.com"
        />

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-foreground">Phone number</label>
          <div className="flex w-full overflow-hidden rounded-lg border border-input shadow-sm focus-within:ring-[3px] focus-within:ring-ring/50 focus-within:border-ring transition-[color,box-shadow]">
            <div className="flex items-center gap-2 px-3 py-1 bg-transparent border-r border-input">
              <div className="w-[18px] h-[13px] flex overflow-hidden rounded-[2px] shrink-0 border border-black/5">
                <div className="flex-1 bg-[#008751]" />
                <div className="flex-1 bg-white" />
                <div className="flex-1 bg-[#008751]" />
              </div>
              <span className="text-sm font-medium">+234</span>
            </div>
            <input
              type="tel"
              name="phone"
              className="flex-1 h-12 bg-transparent px-3 py-1 text-base outline-none md:text-sm placeholder:text-muted-foreground"
              placeholder="Enter phone number"
            />
          </div>
        </div>

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
