import { defineCollection, z, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { projects as proj} from './data/home/projects';

type Property = typeof proj[number]["name"];
const projId: [Property, ...Property[]] = [
  proj[0].name,
  ...proj.slice(1).map(p => p.name)
];

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/data/projects" }),
  schema: z.object({
    title: z.enum(projId),
    tags: z.array(z.string()),
    desc: z.string(),
    next: z.string().optional(),
    prev: z.string().optional(),
    relatedBlogs: z.array(reference('blogs')).optional(),
    github: z.string().optional(),
    website: z.string().optional(),
    doc: z.string().optional(),
    team: z.union([z.enum(["solo"]), z.array(z.string())]),
    mentors: z.array(z.string()).optional(),
  })
});

const blogs = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/data/blogs" }),
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    desc: z.string(),
    date: z.string(),
    next: z.string().optional(),
    prev: z.string().optional(),
    relatedBlogs: z.array(z.union([reference('blogs'), reference('projects')])).optional()
  })
});

export const collections = { 
  blogs, 
  projects 
};
