# Arbaaz Ali Jaffer — Portfolio

A minimal, sleek personal portfolio built with **React + Vite**. Features a
light/dark theme, an interactive "data network" hero background, a live code
terminal, and an animated tech-stack ticker.

🔗 **Live site:** <https://arbzzz04.github.io/>

## Tech

- React + Vite
- Plain CSS with custom properties for theming
- `react-icons` for brand logos

## Develop

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build into /dist
npm run preview  # preview the production build locally
```

## Editing content

All personal content (name, bio, skills, projects, tech list) lives in a single
file: [`src/content.js`](src/content.js). Edit it there and everything updates.

## Deployment

Pushing to `main` triggers a GitHub Actions workflow
([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) that builds the
site and publishes it to GitHub Pages automatically.
