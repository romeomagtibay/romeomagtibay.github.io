import { experiences } from "../data/portfolio";
import { BriefcaseIcon } from "./Icons";
import { SectionHeader } from "./SectionHeader";

export function Experience() {
  return (
    <section id="experience" className="container-page section-pad">
      <SectionHeader
        index="03"
        file="experience.json"
        title="Experience"
        description="A timeline of the teams I've worked with and what I've shipped."
      />

      <ol className="relative ml-2 sm:ml-4">
        {/* Timeline line */}
        <span
          aria-hidden="true"
          className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-brand-400/60 via-slate-300 to-transparent dark:via-slate-700"
        />

        {experiences.map((exp, idx) => (
          <li key={idx} className="reveal relative pl-10 pb-10 last:pb-0">
            <span className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <BriefcaseIcon
                style={{ width: 12, height: 12 }}
                className="text-brand-500 dark:text-brand-300"
              />
            </span>

            <div className="rounded-2xl border border-slate-200/80 bg-white/60 p-5 shadow-sm backdrop-blur-sm transition hover:border-brand-400/50 hover:shadow-md dark:border-slate-800/80 dark:bg-slate-900/40 dark:hover:border-brand-400/40 sm:p-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-2">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {exp.role}
                </h3>
                <span className="font-mono text-xs text-slate-500 dark:text-slate-500">
                  {exp.period}
                </span>
              </div>

              <div className="mt-1 flex items-center gap-2">
                <span className="text-sm font-medium text-brand-600 dark:text-brand-300">
                  @ {exp.company}
                </span>
                {exp.current ? (
                  <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Current
                  </span>
                ) : null}
              </div>

              <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400 sm:text-[15px]">
                {exp.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-400/70 dark:bg-brand-300/70"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
