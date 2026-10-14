import { ArrowRight, Cloud, Download, Mail, MapPin, Sparkles, Terminal } from 'lucide-react';
import { site } from '../data/site.js';
import Reveal from './Reveal.jsx';
import HeroVisual from './HeroVisual.jsx';

const marquee = [
  'Apex',
  'Lightning Web Components',
  'SOQL',
  'SOSL',
  'Salesforce Flows',
  'Agentforce',
  'REST Integrations',
  'Data Modeling',
  'Salesforce Admin',
];

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 sm:pt-36 lg:pt-40">
      <div className="container-page">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* Copy */}
          <div className="min-w-0">
            <Reveal>
              <p className="eyebrow">
                <span className="relative flex h-1.5 w-1.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 animate-pulse-ring" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                {site.available}
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 text-[2rem] font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl sm:leading-[1.08] lg:text-[3.6rem]">
                Salesforce Developer <br className="hidden sm:block" />
                <span className="gradient-text">Building Scalable</span>{' '}
                <span className="relative inline-block">
                  CRM Solutions
                  <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-sf-400 via-cyan-300 to-transparent" />
                </span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
                {site.hero.supporting}
              </p>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#projects" className="btn-primary group">
                  View Projects
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </a>
                <a href={site.resume} download className="btn-ghost group" aria-label="Download resume as PDF">
                  <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
                  Download Resume
                </a>
                <a href="#contact" className="btn-quiet group">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Contact Me
                </a>
              </div>
            </Reveal>

            <Reveal delay={280}>
              <dl className="mt-12 grid max-w-xl grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
                {site.stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="sr-only">{stat.label}</dt>
                    <dd>
                      <span className="block text-2xl font-bold text-white sm:text-[1.75rem]">{stat.value}</span>
                      <span className="mt-1 block text-[11px] uppercase tracking-[0.14em] text-slate-500">
                        {stat.label}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={320}>
              <p className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
                <span className="inline-flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-sf-300" aria-hidden="true" />
                  {site.position}
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-sf-300" aria-hidden="true" />
                  {site.location}
                </span>
              </p>
            </Reveal>
          </div>

          {/* Visual */}
          <Reveal delay={180} className="relative min-w-0">
            <HeroVisual />
          </Reveal>
        </div>
      </div>

      {/* Tech marquee */}
      <Reveal delay={360} className="mt-20 sm:mt-24">
        <div className="relative border-y border-white/[0.06] bg-white/[0.015] py-5">
          <div className="mask-fade-x overflow-hidden">
            <div className="flex w-max animate-marquee items-center gap-10 pr-10">
              {[...marquee, ...marquee].map((item, i) => (
                <span
                  key={`${item}-${i}`}
                  className="inline-flex shrink-0 items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-slate-500"
                >
                  {i % 3 === 0 ? (
                    <Cloud className="h-3.5 w-3.5 text-sf-400/80" aria-hidden="true" />
                  ) : (
                    <Sparkles className="h-3.5 w-3.5 text-sf-400/60" aria-hidden="true" />
                  )}
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
