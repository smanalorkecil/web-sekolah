import { defineCollection, z } from "astro:content";

const beritaCollection = defineCollection({
  type: "content",
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
