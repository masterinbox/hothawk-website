export function Sparkline({
  points,
  className = "",
}: {
  points: number[];
  className?: string;
}) {
  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = Math.max(1, max - min);
  const width = 120;
  const height = 32;
  const step = width / Math.max(1, points.length - 1);
  const d = points
    .map((p, i) => {
      const x = i * step;
      const y = height - ((p - min) / range) * height;
      return `${i === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className={className} fill="none" aria-hidden>
      <path d={d} stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

