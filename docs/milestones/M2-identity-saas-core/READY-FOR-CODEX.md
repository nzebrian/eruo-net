# M2 Codex Execution

Paste the following into Codex:

Implement EruoNet Milestone 2 on branch `m2-identity-saas-core`.

Read `AGENTS.md`, `docs/product/baseline.md`, `docs/product/master-roadmap.md`, `docs/milestones/M2-identity-saas-core/README.md`, and `docs/milestones/M2-identity-saas-core/EXECUTION.md` first.

Build the actual M2 identity SaaS core. Do not merely document it. Preserve the locked baseline and do not implement M3+.

M2 must include registration, mandatory email verification, secure login/logout/session handling, password recovery, organizations and tenant isolation, RBAC, Control Center identity administration foundation, SMS OTP provider architecture disabled by default, Didit verification foundation for Education and Enterprise, offline entitlement foundation, PostgreSQL-compatible persistence, audit/security events, API boundary adapters, and comprehensive automated tests.

Do not implement payments, subscriptions, full billing, commercial licensing, XAMPP/web installer, simulation engines, device emulation, topology editor, ISP/CCTV/IP-PBX simulation, production deployment, dashboards, or AI fraud analysis.

Use secure password hashing, secure random tokens, hashed token storage, expiry/replay protection, rate limits, deny-by-default authorization, tenant isolation, secure sessions/cookies, audit logging, environment-only secrets, and no bypasses/backdoors.

Run `npm test`, `npm run validate`, `npm run lint`, `npm run format:check`, `npm run security:check`, and `npm run ci`. Run Docker Compose config validation if Docker is available.

Fix M2 defects you find. Do not weaken tests or security checks. Keep the branch `m2-identity-saas-core`. Do not merge `main`.

At completion report the exact final commit SHA, files changed, tests, security results, Docker result, and remaining blockers.
