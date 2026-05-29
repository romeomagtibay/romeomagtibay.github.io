import { MoonIcon, SunIcon } from "./Icons";
import type { Theme } from "../hooks/useTheme";

type Props = {
  theme: Theme;
  onToggle: () => void;
  className?: string;
};

export function ThemeToggle({ theme, onToggle, className = "" }: Props) {
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={onToggle}
      className={`group relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/80 bg-white/60 text-slate-700 shadow-sm transition hover:border-brand-400/60 hover:text-brand-600 dark:border-slate-700/70 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:border-brand-400/60 dark:hover:text-brand-300 cursor-pointer ${className}`}
    >
      <SunIcon
        className={`absolute h-4.5 w-4.5 transition-all duration-300 ${
          isDark
            ? "scale-0 rotate-90 opacity-0"
            : "scale-100 rotate-0 opacity-100"
        }`}
        style={{ width: 18, height: 18 }}
      />
      <MoonIcon
        className={`absolute transition-all duration-300 ${
          isDark
            ? "scale-100 rotate-0 opacity-100"
            : "scale-0 -rotate-90 opacity-0"
        }`}
        style={{ width: 18, height: 18 }}
      />
    </button>
  );
}
