import { profile } from "../data/portfolio";
import {
  FacebookIcon,
  LinkedInIcon,
  MailIcon
} from "./Icons";
import { SectionHeader } from "./SectionHeader";

type Channel = {
  label: string;
  value: string;
  href: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

// Strip the protocol/www
function stripUrl(url: string) {
  return url.replace(/^https?:\/\/(www\.)?/, "");
}

export function Contact() {
  const channels: Channel[] = [
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      Icon: MailIcon,
    },
    {
      label: "LinkedIn",
      value: stripUrl(profile.linkedin),
      href: profile.linkedin,
      Icon: LinkedInIcon,
    },
    {
      label: "Facebook",
      value: stripUrl(profile.facebook),
      href: profile.facebook,
      Icon: FacebookIcon,
    },
  ];

  return (
    <section id="contact" className="container-page section-pad">
      <SectionHeader index="06" file="contact.json" title="Get in touch" />

      <div className="reveal overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white via-white to-brand-50/40 p-4 shadow-sm backdrop-blur-sm dark:border-slate-800/80 dark:from-slate-900/60 dark:via-slate-900/40 dark:to-brand-900/20 sm:rounded-3xl sm:p-8 md:p-10">
        <div className="grid gap-6 md:grid-cols-2 md:items-center md:gap-10">
          <div className="min-w-0">
            <h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-2xl md:text-3xl">
              Have a project in mind?
            </h3>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 sm:text-base">
              I'm currently full-time, but actively taking on{" "}
              <span className="font-medium text-slate-900 dark:text-slate-200">
                freelance work
              </span>{" "}
              outside hours — small to mid-size projects, API design, frontend
              modernization, or full builds. Drop a message and let's chat.
            </p>

            <div className="mt-5 flex flex-wrap gap-3 sm:mt-6">
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 sm:px-5 sm:py-2.5"
              >
                Send an email
                <span
                  aria-hidden="true"
                  className="transition group-hover:translate-x-0.5"
                >
                  →
                </span>
              </a>
            </div>
          </div>

          <ul className="min-w-0 space-y-2">
            {channels.map((c) => (
              <li key={c.label} className="min-w-0">
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer noopener"
                  className="group flex w-full min-w-0 items-center gap-3 rounded-xl border border-transparent bg-white/80 p-2.5 transition hover:border-brand-300/60 hover:shadow-sm dark:bg-slate-900/40 dark:hover:border-brand-400/40 sm:gap-4 sm:p-4"
                >
                  <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-gradient-to-br from-brand-500/15 to-fuchsia-500/15 text-brand-600 dark:text-brand-300 sm:h-10 sm:w-10">
                    <c.Icon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500 sm:text-[11px]">
                      {c.label}
                    </div>
                    <div className="truncate text-[13px] font-medium text-slate-800 transition group-hover:text-brand-600 dark:text-slate-200 dark:group-hover:text-brand-300 sm:text-sm">
                      {c.value}
                    </div>
                  </div>
                  <span
                    aria-hidden="true"
                    className="hidden flex-none text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-brand-500 dark:text-slate-600 sm:inline"
                  >
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
