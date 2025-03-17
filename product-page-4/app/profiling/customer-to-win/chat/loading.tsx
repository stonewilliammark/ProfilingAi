import { Info, ArrowLeft } from "lucide-react"

export default function Loading() {
  return (
    <div className="flex flex-col h-screen">
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Back button and header */}
        <div className="px-8 pt-6 pb-4">
          <button className="flex items-center gap-2 text-[#1E1E1E] hover:opacity-80 transition-opacity mb-4">
            <ArrowLeft className="h-5 w-5" />
            <span className="text-base font-normal">Back</span>
          </button>

          <div className="flex justify-between items-center">
            <div className="flex-1 text-center">
              <h2 className="text-[#706F6D] text-lg font-normal">Virtual audience</h2>
              <h1 className="text-[40px] font-bold mt-1 bg-gradient-to-b from-[#7A7871] to-[#4D4C44] bg-clip-text text-transparent">
                Competitor's Customers
              </h1>
            </div>
            <Info className="h-5 w-5 text-[#706F6D]" />
          </div>
        </div>

        <div className="flex items-center justify-center flex-1">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border-4 border-[#FFCC00] border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-[#706F6D]">Loading virtual audience...</p>
          </div>
        </div>
      </div>
    </div>
  )
}

