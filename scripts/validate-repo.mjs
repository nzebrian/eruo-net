#!/usr/bin/env node
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

export const requiredPaths = [
  'AGENTS.md', 'README.md', '.env.example', 'CONTRIBUTING.md', 'SECURITY.md', 'LICENSE',
  'docs/product/baseline.md', 'docs/architecture/overview.md', 'docs/security/baseline.md',
  'docs/operations/definition-of-done.md', 'infra/docker/docker-compose.dev.yml',
  '.github/workflows/ci.yml',
  'apps/web/README.md', 'apps/api/README.md', 'apps/control-center/README.md', 'apps/simulator/README.md',
  'packages/simulation-core/README.md', 'packages/device-sdk/README.md', 'packages/topology-engine/README.md',
  'packages/protocol-engine/README.md', 'packages/geospatial-engine/README.md', 'packages/cctv-engine/README.md',
  'packages/voip-engine/README.md', 'packages/isp-engine/README.md', 'packages/billing/README.md',
  'packages/identity/README.md', 'packages/shared/README.md'
];

const forbiddenFeatureTerms = [
  'implemented authentication', 'payment processing implementation', 'subscription engine',
  'network simulation algorithm', 'device emulator', 'cctv simulation runtime',
  'ip pbx simulation runtime', 'isp simulation runtime', 'gui topology editor', 'ai fraud analysis'
];

const secretPatterns = [
  /-----BEGIN (RSA |EC |OPENSSH |)?PRIVATE KEY-----/,
  /AKIA[0-9A-Z]{16}/,
  /xox[baprs]-[0-9A-Za-z-]{10,}/,
  /(?:password|secret|token|api[_-]?key)\s*=\s*(?!change-me|placeholder|example|development|\$\{)[^\s#]{8,}/i
];

const ignoredDirs = new Set(['.git', 'node_modules', 'coverage', 'dist', 'build']);

export function walk(dir = '.') {
  const entries = [];
  for (const name of readdirSync(dir)) {
    if (ignoredDirs.has(name)) continue;
    const path = join(dir, name);
    const stats = statSync(path);
    if (stats.isDirectory()) entries.push(...walk(path));
    else entries.push(path);
  }
  return entries;
}

export function validateRepository(root = '.') {
  const errors = [];
  for (const path of requiredPaths) {
    if (!existsSync(join(root, path))) errors.push(`Missing required path: ${path}`);
  }

  const baseline = readFileSync(join(root, 'docs/product/baseline.md'), 'utf8');
  for (const term of ['Authentication functionality', 'Payment processing', 'Network simulation functionality', 'AI fraud analysis']) {
    if (!baseline.includes(term)) errors.push(`Locked baseline missing deferred term: ${term}`);
  }

  for (const file of walk(root)) {
    const rel = relative(root, file);
    if (rel === 'package-lock.json') continue;
    const content = readFileSync(file, 'utf8');
    for (const pattern of secretPatterns) {
      if (pattern.test(content)) errors.push(`Potential secret pattern in ${rel}`);
    }
    if (rel.startsWith('apps/') || rel.startsWith('packages/')) {
      for (const term of forbiddenFeatureTerms) {
        if (content.toLowerCase().includes(term)) errors.push(`Forbidden later-milestone implementation signal in ${rel}: ${term}`);
      }
    }
  }

  return errors;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const errors = validateRepository(process.cwd());
  if (errors.length > 0) {
    console.error(errors.join('\n'));
    process.exit(1);
  }
  console.log('Repository foundation validation passed.');
}
