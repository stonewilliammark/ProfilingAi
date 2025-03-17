"use client"
import { cn } from "@/lib/utils"

interface SegmentedControlProps {
  options: string[]
  value: string
  onValueChange: (value: string) => void
  className?: string
}

export function SegmentedControl({ options, value, onValueChange, className }: SegmentedControlProps) {
  return (
    <div className={cn("inline-flex items-stretch gap-1 bg-[#F4F4F4] rounded-[100px] w-fit h-[56px]", className)}>
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onValueChange(option)}
          className={cn(
            "w-[140px] px-8 text-[20px] rounded-[100px] transition-all duration-200 text-[#1E1E1E]",
            value === option ? "bg-[#FFFFFF] ring-1 ring-[#4F4C4D] font-semibold" : "hover:bg-[#4F4C4D]/10 font-light",
          )}
        >
          {option}
        </button>
      ))}
    </div>
  )
}

