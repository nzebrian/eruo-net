# Milestone 2 — Identity & SaaS Core

This change implements the approved M2 identity and SaaS foundation while preserving the locked product baseline.

## Included
- Registration and mandatory email verification
- Secure authentication, sessions, logout and password recovery
- Organizations and tenant isolation
- RBAC and centralized authorization
- Control Center identity administration foundation
- SMS OTP architecture, disabled by default
- Didit verification integration foundation for Education and Enterprise
- Offline entitlement foundation
- PostgreSQL-compatible persistence migration
- Automated identity/security/tenant tests

## Explicitly excluded
No payment processing, subscriptions, full billing, commercial licensing system, XAMPP installer, simulation engines, topology editor, production deployment, or AI fraud analysis.

## Validation
Codex reports `npm run ci` passing, with 12 tests passing. Docker Compose validation could not run locally because Docker was unavailable and must be verified by GitHub Actions.

## Merge policy
Target: `main`. Do not merge automatically. Human review and successful CI are required.
