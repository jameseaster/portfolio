// Imports
import React from "react";

// Types
export interface ResumeSectionProps {
  title: string;
  children: React.ReactNode;
}

/**
 * A titled resume section
 */
const ResumeSection: React.FC<ResumeSectionProps> = ({ title, children }) => (
  <section className="resume-section">
    <h2 className="resume-section-title">{title}</h2>
    {children}
  </section>
);

export default ResumeSection;
