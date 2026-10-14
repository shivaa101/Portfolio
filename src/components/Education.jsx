import { GraduationCap, MapPin } from 'lucide-react';
import { education } from '../data/experience.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

const coursework = [
  'Data Structures & Algorithms',
  'DBMS',
  'Operating Systems',
  'Computer Networks',
  'OOP',
  'Software Engineering',
  'Web Technologies',
  'Cloud Computing',
];

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Education"
          title="Computer science fundamentals behind the platform work."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          {education.map((edu, i) => (
            <Reveal key={edu.id} delay={i * 80}>
              <article className="card card-hover h-full p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-sf-500/25 to-transparent ring-1 ring-sf-400/25">
                    <GraduationCap className="h-6 w-6 text-sf-200" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white sm:text-xl">{edu.degree}</h3>
                    <p className="mt-1.5 inline-flex items-center gap-2 text-sm text-slate-400">
                      <MapPin className="h-4 w-4 text-sf-300" aria-hidden="true" />
                      {edu.institution}
                    </p>
                    {edu.period && <p className="mt-1 font-mono text-xs text-slate-500">{edu.period}</p>}
                  </div>
                </div>

                <ul className="mt-6 space-y-2.5">
                  {edu.details.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-sm text-slate-400">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-sf-400/80" aria-hidden="true" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}

          <Reveal delay={120}>
            <article className="card h-full p-6 sm:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-sf-200/80">
                Relevant coursework
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {coursework.map((c) => (
                  <li key={c}>
                    <span className="badge">{c}</span>
                  </li>
                ))}
              </ul>
              <div className="hairline my-6" />
              <p className="text-sm leading-relaxed text-slate-400">
                These fundamentals map directly to platform work: relational modeling to Salesforce objects and
                relationships, OOP to Apex classes and triggers, and networking to REST API integrations.
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
