// @ts-check
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import lottie from "astro-integration-lottie";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://malinsdeaudouce.fr",
  integrations: [
    icon(),
    lottie(),
    sitemap({
      filter: (page) =>
        page !== "https://malinsdeaudouce.fr/404/" &&
        page !== "https://malinsdeaudouce.fr/merci-newsletter/" &&
        page !== "https://malinsdeaudouce.fr/merci-contact/",
    }),
    partytown(),
  ],
});
