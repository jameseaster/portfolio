// Renders the resume print routes to PDFs with headless Chrome, against a real
// `vite preview` of the built site, so the PDF is the same DOM the site serves.
//
// Shared by `resume:pdf`, which writes the committed artifacts, and
// `resume:verify`, which renders to a temp directory and diffs.

import { spawn } from "node:child_process";
import { copyFile, mkdir, readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { PDFDocument } from "pdf-lib";
import puppeteer from "puppeteer";

export const root = join(dirname(fileURLToPath(import.meta.url)), "..", "..");

// One page is the goal, and going over is called out on every render.
//
// The hard limit is temporarily 2: Phase 7 is gathering content, and what stays
// on the page is a design decision to make once, at the end, rather than on
// every edit. Put MAX_PAGES back to TARGET_PAGES before releasing.
export const TARGET_PAGES = 1;
export const MAX_PAGES = 2;

/** Describes a page count, naming it as over target when it is. */
export const pageNote = (pages) =>
  pages > TARGET_PAGES
    ? `${pages} pages, over the ${TARGET_PAGES}-page target`
    : `${pages} page`;

const BASE_NAME = "James-Easter-Resume";

/** The two formats, narrowed to a role variant when one is named. */
export function outputsFor(variant, file = variant) {
  const suffix = file ? `-${file}` : "";
  const role = variant ? `variant=${variant}` : "";
  return [
    {
      route: `/resume/print${role ? `?${role}` : ""}`,
      file: `${BASE_NAME}${suffix}.pdf`,
      label: "styled",
    },
    {
      route: `/resume/print?v=ats${role ? `&${role}` : ""}`,
      file: `${BASE_NAME}${suffix}-ATS.pdf`,
      label: "ATS",
    },
  ];
}

/** The role variants defined in src/data/resume-variants.json, keyed by name. */
export async function readVariants() {
  const file = join(root, "src", "data", "resume-variants.json");
  return JSON.parse(await readFile(file, "utf8")).variants;
}

// Published at /resume.json, following the JSON Resume convention
export const DATA_FILE = "resume.json";

/** Waits for the preview server to answer, or gives up. */
async function waitForServer(url, timeoutMs = 30000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    try {
      const response = await fetch(url);
      if (response.ok) return;
    } catch {
      // not listening yet
    }
    await new Promise((resolve) => setTimeout(resolve, 200));
  }
  throw new Error(`Preview server did not start at ${url}`);
}

/** Renders every output into outDir, returning each one's path and page count. */
export async function renderResume(
  outDir,
  { port = 4319, variant, file } = {},
) {
  await mkdir(outDir, { recursive: true });
  const origin = `http://localhost:${port}`;
  const preview = spawn(
    "npx",
    ["vite", "preview", "--port", String(port), "--strictPort"],
    { cwd: root, stdio: "ignore" },
  );

  try {
    await waitForServer(`${origin}/resume`);
    const browser = await puppeteer.launch();
    try {
      const rendered = [];
      for (const output of outputsFor(variant, file)) {
        const page = await browser.newPage();
        await page.goto(`${origin}${output.route}`, {
          waitUntil: "networkidle0",
        });
        // Chrome will happily print before webfonts settle, shifting the layout
        await page.evaluate(() => document.fonts.ready);

        const path = join(outDir, output.file);
        await page.pdf({
          path,
          printBackground: true,
          // Tagged PDFs carry structure, which helps screen readers and parsers
          tagged: true,
          // Defer to the @page rule in resume-print.css
          preferCSSPageSize: true,
        });
        await page.close();

        const pdf = await PDFDocument.load(await readFile(path));
        rendered.push({ ...output, path, pages: pdf.getPageCount() });
      }
      return rendered;
    } finally {
      await browser.close();
    }
  } finally {
    preview.kill();
  }
}

/** Copies the resume data in beside the PDFs. */
export async function copyResumeData(outDir) {
  await copyFile(join(root, "src", "data", DATA_FILE), join(outDir, DATA_FILE));
}
