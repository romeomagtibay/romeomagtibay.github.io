import type { ReactNode } from "react";

type Props = {
  index: string;
  title: string;
  file: string;
  description?: ReactNode;
};

export function SectionHeader({ index, title, file, description }: Props) {
  return (
    <div className="mb-10 flex flex-col gap-2 reveal sm:mb-14">
      <div className="flex items-center gap-3">
        <span className="font-mono text-sm text-brand-500 dark:text-brand-300">
          {index}
        </span>
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
          {file}
        </span>
        <span className="h-px flex-1 bg-gradient-to-r from-slate-300 to-transparent dark:from-slate-700" />
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base text-slate-600 dark:text-slate-400">
          {description}
        </p>
      ) : null}
    </div>
  );
}
