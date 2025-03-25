import {defineConfig} from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    coverage: {
      include: ['src/**/*.ts'],
      provider: 'v8',
      reporter: ['json', 'lcov', 'text', 'html'],
    }
  },
});
