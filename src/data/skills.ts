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
              name: "c_c++",
              child: [{ name: "gdb" }, { name: "valgrind" }],
            },
            { name: "python" },
            {
              name: "js_ts",
              child: [{ name: "reactjs_nextjs" }],
            },
          ],
        },
        { name: "vim_neovim" },
      ],
    },
  ],
};
