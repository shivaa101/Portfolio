import { Award, BarChart3, BrainCircuit, ShieldCheck } from 'lucide-react';
import { certifications } from '../data/experience.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

const iconMap = { BrainCircuit, BarChart3, ShieldCheck, Award };

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Certifications"
          title="Validated skills across cloud, data and security."
          description="Salesforce certifications are in progress and will be added to this list as they land."
          align="center"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => {
            const Icon = iconMap[cert.icon] ?? Award;
            return (
              <Reveal key={cert.id} delay={i * 80} className="h-full">
                <article className="card card-hover group flex h-full flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-sf-500/25 to-transparent ring-1 ring-sf-400/25">
                      <Icon className="h-5 w-5 text-sf-200" aria-hidden="true" />
                    </span>
                    {cert.year && (
                      <span className="font-mono text-[11px] text-slate-500">{cert.year}</span>
                    )}
                  </div>

                  <h3 className="mt-5 text-[15px] font-semibold leading-snug text-white">{cert.title}</h3>
                  <p className="mt-1.5 text-sm text-slate-400">{cert.issuer}</p>

                  <ul className="mt-5 flex flex-wrap gap-2 pt-1">
                    {cert.tags.map((tag) => (
                      <li key={tag}>
                        <span className="badge">{tag}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}

          {/* Placeholder card — duplicate an entry in data/experience.js to add more */}
          <Reveal delay={certifications.length * 80} className="h-full">
            <article className="flex h-full min-h-[13rem] flex-col items-center justify-center rounded-2xl border border-dashed border-white/[0.09] bg-white/[0.015] p-6 text-center">
              <Award className="h-5 w-5 text-slate-600" aria-hidden="true" />
              <p className="mt-3 text-sm font-medium text-slate-400">Salesforce certifications</p>
              <p className="mt-1 text-xs text-slate-600">
                Platform Developer I &amp; Administrator — in progress
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
