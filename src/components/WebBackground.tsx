export default function WebBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(200,16,46,0.10),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(26,58,143,0.14),transparent_55%)]" />
      <svg
        className="absolute -top-24 -left-24 h-[520px] w-[520px] opacity-[0.09]"
        viewBox="0 0 200 200"
        fill="none"
      >
        <WebLines />
      </svg>
      <svg
        className="absolute -bottom-32 -right-20 h-[600px] w-[600px] opacity-[0.07]"
        viewBox="0 0 200 200"
        fill="none"
      >
        <WebLines />
      </svg>
    </div>
  )
}

function WebLines() {
  const rings = [20, 40, 60, 80, 100, 120, 140, 160]
  const spokes = Array.from({ length: 12 }, (_, i) => (i * 360) / 12)
  return (
    <g stroke="#e9e9f0" strokeWidth="0.6">
      {spokes.map((deg) => {
        const rad = (deg * Math.PI) / 180
        const x = 100 + 160 * Math.cos(rad)
        const y = 100 + 160 * Math.sin(rad)
        return <line key={deg} x1="100" y1="100" x2={x} y2={y} />
      })}
      {rings.map((r) => (
        <polygon
          key={r}
          points={spokes
            .map((deg) => {
              const rad = (deg * Math.PI) / 180
              return `${100 + r * Math.cos(rad)},${100 + r * Math.sin(rad)}`
            })
            .join(' ')}
          fill="none"
        />
      ))}
    </g>
  )
}
