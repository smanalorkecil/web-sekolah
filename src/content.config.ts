import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const beritaCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/berita" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.string().default("Berita"),
    description: z.string(),
    thumbnail: z.string().optional(),
  }),
});

export const collections = {
  berita: beritaCollection,
};
