import { ArrowUp } from 'lucide-react';
import { useScrollProgress } from '../hooks/useScrollProgress.js';

export default function ScrollToTop() {
  const { y } = useScrollProgress();
  const show = y > 600;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll back to top"
      title="Back to top"
      className={[
        'group fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-ink-850/90 text-slate-200 backdrop-blur-xl transition-all duration-300 hover:border-sf-400/60 hover:text-white hover:shadow-glow',
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0',
      ].join(' ')}
    >
      <ArrowUp className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" aria-hidden="true" />
    </button>
  );
}
