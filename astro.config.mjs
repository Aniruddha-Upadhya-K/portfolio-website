// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import icon from "astro-icon";
import { defineCollection, z, reference } from 'astro:content';
import { glob } from 'astro/loaders';

import tailwindcss from '@tailwindcss/vite';

import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';

import robotsTxt from "astro-robots-txt";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/projects" }),
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
  loader: glob({ pattern: "**/*.md", base: "./src/data/blogs" }),
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    desc: z.string(),
    next: z.string().optional(),
    prev: z.string().optional(),
    relatedBlogs: z.array(z.union([reference('blogs'), reference('projects')])).optional()
  })
});

export const collections = { blogs, projects };

// https://astro.build/config
export default defineConfig({
  site: "https://aniupadhya.com",

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [partytown(), sitemap(), icon({
    include: {
      mdi: ["*"],
    }
  }), robotsTxt()],

  experimental: {
    fonts: [
      {
        provider: "local",
        name: "Hack",
        cssVariable: "--font-hack",
        variants: [
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/HackMono/Hack-Regular.woff2"]
          }, 
          {
            weight: 400,
            style: "italic",
            src: ["./src/assets/HackMono/Hack-Italic.woff2"]
          },
          // {
          //   weight: 700,
          //   style: "normal",
          //   src: ["./src/assets/HackMono/Hack-Bold.woff2"]
          // },
          // {
          //   weight: 700,
          //   style: "italic",
          //   src: ["./src/assets/HackMono/Hack-BoldItalic.woff2"]
          // }
        ]
      },
      {
        provider: "local",
        name: "Overpass",
        cssVariable: "--font-overpass",
        variants: [
          // {
          //   weight: 200,
          //   style: "normal",
          //   src: ["./src/assets/Overpass/Overpass-Light.woff2"]
          // }, 
          // {
          //   weight: 200,
          //   style: "italic",
          //   src: ["./src/assets/Overpass/Overpass-LightItalic.woff2"]
          // },
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/Overpass/Overpass-Regular.woff2"]
          }, 
          {
            weight: 400,
            style: "italic",
            src: ["./src/assets/Overpass/Overpass-Italic.woff2"]
          },
          {
            weight: 700,
            style: "normal",
            src: ["./src/assets/Overpass/Overpass-Bold.woff2"]
          },
          // {
          //   weight: 700,
          //   style: "italic",
          //   src: ["./src/assets/Overpass/Overpass-BoldItalic.woff2"]
          // },
          {
            weight: 900,
            style: "normal",
            src: ["./src/assets/Overpass/Overpass-Black.woff2"]
          },
          // {
          //   weight: 900,
          //   style: "italic",
          //   src: ["./src/assets/Overpass/Overpass-BlackItalic.woff2"]
          // }
        ]
      }
    ]
  }
});
