# Security Policy

## Reporting vulnerabilities

Report suspected vulnerabilities privately to the repository maintainers. Do not disclose exploitable details publicly until maintainers have confirmed remediation guidance.

## Baseline controls

- Secrets must not be committed.
- Runtime configuration is environment-separated.
- CI runs dependency review, secret scanning, and static repository validation.
- Docker development services use least-privilege defaults where practical.
- Production deployment is out of scope for Milestone 1.
