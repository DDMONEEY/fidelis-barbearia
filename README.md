# Fidelis Barbershop

React / Express / tRPC / Drizzle starter, adapted from the Sandbox web-db-user template.

## Deploy on Vercel

This site is configured as a static Vite deployment in `vercel.json`:

- Install command: `pnpm install --frozen-lockfile`
- Build command: `pnpm build:static`
- Output directory: `dist/public`
- No server, database, or environment variables are required for the public site.

Import the repository into Vercel and keep the project root at the repository root. Vercel reads `vercel.json` automatically. All gallery images are included under `client/public/images` and are copied into the build output, so production does not depend on Manus preview storage.

- `pnpm dev`: development server; honors `PORT` (default 3000).
- `pnpm build` / `pnpm start`: build and serve `dist/index.js` and `dist/public/`.
- `pnpm db:migrate`: apply checked-in migrations. `pnpm db:push`: generate and apply new schema changes.
- `pnpm check` / `pnpm test`: types and application tests.

Start with the Webdev skill's default-template guide. Platform login, storage, payments and service contracts live in its shared references; read the relevant capability before extending its helper.

`server/_core/publicConfig.ts` exposes only named public runtime values. Private keys stay server-side. The platform serves managed `/manus-storage/` assets; the application does not register a second proxy. The public site uses its checked-in `/images/` assets so the gallery is independent of platform-managed storage.

Platform configuration is readable and editable through `webdev.config`. Default settings are initial values, not enforced constraints. The agent may modify the files, commands and configuration or follow the flexible guide for another stack.
