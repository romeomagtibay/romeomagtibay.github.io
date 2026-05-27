import { profile } from "../data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200/70 dark:border-slate-800/70">
      <div className="container-page flex flex-col items-center justify-end gap-3 py-8 sm:flex-row">
        <p className="font-mono text-xs text-slate-500 dark:text-slate-500">
          © {year} {profile.name} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
