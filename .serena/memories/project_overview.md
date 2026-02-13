# Wedding Invitation Project

## Purpose
Bilingual (EN/JP) interactive wedding invitation with 3D envelope animation and Gemini-powered AI guest assistant.

## Tech Stack
- React 19 + TypeScript (strict mode)
- Vite 7 (bundler)
- Tailwind CSS v4 (via @tailwindcss/vite plugin)
- Google Gemini AI (@google/genai)
- pnpm (package manager)

## Architecture (Clean Architecture)
```
src/
├── domain/           # Types, constants (no framework deps)
│   ├── types/
│   └── constants/
├── infrastructure/   # External services (Gemini API)
│   └── api/
├── application/      # Custom hooks (business logic orchestration)
│   └── hooks/
├── presentation/     # UI components and pages
│   ├── components/
│   └── pages/
├── App.tsx           # Root component
├── main.tsx          # Entry point
└── index.css         # Tailwind + custom styles
```

## Commands
- `pnpm dev` - Start dev server
- `pnpm build` - Type check + build
- `pnpm lint` - ESLint
- `pnpm preview` - Preview production build

## Path Alias
- `@/` → `./src/`

## Fonts
- Playfair Display (serif)
- Great Vibes (script/cursive)
- Noto Serif JP (Japanese)
- Cinzel (headings)

## Environment
- `.env.local` contains `GEMINI_API_KEY`
