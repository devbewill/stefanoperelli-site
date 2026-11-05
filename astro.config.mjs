import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [react(), tailwind()],

  publicDir: "public",
  // About e Resume sono ora una pagina sola
  redirects: {
    "/resume": "/about",
  },
  markdown: {
    shikiConfig: {
      // Scegli il tuo tema preferito qui
      theme: "catppuccin-latte", // oppure 'dracula', 'one-dark-pro', ecc.
      wrap: true, // opzionale: per mandare a capo il codice lungo
    },
  },
});
