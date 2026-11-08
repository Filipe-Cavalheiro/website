# Filipe Cavalheiro - personal website

| File | Content |
|---|---|
| `index.html` | Short intro and highlights |
| `research.html` | M.Sc. thesis, APCA CONTROLO 2026 and YEF-ECE 2025 papers (abstracts, links), work in preparation |
| `projects.html` | Projects in detail: what, why, how, tech, links |
| `about.html` | Education, experience, awards, skills, languages, contact |
| `style.css` | The only stylesheet (light/dark via `prefers-color-scheme`) |
| `gallery.js` | The only script: a photo/video viewer for `.gallery` blocks (without it, thumbnails link to the files) |
| `assets/` | Photos, screenshots and paper figures; `assets/gallery/<project>/` holds web-sized gallery photos, `-thumb.jpg` thumbnails and re-encoded videos |

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

## Live site

Published with GitHub Pages from `main`, folder `/ (root)`:
**https://filipe-cavalheiro.github.io/website/**

Every push to `main` redeploys it within a minute or two. All links between pages are relative, so
the same files also work under `https://filipe-cavalheiro.github.io/` if they are ever moved to a
repository named `Filipe-Cavalheiro.github.io`.
