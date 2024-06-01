import { defineConfig } from 'tsup'

export default defineConfig([
  // Example 1: Bundle a single file
  // Add multiple entries to bundle them separately
  {
    entry: ['./src/example-calculator/index.ts'],
    outDir: 'dist/example-calculator',
    format: ['cjs', 'esm'],
    dts: true,
    clean: true,
    splitting: false,
    treeshake: true,
    sourcemap: true,
    external: ['react'],
  },
  {
    entry: ['./src/module-one/index.ts'],
    outDir: 'dist/module-one',
    format: ['cjs', 'esm'],
    dts: true,
    clean: true,
    splitting: false,
    treeshake: true,
    sourcemap: true,
    external: ['react'],
  },
])
