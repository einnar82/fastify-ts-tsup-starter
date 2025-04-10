import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/**/*.ts'],
  format: ['esm'],
  target: 'node22',
  dts: true,
  sourcemap: false,
  clean: true,
  minify: true,
  splitting: false,
  outDir: 'dist',
  outExtension: () => ({ js: '.js' }),
  tsconfig: './tsconfig.json'
});
