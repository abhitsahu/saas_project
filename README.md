# SaaS Project – React + Vite + TypeScript

## Quick start

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Build: `npm run build`
4. Preview build: `npm run preview`

## Tech

- React 19, Vite 7, TypeScript 5
- Tailwind CSS v4 (with custom theme via `@theme`)
- ESLint, Prettier, Husky, lint-staged
- Jest + React Testing Library

## Environment variables

Create a `.env` file in the project root:

```
VITE_API_BASE_URL=http://localhost:5173
VITE_FEATURE_FLAG=enabled
```

Only variables prefixed with `VITE_` are exposed to the client. See `src/utils/env.ts` for typed helpers:

- `getRequiredEnv('VITE_API_BASE_URL')` throws if missing
- `getOptionalEnv('VITE_FEATURE_FLAG', 'disabled')`

## Scripts

- `npm run dev` – start dev server
- `npm run build` – type-check and build
- `npm run preview` – preview build
- `npm run lint` / `npm run lint:fix` – check/fix lint issues
- `npm run format:check` / `npm run format:fix` – Prettier
- `npm run test` – run unit tests

## Testing

- Framework: Jest (jsdom) + React Testing Library
- Setup file: `src/test/setupTests.ts` (adds jest-dom, polyfills)
- Sample test: `src/__ tests __/App.test.tsx`

## Git hooks

Husky runs `lint-staged` on pre-commit to catch issues before pushing.

## Project layout

- `src/components` – UI components
- `src/pages` – page-level components (optional)
- `src/routes` – routing setup (optional)
- `src/utils/env.ts` – env helpers
- `src/test` – test setup and mocks

## Contributing

1. Fork and create a feature branch
2. Run `npm run lint` and `npm run test` before committing
3. Open a PR with a clear description

## License

MIT
