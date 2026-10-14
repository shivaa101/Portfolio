import { Bot, Code2, LayoutDashboard, Search, ShieldCheck, Workflow } from 'lucide-react';
import { salesforceExpertise } from '../data/skills.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

const iconMap = { Code2, Search, LayoutDashboard, Workflow, ShieldCheck, Bot };

export default function SalesforceExpertise() {
  return (
    <section id="salesforce" className="section">
      {/* Section tint */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_0%,rgba(1,118,211,0.10),transparent_70%)]"
      />

      <div className="container-page relative">
        <SectionHeading
          eyebrow="Salesforce expertise"
          title="Depth across the platform — programmatic and declarative."
          description="The capabilities I use to design, build, secure and automate Salesforce orgs."
          align="center"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {salesforceExpertise.map((group, i) => {
            const Icon = iconMap[group.icon] ?? Code2;
            return (
              <Reveal key={group.id} delay={i * 80}>
                <article className="card card-hover group relative h-full overflow-hidden p-6">
                  <div
                    aria-hidden="true"
                    className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-sf-500/10 blur-2xl transition group-hover:bg-sf-500/20"
                  />
                  <header className="relative flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-sf-500/[0.12] ring-1 ring-sf-400/25">
                      <Icon className="h-5 w-5 text-sf-200" aria-hidden="true" />
                    </span>
                    <h3 className="text-base font-semibold text-white">{group.title}</h3>
                  </header>

                  <ul className="relative mt-5 space-y-2.5">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-slate-400">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-sf-400" aria-hidden="true" />
                        <span className="transition group-hover:text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
