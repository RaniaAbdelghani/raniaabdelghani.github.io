# raniaabdelghani.github.io

Personal academic website of Dr. Rania Abdelghani — live at
**https://raniaabdelghani.github.io**

Plain HTML + CSS + a little vanilla JS. No build step: what's in this repo is
exactly what GitHub Pages serves. Push to `main` and the site updates in about
a minute.

## Common edits

| I want to… | Do this |
|---|---|
| Add my photo | Save it as `assets/img/portrait.jpg` (portrait orientation, ~640×800 px works well). Nothing else to change. |
| Update my CV | Replace `assets/cv-rania-abdelghani.pdf` with the new PDF (keep the same filename). |
| Add a publication | In `index.html`, find `<!-- ===== PUBLICATIONS ===== -->`, copy an existing `<li class="pub">…</li>` block into the right year, edit title/authors/venue/link. Add `pub-selected` to the `<li>` class for a ★ badge. |
| Add a talk | Copy a `<li>` inside `class="talk-list"` and edit the date and text. |
| Change the bio | Edit the paragraphs in the `id="about"` section. |
| Change colors | Edit the variables at the top of `assets/css/style.css` (`--accent`, etc.). Dark-mode colors are in the `@media (prefers-color-scheme: dark)` block. |

## Editing workflow

```bash
git pull
# edit files…
python3 -m http.server 8000   # preview at http://localhost:8000
git add <changed files>
git commit -m "content: describe the change"
git push
```

The email address is assembled in `assets/js/main.js` (not written in the HTML)
to make scraping harder — if it ever changes, update it there.
