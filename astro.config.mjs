// @ts-check
import { defineConfig } from 'astro/config';

import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';
import robotsTxt from "astro-robots-txt";
import icon from "astro-icon";

import mdx from "@astrojs/mdx";
import { 
  transformerNotationDiff, 
  transformerMetaHighlight,
  transformerNotationHighlight
} from '@shikijs/transformers';
import rehypePrettyCode from "rehype-pretty-code";

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
  }), robotsTxt(), mdx()],

  markdown: {
    rehypePlugins: [ [rehypePrettyCode, {
      grid: true,
      theme: 'ayu-dark',
      keepBackground: false,
      bypassInlineCode: true,
      defaultLang: "plaintext",
      transformers: [
        transformerNotationDiff(), 
        transformerMetaHighlight(),
        transformerNotationHighlight(),
      ]
    }] ],
    syntaxHighlight: false,
  },

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
            weight: 500,
            style: "normal",
            src: ["./src/assets/Overpass/Overpass-Medium.woff2"]
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
