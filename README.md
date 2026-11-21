# Gary Ferdinand Wahyudi — Personal Portfolio (`Emazer01.github.io`)

Modern, minimalist, static personal portfolio website built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **Lucide React** for deployment on **GitHub Pages** (`https://Emazer01.github.io/`).

## Features

- **Editorial Technology Identity**: Deep Navy (`#0B1220`), Dark Slate (`#111C2D`), White (`#F5F7FA`), Muted Gray (`#9AA9BC`), Gold (`#D6B56D`), and Tech Blue (`#38BDF8`) palette with Dark Mode default and Light/System theme support.
- **Live GitHub Integration (`src/services/githubService.ts`)**:
  - Automatically fetches public profile info and paginated public repositories from `https://api.github.com/users/Emazer01`.
  - Caches API responses in `localStorage` (30-minute TTL) to prevent rate limiting.
  - Provides a verified offline/rate-limit fallback snapshot (`src/data/projects.ts`) merged with curated `PROJECT_OVERRIDES`.
  - Computes language distribution statistics and exposes manual refresh controls.
- **Featured Engineering Systems Showcase**: Dedicated architecture breakdowns and custom SVG thumbnails for **SITRAK-AI**, **SIKAPTA AI**, **Tani-Cek AI**, **Jaga Resimen**, and **Tunkin Web**, plus a searchable, filterable, sortable directory of all 25 public repositories.
- **Centralized Editable Content**: All personal profile details, education, experience, technical skills, certifications, and project overrides are cleanly separated into `src/data/` and `src/config/site.ts`.
- **GitHub Pages Ready**: Configured with `base: '/'` in `vite.config.ts`, custom `public/404.html`, SEO/Open Graph tags, and automated GitHub Actions deployment (`.github/workflows/deploy.yml`).

## Folder Structure

```text
├── .github/workflows/deploy.yml
├── public/
│   ├── documents/Gary-Ferdinand-Wahyudi-CV.pdf
│   ├── 404.html
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── common/
│   │   ├── layout/
│   │   ├── navigation/
│   │   ├── projects/
│   │   └── ui/
│   ├── config/site.ts
│   ├── data/
│   │   ├── certifications.ts
│   │   ├── education.ts
│   │   ├── experience.ts
│   │   ├── profile.ts
│   │   ├── projects.ts
│   │   └── skills.ts
│   ├── hooks/
│   ├── sections/
│   │   ├── About/
│   │   ├── Certifications/
│   │   ├── Contact/
│   │   ├── Education/
│   │   ├── Experience/
│   │   ├── Hero/
│   │   ├── Projects/
│   │   └── Skills/
│   ├── services/githubService.ts
│   ├── styles/globals.css
│   ├── types/portfolio.ts
│   ├── utils/formatters.ts
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

## Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Start Vite development server
npm run dev

# 3. Type-check and build production bundle
npm run build

# 4. Preview production build locally
npm run preview
```

## Customization Guide

1. **Email & Contact Form**: Update `siteConfig.contact.email` and optionally `siteConfig.contact.formEndpoint` in `src/config/site.ts`.
2. **Profile & Portrait**: Replace the avatar URL in `src/data/profile.ts` or place a portrait in `public/images/` and update `avatarUrl`.
3. **CV Document**: Replace `public/documents/Gary-Ferdinand-Wahyudi-CV.pdf` with your final PDF resume.
4. **Education, Experience & Credentials**: Update `src/data/education.ts`, `src/data/experience.ts`, and `src/data/certifications.ts` to replace editable placeholders with confirmed dates and distinctions.
5. **Project Overrides**: Customize titles, descriptions, screenshots (`customThumbnailUrl`), or featured flags in `PROJECT_OVERRIDES` inside `src/data/projects.ts`.

## Deploying to GitHub Pages (`Emazer01/Emazer01.github.io`)

1. Create or open the repository `Emazer01/Emazer01.github.io` on GitHub.
2. Push this project to the `main` branch.
3. In the repository **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will automatically install dependencies, build `./dist`, and deploy to `https://Emazer01.github.io/`.
