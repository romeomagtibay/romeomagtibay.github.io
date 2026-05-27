import { skills } from "../data/portfolio";
import { SectionHeader } from "./SectionHeader";

export function TechStack() {
  return (
    <section id="stack" className="container-page section-pad">
      <SectionHeader
        index="02"
        file="stack.json"
        title="Tech stack"
        description="Tools and technologies I use day-to-day to design, build, and ship full-stack systems."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div
            key={group.title}
            className="reveal group rounded-2xl border border-slate-200/80 bg-white/60 p-5 shadow-sm backdrop-blur-sm transition hover:border-brand-400/50 hover:shadow-md dark:border-slate-800/80 dark:bg-slate-900/40 dark:hover:border-brand-400/40"
          >
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-semibold tracking-wide text-slate-900 dark:text-slate-100">
                {group.title}
              </h3>
              <span className="font-mono text-[11px] text-slate-400 dark:text-slate-500">
                {group.items.length.toString().padStart(2, "0")}
              </span>
            </div>
            <ul className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-slate-200/70 bg-slate-50 px-2.5 py-1 font-mono text-[12px] text-slate-700 transition group-hover:border-brand-300/40 dark:border-slate-800 dark:bg-slate-800/60 dark:text-slate-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
