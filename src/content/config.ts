import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      pubDate: z.coerce.date(),
      image: z.object({
        src: image(),
        alt: z.string(),
        og: z.string(),
      }),
      title: z.string(),
      author: z.object({
        name: z.enum(["Yanis Boulayoune", "Nael Boulayoune"]),
        image: image(),
        description: z.string(),
        linkedIn: z.string(),
      }),
      categories: z.array(z.enum(["marketing", "seo", "ia", "conception-web"])),
    }),
});

export const collections = { blog };
