// Imports
import data from "./resume-variants.json";
import type { Resume } from "./resume";

// Types - tags live outside resume.json so /resume.json stays exactly JSON
// Resume, and reference work[].name and projects[].name
export interface ResumeVariant {
  label: string;
  /** Suffix for the generated PDF, since a recruiter sees the file name */
  file: string;
  tags: string[];
}

export interface ResumeVariants {
  variants: Record<string, ResumeVariant>;
  tags: {
    work: Record<string, string[]>;
    projects: Record<string, string[]>;
  };
}

export const variants: ResumeVariants = data;

export const variantNames = Object.keys(variants.variants);

export const isVariantName = (name: string): boolean =>
  Object.prototype.hasOwnProperty.call(variants.variants, name);

/** Untagged entries are core and always kept; tagged ones need a match. */
const wanted = (tags: string[], entry?: string[]) =>
  !entry || entry.length === 0 || entry.some((tag) => tags.includes(tag));

/**
 * Narrows a resume to one role variant.
 *
 * Filters whole entries rather than individual bullets, so `highlights` stays a
 * `string[]` and the data keeps validating against the published schema. An
 * unknown or absent name returns the resume unchanged.
 */
export const applyVariant = (resume: Resume, name?: string | null): Resume => {
  const variant = name ? variants.variants[name] : undefined;
  if (!variant) return resume;

  return {
    ...resume,
    work: resume.work.filter((job) =>
      wanted(variant.tags, variants.tags.work[job.name]),
    ),
    projects: resume.projects.filter((project) =>
      wanted(variant.tags, variants.tags.projects[project.name]),
    ),
  };
};
