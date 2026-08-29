# Architecture Overview

EruoNet Cloud uses a modular monorepo with clear application, domain package, infrastructure, documentation, and test boundaries.

## Application boundaries

- `apps/web`: customer-facing web application boundary.
- `apps/api`: API service boundary.
- `apps/control-center`: operations and administrative Control Center boundary.
- `apps/simulator`: simulator service boundary.

## Package boundaries

Domain packages under `packages/` are isolated by capability. Shared code belongs in `packages/shared` only when multiple domains require it.

## Dependency direction

Applications may depend on packages. Domain packages should avoid depending on applications. Cross-domain dependencies must be documented with an architecture decision record.
