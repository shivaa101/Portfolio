import { useState } from 'react';
import { Check, Copy, Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import { site } from '../data/site.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

const initialForm = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);

  const update = (field) => (event) => setForm((prev) => ({ ...prev, [field]: event.target.value }));

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  // No backend required: opens the visitor's mail client with the message prefilled.
  // Swap this for a fetch() to Formspree / EmailJS / your own API if you prefer.
  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || 'a visitor'}`);
    const body = encodeURIComponent(`${form.message}\n\n—\n${form.name}\n${form.email}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something on the platform."
          description="Have a Salesforce project, a role to fill, or a CRM problem worth automating? Send a message."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Details */}
          <Reveal className="h-full">
            <div className="card flex h-full flex-col p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-white">Direct channels</h3>
              <p className="mt-2 text-sm text-slate-400">
                Replace the placeholders in <code className="font-mono text-sf-200">src/data/site.js</code> with your
                real email and profile URLs.
              </p>

              <ul className="mt-7 space-y-3">
                <li className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-3.5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-sf-500/[0.12] ring-1 ring-sf-400/25">
                    <Mail className="h-[18px] w-[18px] text-sf-200" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[10px] uppercase tracking-[0.16em] text-slate-500">Email</span>
                    <a
                      href={`mailto:${site.email}`}
                      className="block truncate font-mono text-sm text-slate-200 hover:text-sf-200"
                    >
                      {site.email}
                    </a>
                  </span>
                  <button
                    type="button"
                    onClick={copyEmail}
                    title={copied ? 'Copied!' : 'Copy email address'}
                    aria-label="Copy email address to clipboard"
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-300 transition hover:border-sf-400/50 hover:text-white"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-emerald-300" aria-hidden="true" />
                    ) : (
                      <Copy className="h-4 w-4" aria-hidden="true" />
                    )}
                  </button>
                </li>

                {[
                  { icon: Github, label: 'GitHub', value: site.github, href: site.github },
                  { icon: Linkedin, label: 'LinkedIn', value: site.linkedin, href: site.linkedin },
                ].map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-3.5 transition hover:border-sf-400/40 hover:bg-white/[0.05]"
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-sf-500/[0.12] ring-1 ring-sf-400/25">
                        <item.icon className="h-[18px] w-[18px] text-sf-200" aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[10px] uppercase tracking-[0.16em] text-slate-500">
                          {item.label}
                        </span>
                        <span className="block truncate font-mono text-sm text-slate-200">{item.value}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="hairline my-7" />

              <p className="flex items-center gap-2 text-sm text-slate-400">
                <MapPin className="h-4 w-4 text-sf-300" aria-hidden="true" />
                {site.location} · open to remote
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm text-slate-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 animate-pulse-ring" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Usually replies within 24 hours
              </p>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={100} className="h-full">
            <form onSubmit={handleSubmit} className="card h-full p-6 sm:p-8" noValidate={false}>
              <h3 className="text-lg font-semibold text-white">Send a message</h3>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={update('name')}
                    placeholder="Jane Doe"
                    className="mt-2 w-full rounded-xl border border-white/[0.09] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-600 transition focus:border-sf-400/60 focus:bg-white/[0.05]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={update('email')}
                    placeholder="jane@company.com"
                    className="mt-2 w-full rounded-xl border border-white/[0.09] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-600 transition focus:border-sf-400/60 focus:bg-white/[0.05]"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="block text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  required
                  value={form.message}
                  onChange={update('message')}
                  placeholder="Tell me about the project, the org and the timeline…"
                  className="mt-2 w-full resize-y rounded-xl border border-white/[0.09] bg-white/[0.03] px-4 py-3 text-sm leading-relaxed text-white placeholder:text-slate-600 transition focus:border-sf-400/60 focus:bg-white/[0.05]"
                />
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <button type="submit" className="btn-primary group">
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  Send Message
                </button>
                <p aria-live="polite" className="text-xs text-slate-500">
                  {sent ? 'Opening your mail client…' : 'Opens your mail app with the message prefilled.'}
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
