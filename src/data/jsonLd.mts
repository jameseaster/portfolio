// Imports
import type { Resume } from "./resume.js";

// Types
export interface PersonSchema {
  "@context": "https://schema.org";
  "@type": "Person";
  name: string;
  jobTitle: string;
  description: string;
  url?: string;
  email: string;
  sameAs: string[];
  knowsAbout: string[];
  hasOccupation: { "@type": "Occupation"; name: string };
  worksFor: { "@type": "Organization"; name: string; url?: string }[];
  alumniOf: { "@type": "EducationalOrganization"; name: string }[];
  award?: string[];
}

/**
 * Builds a schema.org Person from the resume.
 *
 * Injected into index.html at build time rather than rendered by React, so
 * crawlers that do not execute JavaScript still see it. Build-only: `.mts`
 * keeps it ESM for the Vite config, which cannot load CommonJS-flagged `.ts`.
 */
export const buildPersonSchema = (resume: Resume): PersonSchema => {
  const { basics, work, education, skills, awards } = resume;

  // An employer with no end date is a current one
  const current = work.filter((job) => !job.endDate);

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: basics.name,
    jobTitle: basics.label,
    description: basics.summary,
    url: basics.url,
    email: `mailto:${basics.email}`,
    sameAs: basics.profiles.map((profile) => profile.url),
    knowsAbout: skills.flatMap((skill) => skill.keywords),
    hasOccupation: { "@type": "Occupation", name: basics.label },
    worksFor: current.map((job) => ({
      "@type": "Organization" as const,
      name: job.name,
      url: job.url,
    })),
    alumniOf: education.map((school) => ({
      "@type": "EducationalOrganization" as const,
      name: school.institution,
    })),
    award: awards.length ? awards.map((award) => award.title) : undefined,
  };
};
