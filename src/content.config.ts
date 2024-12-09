import { glob } from "astro/loaders";
import {defineCollection, z} from "astro:content";

const projects = defineCollection({
    schema: z.object({
        title: z.string(),
        type: z.string(),
        tags: z.array(z.string()),
    })
})

const aboutMe = defineCollection({
    loader: glob({ pattern: 'about_me.md', base: './src/content' }),
    schema: z.object({
        title: z.string(),
        experience: z.object({
            title: z.string(),
            developer: z.object({
                title: z.string(),
                img: z.string(),
                description: z.string()
            }),
            graphicDesigner: z.object({
                title: z.string(),
                img: z.string(),
                description: z.string()
            })
        })
    })
})

export const collections = { projects, aboutMe }