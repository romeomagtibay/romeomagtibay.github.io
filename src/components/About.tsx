import { about, education, profile } from "../data/portfolio";
import { SectionHeader } from "./SectionHeader";

export function About() {
  return (
    <section id="about" className="container-page section-pad">
      <SectionHeader index="01" file="about.json" title="About me" />

      <div className="grid gap-10 md:grid-cols-5">
        <div className="md:col-span-3 space-y-5 reveal">
          {about.split("\n\n").map((para, i) => (
            <p
              key={i}
              className="text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg"
            >
              {para}
            </p>
          ))}
        </div>

        <aside className="md:col-span-2 reveal">
          <div className="rounded-2xl border border-slate-200/80 bg-white/60 p-6 shadow-sm backdrop-blur-sm dark:border-slate-800/80 dark:bg-slate-900/40">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
              quick_facts
            </h3>
            <dl className="mt-4 space-y-3 text-sm">
              <Row label="Based" value={profile.location} />
              <Row label="Role" value={profile.role} />
              <Row
                label="Status"
                value={
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Open to freelance
                  </span>
                }
              />
              <Row label="Experience" value="8+ years" />
              <Row
                label="Education"
                value={
                  <div>
                    <div className="text-slate-900 dark:text-slate-200">
                      {education.degree}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-500">
                      {education.school} · {education.period}
                    </div>
                  </div>
                }
              />
            </dl>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <dt className="font-mono text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500">
        {label}
      </dt>
      <dd className="text-right text-slate-700 dark:text-slate-300">{value}</dd>
    </div>
  );
}
