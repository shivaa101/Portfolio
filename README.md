# Shivam Bhagwat — Salesforce Developer Portfolio

A premium, dark-themed single-page portfolio built with **React 18 + Vite 5 + Tailwind CSS 3** and **Lucide React** icons. No animation or UI libraries — all motion is CSS + IntersectionObserver.

## Quick start

```bash
npm install      # install dependencies
npm run dev      # start dev server → http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

Deploy the generated `dist/` folder to Vercel, Netlify, GitHub Pages or any static host.
(For a root-domain deploy you can change `base: './'` to `base: '/'` in `vite.config.js`.)

## Folder structure

```
.
├── index.html                 # SEO title, meta, OG/Twitter tags, JSON-LD, fonts
├── package.json
├── vite.config.js
├── tailwind.config.js         # theme: ink/sf colors, animations, shadows
├── postcss.config.js
├── public/
│   ├── favicon.svg
│   └── resume.pdf             # ← PUT YOUR RESUME PDF HERE (see below)
└── src/
    ├── main.jsx
    ├── App.jsx                # section composition
    ├── index.css              # Tailwind layers + .card/.btn/.badge utilities
    ├── components/
    │   ├── Navbar.jsx          # sticky nav, scroll progress, active indicator, mobile menu
    │   ├── Hero.jsx
    │   ├── HeroVisual.jsx      # CRM dashboard + Apex snippet + terminal visual
    │   ├── About.jsx
    │   ├── Skills.jsx
    │   ├── SalesforceExpertise.jsx
    │   ├── Projects.jsx        # filterable project cards
    │   ├── Experience.jsx      # timeline
    │   ├── Certifications.jsx
    │   ├── Education.jsx
    │   ├── Social.jsx          # GitHub / LinkedIn / Resume cards + CTA
    │   ├── Contact.jsx         # form + copy-email button
    │   ├── Footer.jsx
    │   ├── BackgroundFX.jsx    # grid, aurora glows, particles
    │   ├── Reveal.jsx          # scroll fade-in wrapper
    │   ├── SectionHeading.jsx
    │   └── ScrollToTop.jsx
    ├── data/
    │   ├── site.js             # ← name, email, GitHub, LinkedIn, resume path, stats
    │   ├── projects.js         # ← all project content + filter tags
    │   ├── skills.js           # ← skill groups + Salesforce expertise groups
    │   └── experience.js       # ← experience, certifications, education
    └── hooks/
        ├── useReveal.js
        ├── useActiveSection.js
        └── useScrollProgress.js
```

## 1. Replace the placeholders (required)

Open **`src/data/site.js`** and replace:

| Placeholder | Replace with |
| --- | --- |
| `YOUR_EMAIL` | your real email address |
| `YOUR_GITHUB` | `https://github.com/your-username` |
| `YOUR_LINKEDIN` | `https://linkedin.com/in/your-handle` |
| `YOUR_TRAILHEAD` | your Trailblazer profile URL (optional) |

Project repo/demo links live in `src/data/projects.js` under each project's `links` object
(`{ github: 'YOUR_GITHUB', demo: '' }`). Buttons with empty links render disabled automatically.

Also update the two `https://example.com/` URLs in `index.html` (`<link rel="canonical">` and `og:url`)
after you deploy.

## 2. Add your resume PDF

Place your PDF at:

```
public/resume.pdf
```

Vite copies everything in `public/` to the site root, so it is served at `/resume.pdf` — which is
what the **Download Resume** buttons in the navbar, hero, links section and footer point to
(`site.resume` in `src/data/site.js`). Use a different filename by changing that one value.

## 3. Edit content

Everything is data-driven — no JSX edits needed for content changes:

- **Add a project** → push an object into `projects` in `src/data/projects.js`. Use `tags` from
  `projectFilters` (`Salesforce | Apex | LWC | React | Full Stack`) so filtering works, and set
  `icon` to one of the keys in `Projects.jsx`'s `iconMap`.
- **Add a certification** (e.g. Salesforce Platform Developer I) → push an object into
  `certifications` in `src/data/experience.js`. The grid picks it up automatically; `icon` accepts
  any key from `Certifications.jsx`'s `iconMap` and falls back to an award icon.
- **Add a role** → push an object into `experience`; the timeline renders it in order.
- **Change skills** → edit `skillGroups` / `salesforceExpertise` in `src/data/skills.js`.
  Levels are `Advanced | Proficient | Familiar` (rendered as dots, not fake percentages).

## Contact form

The form has no backend: on submit it opens the visitor's mail client with the message prefilled
(`mailto:`). To use a service instead, replace the `handleSubmit` body in
`src/components/Contact.jsx` with a `fetch()` to Formspree, EmailJS, Web3Forms or your own API —
the form state (`name`, `email`, `message`) is already wired.

## Design & accessibility notes

- Dark palette (`ink.*`) with a Salesforce-inspired blue accent (`sf.500 = #0176D3`).
- Glassmorphism is applied via the shared `.card` / `.glass` utilities in `index.css`.
- Animations: sticky navbar transition, scroll progress bar, hero fade-in sequence, section reveals,
  card hover lifts, marquee tech strip, background particles — all disabled automatically under
  `prefers-reduced-motion`.
- Semantic landmarks (`header`, `main`, `nav`, `section`, `footer`, `ol/li` timeline), a skip link,
  visible focus rings, `aria-label`/`title` on icon-only buttons, `aria-current` on the active nav
  item and `aria-selected` on the project filter tabs.
- Responsive from 320px up: single column on mobile, two-column grids from `md`, full split hero
  from `lg`.
