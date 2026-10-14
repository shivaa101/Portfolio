import { useEffect, useState } from 'react';

/**
 * Tracks which section id is currently in the viewport, for the nav indicator.
 */
export function useActiveSection(ids, offset = 0.35) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const handler = () => {
      const line = window.innerHeight * offset;
      let current = ids[0];

      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      });

      if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 4) {
        current = ids[ids.length - 1];
      }
      setActive(current);
    };

    handler();
    window.addEventListener('scroll', handler, { passive: true });
    window.addEventListener('resize', handler);
    return () => {
      window.removeEventListener('scroll', handler);
      window.removeEventListener('resize', handler);
    };
  }, [ids, offset]);

  return active;
}
