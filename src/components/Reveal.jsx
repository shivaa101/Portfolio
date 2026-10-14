import { useReveal } from '../hooks/useReveal.js';

/**
 * Wraps children in a fade/slide-in on first scroll into view.
 */
export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const { ref, visible } = useReveal();

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={[
        'transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none',
        visible ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-6 opacity-0 blur-[2px]',
        className,
      ].join(' ')}
    >
      {children}
    </Tag>
  );
}
