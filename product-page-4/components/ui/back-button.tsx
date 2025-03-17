"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

export default function BackButton() {
  const router = useRouter()

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-2 text-[#1E1E1E] hover:opacity-80 transition-opacity"
    >
      <ArrowLeft className="h-5 w-5" />
      <span className="text-base font-normal">Back</span>
    </button>
  )
}

