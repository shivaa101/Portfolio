import { useEffect, useState } from 'react';

/** Returns page scroll offset in px and progress 0–1, used by the navbar. */
export function useScrollProgress() {
  const [state, setState] = useState({ y: 0, progress: 0 });

  useEffect(() => {
    const handler = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setState({ y: window.scrollY, progress: max > 0 ? window.scrollY / max : 0 });
    };
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    window.addEventListener('resize', handler);
    return () => {
      window.removeEventListener('scroll', handler);
      window.removeEventListener('resize', handler);
    };
  }, []);

  return state;
}
