# Prashanth Manna — AI-Driven Cloud & DevOps Portfolio

A production-ready personal portfolio built with **React + Vite**, featuring a 3D AI network hero
(Three.js), an animated cloud architecture diagram, a career timeline, a technology matrix, six
case-study pages, a live GitHub repository radar, a local-knowledge-base AI chat assistant, and an
animated DevOps terminal — all in a light, glassmorphic, Apple/Vercel/Linear-inspired visual style.

## 1. Run it locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (typically `http://localhost:5173`).

## 2. Build for production

```bash
npm run build
npm run preview   # sanity-check the production build locally
```

The static site is generated in `dist/`. Deploy `dist/` to any static host: Vercel, Netlify,
Cloudflare Pages, GitHub Pages, S3 + CloudFront, etc. Routing uses `HashRouter`, so it works on
any static host without extra rewrite rules.

## 3. Configuration (the only file you need to touch)

Open **`src/data/config.js`**:

```js
export const SITE_CONFIG = {
  name: "Prashanth Manna",
  title: "Senior DevOps Engineer | Multi-Cloud (AWS · Azure · GCP) | AI Agent Deployment",
  email: "prashanthmanna.ai@gmail.com",
  linkedin: "https://www.linkedin.com/in/prashanth-manna-12756a429/",
  githubUsername: "mannaprashanth", // <-- change this to update the GitHub Radar section
};
```

Career history, the technology matrix, case studies, the vision section, and the AI assistant's
knowledge base all live in **`src/data/content.js`** as plain data — edit text there without
touching any component code.

## 4. The photo

Your uploaded photo is at `public/assets/prashanth-photo.jpg` and is referenced directly in
`src/components/Hero.jsx`. Replace that file (keep the same name) to swap the photo.

## 5. GitHub Radar

The GitHub section calls the public GitHub REST API directly from the browser
(`https://api.github.com/users/<username>/repos`) — no token or backend required, since it only
reads public data. GitHub's public API is rate-limited to 60 unauthenticated requests/hour per IP;
that's expected for a personal portfolio.

## 6. AI Portfolio Assistant — connecting a real LLM later

Today, **"Prashanth AI"** answers from a local, structured knowledge base
(`AI_KNOWLEDGE_BASE` in `src/data/content.js`) with zero network calls and zero API keys in the
frontend — by design, so nothing sensitive is ever exposed to the browser.

To upgrade it to a real LLM later, open `src/components/AIAssistant.jsx` and replace the body of
`resolveAnswer()` with a call to **your own backend endpoint** (e.g. a small serverless function),
which in turn calls the Anthropic/OpenAI/Gemini API using a key stored server-side as an
environment variable. Never place a model-provider API key in frontend JavaScript — that file
already documents the exact shape of that swap.

## 7. Project structure

```
src/
  components/     Navbar, Hero, AIHeroNetwork (Three.js), CloudArchitecture,
                   CareerTimeline, TechnologyGrid, CaseStudies, GitHubRadar,
                   AIAssistant, DevOpsTerminal, Vision, Contact, Footer,
                   ScrollReveal, ScrollToTop
  pages/          Home.jsx, ProjectPage.jsx (case studies at /#/projects/:slug)
  data/           config.js (settings), content.js (all copy + AI knowledge base)
  index.css       Design tokens (colors, type, spacing) and shared utility classes
public/
  assets/         prashanth-photo.jpg
  favicon.svg
```

## 8. Tested against

- `npm run build` — production build succeeds with no errors
- `npm run lint` (oxlint) — 0 warnings, 0 errors
- `npm run preview` — verified root HTML, JS bundle, CSS bundle, and photo asset all return
  HTTP 200
- Responsive breakpoints in `index.css` and component-level media queries cover desktop, laptop,
  tablet, and mobile widths (hero collapses to a single column, nav collapses to a hamburger menu
  below 860px)
