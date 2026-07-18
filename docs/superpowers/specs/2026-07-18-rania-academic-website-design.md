# Design: Academic Website for Dr. Rania Abdelghani

**Date:** 2026-07-18
**Status:** Approved (pending spec review)
**Deployment target:** https://raniaabdelghani.github.io (GitHub Pages user site)

## Goal

A professional, distinctive single-page academic website for Dr. Rania Abdelghani —
postdoctoral researcher at the Hector Research Institute of Education Sciences and
Psychology, University of Tübingen — presenting her research, publications, talks,
and CV to an academic audience (hiring committees, collaborators, students, press).

## Decisions (settled during brainstorming)

| Decision | Choice |
|---|---|
| Hosting | GitHub Pages user site, repo `raniaabdelghani.github.io` under the `RaniaAbdelghani` account (authenticated via `gh` on this machine). Public repo, served from `main` root. |
| Stack | Hand-crafted static HTML + CSS + minimal vanilla JS. No frameworks, no build step. Can migrate to al-folio/Hugo later if needs grow — content is portable. |
| Design direction | "Warm academic": refined type pairing, warm accent palette, generous whitespace, subtle curiosity-themed details. Professional first, memorable second. |
| Structure | Single page with anchored sections + sticky nav. |
| Language | English only. |
| Photo | Provided by user (location TBD — possibly on Benjamin's machine, reachable via ssh). Site built so the portrait is a pure file swap at `assets/img/portrait.jpg`. |
| CV | `2 - CV RA.pdf` (Feb 2025 version) shipped as `assets/cv-rania-abdelghani.pdf`, linked via a "Download CV" button. |

## Page structure

1. **Hero** — "Dr. Rania Abdelghani", title line (Postdoctoral Researcher, Hector
   Research Institute, University of Tübingen), portrait, one-sentence research
   tagline, icon links: email · Google Scholar · LinkedIn · X (@RaniaABDBenAmar) ·
   Download CV.
2. **About** — 2–3 paragraph bio: PhD in cognitive science (Inria / University of
   Bordeaux, 2024; advisors Pierre-Yves Oudeyer & Hélène Sauzéon) on conversational
   agents to train curiosity and metacognition in young learners; visiting
   researcher at UC Berkeley's Kidd Lab (2023); now postdoc with Kou Murayama's
   Motivation Science Lab in Tübingen. Engineering background (Sorbonne MSc, INSAT
   Tunis M.Eng).
3. **Research** — 3–4 theme cards: epistemic curiosity & question-asking ·
   metacognition & self-regulated learning · generative AI in education ·
   conversational agents / educational technology.
4. **Publications** — grouped by year, newest first. Source of truth: CV list
   cross-checked with Google Scholar. Each entry: authors (Rania bolded), title,
   venue, year, link (DOI / arXiv / publisher). "Selected" badge on the three most-cited
   works (Supporting qualitative analysis with LLMs; GPT-3-driven pedagogical
   agents, IJAIED; Conversational agents for curiosity-driven learning, IJHCS).
   A "Full list on Google Scholar" link.
5. **Talks & workshops** — highlights from CV (AIED 2024 Recife, NeurIPS GenAI in
   Education workshop 2023, IDC 2022/2023, CEU Budapest 2023, Cogni'classes 2025…)
   plus workshop organization. Embedded YouTube player for the PhD defense.
6. **Experience & education** — compact two-track timeline from CV (positions +
   degrees), including mentoring note and grants/awards (LEAD Intramural Grant
   2025, UBGRS Mob 2023, EAET best presentation award 2022).
7. **Contact / footer** — email `rania.abdelghani@uni-tuebingen.de`, affiliation
   line, social links repeated, "last updated" note.

## Repository layout

```
raniasWebSite/            (local) → pushed as raniaabdelghani.github.io
├── index.html
├── assets/
│   ├── css/style.css
│   ├── js/main.js        (nav highlighting, mobile menu, lazy video embed)
│   ├── img/portrait.jpg  (placeholder slot until photo provided)
│   └── cv-rania-abdelghani.pdf
├── docs/superpowers/specs/…   (this spec; kept in repo, harmless)
└── README.md             (how to edit content, swap photo, update CV)
```

## Implementation notes

- **Relative paths everywhere** (`assets/…`, not `/assets/…`) so the site renders
  identically under any base URL.
- **Design quality:** implementation uses the frontend-design skill; responsive
  down to 360 px; light/dark via `prefers-color-scheme`; system-font fallbacks;
  no external CDN dependencies except the YouTube iframe (privacy-enhanced
  `youtube-nocookie.com`, click-to-load facade so nothing loads until clicked).
- **Accessibility:** semantic landmarks, alt text, focus states, WCAG AA contrast.
- **SEO/meta:** title, description, Open Graph tags, canonical URL,
  `person`-type JSON-LD (name, affiliation, sameAs → Scholar/LinkedIn/X).
- **No AI-tool names** in commits or committed files (per repo-owner rules).
- **Email obfuscation:** email rendered via small JS assembly to reduce scraping
  (with `mailto:` still functional); plain-text fallback "at/dot" in noscript.

## Deployment

1. Create public repo `raniaabdelghani.github.io` under `RaniaAbdelghani` via `gh repo create`.
2. Push `main`; GitHub Pages auto-serves user-site repos from `main` root
   (verify via `gh api`, enable explicitly if needed).
3. Verify `https://raniaabdelghani.github.io` returns 200 and renders correctly.

## Verification

- Open `index.html` locally (browser or headless screenshot) — check hero,
  publications render, responsive breakpoints (360/768/1200), dark mode.
- HTML validity pass (no unclosed tags; `tidy` or manual review).
- All external links resolve (Scholar, LinkedIn, X, DOI/arXiv links, YouTube).
- Live URL check after deploy.

## Out of scope (deliberate)

- Blog/news feed, BibTeX-driven publication generation, analytics, custom domain,
  contact form (email suffices). All possible later; none block launch.
