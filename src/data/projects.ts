import type { Project } from "./type";
export const projects: Project[] = [
  {
    name: "Kilo Text Editor",
    desc: "A fully memory-safe, Nano-like text editor built in C. It supports essential editing keys, such as navigation with arrows, TAB, backspace, home/end, and page up/down, as well as control commands for quitting. The editor features a dynamic status line displaying file information, line count, and helpful messages.",
    date: "Apr 2025 - Present",
    url: {
      github: "https://github.com/Aniruddha-Upadhya-K/kilo"
    },
    techs: [
      { name: "C", type: "main" },
      { name: "GDB", type: "sub" },
      { name: "Valgrind", type: "sub" }
    ]
  },
  {
    name: "Mammogram Analysis and Breast Cancer Localization System",
    desc: "A comprehensive system for precise 3D localization of breast tumors, combining CC and MLO mammogram views to enhance diagnostic accuracy. The solution calculates the tumor's distance from the chest wall, determines its breast quadrant, and pinpoints its clock-face position, reducing manual workload for radiologists.",
    date: "Aug 2024 - Nov 2024",
    url: {},
    techs: [
      { name: "YOLOv9", type: "main" },
      { name: "Numpy", type: "main" },
      { name: "CV2", type: "main" },
      { name: "Pandas", type: "sub" },
      { name: "Scikit learn", type: "sub" },
      { name: "Matplotlib", type: "sub" },
      { name: "Flask", type: "other" },
      { name: "React.js", type: "other" }
    ]
  },
  {
    name: "Kvdhama Website",
    desc: "Informational website for Ashraya Dhama, supporting English and Kannada with an integrated admin dashboard that allows for easy management of dynamic content, including text, images, videos, and links.",
    date: "Apr 2024 - May 2024",
    url: {
      github: "https://github.com/Inspirante-Tech/krishnaveni-ashrayadhama",
      website: "https://kvdhama.in"
    },
    techs: [
      { name: "Next.js", type: "main" },
      { name: "Typescript", type: "main" },
      { name: "Tailwind", type: "sub" },
      { name: "Sanity", type: "other" }
    ]
  },
  {
    name: "Hackfest Website",
    // TODO: update the description
    desc: "Official event website with dynamic content, built using modern web technologies and animated transitions.",
    date: "Jan 2024 - Feb 2024",
    url: {},
    techs: [
      { name: "Next.js", type: "main" },
      { name: "Typescript", type: "main" },
      { name: "Framer Motion", type: "sub" },
      { name: "Tailwind", type: "sub" },
      { name: "Prisma ORM", type: "other" },
      { name: "Postgres", type: "other" }
    ]
  },
  {
    name: "Incridea Website",
    // TODO: update the description
    desc: "Event website featuring 3D animations and interactive elements, supporting dynamic content and robust backend integration.",
    date: "Jan 2024",
    url: {
      github: "https://github.com/incridea-nmamit/incridea-client"
    },
    techs: [
      { name: "Next.js", type: "main" },
      { name: "Typescript", type: "main" },
      { name: "Three.js", type: "main" },
      { name: "React-3-fibre", type: "main" },
      { name: "GSAP", type: "sub" },
      { name: "Tailwind", type: "sub" },
      { name: "Node.js", type: "other" },
      { name: "Graphql", type: "other" },
      { name: "Prisma ORM", type: "other" },
      { name: "Postgres", type: "other" }
    ]
  },
  {
    name: "Yakshagavishti Website",
    desc: "Official website for Yakshagavishti (an intercollege yakshagaana event), featuring internationalization with support for Kannada and English languages, and fully functional judging dashboard which ensured the event to go smoothly paperless",
    date: "Sept 2023 - Nov 2023",
    url: {
      github: "https://github.com/Kalaasangama/yakshagavishti-website",
      website: "http://yakshagavishti.in"
    },
    techs: [
      { name: "Next.js", type: "main" },
      { name: "Typescript", type: "main" },
      { name: "Framer Motion", type: "sub" },
      { name: "Tailwind", type: "sub" },
      { name: "Prisma ORM", type: "other" },
      { name: "Postgres", type: "other" }
    ]
  },
  {
    name: "Eternals",
    desc: "A 3d infinite runner game inspired by Temple Run, The game features procedurally generated platforms, randomized obstacle spawns, and collectible coins. Players can jump, slide, and move side-to-side, with a high score system tracking their best runs. Game difficulty increases with the increase in the score making it challenging.",
    date: "Aug 2023",
    url: {
      github: "https://github.com/Aniruddha-Upadhya-K/Eternals"
    },
    techs: [
      { name: "Unity", type: "main" },
      { name: "C#", type: "main" },
      { name: "Blender", type: "sub" }
    ]
  },
  {
    name: "Hungry Animal Rush",
    desc: "A top-down Unity game where players prevent animals from escaping by throwing food, similar to Space Invaders gameplay. The game challenges players to manage waves of animals with increasing difficulty.",
    date: "July 2023",
    url: {},
    techs: [
      { name: "Unity", type: "main" },
      { name: "C#", type: "main" }
    ]
  }
];

