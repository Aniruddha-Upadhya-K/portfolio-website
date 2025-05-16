export type TechType = "main" | "sub" | "other";

export type Tech = {
  name: string;
  type: TechType;
}

export type ProjectUrl = {
  github?: string;
  website?: string;
  doc?: string;
  [key: string]: string | undefined; // Allows for other URLs like 'website'
}

export type Project = {
  name: string;
  desc: string;
  sidenote?: string;
  date: string;
  url: ProjectUrl;
  techs: Tech[];
}

export type Education = {
  name: string;
  date: string;
  speciality: string;
  location: string;
}

export type Skills = {
  name: string;
  child?: Skills[];
}
