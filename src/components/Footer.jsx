import { Cloud, Github, Linkedin, Mail } from 'lucide-react';
import { navLinks, site } from '../data/site.js';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.07] bg-ink-950/60">
      <div className="container-page py-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <a href="#home" className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-sf-400 to-sf-600">
                <Cloud className="h-[18px] w-[18px] text-white" aria-hidden="true" />
              </span>
              <span className="text-sm font-semibold text-white">{site.name}</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              {site.position} — building scalable CRM solutions with Apex, Lightning Web Components, Flows and
              Agentforce.
            </p>
          </div>

          <nav aria-label="Footer" className="lg:pr-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">Navigate</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-10 gap-y-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className="text-sm text-slate-400 transition hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">Elsewhere</p>
            <ul className="mt-4 flex items-center gap-3">
              {[
                { icon: Github, label: 'GitHub', href: site.github },
                { icon: Linkedin, label: 'LinkedIn', href: site.linkedin },
                { icon: Mail, label: 'Email', href: `mailto:${site.email}` },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={item.href.startsWith('mailto:') ? undefined : 'noreferrer noopener'}
                    title={item.label}
                    aria-label={item.label}
                    className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 transition hover:border-sf-400/50 hover:text-white"
                  >
                    <item.icon className="h-[18px] w-[18px]" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hairline my-8" />

        <div className="flex flex-col items-start justify-between gap-3 text-xs text-slate-600 sm:flex-row sm:items-center">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p className="font-mono">Built with React, Vite &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
