# Contributing

## Milestone discipline

Before making changes, read `docs/product/baseline.md`. Milestone 1 work must not implement later-milestone product capabilities.

## Local validation

Run the CI-equivalent command before opening a pull request:

```bash
npm run ci
```

Run Docker configuration validation when Docker is available:

```bash
docker compose -f infra/docker/docker-compose.dev.yml config
```

## Security expectations

- Never commit `.env` files, private keys, tokens, credentials, or production connection strings.
- Add configuration through `.env.example` using placeholders only.
- Keep services least-privilege by default.
- Document architectural decisions in `docs/architecture/decisions/`.
