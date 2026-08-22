// Imports
import { z } from "zod";
import { describe, expect, it } from "vitest";
import { formatDate, formatDateRange, projectsFor, resume } from "./resume";

// JSON Resume dates are ISO8601; this resume uses YYYY-MM throughout
const isoDate = z
  .string()
  .regex(/^\d{4}(-\d{2})?(-\d{2})?$/, "expected YYYY-MM");

// Length budgets keep the resume near one page; Phase 3's page-count check is
// the real guarantee, but failing here names the offending field
const BUDGET = {
  summary: 320,
  workSummary: 120,
  projectDescription: 100,
  highlight: 180,
  totalHighlights: 10,
};

const schema = z.object({
  basics: z.object({
    name: z.string().min(1),
    label: z.string().min(1),
    email: z.email(),
    phone: z.string().optional(),
    url: z.url().optional(),
    summary: z.string().min(1).max(BUDGET.summary),
    location: z
      .object({
        city: z.string().optional(),
        region: z.string().optional(),
        countryCode: z.string().optional(),
      })
      .optional(),
    profiles: z
      .array(
        z.object({
          network: z.string().min(1),
          username: z.string().optional(),
          url: z.url(),
        }),
      )
      .min(1),
  }),
  work: z
    .array(
      z.object({
        name: z.string().min(1),
        position: z.string().min(1),
        location: z.string().optional(),
        url: z.url().optional(),
        startDate: isoDate,
        endDate: isoDate.optional(),
        summary: z.string().max(BUDGET.workSummary).optional(),
        highlights: z.array(z.string().max(BUDGET.highlight)),
      }),
    )
    .min(1)
    .max(5),
  projects: z
    .array(
      z.object({
        name: z.string().min(1),
        entity: z.string().optional(),
        type: z.string().optional(),
        description: z.string().max(BUDGET.projectDescription).optional(),
        url: z.url().optional(),
        startDate: isoDate.optional(),
        endDate: isoDate.optional(),
        highlights: z.array(z.string().max(BUDGET.highlight)),
        keywords: z.array(z.string()).optional(),
      }),
    )
    .max(6),
  education: z
    .array(
      z.object({
        institution: z.string().min(1),
        area: z.string().optional(),
        studyType: z.string().optional(),
        startDate: isoDate,
        endDate: isoDate.optional(),
      }),
    )
    .max(4),
  skills: z
    .array(
      z.object({
        name: z.string().min(1),
        keywords: z.array(z.string().min(1)).min(1),
      }),
    )
    .max(4),
  awards: z.array(
    z.object({
      title: z.string().min(1),
      date: z.string().optional(),
      awarder: z.string().optional(),
      summary: z.string().optional(),
    }),
  ),
  interests: z.array(z.object({ name: z.string().min(1) })),
  meta: z
    .object({
      canonical: z.url().optional(),
      version: z.string().optional(),
      lastModified: isoDate.optional(),
    })
    .optional(),
});

describe("resume.json", () => {
  it("matches the JSON Resume schema subset", () => {
    expect(() => schema.parse(resume)).not.toThrow();
  });

  it("ends every date range after it starts", () => {
    const entries = [...resume.work, ...resume.education];
    for (const { startDate, endDate } of entries) {
      if (endDate) expect(endDate >= startDate).toBe(true);
    }
  });

  // Guards the bug this feature was built to fix: Woolpert and Digital Bazaar
  // both read "Present". Only Digital Bazaar and the Leverstack LLC are current.
  it("leaves at most two roles open-ended", () => {
    const current = resume.work.filter((work) => !work.endDate);
    expect(current.length).toBeLessThanOrEqual(2);
  });

  it("attributes every project to a listed employer", () => {
    const employers = new Set(resume.work.map((work) => work.name));
    for (const project of resume.projects) {
      if (!project.entity) continue;
      // Exact match, because that is what projectsFor uses to nest them
      expect(employers.has(project.entity), `unknown entity`).toBe(true);
    }
  });

  it("stays within the one-page highlight budget", () => {
    const total = [...resume.work, ...resume.projects].reduce(
      (count, entry) => count + entry.highlights.length,
      0,
    );
    expect(total).toBeLessThanOrEqual(BUDGET.totalHighlights);
  });
});

describe("resume helpers", () => {
  it("formats a YYYY-MM date as Month YYYY", () => {
    expect(formatDate("2023-10")).toBe("October 2023");
  });

  it("reads an absent date as Present", () => {
    expect(formatDate(undefined)).toBe("Present");
  });

  it("joins a date range", () => {
    expect(formatDateRange("2022-09", "2023-10")).toBe(
      "September 2022 - October 2023",
    );
  });

  it("groups projects under their employer", () => {
    expect(projectsFor(resume, "Digital Bazaar").map((p) => p.name)).toEqual([
      "Veres Wallet",
      "VC Playground",
    ]);
  });
});
