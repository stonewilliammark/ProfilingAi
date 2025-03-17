import { cn } from "@/lib/utils"

interface CalloutCardProps {
  heading: string
  dataPoint: string
  className?: string
}

export default function CalloutCard({ heading, dataPoint, className }: CalloutCardProps) {
  return (
    <div className={cn("bg-[#fafafa] rounded-2xl p-6 w-full", className)}>
      <div className="space-y-2">
        <p className="text-[#706f6d] text-xl">{heading}</p>
        <h3 className="text-[32px] text-[#1e1e1e] font-semibold tracking-tight">{dataPoint}</h3>
      </div>
    </div>
  )
}

