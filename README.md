# Filipe Cavalheiro - personal website

| File | Content |
|---|---|
| `index.html` | Short intro and highlights |
| `research.html` | M.Sc. thesis, APCA CONTROLO 2026 and YEF-ECE 2025 papers (abstracts, links), work in preparation |
| `projects.html` | Projects in detail: what, why, how, tech, links |
| `about.html` | Education, experience, awards, skills, languages, contact |
| `style.css` | The only stylesheet (light/dark via `prefers-color-scheme`) |
| `assets/` | photo|

The sphere on the home page is an inline SVG of a Fibonacci lattice (160 points), the point
distribution used in the encirclement research. Its slow rotation is pure CSS and stops when the
visitor prefers reduced motion.

## View locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

## Things to confirm

Facts that need your confirmation are marked in the HTML with `<!-- TODO: ... -->`:

```bash
grep -n "TODO" *.html
```

## Deploy for free on GitHub Pages (later)

This repository is **private**. On a free GitHub account, Pages only publishes from public
repositories (private-repo Pages needs GitHub Pro), and a published site is public anyway. When ready:

1. Resolve the TODOs.
2. Either make this repository public (Settings → General → Danger Zone → Change visibility), or
   push the same files to a new public repository named `Filipe-Cavalheiro.github.io`.
3. Settings → Pages → Build and deployment → Source: *Deploy from a branch*, branch `main`, folder `/ (root)`.
4. The site appears at `https://filipe-cavalheiro.github.io/` (user-site repository) or
   `https://filipe-cavalheiro.github.io/<repo>/` within a minute or two.

All links between pages are relative, so the site works at either address.
