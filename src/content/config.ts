import { z, defineCollection } from "astro:content";

// Define a schema for development projects
const devProjectsCollection = defineCollection({
  type: "content", // 'content' for .md/.mdx files
  schema: z.object({
    title: z.string(),
    description: z.string(),
    technologies: z.array(z.string()),
    githubUrl: z.string().url().optional(), // Must be a valid URL, optional
    liveUrl: z.string().url().optional(), // Must be a valid URL, optional
    thumbnail: z.string(), // The path to the thumbnail image
    media: z.array(z.string()).optional(),
  }),
});

// Define a schema for design projects
const designProjectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    software: z.array(z.string()), // E.g., 'Figma', 'Photoshop'
    link: z.string().url().optional(),
    thumbnail: z.string(),
    media: z.array(z.string()).optional(),
  }),
});

// Export a single 'collections' object to register them
export const collections = {
  "dev-projects": devProjectsCollection,
  "design-projects": designProjectsCollection,
};
