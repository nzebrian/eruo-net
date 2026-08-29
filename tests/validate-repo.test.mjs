import test from 'node:test';
import assert from 'node:assert/strict';
import { requiredPaths, validateRepository } from '../scripts/validate-repo.mjs';

test('required Milestone 1 foundation paths are declared', () => {
  assert.ok(requiredPaths.includes('docs/product/baseline.md'));
  assert.ok(requiredPaths.includes('packages/voip-engine/README.md'));
  assert.ok(requiredPaths.includes('.github/workflows/ci.yml'));
});

test('repository foundation validation passes', () => {
  assert.deepEqual(validateRepository('.'), []);
});
