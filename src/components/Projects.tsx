import { projects } from "../data/portfolio";
import { FolderIcon } from "./Icons";
import { SectionHeader } from "./SectionHeader";

export function Projects() {
  return (
    <section id="projects" className="container-page section-pad">
      <SectionHeader
        index="04"
        file="projects.json"
        title="Projects & contributions"
        description="A selection of platforms I've contributed to — across enterprise, e-Government, and real-time systems."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="reveal group flex flex-col rounded-2xl border border-slate-200/80 bg-white/60 p-6 shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-brand-400/50 hover:shadow-lg dark:border-slate-800/80 dark:bg-slate-900/40 dark:hover:border-brand-400/40"
          >
            <div className="mb-4 flex items-start justify-between">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/20 to-fuchsia-500/20 text-brand-600 dark:text-brand-300">
                <FolderIcon style={{ width: 20, height: 20 }} />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 dark:text-slate-500">
                project
              </span>
            </div>

            <h3 className="text-lg font-semibold text-slate-900 transition group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-300">
              {project.name}
            </h3>
            <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-500">
              {project.context}
            </p>

            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {project.summary}
            </p>

            <ul className="mt-4 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-md border border-slate-200/70 bg-slate-50 px-2 py-0.5 font-mono text-[11px] text-slate-600 dark:border-slate-800 dark:bg-slate-800/60 dark:text-slate-400"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
