// Imports
import React from "react";
import { useSearchParams } from "react-router-dom";
import ResumeDocument from "../components/resume/ResumeDocument";
import { resume } from "../data/resume";
import { applyVariant } from "../data/variants";
import "../styles/resume-print.css";
// Loaded after the print styles so the variant rules layer over them
import "../styles/resume-ats.css";

/**
 * Bare resume document for headless Chrome to print.
 *
 * Renders no navigation, no theme provider, and no animation - just the
 * document and the print stylesheet. Reached at /resume/print, with
 * ?v=ats for the plain single-column variant and ?variant= for a role variant.
 */
const ResumePrint: React.FC = () => {
  const [params] = useSearchParams();
  const variant = params.get("v") === "ats" ? "ats" : "print";

  return (
    <main className={`resume-page resume-page-${variant}`}>
      <ResumeDocument
        variant={variant}
        resume={applyVariant(resume, params.get("variant"))}
      />
    </main>
  );
};

export default ResumePrint;
