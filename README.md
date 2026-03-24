# Portfolio Website

Simple static portfolio site hosted from this repository.

## Project Structure

- `index.html` - Main page markup.
- `assets/css/styles.css` - Site styles.
- `assets/js/projects.js` - Project card data and rendering logic.
- `assets/images/` - Site images grouped by type (`hero`, `icons`, `projects`).
- `assets/docs/` - Downloadable documents (resume PDF).
- `assets/favicon/` - Favicon assets.
- `CNAME` - Custom domain config for GitHub Pages.

## Run Locally

Because this is a static site, you can run it with any local web server.

### Option 1: Python (quickest)

From the project root:

```bash
python -m http.server 8000
```

Then open: [http://localhost:8000](http://localhost:8000)

### Option 2: VS Code / Cursor Live Server

1. Install the Live Server extension (if not installed).
2. Right-click `index.html`.
3. Click **Open with Live Server**.

## Editing Content

- Update project cards in `assets/js/projects.js` inside the `projects` array.
- Update layout and colors in `assets/css/styles.css`.
- Update core page content (name, links, resume path) in `index.html`.

## Deploy

Push changes to the default branch used by GitHub Pages for this repo.
