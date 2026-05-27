import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { CloseIcon, MenuIcon } from "./Icons";
import type { Theme } from "../hooks/useTheme";

type NavLink = { label: string; href: string };

const links: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
];

type Props = {
  theme: Theme;
  onToggleTheme: () => void;
};

export function Navbar({ theme, onToggleTheme }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/70 dark:border-slate-800/70 glass"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <a
          href="#top"
          className="group flex items-center gap-2 font-mono text-sm font-medium tracking-tight text-slate-900 dark:text-slate-100"
        >
          <span className="hidden sm:inline">romeo.dev</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative rounded-md px-3 py-2 text-sm transition ${
                    isActive
                      ? "text-slate-900 dark:text-white"
                      : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  }`}
                >
                  <span className="font-mono text-xs text-brand-500/80 dark:text-brand-300/80">
                    #
                  </span>
                  <span className="ml-0.5">{link.label}</span>
                  {isActive ? (
                    <span className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-transparent via-brand-500 to-transparent" />
                  ) : null}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/80 bg-white/60 text-slate-700 shadow-sm transition hover:border-brand-400/60 hover:text-brand-600 dark:border-slate-700/70 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:border-brand-400/60 dark:hover:text-brand-300 md:hidden"
          >
            {open ? (
              <CloseIcon style={{ width: 18, height: 18 }} />
            ) : (
              <MenuIcon style={{ width: 18, height: 18 }} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden border-t border-slate-200/70 dark:border-slate-800/70 transition-[max-height] duration-300 ${
          open ? "max-h-96" : "max-h-0"
        } glass`}
      >
        <ul className="container-page flex flex-col py-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 rounded-lg px-3 py-3 text-base text-slate-700 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800/60"
              >
                <span className="font-mono text-sm text-brand-500/80 dark:text-brand-300/80">
                  #
                </span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
