import type { Project } from "./type";
export const experiences: Project[] = [
  {
    name: "Edgeverve Systems Ltd.",
    desc: "Contributing to enhancements in the company’s core codebase using C/C++, and writing SQL queries to support new feature development and data analysis along with gaining hands-on experience with debugging and profiling tools such as GDB and Valgrin",
    date: "Feb 2025 - Present",
    url: {},
    techs: [
      { name: "C", type: "main" },
      { name: "C++", type: "main" },
      { name: "GDB", type: "sub" },
      { name: "Valgrind", type: "sub" },
      { name: "Postgres", type: "main" },
      { name: "Oracle", type: "main" }
    ]
  },
  {
    name: "JP Morgan Chase & Co. Research Internship",
    desc: "Designed and developed end to end framework that enhances privacy in Federated Learning system using zero-knowledge proofs (zkp), enabling secure model training without exposing raw participant data.",
    date: "Sep 2023 - Dec 2024",
    url: {},
    techs: [
      { name: "Noir", type: "main" },
      { name: "Node js", type: "main" },
      { name: "Express js", type: "sub" },
      { name: "Numpy", type: "main" },
      { name: "Django", type: "main" },
      { name: "SQLite", type: "sub" },
      { name: "Docker", type: "sub" }
    ]
  }
];
