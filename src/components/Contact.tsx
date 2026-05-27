import { profile } from "../data/portfolio";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
} from "./Icons";
import { SectionHeader } from "./SectionHeader";

type Channel = {
  label: string;
  value: string;
  href: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export function Contact() {
  const channels: Channel[] = [
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      Icon: MailIcon,
    },
    {
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, "")}`,
      Icon: PhoneIcon,
    },
    {
      label: "GitHub",
      value: "github.com/romeomagtibay",
      href: profile.github,
      Icon: GitHubIcon,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/romeomagtibay",
      href: profile.linkedin,
      Icon: LinkedInIcon,
    },
  ];

  return (
    <section id="contact" className="container-page section-pad">
      <SectionHeader index="06" file="contact.json" title="Get in touch" />

      <div className="reveal overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-white via-white to-brand-50/40 p-8 shadow-sm backdrop-blur-sm dark:border-slate-800/80 dark:from-slate-900/60 dark:via-slate-900/40 dark:to-brand-900/20 sm:p-10">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
              Have a project in mind?
            </h3>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
              I'm currently full-time, but actively taking on{" "}
              <span className="font-medium text-slate-900 dark:text-slate-200">
                freelance work
              </span>{" "}
              outside hours — small to mid-size projects, API design, frontend
              modernization, or full builds. Drop a message and let's chat.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
              >
                Send an email
                <span aria-hidden="true" className="transition group-hover:translate-x-0.5">
                  →
                </span>
              </a>
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-full border border-slate-300/80 bg-white/60 px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:border-brand-400 hover:text-brand-600 dark:border-slate-700/80 dark:bg-slate-900/40 dark:text-slate-300 dark:hover:border-brand-400 dark:hover:text-brand-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <ul className="space-y-2">
            {channels.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer noopener"
                  className="group flex items-center gap-4 rounded-xl border border-transparent bg-white/80 p-4 transition hover:border-brand-300/60 hover:shadow-sm dark:bg-slate-900/40 dark:hover:border-brand-400/40"
                >
                  <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-gradient-to-br from-brand-500/15 to-fuchsia-500/15 text-brand-600 dark:text-brand-300">
                    <c.Icon style={{ width: 18, height: 18 }} />
                  </span>
                  <div className="min-w-0">
                    <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
                      {c.label}
                    </div>
                    <div className="truncate text-sm font-medium text-slate-800 transition group-hover:text-brand-600 dark:text-slate-200 dark:group-hover:text-brand-300">
                      {c.value}
                    </div>
                  </div>
                  <span
                    aria-hidden="true"
                    className="ml-auto text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-brand-500 dark:text-slate-600"
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
