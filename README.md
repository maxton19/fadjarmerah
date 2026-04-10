# Fadjar Merah Indonesia

Next.js 16 website configured for Cloudflare deployment with the OpenNext adapter.

## Production deployment target

This project is not a static export because it includes a route handler at `src/app/api/contact/route.ts`.
Cloudflare's current guidance is:

- Use Cloudflare Pages only for static Next.js exports.
- Use the OpenNext adapter to deploy full-stack Next.js apps on Cloudflare Workers.

The Cloudflare dashboard still exposes this under the broader `Workers & Pages` area, but the runtime for this app should be Workers/OpenNext.

## Scripts

- `npm run dev`: local Next.js development
- `npm run build`: production Next.js build
- `npm run preview`: build and preview on the Cloudflare runtime
- `npm run deploy`: build and deploy with Wrangler/OpenNext
- `npm run upload`: build and upload a new Worker version
- `npm run lint`: lint the codebase
- `npm run cf-typegen`: generate Cloudflare env typings

## Cloudflare files

- `wrangler.jsonc`: Worker entrypoint, compatibility flags, assets binding
- `open-next.config.ts`: OpenNext adapter config
- `public/_headers`: immutable cache headers for Next static assets

## Required environment

For local Cloudflare preview, add a `.dev.vars` file:

```env
NEXTJS_ENV=development
```

If you later wire the contact form to a real email provider, add the relevant secrets with Wrangler/Cloudflare and do not commit them.
