import { defineConfig } from 'tsup';

export default defineConfig({
  skipNodeModulesBundle: true,
  entry: {
    index: 'src/index.ts'
  },
  format: ['cjs', 'esm'],
  target: 'es2020',
  splitting: false,
  sourcemap: false,
  minify: false,
  clean: true,
  dts: true,
});
