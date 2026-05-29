export const profile = {
  name: "Romeo Magtibay Jr.",
  role: "Sr. Full Stack Developer",
  tagline: "Passionate about clean code, performance, and shipping things that just work.",
  location: "Bulacan, Philippines",
  email: "romeo.magtibay26@gmail.com",
  phone: "+63 909 696 3041",
  linkedin: "https://www.linkedin.com/in/romeo-magtibay",
  facebook: "https://www.facebook.com/kyohei.magtibay",
  resumeUrl: `${import.meta.env.BASE_URL}Romeo_Magtibay_Jr_CV.pdf`,
  status: {
    fullTime: true,
    freelance: true,
  },
};

export const about = `I'm a Senior Full Stack Developer with hands-on experience across enterprise platforms — from Singapore e-Government systems to real-time betting and live-streaming products. I work end-to-end across UI, frontend, and backend, comfortable in both Java/Spring and modern JavaScript stacks.`;

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
      "Took ownership of an enterprise betting and live-streaming platform mid-flight following a vendor transition — reverse-engineered the codebase and re-established build and deploy ownership.",
      "Led the Angular 8 → 18 migration of the desktop and mobile betting clients — replaced deprecated APIs, modernized RxJS patterns, and rolled out incrementally with zero customer-visible regressions.",
      "Designed and shipped Spring/Java REST APIs for new promotions, betting features, and real-time system functionality consumed by both web and mobile clients.",
      "Owned performance, scalability, and UX improvements across desktop and mobile web — including bundle optimization, lazy-loaded routes, and rendering audits to keep the app responsive under high real-time load.",
      "Partnered with UI/UX and mobile teams to keep design tokens, component patterns, and platform behavior consistent across desktop, mobile web, and native clients."
    ],
  },
  {
    role: "Sr. Full Stack Developer",
    company: "Cybilltek Software Inc.",
    period: "March 2024 — June 2025",
    bullets: [
      "Implemented Redis Pub/Sub as the message queue backbone for a cross-platform betting application, enabling real-time event distribution across services and replacing slower polling-based communication.",
      "Designed and shipped Spring Boot REST APIs for new features and promotions — from prototype through API documentation to production integration with web and mobile clients.",
      "Built end-to-end full-stack functionality across web and mobile, translating Business Requirement Specifications (BRS/BRD) into production-ready features for a high-traffic betting application.",
      "Drove UX and performance improvements across the cross-platform betting app, partnering with UI/UX to translate designs into consistent, accessible components.",
      "Diagnosed and resolved defects across QA, UAT, pre-live, and production environments — owning root-cause analysis through fix verification.",
    ],
  },
  {
    role: "Analyst Programmer",
    company: "Novasolutions Philippine Inc.",
    period: "March 2022 — March 2024",
    bullets: [
      "Led a small team of developers — ran daily stand-ups, attended cross-team leads meetings to set priorities, and delegated tasks to keep delivery on track for a Singapore e-Government project.",
      "Optimized complex production SQL queries that were causing slowness on the e-Government search feature, measurably improving response times for end users and easing database load.",
      "Hardened application security by implementing XSS input sanitization and payload escaping across user-facing endpoints, blocking untrusted data from reaching the database layer.",
      "Ran OWASP dependency vulnerability scans across the codebase, upgraded affected libraries to stable versions, and refactored outdated implementations to close known Common Vulnerabilities and Exposures (CVEs).",
      "Migrated Apache Solr to its latest version on the legacy e-Government platform and refactored the affected indexes to align with the upgraded schema, ensuring search continuity for end users.",
      "Continued the major tech revamp of a legacy e-Government project, progressively migrating the codebase from Enterprise JavaBeans (EJB) to the Spring Framework.",
      "Delivered end-to-end full-stack features (UI, frontend, backend) from URS through FDS to production-ready code, including defect resolution across QA, SIT, UAT, and PROD."
    ],
  },
  {
    role: "Programmer",
    company: "Novasolutions Philippine Inc.",
    period: "March 2019 — March 2022",
    bullets: [
      "Served as module lead for the application and submission workflow processes of a Singapore e-Government e-Submission system — owning architecture decisions and delivery within the module.",
      "Gatekept database changes — reviewed, executed, and corrected SQL scripts from all developers via SQL*Plus before commit, preventing broken migrations from reaching shared environments.",
      "Implemented business process workflows using JBPM (jBoss Business Process Model) to orchestrate and monitor the e-Submission system's end-to-end submission flow.",
      "Built scheduled batch jobs to advance workflow states and complete background processing for the e-Submission system.",
      "Designed reporting infrastructure using Crystal Reports with optimized SQL queries for efficient data retrieval.",
      "Managed, monitored, and maintained the SIT database — supporting QA and UAT cycles for the e-Submission system."
    ],
  },
  {
    role: "Junior Programmer",
    company: "Novasolutions Philippine Inc.",
    period: "June 2017 — June 2019",
    bullets: [
      "Contributed to a major tech revamp of an in-house Document Management System — migrating the codebase from Struts to Spring MVC and the database from Oracle to MSSQL.",
      "Built and enhanced features across the UI, frontend, and backend of the Document Management System based on User Requirements Specifications.",
      "Upgraded the Apache Tomcat runtime of a legacy e-Government application to the latest stable version, resolving compatibility issues to bring the app up successfully on the new container.",
      "Contributed to migrating a legacy C# application to Java — translating business logic, data access patterns, and module structure into the target stack.",
      "Investigated and resolved defects identified during QA, SIT, UAT, and production — gaining exposure to the full delivery pipeline early.",
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
    context: "Cross-Platform Web App",
    summary:
      "Contributed to a cross-platform real-time betting and live-casino platform supporting football, basketball, tennis, and esports — built for high concurrent traffic and live data processing.",
    tags: [
      "Java 8",
      "Angular 18",
      "Spring",
      "Google Guice",
      "Redis",
      "Redis Pub/Sub",
      "MSSQL",
      "Jenkins",
    ],
  },
  {
    name: "Live Streaming & Sports Platform",
    context: "Mobile Web App",
    summary:
      "Contributed to a mobile-first web platform delivering real-time live streaming of sports and esports events — football, basketball, tennis, and esports.",
    tags: [
      "Java 17",
      "Angular 17",
      "Spring Boot",
      "Spring Cloud",
      "Mockito",
      "PostgreSQL",
      "Redis",
      "Jenkins",
    ],
  },
  {
    name: "GENIE",
    context: "Singapore E-Government — Legal Aid Bureau, Ministry of Law",
    summary:
      "Contributed to an end-to-end paperless case management system for legal aid applications — digitizing registration, document storage, workflow processing, and case tracking.",
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
      "Contributed to a national vehicle registration and archival system for the LTA — managing registration workflows, engineering drawings, and official transport documentation.",
    tags: ["Java", "Sencha Ext JS", "Struts 2", "Hibernate 3", "Oracle", "Apache Solr"],
  },
  {
    name: "CORENET 2.0",
    context: "Singapore E-Government — Construction Submission",
    summary:
      "Contributed to a national platform for electronic submission and processing of building and construction applications, used by Qualified Professionals across Singapore.",
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
      "Contributed to a workflow-driven system for processing land use and development applications — supporting occupancy and planning approvals within Singapore's regulatory framework.",
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
      "Contributed to an in-house document management system handling employee leave applications, project documentation (URS, FDS, PDG), and environment setup references.",
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
