import { Blocks, Bot, Braces, Cloud, ShieldCheck, Workflow } from 'lucide-react';
import { site } from '../data/site.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

const pillars = [
  {
    icon: Braces,
    title: 'Apex-first engineering',
    body: 'Bulkified triggers, handler patterns, async Apex and meaningful test coverage — logic that survives real data volume.',
  },
  {
    icon: Blocks,
    title: 'LWC interfaces',
    body: 'Lightning Web Components wired to Apex controllers to deliver fast, responsive, record-aware experiences.',
  },
  {
    icon: Workflow,
    title: 'Declarative automation',
    body: 'Record-triggered, screen and scheduled Flows, validation rules and approval processes that replace manual steps.',
  },
  {
    icon: Bot,
    title: 'Agentforce & AI',
    body: 'Agents with reasoning instructions and Apex invocable actions that answer CRM questions in natural language.',
  },
  {
    icon: ShieldCheck,
    title: 'Security by design',
    body: 'Profiles, permission sets, roles, sharing rules and field-level security modelled before the first record lands.',
  },
  {
    icon: Cloud,
    title: 'Integrations',
    body: 'REST API integrations and named credentials connecting Salesforce to the systems around it.',
  },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="About me"
          title="I turn business processes into Salesforce solutions people actually use."
          description={`I'm ${site.name}, an ${site.position}. I work across the full Salesforce stack — data modeling, Apex, Lightning Web Components, Flow automation, security and Agentforce — and bring a modern web development background (React, Node.js) to the interfaces I build on top of the platform.`}
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <Reveal className="space-y-5 text-[15px] leading-relaxed text-slate-400">
            <p>
              My day-to-day is CRM development: modelling objects and relationships, writing Apex that stays bulk-safe,
              building LWC components for the screens users live in, and automating the rest with Flows so teams stop
              doing it by hand.
            </p>
            <p>
              I have delivered CRM solutions across education, agriculture and retail use cases — admissions and fee
              collection with merit-based discount automation and approval routing, farm and crop operations with
              expense/revenue tracking, and a Myntra-style LWC storefront driven by Apex.
            </p>
            <p>
              Most recently I have been building with{' '}
              <span className="text-sf-200">Agentforce</span> — designing agents, subagents and reasoning instructions
              backed by Apex invocable methods so support questions like &ldquo;what&apos;s the status of my case?&rdquo;
              answer themselves.
            </p>
            <div className="hairline !mt-8" />
            <ul className="grid gap-3 pt-2 sm:grid-cols-2">
              {[
                'Salesforce Development',
                'Salesforce Administration',
                'Apex & Async Apex',
                'Lightning Web Components',
                'SOQL / SOSL',
                'Salesforce Flows',
                'Agentforce',
                'REST API / Integrations',
                'Automation',
                'Data Modeling',
                'CRM Solutions',
                'Debugging & Deployment',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-slate-300">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sf-400" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 70}>
                <article className="card card-hover group h-full p-5">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-sf-500/[0.12] ring-1 ring-sf-400/25 transition group-hover:bg-sf-500/20">
                    <p.icon className="h-5 w-5 text-sf-200" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-[15px] font-semibold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
