# Locked EruoNet Product Baseline

Status: LOCKED TO IMPLEMENTATION.

This document is the authoritative EruoNet product baseline. The complete milestone assignment is maintained in `docs/product/master-roadmap.md`. Approved requirements must not be silently changed, removed, reinterpreted, or forgotten.

## Product intent

EruoNet Cloud is a commercial cloud SaaS and self-hosted platform for multi-vendor network, ISP, CCTV, VoIP, fiber, wireless, and infrastructure simulation.

## Product surfaces

- User SaaS.
- Education/Schools SaaS.
- Enterprise SaaS.
- Control Center for operations and administration.
- Web application and API.
- Simulator service.
- Commercial self-hosted/offline deployment.

## Locked commercial requirements

- EruoNet follows an original commercial software distribution model inspired by CodeCanyon-style packaging and installation workflows; no copied CodeCanyon code or assets.
- Licensed commercial functionality always requires an applicable valid license/entitlement.
- Self-hosted/offline users require license authorization; offline operation is not a license bypass.
- XAMPP is a supported offline/local-server deployment target.
- Self-hosted deployments use an original EruoNet web installation wizard.
- Installer flow: requirements -> mandatory license authorization -> database setup -> database user authorization/creation where supported -> connection test -> initialization -> configuration -> Super Admin creation -> secure password setup -> installation lock -> login.
- The installer must lock after successful installation and must not expose a hidden license bypass.

## Locked identity and verification requirements

- Email verification is mandatory.
- SMS OTP is architected as an optional capability, disabled by default, and controlled by authorized Control Center configuration.
- Didit verification is required for the approved Education/Schools and Enterprise verification flows.
- User, Education and Enterprise dashboards are distinct SaaS surfaces with a separate Control Center.

## Locked payment and support requirements

- Paystack and Flutterwave are first-class initial payment gateways behind a provider abstraction.
- Flutterwave is the configured fallback when Paystack processing fails where appropriate.
- Subscriptions are a dedicated module.
- Financial transactions, ledger, entitlements, reconciliation, idempotency and secure webhook handling are required.
- Payment support includes a ticket/support workflow.
- AI-assisted payment/fraud analysis is a later milestone and must remain explainable, auditable and subject to human review.
- Offline purchase is supported through the approved commercial/licensing architecture; it must not bypass license enforcement.

## Locked network and simulation domains

- Simulation core.
- Real-world physical distance/meters.
- Multi-vendor device SDK/emulation.
- Cisco, MikroTik, TP-Link and D-Link device capabilities as approved.
- Virtual networks.
- Topology engine and GUI topology editor.
- Protocol engine.
- Geospatial engine.
- Microwave PTP/PTMP.
- Wireless infrastructure.
- ISP simulation including Starlink, VSAT, broadband, cable modem and fiber optics.
- CCTV simulation.
- VoIP/IP-PBX simulation.

## UX/UI requirement

EruoNet SaaS and Control Center interfaces use the approved light-theme direction. Dark theme must not be the default dashboard presentation.

## Security and engineering requirements

Security, least privilege, auditability, secure key management, environment separation, dependency and secret scanning, testing, observability, backup/restore, disaster recovery, performance testing, abuse testing and formal change control apply throughout implementation.

## Milestone governance

M1 is accepted and merged. M2 is active. All later capabilities are assigned to the locked master roadmap and must not be implemented early without explicit change control.
