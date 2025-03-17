"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader } from "@/components/ui/card"
import { Info } from "lucide-react"
import BackButton from "@/components/ui/back-button"
import DownloadButton from "@/components/ui/download-button"
import PrimaryCalloutCardLight from "@/components/ui/primary-callout-card-light"
import { inter } from "@/lib/fonts"
import Link from "next/link"

export default function CustomerToWin() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Gradient style for headings
  const gradientStyle = {
    background: "linear-gradient(to bottom, #7A7871, #4D4C44)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  }

  return (
    <div className={`${inter.className} px-8 mx-auto`} style={{ maxWidth: "1190px" }}>
      <div className="pt-[32px]">
        <BackButton />
        <div className="flex justify-between items-center mt-[40px]">
          <h1 className="text-2xl font-medium text-[#706F6D]">Customer profile</h1>
          <DownloadButton />
        </div>
      </div>

      <div className="bg-[#F4F4F4] rounded-lg p-8 mt-[24px] mb-10">
        <div className="flex justify-between items-start mb-12">
          <div>
            <h2 className="text-[40px] font-bold mb-2" style={gradientStyle}>
              Competitor's Customers
            </h2>
            <p className="text-[24px] font-normal text-[#706F6D] max-w-[500px]">
              Hello, we shop at your competitors more than we shop with you
            </p>
          </div>
          <div className="flex gap-6">
            <PrimaryCalloutCardLight label="Size of opportunity" value="$25M" valueStyle="green" />
            <PrimaryCalloutCardLight label="People in opportunity" value="80K" valueStyle="gradient" />
          </div>
        </div>

        <div className="space-y-8">
          <section>
            <h3 className="text-2xl font-medium text-[#706F6D] mb-4">Who we are</h3>
            <p className="text-[#706F6D] mb-4">
              We are urban Australians who live through our smartphones. We use Uber for commutes (66%), and order lunch
              via Uber Eats. We shop for fitness gear at Rebel Sport (46%) and browse Uniqlo or Cotton On for fashion.
            </p>
            <p className="text-[#706F6D]">
              Valuing convenience above all, we stream Netflix while waiting for food delivery, subscribe to Spotify for
              our commute, and are comfortable shopping online (71% shop online) but also enjoy self-care experiences
              like fitness clubs and beauty salons.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-medium text-[#706F6D] mb-4">What resonates with us</h3>
            <div className="grid grid-cols-3 gap-4">
              <Card className="border-0 shadow-none bg-white">
                <CardHeader>
                  <h4 className="text-[20px] font-medium text-[#706F6D] mb-2">Emphasise time-saving and convenience</h4>
                  <p className="text-[16px] text-[#706F6D] font-normal">
                    Highlight how your products and services can streamline our busy lives, targeting the 66% of us who
                    use ride-sharing services like Uber and frequently order through delivery apps.
                  </p>
                </CardHeader>
              </Card>
              <Card className="border-0 shadow-none bg-white">
                <CardHeader>
                  <h4 className="text-[20px] font-medium text-[#706F6D] mb-2">
                    Balance our healthy, active lifestyles
                  </h4>
                  <p className="text-[16px] text-[#706F6D] font-normal">
                    Connect with our active lifestyles by offering quick, stylish solutions that work at the gym and
                    beyond, speaking to the 46% who blend fitness and socialising into our daily routine.
                  </p>
                </CardHeader>
              </Card>
              <Card className="border-0 shadow-none bg-white">
                <CardHeader>
                  <h4 className="text-[20px] font-medium text-[#706F6D] mb-2">
                    Focus on authentic, city lifestyle content
                  </h4>
                  <p className="text-[16px] text-[#706F6D] font-normal">
                    Create content that captures authentic city life, resonating with the 71% who prefer digital-first
                    solutions like Uber Eats for their daily needs.
                  </p>
                </CardHeader>
              </Card>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-medium text-[#706F6D] mb-4">Where to find us</h3>
            <div className="grid grid-cols-3 gap-4">
              <Card className="border-0 shadow-none bg-white">
                <CardHeader>
                  <h4 className="text-[20px] font-medium text-[#706F6D] mb-2">Inner West Sydney</h4>
                  <p className="text-[16px] text-[#706F6D] font-normal">
                    Because 35% of us live there, frequently shop with competitors for premium sports fashion products,
                    and have a higher disposable income.
                  </p>
                </CardHeader>
              </Card>
              <Card className="border-0 shadow-none bg-white">
                <CardHeader>
                  <h4 className="text-[20px] font-medium text-[#706F6D] mb-2">Run Spotify advertisements</h4>
                  <p className="text-[16px] text-[#706F6D] font-normal">
                    Because 40% of us are active subscribers, with 70% of us being 18-24 year-olds who prioritise
                    fashion, and can be reached on our daily commute.
                  </p>
                </CardHeader>
              </Card>
              <Card className="border-0 shadow-none bg-white">
                <CardHeader>
                  <h4 className="text-[20px] font-medium text-[#706F6D] mb-2">Invest in out-of-home</h4>
                  <p className="text-[16px] text-[#706F6D] font-normal">
                    In shopping centres and train stations because 60% of us are young, affluent customers who spend
                    significant time in social and recreational activities.
                  </p>
                </CardHeader>
              </Card>
            </div>
          </section>
        </div>
      </div>

      <section>
        <h2 className="text-2xl font-medium text-[#706F6D] mb-4">Virtual audience</h2>
        <Card className="bg-[#F4F4F4] border-0 shadow-none p-8">
          <div className="relative">
            <div className="flex justify-end">
              <Info className="h-5 w-5 text-[#706F6D]" />
            </div>

            <div className="text-center mb-12">
              <h2 className="text-[40px] font-bold mb-4" style={gradientStyle}>
                Competitor's Customers
              </h2>
              <p className="text-[24px] font-normal text-[#706F6D] max-w-[700px] mx-auto">
                Hello, we are your competitor's customers, what would you like to ask us?
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-12">
              <Link href="/profiling/customer-to-win/chat?prompt=What brands do you currently prefer in this category?">
                <div className="bg-white p-6 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                  <p className="text-[16px] text-[#706F6D]">What brands do you currently prefer in this category?</p>
                </div>
              </Link>
              <Link href="/profiling/customer-to-win/chat?prompt=How does our brand positioning compare to the competitors you prefer?">
                <div className="bg-white p-6 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                  <p className="text-[16px] text-[#706F6D]">
                    How does our brand positioning compare to the competitors you prefer?
                  </p>
                </div>
              </Link>
              <Link href="/profiling/customer-to-win/chat?prompt=Why do you choose these brands over others?">
                <div className="bg-white p-6 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                  <p className="text-[16px] text-[#706F6D]">Why do you choose these brands over others?</p>
                </div>
              </Link>
            </div>

            <div className="flex justify-center">
              <Link href="/profiling/customer-to-win/chat">
                <Button
                  className="bg-[#ffcc00] text-[#1E1E1E] hover:bg-[#ffcc00]/90 px-8 rounded-full font-light text-sm h-12"
                  style={{ fontSize: "14px", fontWeight: 300 }}
                >
                  Start conversation
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </section>

      <div className="h-16"></div>
    </div>
  )
}

