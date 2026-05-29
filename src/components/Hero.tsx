import { profile } from "../data/portfolio";
import {
  ArrowDownIcon,
  FacebookIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
} from "./Icons";
import { TypewriterConsole } from "./TypewriterConsole";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-36 sm:pb-24 md:pt-44 md:pb-32"
    >
      {/* Background grid */}
      <div className="absolute inset-0 -z-10 grid-pattern [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      {/* Blurred gradient blobs */}
      <div
        aria-hidden="true"
        className="absolute -top-24 left-1/4 -z-10 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl dark:bg-brand-500/15 animate-float-slow"
      />
      <div
        aria-hidden="true"
        className="absolute top-40 right-1/4 -z-10 h-72 w-72 rounded-full bg-fuchsia-400/20 blur-3xl dark:bg-fuchsia-500/15 animate-float-slow"
        style={{ animationDelay: "-3s" }}
      />

      <div className="container-page">
        <div className="flex flex-col items-start gap-6 sm:gap-7">
          {/* Console line */}
          <TypewriterConsole />

          {/* Status pills */}
          <div className="flex flex-wrap items-center gap-2 animate-fade-up" style={{ animationDelay: "100ms" }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for freelance
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl animate-fade-up"
            style={{ animationDelay: "150ms" }}
          >
            Hi, I'm{" "}
            <span className="text-gradient">{profile.name.split(" ")[0]}</span>{" "}
            <span className="block sm:inline text-slate-700 dark:text-slate-200">
              {profile.name.split(" ").slice(1).join(" ")}
            </span>
          </h1>

          {/* Subheading */}
          <p
            className="max-w-2xl text-lg text-slate-600 dark:text-slate-400 sm:text-xl animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            <span className="font-medium text-slate-800 dark:text-slate-200">
              {profile.role}.
            </span>{" "}
            {profile.tagline}
          </p>

          {/* Meta */}
          <div
            className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500 dark:text-slate-500 animate-fade-up"
            style={{ animationDelay: "260ms" }}
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPinIcon style={{ width: 16, height: 16 }} />
              {profile.location}
            </span>
          </div>

          {/* CTAs */}
          <div
            className="mt-2 flex flex-wrap items-center gap-3 animate-fade-up"
            style={{ animationDelay: "320ms" }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
            >
              Get in touch
              <span aria-hidden="true" className="transition group-hover:translate-x-0.5">
                →
              </span>
            </a>
            {/* <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-full border border-slate-300/80 bg-white/60 px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:border-brand-400 hover:text-brand-600 dark:border-slate-700/80 dark:bg-slate-900/40 dark:text-slate-300 dark:hover:border-brand-400 dark:hover:text-brand-300"
            >
              <DownloadIcon style={{ width: 16, height: 16 }} />
              Download CV
            </a> */}
            {/* Disable Download CV button for now */}

            <div className="ml-1 flex items-center gap-1">
              <SocialIcon
                href={profile.facebook}
                label="Facebook"
                Icon={FacebookIcon}
              />
              <SocialIcon
                href={profile.linkedin}
                label="LinkedIn"
                Icon={LinkedInIcon}
              />
              <SocialIcon
                href={`mailto:${profile.email}`}
                label="Email"
                Icon={MailIcon}
              />
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="mt-20 hidden md:flex">
          <a
            href="#about"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-slate-400 transition hover:text-slate-600 dark:hover:text-slate-300"
          >
            scroll
            <ArrowDownIcon
              style={{ width: 14, height: 14 }}
              className="transition group-hover:translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

type SocialIconProps = {
  href: string;
  label: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

function SocialIcon({ href, label, Icon }: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
    >
      <Icon style={{ width: 18, height: 18 }} />
    </a>
  );
}
