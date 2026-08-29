# Security Baseline

## Controls

- No committed secrets: `.env` and common key material are ignored, while `.env.example` provides safe placeholders.
- Environment separation: local configuration uses explicit `ERUONET_ENV=development` defaults.
- Dependency scanning: CI includes dependency review for pull requests.
- Secret scanning: CI includes a TruffleHog filesystem scan.
- Static validation: repository scripts verify required files, boundaries, and risky secret patterns.
- Least privilege: development containers avoid privileged mode and use local-only defaults.

## Out of scope

Production deployment hardening, authentication, authorization, billing, and fraud-analysis security controls are deferred to later milestones.
