import { Cloud, Database, MonitorSmartphone, Wrench } from 'lucide-react';
import { skillGroups } from '../data/skills.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

const iconMap = { Cloud, MonitorSmartphone, Database, Wrench };

const levelStyles = {
  Advanced: 'border-sf-400/40 bg-sf-500/[0.12] text-sf-100',
  Proficient: 'border-cyan-300/30 bg-cyan-400/10 text-cyan-100',
  Familiar: 'border-white/[0.12] bg-white/[0.04] text-slate-300',
};

const levelDots = { Advanced: 3, Proficient: 2, Familiar: 1 };

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Skills"
          title="A Salesforce core, with modern web engineering around it."
          description="Grouped by where they get used, with an honest depth indicator instead of arbitrary percentages."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, gi) => {
            const Icon = iconMap[group.icon] ?? Cloud;
            return (
              <Reveal key={group.id} delay={gi * 90}>
                <article className="card card-hover group h-full p-6 sm:p-7">
                  <header className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-sf-500/25 to-transparent ring-1 ring-sf-400/25">
                      <Icon className="h-5 w-5 text-sf-200" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                      <p className="mt-1 text-sm text-slate-400">{group.blurb}</p>
                    </div>
                  </header>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li key={skill.name}>
                        <span
                          title={`${skill.name} — ${skill.level}`}
                          className={[
                            'inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition duration-300 hover:-translate-y-0.5',
                            levelStyles[skill.level] ?? levelStyles.Familiar,
                          ].join(' ')}
                        >
                          {skill.name}
                          <span className="flex items-center gap-0.5" aria-hidden="true">
                            {[0, 1, 2].map((d) => (
                              <span
                                key={d}
                                className={[
                                  'h-1 w-1 rounded-full',
                                  d < (levelDots[skill.level] ?? 1) ? 'bg-current' : 'bg-current opacity-25',
                                ].join(' ')}
                              />
                            ))}
                          </span>
                          <span className="sr-only">{skill.level}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <p className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500">
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-sf-300" /> Advanced — daily, production work
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" /> Proficient — shipped features
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-400" /> Familiar — working knowledge
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
