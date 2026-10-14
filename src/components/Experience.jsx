import { Briefcase, Building2, CalendarDays } from 'lucide-react';
import { experience } from '../data/experience.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Experience"
          title="Salesforce development, from traineeship to production delivery."
          description="Hands-on CRM work: Apex, LWC, Flows, Agentforce, administration, debugging and deployment."
        />

        <ol className="relative mt-14 space-y-8 border-l border-white/[0.08] pl-6 sm:pl-10">
          {/* Animated timeline gradient */}
          <span
            aria-hidden="true"
            className="absolute -left-px top-0 h-full w-px bg-gradient-to-b from-sf-400/80 via-sf-500/25 to-transparent"
          />

          {experience.map((job, i) => (
            <li key={job.id} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[calc(1.5rem+7px)] top-7 grid h-3.5 w-3.5 place-items-center sm:-left-[calc(2.5rem+7px)]"
              >
                <span className="absolute h-3.5 w-3.5 rounded-full bg-sf-400/25 animate-pulse-ring" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-sf-400 ring-4 ring-ink-950" />
              </span>

              <Reveal delay={i * 90}>
                <article className="card card-hover p-6 sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white sm:text-xl">{job.role}</h3>
                      <p className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-400">
                        <span className="inline-flex items-center gap-2">
                          <Building2 className="h-4 w-4 text-sf-300" aria-hidden="true" />
                          {job.company}
                        </span>
                        <span className="inline-flex items-center gap-2">
                          <CalendarDays className="h-4 w-4 text-sf-300" aria-hidden="true" />
                          {job.period}
                        </span>
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-sf-400/25 bg-sf-500/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-sf-200">
                      <Briefcase className="h-3 w-3" aria-hidden="true" />
                      {job.type}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-slate-400">{job.summary}</p>

                  <ul className="mt-5 space-y-2.5">
                    {job.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-sm text-slate-400">
                        <span
                          className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-sf-400/80"
                          aria-hidden="true"
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {job.stack.map((tech) => (
                      <li key={tech}>
                        <span className="badge">{tech}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
