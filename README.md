# EruoNet Cloud

EruoNet Cloud is a cloud SaaS foundation for a multi-vendor network, ISP, CCTV, VoIP, fiber, wireless, and infrastructure simulation platform.

This repository currently contains **Milestone 1 only**: repository structure, documentation, development scaffolding, CI, Docker development baseline, and security guardrails. It intentionally does **not** implement product features reserved for later milestones.

## Current milestone

Milestone 1 establishes:

- Approved monorepo boundaries for applications, packages, infrastructure, tests, and documentation.
- Locked product baseline documentation.
- Architecture, security, operations, contribution, and Definition-of-Done guidance.
- GitHub Actions CI foundation.
- Initial Docker Compose development validation foundation.
- Repository validation scripts and tests for executable tooling.

## Repository layout

```text
apps/                  Application boundaries
  api/                 API service boundary
  control-center/      Operations/admin Control Center boundary
  simulator/           Simulator service boundary
  web/                 Web application boundary
packages/              Domain and shared package boundaries
  billing/
  cctv-engine/
  device-sdk/
  geospatial-engine/
  identity/
  isp-engine/
  protocol-engine/
  shared/
  simulation-core/
  topology-engine/
  voip-engine/
docs/                  Product, architecture, security, and operations docs
infra/                 Local, CI, and future infrastructure assets
scripts/               Repository validation tooling
tests/                 Tests for repository tooling and future integration checks
.github/workflows/     CI workflows
```

## Quick start

```bash
npm test
npm run validate
npm run lint
npm run format:check
npm run security:check
```

Docker validation requires Docker to be installed:

```bash
docker compose -f infra/docker/docker-compose.dev.yml config
```

## Milestone guardrails

Do not implement the following in Milestone 1:

- Authentication functionality.
- Payment processing or subscriptions.
- Network simulation functionality.
- Device emulation.
- CCTV, IP PBX, or ISP simulation.
- GUI topology editor.
- Production deployment.
- AI fraud analysis.

See `docs/product/baseline.md` for the locked product baseline.
