import { inter } from "@/lib/fonts"

interface CalloutCardProps {
  label: string
  value: string
  valueStyle?: "green" | "gradient"
}

export default function PrimaryCalloutCardLight({ label, value, valueStyle = "green" }: CalloutCardProps) {
  return (
    <div className={`${inter.className} bg-[#fafafa] rounded-xl py-4 px-6 w-auto inline-block h-auto`}>
      <div className="flex flex-col">
        <span className="text-base text-[#706f6d] font-medium mb-[0.375rem]" style={{ lineHeight: "1.25rem" }}>
          {label}
        </span>
        {valueStyle === "green" ? (
          <span
            className="text-[3.5rem] font-bold text-[#1a7d1a] whitespace-nowrap"
            style={{ lineHeight: "4.3125rem" }}
          >
            {value}
          </span>
        ) : (
          <span
            className="text-[3.5rem] font-bold whitespace-nowrap"
            style={{
              lineHeight: "4.3125rem",
              background: "linear-gradient(to bottom, #7A7871, #4D4C44)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {value}
          </span>
        )}
      </div>
    </div>
  )
}

