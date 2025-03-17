"use client"
import { cn } from "@/lib/utils"

interface SegmentedControlSmallProps {
  options: string[]
  value: string
  onValueChange: (value: string) => void
  className?: string
}

export function SegmentedControlSmall({ options, value, onValueChange, className }: SegmentedControlSmallProps) {
  return (
    <div className={cn("inline-flex items-stretch gap-1 bg-[#F4F4F4] rounded-[100px] w-fit h-[40px]", className)}>
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onValueChange(option)}
          className={cn(
            "px-6 text-sm rounded-[100px] transition-all duration-200 text-[#1E1E1E]",
            value === option ? "bg-[#FFFFFF] ring-1 ring-[#4F4C4D] font-medium" : "hover:bg-[#4F4C4D]/10 font-light",
          )}
        >
          {option}
        </button>
      ))}
    </div>
  )
}

