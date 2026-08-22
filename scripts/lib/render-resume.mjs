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

// A resume that spills onto a second page is a bug, not a preference
export const MAX_PAGES = 1;

export const OUTPUTS = [
  { route: "/resume/print", file: "James-Easter-Resume.pdf", label: "styled" },
  {
    route: "/resume/print?v=ats",
    file: "James-Easter-Resume-ATS.pdf",
    label: "ATS",
  },
];

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
export async function renderResume(outDir, { port = 4319 } = {}) {
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
      for (const output of OUTPUTS) {
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
