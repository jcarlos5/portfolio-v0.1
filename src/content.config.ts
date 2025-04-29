import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const navItems = defineCollection({
    loader: file("src/content/NavItems.json"),
    schema: z.object({
        id: z.string(),
        items: z.array(
            z.object({
                id: z.string(),
                title: z.string(),
                label: z.string(),
                url: z.string(),
            })
        )
    }),
});

const workExperiences = defineCollection({
    loader: file("src/content/WorkExperiences.json"),
    schema:z.object({
        id: z.string(),
        items: z.array(
            z.object({
                title: z.string(),
                company: z.string(),
                location: z.string(),
                date: z.string(),
                description: z.array(z.string()),
            })
        )
    }),
});

const projects = defineCollection({
    loader: file("src/content/Projects.json"),
    schema:z.object({
        id: z.string(),
        items: z.array(
            z.object({
                title: z.string(),
                image: z.string(),
                tags: z.array(z.string()),
                description: z.string(),
                github: z.string(),
                link: z.string(),
            })
        )
    }),
});

export const collections = { navItems, workExperiences, projects };