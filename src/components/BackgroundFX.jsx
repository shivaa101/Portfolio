/**
 * Fixed decorative background: grid, aurora glows and drifting particles.
 * Purely presentational and hidden from assistive tech.
 */
const particles = [
  { left: '8%', top: '18%', size: 3, delay: '0s', duration: '7s' },
  { left: '22%', top: '68%', size: 2, delay: '1.2s', duration: '9s' },
  { left: '38%', top: '32%', size: 2, delay: '2.4s', duration: '8s' },
  { left: '55%', top: '78%', size: 3, delay: '0.6s', duration: '10s' },
  { left: '68%', top: '22%', size: 2, delay: '1.8s', duration: '7.5s' },
  { left: '82%', top: '58%', size: 3, delay: '3s', duration: '9.5s' },
  { left: '92%', top: '34%', size: 2, delay: '2s', duration: '8.5s' },
];

export default function BackgroundFX() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-70 mask-fade-b" />
      <div className="absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-sf-500/20 blur-[130px]" />
      <div className="absolute -right-40 top-1/4 h-[30rem] w-[30rem] rounded-full bg-indigo-500/[0.12] blur-[130px]" />
      <div className="absolute bottom-0 left-1/3 h-[26rem] w-[26rem] rounded-full bg-cyan-400/10 blur-[140px]" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,rgba(1,118,211,0.16),transparent_60%)]" />

      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-sf-200/60 animate-float"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}
