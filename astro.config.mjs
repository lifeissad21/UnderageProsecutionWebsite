// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Detect environment
const isGitHub =
  process.env.GITHUB_ACTIONS === 'true' ||
  process.env.DEPLOY_TARGET === 'github';

export default defineConfig({
  site: isGitHub
    ? "https://lifeissad21.github.io/UnderageProsecution"
    : "https://underageprosecution.pages.dev",

  base: isGitHub ? "/UnderageProsecution/" : "/",

  vite: {
    plugins: [tailwindcss()]
  }
});