// Re-renders the resume artifacts and fails if they differ from the ones
// committed in public/. Netlify deploys what is in the repo, so without this
// the PDFs drift silently from src/data/resume.json.
//
// Usage: npm run resume:verify

import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { extractText, getDocumentProxy } from "unpdf";
import {
  DATA_FILE,
  MAX_PAGES,
  renderResume,
  root,
} from "./lib/render-resume.mjs";

// Chrome versions rewrap text differently, so compare words rather than lines
const normalize = (text) => text.replace(/\s+/g, " ").trim();

/** Reads a PDF's page count and its text layer as one normalized string. */
async function readPdf(path) {
  const bytes = new Uint8Array(await readFile(path));
  const { totalPages, text } = await extractText(
    await getDocumentProxy(bytes),
    {
      mergePages: true,
    },
  );
  return { pages: totalPages, text: normalize(text) };
}

/** Points at the first difference, since the strings are far too long to read. */
function firstDifference(committed, current) {
  let at = 0;
  while (at < committed.length && committed[at] === current[at]) at += 1;
  const from = Math.max(0, at - 40);
  return [
    `  committed: ...${committed.slice(from, at + 60)}...`,
    `  current:   ...${current.slice(from, at + 60)}...`,
  ].join("\n");
}

const outDir = await mkdtemp(join(tmpdir(), "resume-verify-"));
const failures = [];

try {
  const rendered = await renderResume(outDir, {
    port: Number(process.env.PORT) || 4320,
  });

  for (const { file, path, pages } of rendered) {
    if (pages > MAX_PAGES) {
      failures.push(`${file}: renders ${pages} pages, expected ${MAX_PAGES}`);
      continue;
    }

    const committedPath = join(root, "public", file);
    let committed;
    try {
      committed = await readPdf(committedPath);
    } catch {
      failures.push(`${file}: missing or unreadable at public/${file}`);
      continue;
    }

    const current = await readPdf(path);
    if (committed.pages !== current.pages) {
      failures.push(
        `${file}: committed has ${committed.pages} pages, renders ${current.pages}`,
      );
    } else if (committed.text !== current.text) {
      failures.push(
        `${file}: text differs from the committed PDF\n` +
          firstDifference(committed.text, current.text),
      );
    } else {
      console.log(`OK public/${file} (${current.pages} page)`);
    }
  }

  const source = await readFile(join(root, "src", "data", DATA_FILE), "utf8");
  const published = await readFile(
    join(root, "public", DATA_FILE),
    "utf8",
  ).catch(() => null);
  if (source !== published) {
    failures.push(`${DATA_FILE}: public/ copy differs from src/data/`);
  } else {
    console.log(`OK public/${DATA_FILE}`);
  }
} finally {
  await rm(outDir, { recursive: true, force: true });
}

if (failures.length > 0) {
  console.error(
    `\nThe committed resume artifacts are out of date:\n` +
      failures.map((failure) => `- ${failure}`).join("\n") +
      `\n\nRun \`npm run resume:pdf\` and commit the regenerated files.`,
  );
  process.exit(1);
}
