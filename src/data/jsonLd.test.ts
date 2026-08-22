// Imports
import { describe, expect, it } from "vitest";
import { resume } from "./resume";
import { buildPersonSchema } from "./jsonLd.mjs";

const schema = buildPersonSchema(resume);

describe("buildPersonSchema", () => {
  it("declares a schema.org Person", () => {
    expect(schema["@context"]).toBe("https://schema.org");
    expect(schema["@type"]).toBe("Person");
  });

  it("carries identity from basics", () => {
    expect(schema.name).toBe(resume.basics.name);
    expect(schema.jobTitle).toBe(resume.basics.label);
    expect(schema.email).toBe(`mailto:${resume.basics.email}`);
  });

  it("lists every profile under sameAs", () => {
    expect(schema.sameAs).toEqual(resume.basics.profiles.map((p) => p.url));
  });

  // worksFor is what a search engine reads as the current role
  it("includes only employers with no end date", () => {
    const names = schema.worksFor.map((org) => org.name);
    expect(names).toContain("Digital Bazaar");
    expect(names).not.toContain("Woolpert");
  });

  it("flattens skill keywords into knowsAbout", () => {
    expect(schema.knowsAbout).toContain("TypeScript");
    expect(schema.knowsAbout).toContain("React");
  });

  it("lists every school under alumniOf", () => {
    expect(schema.alumniOf).toHaveLength(resume.education.length);
  });

  it("serializes to valid JSON for the script tag", () => {
    expect(() => JSON.parse(JSON.stringify(schema))).not.toThrow();
  });
});
