import { Link as LinkIcon } from "lucide-react"

export function Dashboard() {
  return (
    <div className="h-full flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md space-y-8 -mt-20">
        <h1 className="text-[28px] font-semibold flex items-center justify-center gap-2 text-black tracking-tight cursor-default">
          Hi Chike <span className="text-3xl origin-bottom-right hover:animate-pulse transition-all">👋</span>
        </h1>

        <div className="relative w-full group">
          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
            <LinkIcon className="h-[18px] w-[18px] text-gray-400 group-focus-within:text-black transition-colors" strokeWidth={2} />
          </div>
          <input
            type="text"
            className="block w-full pl-12 pr-28 py-4 bg-white border border-gray-200 rounded-full outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all placeholder:text-gray-400 text-[15px] shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)] text-black font-medium"
            placeholder="Enter link"
          />
          <div className="absolute inset-y-0 right-0 py-1.5 pr-1.5">
            <button className="h-full px-6 bg-black text-white text-[14px] font-medium rounded-full hover:bg-gray-800 active:scale-[0.98] transition-all">
              Analyse
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}