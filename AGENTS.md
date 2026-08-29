# AGENTS.md

## Scope
These instructions apply to the entire repository.

## Locked Baseline
- Treat `docs/product/baseline.md` as the locked EruoNet product baseline.
- Do not silently change, remove, reinterpret, or expand locked requirements.
- If an implementation decision conflicts with the locked baseline, stop and report the conflict.

## Engineering Guidance
- Keep application and package boundaries explicit.
- Do not implement later-milestone functionality in foundation-only work.
- Do not commit secrets or real credentials.
- Prefer documentation, contracts, and directory boundaries before executable features.
- Add tests for any executable repository tooling.

## Validation
Before committing changes, run applicable repository checks documented in `CONTRIBUTING.md`.
