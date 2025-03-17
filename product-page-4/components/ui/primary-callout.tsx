interface PrimaryCalloutProps {
  title: string
  value: string
}

export default function PrimaryCallout({ title, value }: PrimaryCalloutProps) {
  return (
    <div className="flex flex-col">
      <span className="text-xl text-[#706F6D] mb-2">{title}</span>
      <span className="text-[64px] leading-none font-bold text-[#1E1E1E]">{value}</span>
    </div>
  )
}

