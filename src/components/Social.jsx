import { ArrowUpRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { site } from '../data/site.js';
import Reveal from './Reveal.jsx';

const cards = [
  {
    id: 'github',
    icon: Github,
    label: 'GitHub',
    value: site.github,
    body: 'Apex classes, LWC components and full-stack side projects.',
    href: site.github,
  },
  {
    id: 'linkedin',
    icon: Linkedin,
    label: 'LinkedIn',
    value: site.linkedin,
    body: 'Career updates, Salesforce learning notes and certifications.',
    href: site.linkedin,
  },
  {
    id: 'resume',
    icon: Download,
    label: 'Resume',
    value: 'resume.pdf',
    body: 'One-page PDF with experience, projects and the full skill set.',
    href: site.resume,
    download: true,
  },
];

export default function Social() {
  return (
    <section id="links" className="section !py-16">
      <div className="container-page">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <Reveal key={card.id} delay={i * 80} className="h-full">
              <a
                href={card.href}
                download={card.download || undefined}
                target={card.download ? undefined : '_blank'}
                rel={card.download ? undefined : 'noreferrer noopener'}
                className="card card-hover group flex h-full flex-col p-6"
                title={`Open ${card.label}`}
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/[0.04] ring-1 ring-white/10 transition group-hover:bg-sf-500/15 group-hover:ring-sf-400/35">
                    <card.icon className="h-5 w-5 text-slate-200" aria-hidden="true" />
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 text-slate-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sf-200"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-5 text-[15px] font-semibold text-white">{card.label}</h3>
                <p className="mt-1 truncate font-mono text-xs text-sf-200/70">{card.value}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{card.body}</p>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-sf-400/20 bg-gradient-to-r from-sf-500/[0.12] via-sf-500/[0.06] to-transparent p-6 sm:p-7">
            <div>
              <h3 className="text-lg font-semibold text-white">Need a Salesforce Developer on your team?</h3>
              <p className="mt-1.5 text-sm text-slate-400">
                Available for Salesforce development, CRM implementation and Agentforce builds.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={site.resume} download className="btn-ghost">
                <Download className="h-4 w-4" aria-hidden="true" />
                Download Resume
              </a>
              <a href="#contact" className="btn-primary">
                <Mail className="h-4 w-4" aria-hidden="true" />
                Contact Me
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
