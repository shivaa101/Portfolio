import { useEffect, useState } from 'react';
import { Cloud, Download, Menu, X } from 'lucide-react';
import { navLinks, site } from '../data/site.js';
import { useActiveSection } from '../hooks/useActiveSection.js';
import { useScrollProgress } from '../hooks/useScrollProgress.js';

const sectionIds = navLinks.map((l) => l.id);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { y, progress } = useScrollProgress();
  const active = useActiveSection(sectionIds);
  const stuck = y > 24;

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        stuck ? 'border-b border-white/[0.07] bg-ink-950/80 backdrop-blur-xl' : 'border-b border-transparent',
      ].join(' ')}
    >
      <div
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-sf-400 via-cyan-300 to-transparent transition-transform duration-200"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />

      <nav aria-label="Primary" className="container-page">
        <div className={['flex items-center justify-between transition-all duration-500', stuck ? 'h-16' : 'h-20'].join(' ')}>
          <a href="#home" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-sf-400 to-sf-600 shadow-[0_10px_30px_-10px_rgba(1,118,211,0.9)]">
              <Cloud className="h-[18px] w-[18px] text-white" aria-hidden="true" />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold tracking-tight text-white">{site.name}</span>
              <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-sf-300/80">
                {site.role}
              </span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = active === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={[
                      'relative rounded-lg px-4 py-2 text-sm font-medium transition',
                      isActive ? 'text-white' : 'text-slate-400 hover:text-white',
                    ].join(' ')}
                  >
                    {link.label}
                    <span
                      className={[
                        'absolute inset-x-3 -bottom-0.5 h-px origin-center bg-gradient-to-r from-transparent via-sf-300 to-transparent transition-transform duration-300',
                        isActive ? 'scale-x-100' : 'scale-x-0',
                      ].join(' ')}
                      aria-hidden="true"
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={site.resume}
              download
              className="btn-ghost px-4 py-2.5"
              title="Download resume (PDF)"
              aria-label="Download resume as PDF"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Resume
            </a>
            <a href="#contact" className="btn-primary px-4 py-2.5">
              Let&apos;s talk
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-200 transition hover:text-white lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={[
          'lg:hidden overflow-hidden border-t border-white/[0.06] bg-ink-950/95 backdrop-blur-xl transition-[max-height,opacity] duration-500',
          open ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0',
        ].join(' ')}
      >
        <ul className="container-page space-y-1 py-5">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className={[
                  'block rounded-xl px-4 py-3 text-base font-medium transition',
                  active === link.id ? 'bg-sf-500/[0.12] text-white' : 'text-slate-300 hover:bg-white/[0.05] hover:text-white',
                ].join(' ')}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="grid grid-cols-2 gap-3 pt-3">
            <a href={site.resume} download className="btn-ghost" onClick={() => setOpen(false)}>
              <Download className="h-4 w-4" aria-hidden="true" />
              Resume
            </a>
            <a href="#contact" className="btn-primary" onClick={() => setOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
