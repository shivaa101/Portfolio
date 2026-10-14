import { useMemo, useState } from 'react';
import {
  Bot,
  CheckCircle2,
  ExternalLink,
  Github,
  GraduationCap,
  Layers,
  ShoppingBag,
  Sprout,
} from 'lucide-react';
import { projectFilters, projects } from '../data/projects.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

const iconMap = { GraduationCap, Sprout, ShoppingBag, Bot, Layers };

function ProjectCard({ project }) {
  const Icon = iconMap[project.icon] ?? Layers;
  const hasDemo = Boolean(project.links?.demo);
  const hasGithub = Boolean(project.links?.github);

  return (
    <article className="card card-hover group relative flex h-full flex-col overflow-hidden">
      {/* Accent header */}
      <div className={`relative h-28 bg-gradient-to-br ${project.accent}`}>
        <div className="absolute inset-0 grid-bg opacity-40" aria-hidden="true" />
        <div className="absolute inset-x-6 bottom-0 flex translate-y-1/2 items-end justify-between">
          <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-ink-850/90 backdrop-blur-xl transition duration-500 group-hover:border-sf-400/50 group-hover:shadow-glow">
            <Icon className="h-6 w-6 text-sf-200" aria-hidden="true" />
          </span>
          <div className="mb-1 flex flex-wrap justify-end gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-ink-950/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-slate-300 backdrop-blur"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 pt-10">
        <h3 className="text-lg font-semibold leading-snug text-white transition group-hover:text-sf-100">
          {project.title}
        </h3>
        <p className="mt-1.5 text-sm font-medium text-sf-200/80">{project.tagline}</p>
        <p className="mt-4 text-sm leading-relaxed text-slate-400">{project.description}</p>

        {/* Technologies */}
        <div className="mt-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">Technologies</p>
          <ul className="mt-2.5 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li key={tech}>
                <span className="badge">{tech}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Objects / components */}
        {project.objects?.length > 0 && (
          <div className="mt-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
              Salesforce objects
            </p>
            <ul className="mt-2.5 flex flex-wrap gap-1.5">
              {project.objects.map((obj) => (
                <li
                  key={obj}
                  className="rounded-md border border-sf-400/20 bg-sf-500/[0.08] px-2 py-1 font-mono text-[11px] text-sf-100/90"
                >
                  {obj}
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.components?.length > 0 && (
          <div className="mt-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">Components</p>
            <ul className="mt-2.5 flex flex-wrap gap-1.5">
              {project.components.map((c) => (
                <li
                  key={c}
                  className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 font-mono text-[11px] text-slate-300"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Key features */}
        <div className="mt-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">Key features</p>
          <ul className="mt-3 space-y-2">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-400">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sf-400/80" aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Business logic table */}
        {project.logic && (
          <div className="mt-6 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-sf-200/80">
              {project.logic.title}
            </p>
            <dl className="mt-3 space-y-2">
              {project.logic.rows.map((row) => (
                <div key={row.condition} className="flex items-center justify-between gap-4 text-sm">
                  <dt className="font-mono text-xs text-slate-400">{row.condition}</dt>
                  <dd className="text-right text-xs font-semibold text-sf-100">{row.result}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}

        {/* Impact */}
        {project.impact?.length > 0 && (
          <ul className="mt-5 space-y-1.5">
            {project.impact.map((line) => (
              <li key={line} className="text-xs italic text-slate-500">
                — {line}
              </li>
            ))}
          </ul>
        )}

        {/* Actions */}
        <div className="mt-7 flex flex-wrap items-center gap-3 pt-1">
          <a
            href={hasGithub ? project.links.github : undefined}
            target={hasGithub ? '_blank' : undefined}
            rel={hasGithub ? 'noreferrer noopener' : undefined}
            aria-disabled={!hasGithub}
            title={hasGithub ? 'View source on GitHub' : 'Repository link coming soon'}
            className={[
              'btn-ghost px-4 py-2.5 text-xs',
              hasGithub ? '' : 'pointer-events-none opacity-50',
            ].join(' ')}
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            GitHub
          </a>
          <a
            href={hasDemo ? project.links.demo : undefined}
            target={hasDemo ? '_blank' : undefined}
            rel={hasDemo ? 'noreferrer noopener' : undefined}
            aria-disabled={!hasDemo}
            title={hasDemo ? 'Open the live demo' : 'Live demo available on request'}
            className={[
              'btn-quiet px-4 py-2.5 text-xs',
              hasDemo ? '' : 'pointer-events-none opacity-50',
            ].join(' ')}
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            Live Demo
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.tags.includes(filter))),
    [filter],
  );

  return (
    <section id="projects" className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Projects"
          title="CRM solutions, built and shipped end to end."
          description="Each project below covers the data model, the automation and the security that made it work in a real org."
        />

        {/* Filters */}
        <Reveal delay={80}>
          <div
            role="tablist"
            aria-label="Filter projects by technology"
            className="mt-10 flex flex-wrap gap-2"
          >
            {projectFilters.map((f) => {
              const isActive = filter === f;
              const count = f === 'All' ? projects.length : projects.filter((p) => p.tags.includes(f)).length;
              return (
                <button
                  key={f}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setFilter(f)}
                  className={[
                    'inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition duration-300',
                    isActive
                      ? 'border-sf-400/60 bg-sf-500/15 text-white shadow-glow'
                      : 'border-white/10 bg-white/[0.03] text-slate-400 hover:border-sf-400/35 hover:text-white',
                  ].join(' ')}
                >
                  {f}
                  <span className="font-mono text-[10px] text-slate-500">{count}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Grid */}
        <div className="mt-10 grid items-start gap-6 lg:grid-cols-2">
          {visible.map((project, i) => (
            <Reveal key={project.id} delay={(i % 2) * 90} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="mt-10 text-sm text-slate-500">No projects match this filter yet.</p>
        )}
      </div>
    </section>
  );
}
