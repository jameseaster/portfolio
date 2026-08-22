// Imports
import React from "react";
import ResumeEntry from "./ResumeEntry";
import ResumeHeader from "./ResumeHeader";
import ResumeSection from "./ResumeSection";
import {
  formatDateRange,
  projectsFor,
  resume as defaultResume,
  unattachedProjects,
  type Resume,
  type ResumeProject,
} from "../../data/resume";

// Types
export type ResumeVariant = "screen" | "print" | "ats";

export interface ResumeDocumentProps {
  variant?: ResumeVariant;
  resume?: Resume;
}

/**
 * Projects belonging to one employer, rendered beneath it
 */
const ProjectList: React.FC<{ projects: ResumeProject[] }> = ({ projects }) => (
  <ul className="resume-projects">
    {projects.map((project) => (
      <li className="resume-project" key={project.name}>
        <span className="resume-project-name">
          {project.url ? (
            <a href={project.url}>{project.name}</a>
          ) : (
            project.name
          )}
        </span>
        {project.description && (
          <span className="resume-project-description">
            {" "}
            {project.description}
          </span>
        )}
        {project.highlights.length > 0 && (
          <ul className="resume-highlights">
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ul>
);

/**
 * The resume itself, rendered from resume.json.
 *
 * Emits semantic markup with stable class names and no inline styling, so the
 * screen theme and the print stylesheet can both style it without conflicting.
 */
const ResumeDocument: React.FC<ResumeDocumentProps> = ({
  variant = "screen",
  resume = defaultResume,
}) => {
  const { basics, work, education, skills, awards, interests } = resume;
  const selected = unattachedProjects(resume);

  return (
    <article className={`resume resume-${variant}`}>
      <ResumeHeader basics={basics} />

      <ResumeSection title="Profile">
        <p className="resume-summary">{basics.summary}</p>
      </ResumeSection>

      <ResumeSection title="Experience">
        {work.map((job) => {
          const projects = projectsFor(resume, job.name);
          return (
            <ResumeEntry
              key={`${job.name}-${job.startDate}`}
              title={job.name}
              subtitle={job.position}
              dates={formatDateRange(job.startDate, job.endDate)}
              summary={job.summary}
            >
              {job.highlights.length > 0 && (
                <ul className="resume-highlights">
                  {job.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              )}
              {projects.length > 0 && <ProjectList projects={projects} />}
            </ResumeEntry>
          );
        })}
      </ResumeSection>

      {selected.length > 0 && (
        <ResumeSection title="Selected Projects">
          <ProjectList projects={selected} />
        </ResumeSection>
      )}

      <ResumeSection title="Skills">
        <ul className="resume-skills">
          {skills.map((skill) => (
            <li key={skill.name}>
              <span className="resume-skill-name">{skill.name}:</span>{" "}
              {skill.keywords.join(", ")}
            </li>
          ))}
        </ul>
      </ResumeSection>

      <ResumeSection title="Education">
        {education.map((school) => (
          <ResumeEntry
            compact
            key={school.institution}
            title={school.institution}
            subtitle={[school.studyType, school.area]
              .filter(Boolean)
              .join(", ")}
            dates={formatDateRange(school.startDate, school.endDate)}
          />
        ))}
      </ResumeSection>

      {awards.length > 0 && (
        <ResumeSection title="Awards">
          <ul className="resume-awards">
            {awards.map((award) => (
              <li key={award.title}>
                <span className="resume-award-title">{award.title}</span>
                {award.date && `, ${award.date}`}
                {award.summary && ` - ${award.summary}`}
              </li>
            ))}
          </ul>
        </ResumeSection>
      )}

      {/* Interests humanize the page but are noise to a parser */}
      {variant !== "ats" && interests.length > 0 && (
        <ResumeSection title="Interests">
          <p className="resume-interests">
            {interests.map((interest) => interest.name).join(" · ")}
          </p>
        </ResumeSection>
      )}
    </article>
  );
};

export default ResumeDocument;
