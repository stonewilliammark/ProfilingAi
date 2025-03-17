import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="mx-auto pt-16 pb-16" style={{ maxWidth: "1190px" }}>
      {/* Cover Image Container */}
      <div className="w-full px-8">
        <div className="relative w-full h-auto">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cover-8gtkc5Dpj0afR9lMfjOgevpPh4SEko.svg"
            alt="CommBank iQ Cover"
            width={1190}
            height={400}
            priority
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Explore Section */}
      <div className="px-8 mt-10">
        <h2 className="text-2xl font-normal mb-6">Explore</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {/* Profiling Card */}
          <div className="border rounded-lg p-6 flex flex-col justify-between min-h-[250px]">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-[#FFEFB0] p-2 rounded-full mr-3">
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask
                      id="mask0_968_22899"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="25"
                    >
                      <rect y="0.5" width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_968_22899)">
                      <path
                        d="M0 18.5V16.925C0 16.2083 0.366667 15.625 1.1 15.175C1.83333 14.725 2.8 14.5 4 14.5C4.21667 14.5 4.425 14.5042 4.625 14.5125C4.825 14.5208 5.01667 14.5417 5.2 14.575C4.96667 14.925 4.79167 15.2917 4.675 15.675C4.55833 16.0583 4.5 16.4583 4.5 16.875V18.5H0ZM6 18.5V16.875C6 16.3417 6.14583 15.8542 6.4375 15.4125C6.72917 14.9708 7.14167 14.5833 7.675 14.25C8.20833 13.9167 8.84583 13.6667 9.5875 13.5C10.3292 13.3333 11.1333 13.25 12 13.25C12.8833 13.25 13.6958 13.3333 14.4375 13.5C15.1792 13.6667 15.8167 13.9167 16.35 14.25C16.8833 14.5833 17.2917 14.9708 17.575 15.4125C17.8583 15.8542 18 16.3417 18 16.875V18.5H6ZM19.5 18.5V16.875C19.5 16.4417 19.4458 16.0333 19.3375 15.65C19.2292 15.2667 19.0667 14.9083 18.85 14.575C19.0333 14.5417 19.2208 14.5208 19.4125 14.5125C19.6042 14.5042 19.8 14.5 20 14.5C21.2 14.5 22.1667 14.7208 22.9 15.1625C23.6333 15.6042 24 16.1917 24 16.925V18.5H19.5ZM4 13.5C3.45 13.5 2.97917 13.3042 2.5875 12.9125C2.19583 12.5208 2 12.05 2 11.5C2 10.9333 2.19583 10.4583 2.5875 10.075C2.97917 9.69167 3.45 9.5 4 9.5C4.56667 9.5 5.04167 9.69167 5.425 10.075C5.80833 10.4583 6 10.9333 6 11.5C6 12.05 5.80833 12.5208 5.425 12.9125C5.04167 13.3042 4.56667 13.5 4 13.5ZM20 13.5C19.45 13.5 18.9792 13.3042 18.5875 12.9125C18.1958 12.5208 18 12.05 18 11.5C18 10.9333 18.1958 10.4583 18.5875 10.075C18.9792 9.69167 19.45 9.5 20 9.5C20.5667 9.5 21.0417 9.69167 21.425 10.075C21.8083 10.4583 22 10.9333 22 11.5C22 12.05 21.8083 12.5208 21.425 12.9125C21.0417 13.3042 20.5667 13.5 20 13.5ZM12 12.5C11.1667 12.5 10.4583 12.2083 9.875 11.625C9.29167 11.0417 9 10.3333 9 9.5C9 8.65 9.29167 7.9375 9.875 7.3625C10.4583 6.7875 11.1667 6.5 12 6.5C12.85 6.5 13.5625 6.7875 14.1375 7.3625C14.7125 7.9375 15 8.65 15 9.5C15 10.3333 14.7125 11.0417 14.1375 11.625C13.5625 12.2083 12.85 12.5 12 12.5Z"
                        fill="#8C7001"
                      />
                    </g>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Profiling</h3>
              </div>
              <p className="text-[#706F6D] font-normal">
                Gain deep insights into your customers' behaviors and preferences.
              </p>
            </div>
            <div className="mt-4">
              <Link href="/profiling" className="text-black underline hover:text-black/80 font-normal">
                View profiling
              </Link>
            </div>
          </div>

          {/* Insight Stories Card */}
          <div className="border rounded-lg p-6 flex flex-col justify-between min-h-[250px]">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-[#FFEFB0] p-2 rounded-full mr-3">
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask
                      id="mask0_968_22815"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="25"
                    >
                      <rect y="0.5" width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_968_22815)">
                      <path d="M7 20.5V4.5H17V20.5H7ZM3 18.5V6.5H5V18.5H3ZM19 18.5V6.5H21V18.5H19Z" fill="#8C7001" />
                    </g>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Insight stories</h3>
              </div>
              <p className="text-[#706F6D] font-normal">
                Uncover the 'so what' out of your data to gain more actionable insight.
              </p>
            </div>
            <div className="mt-4">
              <Link href="#" className="text-black underline hover:text-black/80 font-normal">
                View whats changed?
              </Link>
            </div>
          </div>

          {/* Downloads Card */}
          <div className="border rounded-lg p-6 flex flex-col justify-between min-h-[250px]">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-[#FFEFB0] p-2 rounded-full mr-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16ZM6 20C5.45 20 4.97917 19.8042 4.5875 19.4125C4.19583 19.0208 4 18.55 4 18V15H6V18H18V15H20V18C20 18.55 19.8042 19.0208 19.4125 19.4125C19.0208 19.8042 18.55 20 18 20H6Z"
                      fill="#8C7001"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Downloads</h3>
              </div>
              <p className="text-[#706F6D] font-normal mb-3">Updated monthly, access downloadable;</p>
              <ul className="list-disc pl-5 text-[#706F6D] font-normal">
                <li>Data</li>
                <li>Analysis excels</li>
              </ul>
            </div>
            <div className="mt-4">
              <Link href="/downloads" className="text-black underline hover:text-black/80 font-normal">
                View downloads
              </Link>
            </div>
          </div>
        </div>

        {/* Gain Additional Insight Section */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-normal">Gain additional insight</h2>
          <Link href="#" className="text-black underline hover:text-black/80 font-normal">
            Shop all insights
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Household Spending Index Card */}
          <div className="border rounded-lg p-6 flex flex-col justify-between min-h-[300px]">
            <div>
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">Household</h3>
                <h3 className="text-xl font-semibold">spending index</h3>
              </div>
              <p className="text-[#706F6D] font-normal">
                Monitor and analyze household spending patterns. Make informed financial decisions with our
                comprehensive spending index.
              </p>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <button className="bg-[#ffcc00] text-black px-8 rounded-full font-normal text-sm h-12 hover:bg-[#ffcc00]/90">
                Subscribe
              </button>
              <Link href="#" className="text-black underline hover:text-black/80 font-normal">
                Household spend details
              </Link>
            </div>
          </div>

          {/* Performance Dashboard Card */}
          <div className="border rounded-lg p-6 flex flex-col justify-between min-h-[300px]">
            <div>
              <div className="mb-4">
                <h3 className="text-xl font-semibold">Performance dashboard</h3>
              </div>
              <p className="text-[#706F6D] font-normal">
                Gain insight into how your region is performing on key metrics at a glance. See what industries are
                increasing or decreasing the most in your region.
              </p>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <button className="bg-[#ffcc00] text-black px-8 rounded-full font-normal text-sm h-12 hover:bg-[#ffcc00]/90">
                Buy
              </button>
              <Link href="/region-snapshot" className="text-black underline hover:text-black/80 font-normal">
                Performance dashboard details
              </Link>
            </div>
          </div>

          {/* Event Reports Card */}
          <div className="border rounded-lg p-6 flex flex-col justify-between min-h-[300px]">
            <div>
              <div className="mb-4">
                <h3 className="text-xl font-semibold">Event reports</h3>
              </div>
              <p className="text-[#706F6D] font-normal">
                Track and analyze event performance with our detailed reports. Measure engagement, evaluate success, and
                improve future events with actionable insights.
              </p>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <button className="bg-[#ffcc00] text-black px-8 rounded-full font-normal text-sm h-12 hover:bg-[#ffcc00]/90">
                Buy
              </button>
              <Link href="#" className="text-black underline hover:text-black/80 font-normal">
                Event reports details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

