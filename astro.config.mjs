import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://smanalorkecil.web.id", // Pastikan sesuai alamat domain sekolah
  integrations: [sitemap()],
});
