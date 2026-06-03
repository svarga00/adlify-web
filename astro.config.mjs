import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://adlify.eu',
  output: 'static',
  trailingSlash: 'ignore',

  // i18n: SK je default (root /), ostatné jazyky majú prefix
  i18n: {
    defaultLocale: 'sk',
    locales: ['sk', 'cs', 'hu', 'en', 'de'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },

  integrations: [
    sitemap({
      filter: (page) => !page.includes('/web-brief'),
      i18n: {
        defaultLocale: 'sk',
        locales: {
          sk: 'sk-SK',
          cs: 'cs-CZ',
          hu: 'hu-HU',
          en: 'en-US',
          de: 'de-DE',
        },
      },
    }),
  ],

  build: {
    inlineStylesheets: 'auto',
    assets: '_assets',
  },

  vite: {
    define: {
      // Aby sa env premenné dali použiť aj v build skriptoch
    },
  },
});
