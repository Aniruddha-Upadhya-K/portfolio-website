export type TechType = "main" | "sub" | "other";

export type Tech = {
  name: string;
  type: TechType;
}

export type ProjectUrl = {
  github?: string;
  [key: string]: string | undefined; // Allows for other URLs like 'website'
}

export type Project = {
  name: string;
  desc: string;
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
