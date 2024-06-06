import type { Config } from 'jest';

export default {
  preset: 'ts-jest',

  rootDir: '.',

  testEnvironment: 'node',
} satisfies Config;
