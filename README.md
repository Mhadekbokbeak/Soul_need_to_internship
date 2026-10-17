# Editorial developer portfolio

A responsive, journal-inspired portfolio built with React, Vite, and Tailwind CSS. Project previews are made from local HTML and CSS artwork; no stock imagery or external project screenshots are required.

## Getting started

```sh
npm install
npm run dev
```

Run the production build and lint checks with `npm run build` and `npm run lint`.

## Updating the content

- Edit `src/data/profile.js` to change the name, role, introduction, skills, GitHub profile, and portfolio year.
- Edit `src/data/projects.js` to add or update project descriptions, responsibilities, technologies, and details.
- When a project is ready to show, put its screenshot in `public/projects/` and set its `image` path in `src/data/projects.js` (for example, `image: '/projects/my-project.webp'`). The same screenshot will appear in the project preview and detail page. Optionally set `imageAlt` to describe the screenshot for screen readers. Leave `image` empty to keep the built-in neutral artwork.
- Set each project's `demoUrl` and `githubUrl` in `src/data/projects.js` to enable its external links on the detail page. Leave either value empty while that destination is unavailable.
- Project artwork variants are rendered by `src/components/projects/PreviewArtwork.jsx` and styled in `src/index.css`.
- Update the document title and description in `index.html` when changing the profile.

The included projects are illustrative independent concepts. Replace their copy and add live/source links only when those destinations are available.

## Component structure

- `src/App.jsx` coordinates project detail navigation, escape handling, and focus/scroll restoration.
- `src/components/layout/` contains the shared navigation and footer.
- `src/components/sections/` contains the Home, About, and Projects sections.
- `src/components/projects/` contains project previews, cards, and the detail view.
- `src/components/ui/` contains small reusable presentation components.
