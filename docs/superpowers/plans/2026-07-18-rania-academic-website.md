# Rania Abdelghani Academic Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and deploy a single-page academic website for Dr. Rania Abdelghani at https://raniaabdelghani.github.io.

**Architecture:** One static HTML page with anchored sections, one stylesheet, one small JS file. No build step; the repo root is the deployed site. GitHub Pages user site served from `main` root of public repo `raniaabdelghani.github.io`.

**Tech Stack:** HTML5, CSS (custom properties, grid/flex, `prefers-color-scheme`), vanilla JS (nav highlight, mobile menu, click-to-load YouTube facade, email assembly). `gh` CLI for repo/Pages. Spec: `docs/superpowers/specs/2026-07-18-rania-academic-website-design.md`.

## Global Constraints

- All asset/link paths relative (`assets/…`), never absolute (`/assets/…`).
- No external requests except the YouTube iframe, loaded only after click (`youtube-nocookie.com` facade).
- Email never appears as plain `user@domain` in the HTML source; JS-assembled `mailto:` with noscript "name [at] uni-tuebingen [dot] de" fallback.
- No AI/LLM tool names in commits or committed files.
- Stage files by name only (never `git add -A` / `git add .`).
- WCAG AA contrast in both light and dark schemes; semantic landmarks; alt text; visible focus states.
- Responsive from 360 px up; no horizontal scroll at 360/768/1200 px.
- English only. Design direction: "warm academic" per spec.

---

### Task 1: Content data — publications, talks, timeline (verified links)

**Files:**
- Create: `docs/superpowers/plans/content-data.md` (working notes, committed)

**Interfaces:**
- Produces: the exact publication/talk/timeline entries Task 2 renders. Task 2 copies entries verbatim from `content-data.md`.

- [ ] **Step 1: Write the publication list with candidate links**

Entries (from CV Feb 2025 + Google Scholar), newest first. Candidate links to verify:

| # | Entry | Candidate link |
|---|---|---|
| 1 | Abdelghani R., Sauzéon H., Murayama K., Kidd C., Oudeyer P.-Y. (2025). *Students fail to ask in-context questions with ChatGPT and to accurately evaluate its answers.* (In revision) | none (search arXiv for it; else no link) |
| 2 | Laak K.-J., Abdelghani R., Aru J. (2024). *Personalisation is not Guaranteed: The Challenges of Using Generative AI for Personalised Learning.* Int. conf. on innovative technologies and learning, Springer, pp. 40–49 | https://doi.org/10.1007/978-3-031-65884-6_5 (verify; else Springer search) |
| 3 | Abdelghani R. (2024). *Guiding the minds of tomorrow: conversational agents to train curiosity and metacognition in young learners.* Doctoral dissertation, Université de Bordeaux | https://theses.hal.science/ (find exact record; else theses.fr search) |
| 4 | Abdelghani R., Wang Y.-H., Yuan X., Wang T., Lucas P., Sauzéon H., Oudeyer P.-Y. (2024). *GPT-3-driven pedagogical agents to train children's curious question-asking skills.* IJAIED 34(2), 483–518 — **Selected** | https://doi.org/10.1007/s40593-023-00340-7 (verify) |
| 5 | Abdelghani R., Sauzéon H., Oudeyer P.-Y. (2023). *Generative AI in the Classroom: Can Students Remain Active Learners?* arXiv:2310.03192 | https://arxiv.org/abs/2310.03192 |
| 6 | Abdelghani R., Law E., Desvaux C., Oudeyer P.-Y., Sauzéon H. (2023). *Interactive environments for training children's curiosity through the practice of metacognitive skills: a pilot study.* IDC '23, pp. 495–501 | https://doi.org/10.1145/3585088.3593904 (verify) |
| 7 | Xiao Z., Yuan X., Liao Q.V., Abdelghani R., Oudeyer P.-Y. (2023). *Supporting qualitative analysis with large language models: Combining codebook with GPT-3 for deductive coding.* IUI '23 Companion, pp. 75–78 — **Selected** | https://doi.org/10.1145/3581754.3584136 (verify) |
| 8 | Yuan X., Wang T., Wang Y.-H., Fine E., Abdelghani R., Lucas P., Sauzéon H., Oudeyer P.-Y. (2022). *Selecting better samples from pre-trained LLMs: A case study on question generation.* ACL 2023 Findings / arXiv:2209.11000 | https://arxiv.org/abs/2209.11000 |
| 9 | Abdelghani R., Oudeyer P.-Y., Law E., de Vulpillières C., Sauzéon H. (2022). *Conversational agents for fostering curiosity-driven learning in children.* IJHCS 167, 102887 — **Selected** | https://doi.org/10.1016/j.ijhcs.2022.102887 (verify) |
| 10 | Stower R., Abdelghani R., Tschopp M., Evangelista K., Chetouani M., Kappas A. (2022). *Exploring space for robot mistakes in child robot interactions.* Interaction Studies 23(2), 243–288 | https://doi.org/10.1075/is.21034.sto (verify) |

- [ ] **Step 2: Verify every candidate link**

Run for each URL:
```bash
curl -s -o /dev/null -w '%{http_code} %{url_effective}\n' -L --max-time 15 -A "Mozilla/5.0" "<url>"
```
Expected: 200 (301→200 fine). doi.org links may 403 on HEAD for some publishers — accept 200/302/403-from-publisher-paywall as "resolves"; replace anything that 404s with a verified alternative (WebSearch the title, prefer DOI > arXiv > publisher page). For entry 1 and 3, search for a public record; if none, render without link.

- [ ] **Step 3: Fix the talk/timeline data**

Talks (from CV): Cogni'classes webinar, Paris, Jan 2025 · AIED conference, Recife, Jul 2024 · GenAI in Education workshop at NeurIPS, New Orleans, Dec 2023 · IDC, New Orleans, Jun 2023 · CEU Conference on Cognitive Development, Budapest, Jan 2023 · IDC, Braga, Jan 2022 · EAET, Cambridge, Mar 2022 (Best presentation award). Workshop organization: Bordeaux Sept 2021 (assistive tech), Bordeaux Sept 2024 (inquiry & creativity in childhood), CEU Budapest symposium Jan 2023. PhD defense video: https://www.youtube.com/watch?v=6RQIQZORWro (id `6RQIQZORWro`).

Timeline (positions): Postdoc, Hector Research Institute, Tübingen (Nov 2024–present, advisor Kou Murayama) · Host lecturer, Université Côte d'Azur (Sept–Dec 2024) · Visiting researcher, Kidd Lab, UC Berkeley (Sept–Dec 2023, host Celeste Kidd) · Contractual lecturer, University of Bordeaux (2022–2023) · Research engineer, EvidenceB, Paris (2020) · Research intern, ISIR (2020) · Research engineer intern, Therapanacea (2019).
Education: PhD cognitive science, Inria/Université de Bordeaux (2024, advisors P.-Y. Oudeyer & H. Sauzéon) · MSc engineering sciences, Sorbonne (2020) · M.Eng intelligent systems, INSAT Tunis (2019).
Grants/awards: LEAD Intramural Grant €5,000 (2025) · UBGRS-Mob €4,500 (2023) · EAET best presentation (2022).

- [ ] **Step 4: Write `content-data.md` with the final verified entries and commit**

```bash
git add docs/superpowers/plans/content-data.md
git commit -m "docs: add verified content data for website"
```

### Task 2: Static site — HTML, CSS, JS, assets

**Files:**
- Create: `index.html`, `assets/css/style.css`, `assets/js/main.js`, `assets/img/.gitkeep`, `README.md`
- Copy: `/home/rania/Downloads/2 - CV RA.pdf` → `assets/cv-rania-abdelghani.pdf`

**Interfaces:**
- Consumes: entries from `content-data.md` verbatim.
- Produces: complete deployable site at repo root; portrait is a drop-in at `assets/img/portrait.jpg` (page falls back to a styled monogram block when absent — implemented as `<img>` with `onerror` swap to `.monogram` div, so adding the file later needs no code change).

- [ ] **Step 1: Invoke frontend-design skill, then write `index.html`** — sections in spec order: header/nav (sticky, anchors: About · Research · Publications · Talks · Experience · Contact), hero (name, title, tagline, monogram/portrait, icon links: email, Scholar https://scholar.google.com/citations?user=L5WCl5MAAAAJ, LinkedIn https://www.linkedin.com/in/abdelghanir-rania/, X https://x.com/RaniaABDBenAmar, CV button → `assets/cv-rania-abdelghani.pdf`), about (bio from spec §2), research (4 theme cards), publications (by year, Selected badges, Scholar link), talks (defense video facade + talk list), experience/education timeline + awards, contact footer. Meta: title "Rania Abdelghani — Cognitive Science & AI in Education", description, Open Graph, canonical `https://raniaabdelghani.github.io/`, JSON-LD Person (sameAs: Scholar/LinkedIn/X).
- [ ] **Step 2: Write `assets/css/style.css`** — warm-academic system per frontend-design skill: custom properties for palette (light+dark), type scale, spacing; responsive grid; print-friendly.
- [ ] **Step 3: Write `assets/js/main.js`** — mobile nav toggle, scroll-spy nav highlight (IntersectionObserver), email assembly (`rania.abdelghani` + `uni-tuebingen.de`), YouTube facade: thumbnail div → on click inject `<iframe src="https://www.youtube-nocookie.com/embed/6RQIQZORWro?autoplay=1">`.
- [ ] **Step 4: Copy CV, write README** (how to: swap portrait, update CV, edit publications — plain-HTML editing notes for a non-developer).
- [ ] **Step 5: Local verification**

```bash
python3 -m http.server 8901 --directory /home/rania/code/raniasWebSite &
curl -s -o /dev/null -w '%{http_code}\n' http://localhost:8901/          # expect 200
grep -c 'href="/' index.html                                             # expect 0 (no root-absolute paths)
grep -ci 'uni-tuebingen.de' index.html                                   # expect 0 outside noscript obfuscated form
```
Screenshot check at 360/768/1200 px if a headless browser is available; otherwise manual review of the served page.

- [ ] **Step 6: Commit**

```bash
git add index.html assets/css/style.css assets/js/main.js assets/cv-rania-abdelghani.pdf assets/img/.gitkeep README.md
git commit -m "feat: add academic website (single-page, static)"
```

### Task 3: Deploy to GitHub Pages and verify

**Files:** none new (repo/remote operations)

- [ ] **Step 1: Create public repo under RaniaAbdelghani and push**

```bash
gh repo create raniaabdelghani.github.io --public --source /home/rania/code/raniasWebSite --remote origin --push
```
Expected: repo created, `main` pushed. (User-site repos auto-enable Pages from `main` root.)

- [ ] **Step 2: Confirm Pages is active**

```bash
gh api repos/RaniaAbdelghani/raniaabdelghani.github.io/pages --jq '{status: .status, url: .html_url}'
```
Expected: `https://raniaabdelghani.github.io/`. If 404 (Pages not auto-enabled): `gh api -X POST repos/RaniaAbdelghani/raniaabdelghani.github.io/pages -f 'source[branch]=main' -f 'source[path]=/'`.

- [ ] **Step 3: Wait for build, verify live**

```bash
for i in $(seq 1 12); do code=$(curl -s -o /dev/null -w '%{http_code}' https://raniaabdelghani.github.io/); echo "$code"; [ "$code" = "200" ] && break; sleep 15; done
curl -s https://raniaabdelghani.github.io/ | grep -o '<title>[^<]*</title>'
```
Expected: 200 and the page title. Then load the live URL in a browser for a visual pass.
