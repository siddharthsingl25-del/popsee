// Infinite scrolling marquee strip — a sleek brand accent.
export default function Marquee({ items, className = '' }) {
  const row = [...items, ...items]
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
        {row.map((text, i) => (
          <span key={i} className="flex items-center gap-12 text-sm font-medium">
            {text}
            <Dot />
          </span>
        ))}
      </div>
    </div>
  )
}

function Dot() {
  return <span className="inline-block h-1.5 w-1.5 rounded-full bg-current opacity-50" />
}
