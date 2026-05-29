import { useEffect, useMemo, useState } from "react";

type Token = {
  text: string;
  className?: string;
};

const KEYWORD = "text-emerald-500 dark:text-emerald-400";
const IDENTIFIER = "text-slate-700 dark:text-slate-300";
const TYPE_NAME = "text-sky-600 dark:text-sky-400";
const STRING = "text-amber-600 dark:text-amber-300";

const LINE: Token[] = [
  { text: "const ", className: KEYWORD },
  { text: "romeo", className: IDENTIFIER },
  { text: ": " },
  { text: "Role", className: TYPE_NAME },
  { text: " = " },
  { text: '"fullstack developer"', className: STRING },
  { text: ";" },
];

const ARIA_LABEL = "Romeo, fullstack developer";

const TYPE_DELAY_MS = 55;
const START_DELAY_MS = 200;

export function TypewriterConsole() {
  const [visibleChars, setVisibleChars] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  const fullLen = useMemo(
    () => LINE.reduce((a, t) => a + t.text.length, 0),
    [],
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    if (visibleChars >= fullLen) return;

    const delay = visibleChars === 0 ? START_DELAY_MS : TYPE_DELAY_MS;
    const t = setTimeout(() => setVisibleChars((c) => c + 1), delay);
    return () => clearTimeout(t);
  }, [visibleChars, fullLen, reduceMotion]);

  const charsToShow = reduceMotion ? fullLen : visibleChars;

  return (
    <div
      className="font-mono text-xs sm:text-sm text-slate-500 dark:text-slate-500 animate-fade-up min-h-[1.5em]"
      aria-label={ARIA_LABEL}
    >
      <span className="whitespace-pre" aria-hidden="true">
        {renderTokens(LINE, charsToShow)}
      </span>
      <span
        aria-hidden="true"
        className="ml-0.5 inline-block h-3.5 w-[2px] align-middle bg-slate-700 dark:bg-slate-300 animate-blink"
      />
    </div>
  );
}

function renderTokens(tokens: Token[], visibleChars: number) {
  let remaining = visibleChars;
  const out: React.ReactNode[] = [];
  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    if (remaining <= 0) break;
    const slice =
      remaining >= t.text.length ? t.text : t.text.slice(0, remaining);
    out.push(
      <span key={i} className={t.className}>
        {slice}
      </span>,
    );
    remaining -= slice.length;
  }
  return out;
}
