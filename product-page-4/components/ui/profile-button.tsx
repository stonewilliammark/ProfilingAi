export default function ProfileButton() {
  return (
    <div className="flex items-center justify-start p-4">
      <button
        className="px-8 py-3 rounded-full border-2 border-[#1E1E1E] bg-transparent text-[#1E1E1E] inline-flex items-center justify-center transition-colors hover:bg-[#1E1E1E]/5 active:bg-[#1E1E1E]/10"
        style={{
          fontSize: "14px",
          fontWeight: 300,
          lineHeight: "20px",
          height: "48px",
          fontFeatureSettings: "normal",
          fontKerning: "auto",
          fontOpticalSizing: "auto",
          fontSizeAdjust: "none",
          fontStretch: "100%",
          fontStyle: "normal",
          fontVariantAlternates: "normal",
          fontVariantCaps: "normal",
          fontVariantEastAsian: "normal",
          fontVariantLigatures: "normal",
          fontVariantNumeric: "normal",
          fontVariantPosition: "normal",
          letterSpacing: "normal",
        }}
      >
        View profile
      </button>
    </div>
  )
}

