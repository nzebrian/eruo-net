# M2 Execution Specification

**Milestone:** M2 — Identity, Organizations & SaaS Core  
**Branch:** `m2-identity-saas-core`  
**Status:** ACTIVE

## Execution order

1. Inspect the M1 repository and locked baseline.
2. Establish M2 domain contracts and data model.
3. Implement identity/account lifecycle.
4. Implement mandatory email verification.
5. Implement secure authentication/session boundaries.
6. Implement tenant/organization model for User, Education/Schools and Enterprise.
7. Implement roles/permissions and tenant-scoped authorization.
8. Implement Control Center identity/configuration foundation.
9. Implement SMS OTP capability as **disabled by default**, with authorized Control Center configuration as the only activation path.
10. Implement Didit integration foundation for Education/Schools and Enterprise without committing provider secrets.
11. Implement offline-purchase entitlement foundation without implementing payment gateways.
12. Implement security/audit events and abuse controls.
13. Add unit/integration/security tests for all executable M2 behavior.
14. Run lint, formatting, static analysis and security checks.
15. Run Docker validation and the full CI-equivalent suite.
16. Review the diff for M3+ leakage.
17. Open the M2 PR against `main`.
18. Do not merge until human acceptance.

## Required identity behavior

### Registration

- Accept the minimum required account information.
- Validate and normalize identity data.
- Hash passwords using an approved password-hashing mechanism.
- Create the account in an unverified state.
- Send a verification message through the configured email provider abstraction.
- Do not grant protected SaaS access before verification.

### Email verification

- Verification is mandatory.
- Tokens are high-entropy, single-use, time-limited and safely stored/represented.
- Reuse, expiration and replay are handled safely.
- Verification events are auditable.

### Login/session

- Verified users can authenticate through the approved login flow.
- Failed authentication is handled without leaking account-sensitive information.
- Sessions are revocable and have explicit lifecycle rules.
- Logout/revocation invalidates the applicable session.
- Authentication endpoints have abuse/rate controls.

## Organization and tenancy

Implement a tenant-safe model supporting:

- Individual/User SaaS context.
- Education/School organization context.
- Enterprise organization context.
- Organization membership.
- Organization roles.
- Active organization context.
- Strict tenant isolation in authorization decisions.

No organization may read or mutate another organization's protected resources through an ordinary user path.

## Roles and permissions

Use explicit permissions and least privilege. Avoid hard-coded role checks scattered throughout the application. Authorization must be centrally testable and deny by default.

The initial Control Center authority model must be separated from ordinary tenant roles.

## SMS OTP

M2 establishes the capability and configuration contract only as required by the locked baseline.

Default state:

`SMS_OTP_ENABLED=false`

The capability must remain disabled unless an authorized Control Center action enables it. Provider credentials are externalized. No production credentials are committed.

## Didit foundation

Provide an integration boundary/adapter and configuration contract for approved Education/Schools and Enterprise verification flows. Provider calls must be isolated behind an integration boundary so provider changes do not leak into core identity/domain logic.

Do not fabricate provider responses or claim production verification if credentials/endpoints are not configured.

## Offline purchase entitlement foundation

Create only the entitlement/domain contracts required to represent an approved offline purchase without implementing Paystack/Flutterwave. Offline entitlements must still respect licensing/authorization rules and must not create a license bypass.

## Audit and security events

Record security-relevant events such as registration, verification, authentication success/failure, logout/revocation, password recovery actions, role/permission changes, organization membership changes and Control Center security configuration changes.

Do not log passwords, access tokens, OTP values or provider secrets.

## M2 non-goals

Do not implement:

- Paystack processing.
- Flutterwave processing.
- Subscription billing.
- Production payment ticketing.
- Full commercial licensing system.
- XAMPP web installer.
- Network/device simulation.
- Topology editor.
- CCTV simulation.
- VoIP/IP-PBX simulation.
- ISP simulation.
- AI fraud analysis.
- Production deployment.

Those remain assigned to later milestones in `docs/product/master-roadmap.md`.

## Definition of Done

- All M2 scope is implemented as real, tested functionality.
- Mandatory email verification works.
- Tenant isolation and authorization tests pass.
- SMS OTP exists as a capability but is disabled by default.
- Didit integration boundary is tested without secrets.
- Security/audit behavior is tested.
- No later-milestone implementation leaked into M2.
- CI and security checks pass.
- Docker validation passes where supported.
- PR is opened against `main`.
- Human acceptance occurs before merge.
