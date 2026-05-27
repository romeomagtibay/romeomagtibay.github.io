import { awards } from "../data/portfolio";
import { TrophyIcon } from "./Icons";
import { SectionHeader } from "./SectionHeader";

export function Awards() {
  return (
    <section id="awards" className="container-page section-pad">
      <SectionHeader
        index="05"
        file="recognition.json"
        title="Awards"
        description="Recognition along the way."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {awards.map((a) => (
          <div
            key={a.title}
            className="reveal rounded-2xl border border-slate-200/80 bg-white/60 p-5 shadow-sm backdrop-blur-sm transition hover:border-amber-400/60 hover:shadow-md dark:border-slate-800/80 dark:bg-slate-900/40"
          >
            <div className="flex items-start gap-3">
              <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-amber-300/40 to-amber-500/20 text-amber-600 dark:text-amber-300">
                <TrophyIcon style={{ width: 20, height: 20 }} />
              </span>
              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="text-base font-semibold text-slate-900 dark:text-white">
                    {a.title}
                  </h4>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-500">
                    {a.date}
                  </span>
                </div>
                <p className="text-sm font-medium text-brand-600 dark:text-brand-300">
                  {a.org}
                </p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  {a.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
