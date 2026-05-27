export const profile = {
  name: "Romeo Magtibay Jr.",
  role: "Sr. Full Stack Developer",
  tagline:
    "Building scalable, maintainable web applications with clean architecture and pragmatic engineering.",
  location: "Bulacan, Philippines",
  email: "romeo.magtibay26@gmail.com",
  phone: "+63 909 696 3041",
  github: "https://github.com/", // update if you have a public profile
  linkedin: "https://www.linkedin.com/", // update if you have a public profile
  resumeUrl: "/Romeo_Magtibay_Jr_CV.pdf",
  status: {
    fullTime: true,
    freelance: true,
  },
};

export const about = `I'm a Senior Full Stack Developer with 8+ years of hands-on experience across enterprise platforms — from Singapore e-Government systems to real-time betting and live-streaming products. I work end-to-end across UI, frontend, and backend, comfortable in both Java/Spring and modern JavaScript stacks.

I'm currently full-time at Anagenesis Inc., and I'm also open to freelance work in the evenings/weekends — small to mid-size projects, API design, frontend modernization, or full builds. If you're shipping something I can help with, let's talk.`;

export type SkillGroup = {
  title: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    title: "Languages",
    items: ["Java", "JavaScript", "PHP", "Visual Basic .NET"],
  },
  {
    title: "Frontend",
    items: [
      "Angular",
      "React.js",
      "JavaScript",
      "jQuery",
      "Sencha Ext JS",
      "Syncfusion EJ2",
      "JSP",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    items: [
      "Spring",
      "Spring MVC",
      "Spring Boot",
      "Spring Cloud",
      "REST APIs",
      "Struts 2",
      "Hibernate",
      "Quartz Scheduler",
      "Redis",
      "Redis Pub/Sub",
      "Crystal Report",
    ],
  },
  {
    title: "Databases",
    items: ["MySQL", "MSSQL", "Oracle", "PostgreSQL"],
  },
  {
    title: "DevOps & CI/CD",
    items: ["GitLab", "Jenkins", "Maven", "Tomcat", "JBoss", "WebLogic", "Unix"],
  },
  {
    title: "Tools & Workflow",
    items: ["Git", "SVN (Tortoise)", "JIRA", "Mockito", "Apache Solr", "Elixir", "Agile / Scrum"],
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    role: "Sr. Full Stack Developer",
    company: "Anagenesis Inc.",
    period: "June 2025 — Present",
    current: true,
    bullets: [
      "Continued development of an enterprise betting and live-streaming platform after a vendor transition.",
      "Migrated the desktop and mobile web app from Angular 8 to Angular 18, modernizing the frontend.",
      "Built REST APIs for new features, promotions, and real-time system functionality.",
      "Collaborated with UI/UX and mobile teams to ship consistent cross-platform experiences.",
    ],
  },
  {
    role: "Sr. Full Stack Developer",
    company: "Cybilltek Software Inc.",
    period: "March 2024 — June 2025",
    bullets: [
      "Translated UI/UX designs into production-ready web and mobile features.",
      "Built REST APIs and full-stack functionality for cross-platform betting applications.",
      "Diagnosed and resolved defects across QA, UAT, pre-live, and production environments.",
      "Followed Agile practices — daily stand-ups, sprint planning, reviews, and retrospectives.",
    ],
  },
  {
    role: "Analyst Programmer",
    company: "Novasolutions Philippine Inc.",
    period: "March 2022 — March 2024",
    bullets: [
      "Delivered full-stack features (UI, frontend, backend) from URS and FDS specifications.",
      "Optimized complex SQL queries to reduce response times for search and reporting.",
      "Resolved defects across QA, SIT, UAT, and production environments.",
      "Participated in the full SDLC, from development to production deployment.",
    ],
  },
  {
    role: "Programmer",
    company: "Novasolutions Philippine Inc.",
    period: "March 2019 — March 2022",
    bullets: [
      "Contributed to the ground-up development of a web-based e-Submission system.",
      "Developed full-stack features and translated FDS into production-ready code.",
      "Supported SIT database management, monitoring, and maintenance.",
    ],
  },
  {
    role: "Junior Programmer",
    company: "Novasolutions Philippine Inc.",
    period: "June 2017 — June 2019",
    bullets: [
      "Built features for an in-house Document Management System.",
      "Participated in the tech revamp — Struts → Spring MVC, Oracle → MSSQL.",
      "Resolved defects across QA, SIT, UAT, and production environments.",
    ],
  },
];

export type Project = {
  name: string;
  summary: string;
  tags: string[];
  context: string;
};

export const projects: Project[] = [
  {
    name: "Enterprise Betting System",
    context: "Anagenesis Inc. / Cybilltek Software Inc.",
    summary:
      "Cross-platform real-time betting and live-casino platform supporting football, basketball, tennis, and esports — built for high concurrent traffic and live data processing.",
    tags: [
      "Java 8",
      "Angular 18",
      "Spring",
      "Google Guice",
      "Redis Pub/Sub",
      "MSSQL",
      "Jenkins",
    ],
  },
  {
    name: "Live Streaming & Sports Platform",
    context: "Mobile Web App — Anagenesis / Cybilltek",
    summary:
      "Mobile-first web platform delivering real-time live streaming of sports and esports events — football, basketball, tennis, and esports.",
    tags: [
      "Java 17",
      "Angular 17",
      "Spring Boot",
      "Spring Cloud",
      "Mockito",
      "PostgreSQL",
      "Redis",
    ],
  },
  {
    name: "GENIE",
    context: "Singapore E-Government — Legal Aid Bureau, Ministry of Law",
    summary:
      "End-to-end paperless case management system for legal aid applications — digitizing registration, document storage, workflow processing, and case tracking.",
    tags: [
      "Java",
      "Sencha Ext JS",
      "Struts 2",
      "EJB",
      "Hibernate 5",
      "Quartz",
      "MSSQL",
      "Apache Solr",
    ],
  },
  {
    name: "ERA — Enterprise Registry & Archival",
    context: "Singapore E-Government — Land Transport Authority",
    summary:
      "National vehicle registration and archival system for the LTA — managing registration workflows, engineering drawings, and official transport documentation.",
    tags: ["Java", "Sencha Ext JS", "Struts 2", "Hibernate 3", "Oracle", "Apache Solr"],
  },
  {
    name: "CORENET 2.0",
    context: "Singapore E-Government — Construction Submission",
    summary:
      "National platform for electronic submission and processing of building and construction applications, used by Qualified Professionals across Singapore.",
    tags: [
      "Java",
      "React.js",
      "Spring MVC",
      "Spring 5",
      "Hibernate 5",
      "Quartz",
      "MSSQL",
      "Crystal Report",
    ],
  },
  {
    name: "URADAX 2.0",
    context: "Singapore E-Government — Urban Redevelopment Authority",
    summary:
      "Workflow-driven system for processing land use and development applications — supporting occupancy and planning approvals within Singapore's regulatory framework.",
    tags: [
      "Java",
      "Syncfusion EJ2",
      "Spring MVC",
      "Hibernate 5",
      "JBoss BPM",
      "Oracle",
    ],
  },
  {
    name: "PAVO E-Collaboration",
    context: "Novasolutions — Internal DMS",
    summary:
      "In-house document management system handling employee leave applications, project documentation (URS, FDS, PDG), and environment setup references.",
    tags: ["Java", "Sencha Ext JS", "Struts 2", "Hibernate 3", "MSSQL", "Apache Solr"],
  },
];

export type Award = {
  title: string;
  org: string;
  date: string;
  description: string;
};

export const awards: Award[] = [
  {
    title: "Best Programmer",
    org: "Novasolutions Philippine Inc.",
    date: "December 2020",
    description:
      "Recognized for outstanding skills in computer programming.",
  },
  {
    title: "OT Bayani",
    org: "Novasolutions Philippine Inc.",
    date: "December 2018",
    description:
      "Recognized for showing dedication by working beyond standard hours to deliver project commitments.",
  },
];

export const education = {
  school: "Colegio De Sta. Teresa De Avila",
  degree: "Bachelor of Science in Information Technology (BSIT)",
  period: "2013 — 2017",
};
