import type React from "react"
import { cn } from "@/lib/utils"

interface CardContainerProps {
  children: React.ReactNode
  className?: string
}

export default function CardContainer({ children, className }: CardContainerProps) {
  return <div className={cn("w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-4", className)}>{children}</div>
}

