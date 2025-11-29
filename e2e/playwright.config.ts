import { PlaywrightConfig } from '@playwright/test';

const config: PlaywrightConfig = {
  testDir: './e2e',
  timeout: 30 * 1000,
  fullyParallelizeSpecs: true,
};

export default config;
