import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import ProductBar from "@/components/layout/product-bar"
import Sidebar from "@/components/layout/sidebar"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "CommBank iQ Platform",
  description: "Business intelligence and analytics platform",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <div className="sticky top-0 z-10">
            <ProductBar organisationName="Organisation name" hasMultipleOrganisations={false} />
          </div>
          <div className="flex-1 flex">
            <Sidebar />
            <main className="flex-1 overflow-auto pl-[68px] w-full">{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}



import './globals.css'