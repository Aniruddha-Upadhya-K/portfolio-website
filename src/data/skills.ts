import type { Skills } from "./type";

export const skills: Skills = {
  name: "linux",
  child: [
    {
      name: "nix os",
      child: [
        { name: "git" },
        {
          name: "docker",
          child: [
            { name: "postgres" },
            {
              name: "c / c++",
              child: [{ name: "gdb" }, { name: "valgrind" }],
            },
            { name: "python" },
            {
              name: "js / ts",
              child: [{ name: "react.js / next.js" }],
            },
          ],
        },
        { name: "vim / neovim" },
      ],
    },
  ],
};
