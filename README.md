# Romeo Magtibay Jr. — Portfolio

A clean, resume-style portfolio site built with **React + TypeScript + Vite + Tailwind CSS v4**, featuring dark/light mode and full mobile responsiveness.

Live sections: hero, about, tech stack, experience timeline, projects & contributions, awards & training, and contact.

---

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

Requires **Node 20+** (tested on Node 22).

---

## How it works

### Tech stack

| Concern         | Choice                              |
| --------------- | ----------------------------------- |
| Bundler         | Vite                                |
| Framework       | React 19 + TypeScript               |
| Styling         | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Theme           | Class-based dark mode (`html.dark`) |
| Animations      | CSS keyframes + IntersectionObserver |
| Icons           | Inline SVG components (no icon lib) |

### Project structure

```
src/
├── App.tsx                  # Page composition
├── main.tsx                 # React entry
├── index.css                # Tailwind + theme tokens + custom keyframes
├── data/
│   └── portfolio.ts         # All content lives here (edit me!)
├── hooks/
│   ├── useTheme.ts          # Persists theme to localStorage
│   └── useReveal.ts         # Scroll-triggered reveal animations
└── components/
    ├── Navbar.tsx           # Sticky glass nav, mobile menu, active section
    ├── Hero.tsx             # Intro, status pills, CTAs
    ├── About.tsx            # Bio + quick-facts sidebar
    ├── TechStack.tsx        # Grouped skill chips
    ├── Experience.tsx       # Vertical timeline
    ├── Projects.tsx         # Project cards
    ├── Awards.tsx           # Awards + trainings
    ├── Contact.tsx          # Contact card with channels
    ├── Footer.tsx
    ├── SectionHeader.tsx    # Reusable "01 about.json" header
    ├── ThemeToggle.tsx      # Sun/moon switch
    └── Icons.tsx            # Inline SVG icon set
```

### Editing content

All copy (name, role, bullets, projects, awards, etc.) is in **`src/data/portfolio.ts`**. Change the data and the UI updates automatically — you shouldn't need to touch any component for normal content edits.

```ts
export const profile = {
  name: "Romeo Magtibay Jr.",
  role: "Sr. Full Stack Developer",
  email: "romeo.magtibay26@gmail.com",
  // ...
};
```

The downloadable CV lives at `public/Romeo_Magtibay_Jr_CV.pdf`. Replace the file (keep the same name) to update the "Download CV" buttons.

### Theme (dark / light)

- A small inline script in `index.html` reads `localStorage.theme` (or falls back to `prefers-color-scheme`) **before** React mounts, which prevents the white flash on first paint.
- `useTheme` toggles the `dark` class on `<html>` and persists the choice.
- Tailwind's `dark:` variant is wired via `@custom-variant dark (&:where(.dark, .dark *))` in `index.css`.

### Animations

- Hero text fades up with staggered delays.
- Cards/sections use a `.reveal` class + `useReveal` (IntersectionObserver) to fade in as they enter the viewport.
- The navbar tracks the active section using a second IntersectionObserver and underlines the matching link.

### Responsive behavior

- Mobile-first layout — every grid collapses to a single column under `md`.
- A hamburger menu replaces the desktop nav under `md` and locks body scroll while open.
- Hero typography scales from `text-4xl` up to `text-7xl` across breakpoints.

---

## Customizing

- **Colors**: tweak the `--color-brand-*` tokens in `src/index.css` under `@theme`.
- **Add a section**: create `src/components/MySection.tsx`, export it, and add it to `App.tsx`. Use `<SectionHeader />` for a consistent intro and add the `reveal` class to anything you want to animate in.
- **Add a nav link**: append to the `links` array in `src/components/Navbar.tsx`.

---

## Scripts

| Script           | What it does                              |
| ---------------- | ----------------------------------------- |
| `npm run dev`    | Start Vite dev server with HMR            |
| `npm run build`  | Type-check (`tsc -b`) and build for prod  |
| `npm run preview`| Serve the production build locally        |
| `npm run lint`   | Run ESLint                                |

---

## Deployment

The output of `npm run build` lives in `dist/` and is a fully static site — drop it into any host (Vercel, Netlify, GitHub Pages, Cloudflare Pages, S3, etc.).

```bash
npm run build
# upload dist/ to your host
```
