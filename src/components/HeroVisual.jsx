import { Activity, CircleDot, Cloud, TrendingUp, Users } from 'lucide-react';

/**
 * Developer-style hero visual: a Salesforce-flavoured CRM dashboard card,
 * an Apex code snippet window and a small pipeline chart. Decorative.
 */
const pipeline = [
  { stage: 'Enquiry', value: 92, tone: 'from-sf-400 to-sf-500' },
  { stage: 'Qualified', value: 74, tone: 'from-sf-400 to-cyan-400' },
  { stage: 'Admission', value: 58, tone: 'from-cyan-400 to-emerald-400' },
  { stage: 'Fee Paid', value: 41, tone: 'from-emerald-400 to-emerald-500' },
];

const bars = [38, 54, 46, 68, 59, 82, 71, 94];

export default function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-sf-500/25 via-cyan-400/10 to-transparent blur-2xl" />

      {/* CRM dashboard */}
      <div className="card p-5 sm:p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-sf-500/15 ring-1 ring-sf-400/30">
              <Cloud className="h-[18px] w-[18px] text-sf-200" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-semibold text-white">Admissions CRM</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500">
                Salesforce · Production
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-emerald-300">
            <CircleDot className="h-3 w-3" aria-hidden="true" />
            Live
          </span>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {[
            { icon: Users, label: 'Leads', value: '1,248' },
            { icon: TrendingUp, label: 'Conversion', value: '38%' },
            { icon: Activity, label: 'Flows', value: '17' },
          ].map((k) => (
            <div key={k.label} className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-3">
              <k.icon className="h-4 w-4 text-sf-300" aria-hidden="true" />
              <p className="mt-2 text-lg font-semibold leading-none text-white">{k.value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-slate-500">{k.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 space-y-3">
          {pipeline.map((p, i) => (
            <div key={p.stage}>
              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span>{p.stage}</span>
                <span className="font-mono text-slate-500">{p.value}%</span>
              </div>
              <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${p.tone}`}
                  style={{ width: `${p.value}%`, transition: 'width 1.2s ease', transitionDelay: `${i * 120}ms` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-end gap-1.5" aria-hidden="true">
          {bars.map((h, i) => (
            <span
              key={i}
              className="flex-1 rounded-t bg-gradient-to-t from-sf-500/25 to-sf-300/80"
              style={{ height: `${h * 0.5}px` }}
            />
          ))}
        </div>
      </div>

      {/* Apex snippet */}
      <div className="card mt-5 overflow-hidden p-0">
        <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          <span className="ml-2 font-mono text-[11px] text-slate-500">FeeDiscountService.cls</span>
        </div>
        <pre className="overflow-x-auto px-4 py-4 font-mono text-[11.5px] leading-relaxed text-slate-400 sm:text-xs">
{`public with sharing class `}<span className="text-sf-200">FeeDiscountService</span>{` {
  public static Decimal `}<span className="text-cyan-300">discountFor</span>{`(Decimal marks) {
    if (marks > 90) return 0.30;
    if (marks >= 80) return 0.15;
    if (marks >= 70) return 0.05;
    return marks < 60 ? -1 : 0; `}<span className="text-slate-600">{`// -1 → approval`}</span>{`
  }
}`}
        </pre>
        <div className="flex items-center gap-2 border-t border-white/[0.06] px-4 py-2.5 font-mono text-[11px] text-emerald-300/90">
          <span className="text-slate-500">$</span> sf apex run test --code-coverage
          <span className="ml-1 inline-block h-3.5 w-[7px] animate-caret bg-emerald-300/80 align-middle" />
        </div>
      </div>
    </div>
  );
}
