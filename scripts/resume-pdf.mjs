// Renders the /resume/print route to a Letter PDF with headless Chrome, so the
// PDF is the same DOM the site renders rather than a parallel template.
//
// Usage: npm run resume:pdf

import { spawn } from "node:child_process";
import { copyFile, readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { PDFDocument } from "pdf-lib";
import puppeteer from "puppeteer";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const port = Number(process.env.PORT) || 4319;
const origin = `http://localhost:${port}`;

// A resume that spills onto a second page is a bug, not a preference
const MAX_PAGES = 1;

const outputs = [
  { route: "/resume/print", file: "James-Easter-Resume.pdf", label: "styled" },
  {
    route: "/resume/print?v=ats",
    file: "James-Easter-Resume-ATS.pdf",
    label: "ATS",
  },
];

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

/** Renders one route to a PDF and returns its page count. */
async function renderPdf(browser, { route, file }) {
  const page = await browser.newPage();
  await page.goto(`${origin}${route}`, { waitUntil: "networkidle0" });
  // Chrome will happily print before webfonts settle, shifting the layout
  await page.evaluate(() => document.fonts.ready);

  const path = join(root, "public", file);
  await page.pdf({
    path,
    printBackground: true,
    // Tagged PDFs carry structure, which helps both screen readers and parsers
    tagged: true,
    // Defer to the @page rule in resume-print.css
    preferCSSPageSize: true,
  });
  await page.close();

  const pdf = await PDFDocument.load(await readFile(path));
  return pdf.getPageCount();
}

const preview = spawn(
  "npx",
  ["vite", "preview", "--port", String(port), "--strictPort"],
  { cwd: root, stdio: "ignore" },
);

let failed = false;
try {
  await waitForServer(`${origin}/resume`);
  const browser = await puppeteer.launch();
  try {
    for (const output of outputs) {
      const pages = await renderPdf(browser, output);
      if (pages > MAX_PAGES) {
        console.error(
          `FAIL ${output.file}: ${pages} pages, expected ${MAX_PAGES}. ` +
            `Trim src/data/resume.json or tighten src/styles/resume-print.css.`,
        );
        failed = true;
      } else {
        console.log(`Wrote public/${output.file} (${output.label}, 1 page)`);
      }
    }
  } finally {
    await browser.close();
  }

  // Publish the data alongside the PDFs; /resume.json is a JSON Resume convention
  await copyFile(
    join(root, "src", "data", "resume.json"),
    join(root, "public", "resume.json"),
  );
  console.log("Wrote public/resume.json");
} finally {
  preview.kill();
}

process.exit(failed ? 1 : 0);
