# Portfolio

Personal portfolio built with Next.js, React 19, and Tailwind CSS v4. Showcases AI, backend, and full-stack projects with dark/light theming, animated cards, and production SEO.

## Tech Stack

- **Next.js** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS v4** · **Google Fonts** via `next/font`

## Features

- Hero, About, Experience, Projects, Stack, and Contact sections — fully responsive
- Dark/light theme toggle
- Animated reveal, hover states, and 3D tilt on pointer devices
- SEO metadata, Open Graph image, `robots.txt`, `sitemap.xml`
- Resume download: [`public/Abdul_Hayy_Khan_Resume.pdf`](public/Abdul_Hayy_Khan_Resume.pdf)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Start production build |
| `npm run lint` | Lint check |

## Environment Variables

No config required to run locally. For deployment:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Falls back to Vercel deployment URL in production, `http://localhost:3000` locally.

## Deployment

Deploy to Vercel:

1. Push to GitHub
2. Import in Vercel
3. Set `NEXT_PUBLIC_SITE_URL` for canonical and social URLs
4. Deploy with default Next.js settings

## Project Structure
```
app/
├── page.tsx                    # Landing page, theme state
├── components/
│   └── portfolio-sections.tsx  # All portfolio sections
├── lib/
│   ├── portfolio-data.ts       # Projects, stats, resume path
│   └── site-config.ts          # Site metadata and URL helper
├── opengraph-image.tsx         # Social preview image
├── robots.ts                   # Robots metadata route
└── sitemap.ts                  # Sitemap route
public/                         # Static assets, resume PDF, favicon
```

## 📄 License

This project is open-source and available for educational and commercial use under the MIT License.

---

**Made with ❤️ by [Abdul Hayy Khan](https://www.linkedin.com/in/abdulhayykhan/)**