"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function TopBar() {
  return (
    <header className="bg-[#1E1E1E] text-white">
      <div className="flex h-14 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-lg font-semibold">CommBank iQ</span>
        </Link>
        <div className="flex items-center gap-4">
          <span className="text-sm">Organisation name</span>
          <Button className="bg-[#FFCC00] text-black hover:bg-[#FFCC00]/90 font-medium" size="sm">
            Log off
          </Button>
        </div>
      </div>
    </header>
  )
}

