// Imports
import data from "./resume.json";

// Types - a subset of the JSON Resume schema (https://jsonresume.org)
export interface ResumeLocation {
  address?: string;
  postalCode?: string;
  city?: string;
  region?: string;
  countryCode?: string;
}

export interface ResumeProfile {
  network: string;
  username?: string;
  url: string;
}

export interface ResumeBasics {
  name: string;
  label: string;
  email: string;
  phone?: string;
  url?: string;
  image?: string;
  summary: string;
  location?: ResumeLocation;
  profiles: ResumeProfile[];
}

export interface ResumeWork {
  name: string;
  position: string;
  location?: string;
  description?: string;
  url?: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights: string[];
}

export interface ResumeProject {
  name: string;
  entity?: string;
  type?: string;
  description?: string;
  url?: string;
  startDate?: string;
  endDate?: string;
  roles?: string[];
  highlights: string[];
  keywords?: string[];
}

export interface ResumeEducation {
  institution: string;
  url?: string;
  area?: string;
  studyType?: string;
  startDate: string;
  endDate?: string;
  score?: string;
  courses?: string[];
}

export interface ResumeSkill {
  name: string;
  level?: string;
  keywords: string[];
}

export interface ResumeAward {
  title: string;
  date?: string;
  awarder?: string;
  summary?: string;
}

export interface ResumeInterest {
  name: string;
  keywords?: string[];
}

export interface ResumeMeta {
  canonical?: string;
  version?: string;
  lastModified?: string;
}

export interface Resume {
  basics: ResumeBasics;
  work: ResumeWork[];
  projects: ResumeProject[];
  education: ResumeEducation[];
  skills: ResumeSkill[];
  awards: ResumeAward[];
  interests: ResumeInterest[];
  meta?: ResumeMeta;
}

// tsc structurally checks resume.json against Resume on every build
export const resume: Resume = data;

/** Projects belonging to a given employer, in data order. */
export const projectsFor = (employer: string): ResumeProject[] =>
  resume.projects.filter((project) => project.entity === employer);

/** Formats a JSON Resume `YYYY-MM` date as `Month YYYY`; open ranges read "Present". */
export const formatDate = (date?: string): string => {
  if (!date) return "Present";
  const [year, month] = date.split("-");
  if (!month) return year;
  const at = new Date(Number(year), Number(month) - 1);
  return at.toLocaleDateString("en-US", { month: "long", year: "numeric" });
};

/** Renders a start/end pair as a single range, e.g. "September 2022 - October 2023". */
export const formatDateRange = (startDate: string, endDate?: string): string =>
  `${formatDate(startDate)} - ${formatDate(endDate)}`;
