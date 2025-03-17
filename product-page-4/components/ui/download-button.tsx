"use client"

import { useState } from "react"

export default function DownloadButton() {
  const [isOpen, setIsOpen] = useState(false)

  const handleDownload = (type: "pdf" | "ppt") => {
    // Add your download logic here
    console.log(`Downloading ${type} file`)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-[#1e1e1e] hover:opacity-80 transition-opacity font-inter"
      >
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask
            id="mask0_748_10343"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="25"
            height="25"
          >
            <rect x="0.82959" y="0.520996" width="24" height="24" fill="#1e1e1e" />
          </mask>
          <g mask="url(#mask0_748_10343)">
            <path
              d="M12.8296 16.3094L8.56039 12.0402L9.61421 10.9556L12.0796 13.421V5.021H13.5795V13.421L16.0449 10.9556L17.0987 12.0402L12.8296 16.3094ZM7.13729 20.0209C6.63216 20.0209 6.20459 19.8459 5.85459 19.4959C5.50459 19.1459 5.32959 18.7184 5.32959 18.2132V15.5017H6.82956V18.2132C6.82956 18.2902 6.86161 18.3607 6.92571 18.4248C6.98983 18.4889 7.06036 18.521 7.13729 18.521H18.5218C18.5988 18.521 18.6693 18.4889 18.7334 18.4248C18.7975 18.3607 18.8296 18.2902 18.8296 18.2132V15.5017H20.3295V18.2132C20.3295 18.7184 20.1545 19.1459 19.8045 19.4959C19.4545 19.8459 19.027 20.0209 18.5218 20.0209H7.13729Z"
              fill="#1e1e1e"
            />
          </g>
        </svg>
        <span className="text-base font-normal">Download</span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-white rounded-md shadow-lg border border-gray-200 py-1 min-w-[160px]">
          <button
            onClick={() => handleDownload("pdf")}
            className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 font-inter"
          >
            Download PDF
          </button>
          <button
            onClick={() => handleDownload("ppt")}
            className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 font-inter"
          >
            Download PowerPoint
          </button>
        </div>
      )}
    </div>
  )
}

