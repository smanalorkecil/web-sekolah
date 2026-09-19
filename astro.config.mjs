import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://smanalorkecil.web.id", // Ganti dengan alamat domain resmi websitemu
  integrations: [tailwind(), sitemap()],
});
