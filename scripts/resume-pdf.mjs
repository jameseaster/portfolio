// Writes the committed resume artifacts into public/.
//
// Usage: npm run resume:pdf

import { join } from "node:path";
import {
  copyResumeData,
  DATA_FILE,
  MAX_PAGES,
  renderResume,
  root,
} from "./lib/render-resume.mjs";

const outDir = join(root, "public");
const rendered = await renderResume(outDir, {
  port: Number(process.env.PORT) || 4319,
});

let failed = false;
for (const { file, label, pages } of rendered) {
  if (pages > MAX_PAGES) {
    console.error(
      `FAIL ${file}: ${pages} pages, expected ${MAX_PAGES}. ` +
        `Trim src/data/resume.json or tighten src/styles/resume-print.css.`,
    );
    failed = true;
  } else {
    console.log(`Wrote public/${file} (${label}, 1 page)`);
  }
}

await copyResumeData(outDir);
console.log(`Wrote public/${DATA_FILE}`);

process.exit(failed ? 1 : 0);
