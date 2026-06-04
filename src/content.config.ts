import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const devProjectsCollection = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/data/dev-projects",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    technologies: z.array(z.string()),
    githubUrl: z.url().optional(),
    liveUrl: z.url().optional(),
    thumbnail: z.string(),
    media: z.array(z.string()).optional(),
    date: z.date(),
    show: z.boolean(),
  }),
});

const designProjectsCollection = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/data/design-projects",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    software: z.array(z.string()),
    link: z.url().optional(),
    thumbnail: z.string(),
    media: z.array(z.string()).optional(),
    date: z.date(),
    show: z.boolean(),
  }),
});

export const collections = {
  "dev-projects": devProjectsCollection,
  "design-projects": designProjectsCollection,
};
