# evanmarshall.dev Portfolio

## Development

Use pnpm to install and run.

```bash
pnpm install
pnpm dev
```

## Testing

- Unit tests: Vitest + Testing Library
- E2E tests: Playwright

```bash
pnpm exec vitest run
pnpm exec playwright test
```

## Lighthouse CI (optional)

Run a quick performance audit against the built app.

```bash
pnpm build
pnpm run lh:ci
```
