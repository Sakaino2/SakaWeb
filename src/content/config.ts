import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

// Define a schema for development projects
const devProjectsCollection = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "src/content/dev-projects",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    technologies: z.array(z.string()),
    githubUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
    thumbnail: z.string(),
    media: z.array(z.string()).optional(),
    date: z.date(),
    show: z.boolean(),
  }),
});

// Define a schema for design projects
const designProjectsCollection = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "src/content/design-projects",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    software: z.array(z.string()),
    link: z.string().url().optional(),
    thumbnail: z.string(),
    media: z.array(z.string()).optional(),
    date: z.date(),
    show: z.boolean(),
  }),
});

// Export a single 'collections' object to register them
export const collections = {
  "dev-projects": devProjectsCollection,
  "design-projects": designProjectsCollection,
};
