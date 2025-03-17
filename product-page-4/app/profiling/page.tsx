"use client"

import { useState } from "react"
import Link from "next/link"
import { Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { SegmentedControl } from "@/components/ui/segmented-control"
import { SegmentedControlSmall } from "@/components/ui/segmented-control-small"
import DownloadButton from "@/components/ui/download-button"
import PrimaryCalloutCard from "@/components/ui/primary-callout-card"
import PrimaryCalloutCardLight from "@/components/ui/primary-callout-card-light"
import ProfileButton from "@/components/ui/profile-button"
import { useDragScroll } from "@/hooks/use-drag-scroll"
import { inter } from "@/lib/fonts"

export default function Profiling() {
  const [segmentValue, setSegmentValue] = useState("Acquire")
  const [privacyValue, setPrivacyValue] = useState("Private")

  const customerProfilesScroll = useDragScroll()
  const previousProfilesScroll = useDragScroll()

  return (
    <div className={`${inter.className} mx-auto p-8 pt-16 pb-16`} style={{ maxWidth: "1190px" }}>
      {/* Brand Profile Section */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-medium text-[#706F6D]">Brand profile</h2>
          <DownloadButton />
        </div>

        <div className="border border-[#D3D2D2] rounded-[16px] p-8 bg-white shadow-none">
          <div>
            {/* Responsive layout for heading/description and callout cards */}
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-16">
              {/* Left column: Heading and description */}
              <div className="flex-1 max-w-[640px]">
                <h1 className="text-[40px] font-bold mb-2" style={gradientStyle}>
                  Your Customers
                </h1>
                <p className="text-[24px] font-normal text-[#706F6D]">
                  Hello, we are young, affluent and prefer to shop online. We prioritise our health & wellbeing.
                </p>
              </div>

              {/* Right column: Callout cards */}
              <div className="flex gap-4">
                <PrimaryCalloutCard label="Spend" value="$120M" valueStyle="green" />
                <PrimaryCalloutCard label="Total customers" value="950K" valueStyle="gradient" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="bg-[#f5f5f5] rounded-lg p-4 border-0 shadow-none">
                <div className="flex items-center gap-2 mb-2">
                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask
                      id="mask0_920_11222"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="20"
                      height="21"
                    >
                      <rect y="0.5" width="20" height="20" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_920_11222)">
                      <path
                        d="M10 15.5C9.19444 15.5 8.41667 15.6285 7.66667 15.8854C6.91667 16.1424 6.22222 16.5139 5.58333 17H14.4167C13.7917 16.5139 13.1007 16.1424 12.3438 15.8854C11.5868 15.6285 10.8056 15.5 10 15.5ZM4.5 15.8958C5.26389 15.2708 6.12153 14.7986 7.07292 14.4792C8.02431 14.1597 9 14 10 14C11 14 11.9757 14.1562 12.9271 14.4688C13.8785 14.7812 14.7361 15.2569 15.5 15.8958V6H4.5V15.8958ZM9.995 13C9.165 13 8.45833 12.7067 7.875 12.12C7.29167 11.5333 7 10.825 7 9.995C7 9.165 7.29333 8.45833 7.88 7.875C8.46667 7.29167 9.175 7 10.005 7C10.835 7 11.5417 7.29333 12.125 7.88C12.7083 8.46667 13 9.175 13 10.005C13 10.835 12.7067 11.5417 12.12 12.125C11.5333 12.7083 10.825 13 9.995 13ZM10 11.5C10.4167 11.5 10.7708 11.3542 11.0625 11.0625C11.3542 10.7708 11.5 10.4167 11.5 10C11.5 9.58333 11.3542 9.22917 11.0625 8.9375C10.7708 8.64583 10.4167 8.5 10 8.5C9.58333 8.5 9.22917 8.64583 8.9375 8.9375C8.64583 9.22917 8.5 9.58333 8.5 10C8.5 10.4167 8.64583 10.7708 8.9375 11.0625C9.22917 11.3542 9.58333 11.5 10 11.5ZM4.5 18.5C4.09722 18.5 3.74653 18.3507 3.44792 18.0521C3.14931 17.7535 3 17.4028 3 17V6C3 5.59722 3.14931 5.24653 3.44792 4.94792C3.74653 4.64931 4.09722 4.5 4.5 4.5H6V2.5H7.5V4.5H12.5V2.5H14V4.5H15.5C15.9125 4.5 16.2656 4.64931 16.5594 4.94792C16.8531 5.24653 17 5.59722 17 6V17C17 17.4028 16.8531 17.7535 16.5594 18.0521C16.2656 18.3507 15.9125 18.5 15.5 18.5H4.5Z"
                        fill="#686868"
                      />
                    </g>
                  </svg>
                  <span className="text-base text-[#706F6D] font-medium">Biggest age group</span>
                </div>
                <div className="text-[32px] font-bold">18-24</div>
              </div>
              <div className="bg-[#f5f5f5] rounded-lg p-4 border-0 shadow-none">
                <div className="flex items-center gap-2 mb-2">
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask
                      id="mask0_920_11229"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="21"
                      height="21"
                    >
                      <rect x="0.666626" y="0.5" width="20" height="20" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_920_11229)">
                      <path
                        d="M10.1666 14H11.1666V13H11.6666C11.95 13 12.1875 12.9042 12.3791 12.7125C12.5708 12.5208 12.6666 12.2833 12.6666 12V11C12.6666 10.7167 12.5708 10.4792 12.3791 10.2875C12.1875 10.0958 11.95 10 11.6666 10H9.66663V9H12.6666V8H11.1666V7H10.1666V8H9.66663C9.38329 8 9.14579 8.09583 8.95413 8.2875C8.76246 8.47917 8.66663 8.71667 8.66663 9V10C8.66663 10.2833 8.76246 10.5208 8.95413 10.7125C9.14579 10.9042 9.38329 11 9.66663 11H11.6666V12H8.66663V13H10.1666V14ZM4.16663 16.5C3.75413 16.5 3.401 16.3531 3.10725 16.0592C2.8135 15.7653 2.66663 15.4119 2.66663 14.9992V5.99417C2.66663 5.58139 2.8135 5.22917 3.10725 4.9375C3.401 4.64583 3.75413 4.5 4.16663 4.5H17.1666C17.5791 4.5 17.9323 4.64694 18.226 4.94083C18.5198 5.23472 18.6666 5.58806 18.6666 6.00083V15.0058C18.6666 15.4186 18.5198 15.7708 18.226 16.0625C17.9323 16.3542 17.5791 16.5 17.1666 16.5H4.16663ZM4.16663 15H17.1666V6H4.16663V15Z"
                        fill="#686868"
                      />
                    </g>
                  </svg>
                  <span className="text-base text-[#706F6D] font-medium">Typical affluence</span>
                </div>
                <div className="text-[32px] font-bold">Premium</div>
              </div>
              <div className="bg-[#f5f5f5] rounded-lg p-4 border-0 shadow-none">
                <div className="flex items-center gap-2 mb-2">
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask
                      id="mask0_920_11239"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="21"
                      height="21"
                    >
                      <rect x="0.333374" y="0.5" width="20" height="20" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_920_11239)">
                      <path
                        d="M10.3334 17.5L9.29171 16.5625C7.90282 15.3264 6.75699 14.2674 5.85421 13.3854C4.95143 12.5035 4.23962 11.7188 3.71879 11.0312C3.19796 10.3438 2.83685 9.71528 2.63546 9.14583C2.43407 8.57639 2.33337 7.99306 2.33337 7.39583C2.33337 6.15972 2.75699 5.11806 3.60421 4.27083C4.45143 3.42361 5.4931 3 6.72921 3C7.40976 3 8.06949 3.14583 8.70837 3.4375C9.34726 3.72917 9.88893 4.13889 10.3334 4.66667C10.7778 4.13889 11.3195 3.72917 11.9584 3.4375C12.5973 3.14583 13.257 3 13.9375 3C15.1737 3 16.2153 3.42361 17.0625 4.27083C17.9098 5.11806 18.3334 6.15972 18.3334 7.39583C18.3334 7.99306 18.2362 8.56944 18.0417 9.125C17.8473 9.68056 17.4896 10.2986 16.9688 10.9792C16.448 11.6597 15.7327 12.4479 14.823 13.3438C13.9132 14.2396 12.75 15.3264 11.3334 16.6042L10.3334 17.5ZM10.3334 15.4792C11.625 14.3264 12.6875 13.3438 13.5209 12.5312C14.3542 11.7188 15.0174 11.0104 15.5105 10.4062C16.0035 9.80208 16.3473 9.26389 16.5417 8.79167C16.7362 8.31944 16.8334 7.85417 16.8334 7.39583C16.8334 6.57639 16.5556 5.88889 16 5.33333C15.4445 4.77778 14.757 4.5 13.9375 4.5C13.4514 4.5 12.9966 4.60069 12.573 4.80208C12.1493 5.00347 11.7848 5.28472 11.4792 5.64583L10.75 6.5H9.91671L9.18754 5.64583C8.88199 5.28472 8.51046 5.00347 8.07296 4.80208C7.63546 4.60069 7.18754 4.5 6.72921 4.5C5.90976 4.5 5.22226 4.77778 4.66671 5.33333C4.11115 5.88889 3.83337 6.57639 3.83337 7.39583C3.83337 7.85417 3.92365 8.30903 4.10421 8.76042C4.28476 9.21181 4.61462 9.73611 5.09379 10.3333C5.57296 10.9306 6.23268 11.6389 7.07296 12.4583C7.91324 13.2778 9.00004 14.2847 10.3334 15.4792Z"
                        fill="#686868"
                      />
                    </g>
                  </svg>
                  <span className="text-base text-[#706F6D] font-medium">Typical life stage</span>
                </div>
                <div className="text-[32px] font-bold">Singles & couples</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Segmented Control - Now outside the brand profile section */}
      <div className="mb-16 flex justify-center">
        <SegmentedControl
          options={["Acquire", "Grow", "Retain"]}
          value={segmentValue}
          onValueChange={setSegmentValue}
        />
      </div>

      {/* Customer Profiles Section */}
      <section className="mb-16">
        <h2 className="text-xl font-medium text-[#706F6D] mb-6">Customer profiles</h2>

        {/* Carousel container with proper alignment and gradient fade */}
        <div className="relative overflow-hidden carousel-fade-edge">
          <div
            ref={customerProfilesScroll.ref}
            className="flex overflow-x-auto scrollbar-mac pb-6 cursor-grab"
            style={{
              paddingRight: "100vw", // Extend far to the right
              marginRight: "-100vw", // Negative margin to hide the boundary
            }}
          >
            {/* Competitor's Customers */}
            <Card className="border-0 p-6 shadow-none bg-[#f5f5f5] rounded-[16px] flex-shrink-0 w-[520px] mr-6">
              <h3 className="text-[32px] font-bold mb-2" style={gradientStyle}>
                Competitor&apos;s Customers
              </h3>
              <p className="text-[20px] font-normal text-[#706F6D] mb-8">
                Hello, we shop at your competitors at least twice as much as we shop with your business
              </p>

              <div className="flex gap-4 mb-8">
                <div>
                  <div className="text-[20px] text-[#706F6D] mb-1">Size of opportunity</div>
                  <PrimaryCalloutCardLight label="" value="$25M" valueStyle="green" />
                </div>
                <div>
                  <div className="text-[20px] text-[#706F6D] mb-1">People in opportunity</div>
                  <PrimaryCalloutCardLight label="" value="80K" valueStyle="gradient" />
                </div>
              </div>

              <Link href="/profiling/customer-to-win">
                <ProfileButton />
              </Link>
            </Card>

            {/* Potential Customers */}
            <Card className="border-0 p-6 shadow-none bg-[#f5f5f5] rounded-[16px] flex-shrink-0 w-[520px] mr-6">
              <h3 className="text-[32px] font-bold mb-2" style={gradientStyle}>
                Potential Customers
              </h3>
              <p className="text-[20px] font-normal text-[#706F6D] mb-8">
                Hello, we&apos;re regularly spending in this category but have rarely or never shopped with your brand
              </p>

              <div className="flex gap-4 mb-8">
                <div>
                  <div className="text-[20px] text-[#706F6D] mb-1">Size of opportunity</div>
                  <PrimaryCalloutCardLight label="" value="$287M" valueStyle="green" />
                </div>
                <div>
                  <div className="text-[20px] text-[#706F6D] mb-1">People in opportunity</div>
                  <PrimaryCalloutCardLight label="" value="1.3M" valueStyle="gradient" />
                </div>
              </div>

              <ProfileButton />
            </Card>

            {/* Category New */}
            <Card className="border-0 p-6 shadow-none bg-[#f5f5f5] rounded-[16px] flex-shrink-0 w-[520px] mr-6">
              <h3 className="text-[32px] font-bold mb-2" style={gradientStyle}>
                Category Newcomers
              </h3>
              <p className="text-[20px] font-normal text-[#706F6D] mb-8">
                We recently started spending in this category and are forming our brand preferences.
              </p>

              <div className="flex gap-4 mb-8">
                <div>
                  <div className="text-[20px] text-[#706F6D] mb-1">Size of opportunity</div>
                  <PrimaryCalloutCardLight label="" value="$16M" valueStyle="green" />
                </div>
                <div>
                  <div className="text-[20px] text-[#706F6D] mb-1">People in opportunity</div>
                  <PrimaryCalloutCardLight label="" value="24K" valueStyle="gradient" />
                </div>
              </div>

              <ProfileButton />
            </Card>
          </div>
        </div>
      </section>

      {/* Create Profile Section */}
      <section className="mb-16">
        <h2 className="text-xl font-medium text-[#706F6D] mb-6">Create your own profile</h2>

        <Card className="border border-[#D3D2D2] p-8 shadow-none rounded-[16px]">
          <div className="relative">
            <div className="flex flex-col items-center text-center">
              <h3 className="text-[40px] font-bold mb-2" style={gradientStyle}>
                Profile creator
              </h3>
              <p className="text-[20px] font-normal text-[#706F6D] max-w-[640px]">
                Select from parameters to create a profile unique to your needs
              </p>
            </div>
            <Info className="absolute top-0 right-0 h-5 w-5 text-[#706F6D]" />
          </div>

          <div className="flex justify-center mt-10">
            <Button
              className="bg-[#ffcc00] text-black hover:bg-[#ffcc00]/90 px-8 rounded-full font-light text-sm h-12"
              style={{ fontSize: "14px", fontWeight: 300 }}
            >
              Get started
            </Button>
          </div>
        </Card>
      </section>

      {/* Tabs for Private/Shared */}
      <div className="mb-6 flex justify-center">
        <SegmentedControlSmall options={["Private", "Shared"]} value={privacyValue} onValueChange={setPrivacyValue} />
      </div>

      {/* Previously Created Profiles */}
      <section>
        <h2 className="text-xl font-medium text-[#706F6D] mb-6">Previously created profiles</h2>

        {/* Carousel container with proper alignment and gradient fade */}
        <div className="relative overflow-hidden carousel-fade-edge">
          <div
            ref={previousProfilesScroll.ref}
            className="flex overflow-x-auto scrollbar-mac pb-6 cursor-grab"
            style={{
              paddingRight: "100vw", // Extend far to the right
              marginRight: "-100vw", // Negative margin to hide the boundary
            }}
          >
            {/* Young Family Customers */}
            <Card className="border-0 p-6 shadow-none bg-[#f5f5f5] rounded-[16px] flex-shrink-0 w-[520px] mr-6">
              <h3 className="text-[32px] font-bold mb-2" style={gradientStyle}>
                Young Family Customers
              </h3>
              <p className="text-[20px] font-normal text-[#706F6D] mb-8">
                Hello, we have a kid under 12 and eat at quick service restaurants
              </p>

              <div className="flex gap-4 mb-8">
                <div>
                  <div className="text-[20px] text-[#706F6D] mb-1">Size of opportunity</div>
                  <PrimaryCalloutCardLight label="" value="$1.9M" valueStyle="green" />
                </div>
                <div>
                  <div className="text-[20px] text-[#706F6D] mb-1">People in opportunity</div>
                  <PrimaryCalloutCardLight label="" value="51K" valueStyle="gradient" />
                </div>
              </div>

              <ProfileButton />
            </Card>

            {/* Quick Service Customers */}
            <Card className="border-0 p-6 shadow-none bg-[#f5f5f5] rounded-[16px] flex-shrink-0 w-[520px] mr-6">
              <h3 className="text-[32px] font-bold mb-2" style={gradientStyle}>
                Quick Service Customers
              </h3>
              <p className="text-[20px] font-normal text-[#706F6D] mb-8">
                Hello, we grab food at quick service restaurants in Newtown NSW
              </p>

              <div className="flex gap-4 mb-8">
                <div>
                  <div className="text-[20px] text-[#706F6D] mb-1">Size of opportunity</div>
                  <PrimaryCalloutCardLight label="" value="$652K" valueStyle="green" />
                </div>
                <div>
                  <div className="text-[20px] text-[#706F6D] mb-1">People in opportunity</div>
                  <PrimaryCalloutCardLight label="" value="12K" valueStyle="gradient" />
                </div>
              </div>

              <ProfileButton />
            </Card>

            {/* Online Value Customers Card */}
            <Card className="border-0 p-6 shadow-none bg-[#f5f5f5] rounded-[16px] flex-shrink-0 w-[520px] mr-6">
              <h3 className="text-[32px] font-bold mb-2" style={gradientStyle}>
                Online Value Customers
              </h3>
              <p className="text-[20px] font-normal text-[#706F6D] mb-8">
                Hello, we are always looking for value and deals
              </p>

              <div className="flex gap-4 mb-8">
                <div>
                  <div className="text-[20px] text-[#706F6D] mb-1">Size of opportunity</div>
                  <PrimaryCalloutCardLight label="" value="$3.1M" valueStyle="green" />
                </div>
                <div>
                  <div className="text-[20px] text-[#706F6D] mb-1">People in opportunity</div>
                  <PrimaryCalloutCardLight label="" value="75K" valueStyle="gradient" />
                </div>
              </div>

              <ProfileButton />
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

// Gradient style for headings as an object
const gradientStyle = {
  background: "linear-gradient(to bottom, #7A7871, #4D4C44)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
}

