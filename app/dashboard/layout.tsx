import { Sidebar } from "@/components/ui/sidebar"

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Analyze Content",
  description:
    "Paste your content URL and get a full monetization readiness analysis with actionable recommendations.",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen w-full bg-white overflow-hidden text-black font-sans">
      <Sidebar />
      <main className="flex-1 h-full overflow-y-auto relative w-full">
        {children}
      </main>
    </div>
  )
}