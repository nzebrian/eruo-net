# EruoNet Milestone 2 — Identity, Organizations & SaaS Core

**Status: ACTIVE — LOCKED TO IMPLEMENTATION**

## Objective

Build the secure identity and multi-tenant SaaS foundation required by EruoNet Cloud before dashboards, billing, network simulation, or production deployment.

## Scope

- User identity/account lifecycle foundation.
- Registration and secure login/session architecture.
- Mandatory email verification.
- Password hashing, reset/recovery architecture, session revocation and account-state controls.
- Organization/tenant foundation for User, Education/Schools and Enterprise SaaS.
- Role and permission model with least privilege.
- Control Center identity/administration foundation.
- SMS OTP capability and configuration model, **disabled by default** and controlled only by authorized Control Center settings.
- Didit integration foundation for Education/Schools and Enterprise verification flows, with credentials/configuration externalized and disabled until configured.
- Offline-purchase entitlement foundation where it does not require later payment-gateway processing.
- Audit events for security-sensitive identity and organization actions.

## UX/UI

All M2 user-facing identity flows use the approved EruoNet **light** visual direction. No dark dashboard default.

Required flows include registration, email verification, login, recovery, organization selection/context, access denied, account/security settings and Control Center configuration surfaces needed by M2.

## Explicitly out of scope

Do not implement M3 dashboard production UI, M4 Paystack/Flutterwave processing or subscriptions, M5 commercial licensing/support workflows, M6 XAMPP/web installer, or M7+ simulation domains in M2.

## Security requirements

- Email verification is mandatory before normal account access to protected SaaS functionality.
- Passwords are never stored in plaintext.
- Sessions/tokens are revocable and protected against common replay/session abuse.
- Authorization is deny-by-default and tenant-scoped.
- Control Center privileges require explicit roles/permissions.
- SMS OTP remains disabled by default; no UI or configuration path may accidentally enable it without authorized Control Center action.
- Secrets and Didit credentials use environment/secret configuration and are never committed.
- Security-sensitive events are auditable.
- Rate limiting/abuse controls must protect authentication and verification endpoints.
- No authentication bypass, test backdoor, hard-coded credentials or production-only secret.

## Acceptance gate

M2 is complete only when the implementation, automated tests, security checks, CI and applicable Docker checks pass and a GitHub PR is reviewed and manually accepted/merged.
