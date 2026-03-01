import Image from "next/image";
import { authBgImage } from "@/constant/images";

export function AuthenticationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col min-h-screen w-full overflow-hidden bg-black">
      {/* Background image — full bleed */}
      <Image
        src={authBgImage}
        alt="Authentication background"
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* ── Mobile: hero section (top ~35%) + bottom sheet ──────────────────
           ── Desktop: centered card over full-screen background ──────────── */}
      <div className="relative z-10 flex flex-col flex-1">

        {/* Hero – "Earnable" brand */}
        <div className="flex items-center justify-center flex-[10%] md:hidden">
          <h1 className="text-white text-3xl font-bold tracking-wide drop-shadow-lg mt-12">
            Earnable
          </h1>
        </div>

        {/* ── Mobile bottom sheet ─────────────────────────────────────────── */}
        <div
          className="
            flex-1 rounded-t-[2rem] bg-white px-6 pt-8 mt-8 pb-10 shadow-2xl
            md:hidden
          "
        >
          {children}
        </div>

        {/* ── Desktop centred card ────────────────────────────────────────── */}
        <div className="hidden md:flex flex-1 flex-col items-center justify-center px-4 gap-8">
          <h1 className="text-white text-3xl font-bold tracking-wide drop-shadow-lg">
            Earnable
          </h1>
          <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl px-8 py-10">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}