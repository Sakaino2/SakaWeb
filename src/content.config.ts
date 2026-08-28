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
    lang: z.enum(["es", "en"]).default("es"),
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
    lang: z.enum(["es", "en"]).default("es"),
    software: z.array(z.string()),
    link: z.url().optional(),
    thumbnail: z.string(),
    media: z.array(z.string()).optional(),
    video: z.array(z.url()).optional(),
    date: z.date(),
    show: z.boolean(),
  }),
});

const experienceCollection = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/data/experience",
  }),
  schema: z.object({
    title: z.string(),
    organization: z.string(),
    lang: z.enum(["es", "en"]).default("es"),
    dateStart: z.date(),
    dateEnd: z.date().optional(),
    description: z.string(),
    stack: z.array(z.string()).default([]),
    order: z.number(),
  }),
});

const educationCollection = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/data/education",
  }),
  schema: z.object({
    title: z.string(),
    institution: z.string(),
    lang: z.enum(["es", "en"]).default("es"),
    dateStart: z.date(),
    dateEnd: z.date().optional(),
    description: z.string().optional(),
    order: z.number(),
  }),
});

export const collections = {
  "dev-projects": devProjectsCollection,
  "design-projects": designProjectsCollection,
  experience: experienceCollection,
  education: educationCollection,
};
