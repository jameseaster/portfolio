// Imports
import React from "react";

// Types
export interface ResumeEntryProps {
  title: string;
  dates: string;
  subtitle?: string;
  summary?: string;
  /** Renders title, subtitle, and dates on a single line */
  compact?: boolean;
  children?: React.ReactNode;
}

/**
 * A single dated resume entry, used for both employment and education
 */
const ResumeEntry: React.FC<ResumeEntryProps> = ({
  title,
  dates,
  subtitle,
  summary,
  compact,
  children,
}) => (
  <div className={`resume-entry${compact ? " resume-entry-compact" : ""}`}>
    <div className="resume-entry-head">
      <h3 className="resume-entry-title">{title}</h3>
      {compact && subtitle && (
        <span className="resume-entry-subtitle">{subtitle}</span>
      )}
      <span className="resume-entry-dates">{dates}</span>
    </div>
    {!compact && subtitle && (
      <p className="resume-entry-subtitle">{subtitle}</p>
    )}
    {summary && <p className="resume-entry-summary">{summary}</p>}
    {children}
  </div>
);

export default ResumeEntry;
