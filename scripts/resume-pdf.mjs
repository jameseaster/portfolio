// Writes the committed resume artifacts into public/.
//
// Usage: npm run resume:pdf
//        npm run resume:pdf -- --variant=frontend
//
// A role variant is not a committed artifact - it is generated for a particular
// application - so it lands in variant-resumes/, which git ignores.

import { join } from "node:path";
import {
  copyResumeData,
  DATA_FILE,
  MAX_PAGES,
  pageNote,
  readVariants,
  renderResume,
  root,
} from "./lib/render-resume.mjs";

const requested = process.argv
  .find((arg) => arg.startsWith("--variant="))
  ?.slice("--variant=".length);

const variants = await readVariants();
if (requested && !variants[requested]) {
  console.error(
    `Unknown variant "${requested}". Choose one of: ${Object.keys(variants).join(", ")}.`,
  );
  process.exit(1);
}

const outName = requested ? "variant-resumes" : "public";
const outDir = join(root, outName);
const rendered = await renderResume(outDir, {
  port: Number(process.env.PORT) || 4319,
  variant: requested,
  file: requested && variants[requested].file,
});

let failed = false;
for (const { file, label, pages } of rendered) {
  if (pages > MAX_PAGES) {
    console.error(
      `FAIL ${file}: ${pages} pages, over the ${MAX_PAGES}-page limit. ` +
        `Trim src/data/resume.json or tighten src/styles/resume-print.css.`,
    );
    failed = true;
  } else {
    console.log(`Wrote ${outName}/${file} (${label}, ${pageNote(pages)})`);
  }
}

if (!requested) {
  await copyResumeData(outDir);
  console.log(`Wrote ${outName}/${DATA_FILE}`);
}

process.exit(failed ? 1 : 0);
