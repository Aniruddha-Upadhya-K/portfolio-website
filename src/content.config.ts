import { defineCollection, z, reference } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/data/projects" }),
  schema: z.object({
    title: z.string(),
    technologies: z.array(z.string()),
    tags: z.array(z.string()),
    desc: z.string(),
    next: z.string().optional(),
    prev: z.string().optional(),
    relatedBlogs: z.array(reference('blogs')).optional()
  })
});

const blogs = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/data/blogs" }),
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    desc: z.string(),
    next: z.string().optional(),
    prev: z.string().optional(),
    relatedBlogs: z.array(z.union([reference('blogs'), reference('projects')])).optional()
  })
});

export const collections = { 
  blogs, 
  projects 
};
