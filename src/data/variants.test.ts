// Imports
import { describe, expect, it } from "vitest";
import { resume, unattachedProjects } from "./resume";
import { applyVariant, variantNames, variants } from "./variants";

const names = (entries: { name: string }[]) => entries.map((e) => e.name);

describe("resume-variants.json", () => {
  // The bug this guards shipped once already: a project referenced an employer
  // by a name that did not match, so it silently rendered nowhere
  it("references only entries that exist", () => {
    const work = new Set(names(resume.work));
    const projects = new Set(names(resume.projects));
    for (const name of Object.keys(variants.tags.work)) {
      expect(work.has(name), `unknown employer: ${name}`).toBe(true);
    }
    for (const name of Object.keys(variants.tags.projects)) {
      expect(projects.has(name), `unknown project: ${name}`).toBe(true);
    }
  });

  it("keeps one tag vocabulary across variants and entries", () => {
    const tagged = new Set(
      [
        ...Object.values(variants.tags.work),
        ...Object.values(variants.tags.projects),
      ].flat(),
    );
    const wanted = new Set(
      Object.values(variants.variants).flatMap((variant) => variant.tags),
    );
    for (const tag of wanted) {
      expect(tagged.has(tag), `no entry carries "${tag}"`).toBe(true);
    }
    for (const tag of tagged) {
      expect(wanted.has(tag), `no variant asks for "${tag}"`).toBe(true);
    }
  });

  it("gives every variant a distinct file suffix", () => {
    const files = Object.values(variants.variants).map((v) => v.file);
    expect(new Set(files).size).toBe(files.length);
  });
});

describe("applyVariant", () => {
  it("returns the resume untouched without a variant", () => {
    expect(applyVariant(resume)).toBe(resume);
    expect(applyVariant(resume, null)).toBe(resume);
    expect(applyVariant(resume, "not-a-variant")).toBe(resume);
  });

  it("keeps untagged entries in every variant", () => {
    // Digital Bazaar carries no tags, so it is core to all of them
    for (const name of variantNames) {
      expect(names(applyVariant(resume, name).work)).toContain(
        "Digital Bazaar",
      );
    }
  });

  it("drops the consultancy from the corporate variant", () => {
    const work = names(applyVariant(resume, "corporate").work);
    expect(work.some((name) => name.startsWith("Leverstack"))).toBe(false);
  });

  // Filtering an employer must not silently take its client work with it
  it("promotes the client work the corporate variant orphans", () => {
    const corporate = applyVariant(resume, "corporate");
    expect(names(unattachedProjects(corporate))).toEqual([
      "OPTIC",
      "Winterfest",
    ]);
  });

  it("narrows to verifiable credentials work", () => {
    const work = names(applyVariant(resume, "vc").work);
    expect(work).not.toContain("Woolpert");
    expect(work).not.toContain("Optimal GEO");
  });
});
