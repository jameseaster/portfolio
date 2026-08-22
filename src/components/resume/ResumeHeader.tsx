// Imports
import React from "react";
import type { ResumeBasics } from "../../data/resume";

// Types
export interface ResumeHeaderProps {
  basics: ResumeBasics;
}

// Links must read as plain text on paper, where they cannot be clicked
const displayUrl = (url: string) =>
  url
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/\/$/, "");

/**
 * Resume name, title, and contact links
 */
const ResumeHeader: React.FC<ResumeHeaderProps> = ({ basics }) => (
  <header className="resume-header">
    <div className="resume-identity">
      <h1 className="resume-name">{basics.name}</h1>
      <p className="resume-label">{basics.label}</p>
    </div>
    <ul className="resume-contact">
      <li>
        <a href={`mailto:${basics.email}`}>{basics.email}</a>
      </li>
      {basics.url && (
        <li>
          <a href={basics.url}>{displayUrl(basics.url)}</a>
        </li>
      )}
      {basics.profiles.map((profile) => (
        <li key={profile.network}>
          <a href={profile.url}>{displayUrl(profile.url)}</a>
        </li>
      ))}
    </ul>
  </header>
);

export default ResumeHeader;
