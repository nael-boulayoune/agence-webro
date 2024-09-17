// @ts-check
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import lottie from "astro-integration-lottie";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://webro.fr",
  integrations: [
    icon(),
    lottie(),
    sitemap({
      filter: (page) =>
        page !== "https://webro.fr/404/" &&
        page !== "https://webro.fr/merci-newsletter/" &&
        page !== "https://webro.fr/merci-contact/",
    }),
    partytown(),
  ],
});
