# EruoNet Master Implementation Roadmap

Status: LOCKED TO IMPLEMENTATION

This document is the implementation registry for EruoNet Cloud. Requirements approved in project discussions are assigned to milestones here and must not be silently forgotten, removed, reinterpreted, or implemented in an earlier milestone without change control.

## Delivery rule

Each milestone is executed as: specification -> branch -> implementation -> tests -> security review -> CI/Docker validation -> PR -> human acceptance/merge. A milestone must not silently implement later-milestone functionality.

## Milestones

### M1 — Cloud SaaS Engineering Foundation — ACCEPTED / MERGED
- Modular monorepo foundation.
- Web, API, Control Center, simulator boundaries.
- Domain package boundaries.
- Architecture, product, security and operations documentation.
- CI, Docker development foundation, validation and secret-safety controls.

### M2 — Identity, Organizations & SaaS Core — ACTIVE
- Identity foundation and account lifecycle.
- Mandatory email verification.
- Login/session architecture and secure authorization boundaries.
- User, Education and Enterprise SaaS tenancy/organization foundations.
- Roles and permissions.
- Control Center identity/administration foundations.
- SMS OTP capability architected for future activation but disabled by default and controlled from Control Center.
- Didit verification integration foundation for Education/Schools and Enterprise.
- Offline-purchase entitlement foundation where it does not require the later payment gateway implementation.

### M3 — Dashboards, Control Center & Administration
- Production SaaS dashboard UX for User, Education and Enterprise.
- Light-theme design system and responsive UX across EruoNet dashboards.
- Control Center dashboard and operational controls.
- Tenant/user administration, audit views and configuration management.

### M4 — Billing, Payments & Subscriptions
- Paystack first-class payment gateway.
- Flutterwave first-class fallback gateway when Paystack processing fails.
- Gateway abstraction for future providers.
- Subscription module.
- Financial transaction/ledger/entitlement architecture.
- Payment lifecycle, reconciliation, idempotency and webhook security.

### M5 — Support, Tickets, Verification & Commercial Distribution
- Payment support/ticketing system.
- Customer support workflows and escalation.
- Didit production verification workflows as applicable.
- Commercial licensing and entitlement management.
- CodeCanyon-style commercial packaging/distribution model using original EruoNet implementation.
- Edition/plan feature entitlements, activation, renewal and revocation.
- Self-hosted licensing controls.

### M6 — Web Installation & Offline/XAMPP Deployment
- Original EruoNet web installation wizard for self-hosted deployments.
- Requirements check.
- Mandatory license authorization before licensed installation.
- Database configuration and connection test.
- Database user authorization/creation where supported by the deployment environment.
- Database initialization/migrations.
- Application configuration.
- Super Admin creation after database installation.
- Secure Super Admin password setup and hashing.
- Installation completion checks.
- Automatic installer lock after successful installation.
- Normal login after installation.
- XAMPP-supported offline/local-server deployment.
- Offline license validation/activation model appropriate to the license type.
- No license bypass or hidden backdoor.

### M7 — Simulation Core & Real-World Measurements
- Simulation core.
- Real-world distance/meters.
- Simulation state and deterministic execution foundations.
- Measurement and validation framework.

### M8 — Devices, Protocols & Virtual Networks
- Multi-vendor device architecture and emulation.
- Device SDK.
- Cisco, MikroTik, TP-Link and D-Link device support as approved vendor capabilities.
- Protocol engine.
- Virtual network creation and management.
- Device/network relationships and validation.

### M9 — Topology, Geospatial & Wireless
- GUI topology editor.
- Topology engine.
- Geospatial engine.
- Physical distance and placement workflows.
- Microwave PTP/PTMP.
- Wireless infrastructure simulation.

### M10 — ISP, Fiber & Connectivity Simulation
- ISP engine.
- Starlink ISP workflows.
- VSAT.
- Broadband.
- Cable modem.
- Fiber optics.
- Related access/network infrastructure simulation.

### M11 — CCTV & Physical Security Simulation
- CCTV engine.
- Camera/device simulation.
- Recording/monitoring simulation.
- Physical security infrastructure simulation.

### M12 — VoIP / IP-PBX Simulation
- VoIP engine.
- IP-PBX simulation.
- Extensions, trunks, call flows and related network behavior.

### M13 — AI Operations & Anti-Fraud
- AI tracking and operational analysis.
- Payment/fraud analysis.
- Risk signals, anomaly detection and investigation workflows.
- Explainable/traceable AI decisions.
- Human review and Control Center controls.

### M14 — Production Hardening, Performance & Reliability
- Production deployment architecture.
- Performance/load testing.
- Observability.
- Backup/restore and disaster recovery.
- High availability and resilience.
- Supply-chain and infrastructure security hardening.
- Penetration testing and abuse testing.

### M15 — Final Certification & Commercial Release
- Full end-to-end acceptance testing.
- Security certification gates.
- Licensing/package validation.
- Cloud SaaS release readiness.
- Education/Enterprise release readiness.
- Self-hosted/XAMPP package certification.
- Documentation, upgrade and support readiness.
- Production release approval.

## Cross-cutting locked requirements

- Light theme is the default EruoNet UX/UI direction; dashboards must not default to dark theme.
- User, Education and Enterprise experiences remain distinct SaaS surfaces with a separate Control Center.
- Email verification is mandatory.
- SMS OTP is implemented as a capability but disabled by default until enabled by authorized Control Center configuration.
- Payment gateways use provider abstraction; Paystack and Flutterwave are first-class initial providers, with Flutterwave as the configured fallback for Paystack failure where appropriate.
- Licensing is mandatory for licensed commercial functionality, including offline/self-hosted deployments.
- Self-hosted/offline EruoNet must support the approved XAMPP/web-installation path.
- Commercial packaging is original EruoNet software; CodeCanyon is a business/distribution model reference, not a source of copied code or assets.
- Security, auditability, least privilege, secure key management, environment separation, backups, observability, testing and change control apply throughout the project.

## Current execution state

M1 is merged to `main`.
M2 is the active milestone.
M3+ are locked roadmap commitments and must not be implemented early unless explicitly moved through change control.
