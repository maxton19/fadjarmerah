# Deploy ke Cloudflare Pages

## Build Configuration

| Setting | Value |
|---------|-------|
| **Framework preset** | `None` |
| **Build command** | `npm run build:cloudflare` |
| **Build output directory** | `.open-next/assets` |
| **Root directory** | `/` |

## Environment Variables

Tambahkan di Settings → Environment variables:

| Variable | Value |
|----------|-------|
| `NODE_VERSION` | `22` |
| `NEXT_TELEMETRY_DISABLED` | `1` |

## Build Commands (Local)

```bash
# Development
npm run dev

# Build untuk Cloudflare
npm run build

# Preview locally
npm run preview

# Deploy
npm run deploy
```

## Troubleshooting

### Error: "Could not find compiled Open Next config"
Pastikan build command menggunakan `npm run build` (bukan `next build`)

### Error: "nodejs_compat not enabled"
Sudah diatur di `wrangler.jsonc` dengan `"compatibility_flags": ["nodejs_compat"]`

### Build timeout
Build OpenNext membutuhkan waktu 5-10 menit. Pastikan timeout di Cloudflare Pages cukup.

## File Konfigurasi Penting

- `wrangler.jsonc` - Konfigurasi Worker Cloudflare
- `open-next.config.ts` - Konfigurasi OpenNext
- `package.json` - Build scripts
- `.node-version` - Node.js version (v22)
