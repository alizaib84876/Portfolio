import { useEffect } from "react";
import type { Project } from "../data";

export function CaseStudy({ project }: { project: Project }) {
  const study = project.caseStudy;

  useEffect(() => {
    const previous = document.title;
    document.title = `${project.title} — Muhammad Ali Zaib`;
    return () => {
      document.title = previous;
    };
  }, [project.title]);

  if (!study) return null;

  return (
    <article className="case">
      <a className="case-back" href="/#projects">
        Back to projects
      </a>
      <p className="kicker">{study.kicker}</p>
      <h1>{project.title}</h1>
      <p className="lede case-lede">{study.lede}</p>
      <ul className="case-stack">
        {study.stack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <figure className="case-diagram">
        <div className="case-diagram-scroll">
          <img
            src="/dyslexai.png"
            width={8192}
            height={898}
            alt="System flow: a student exercise goes through handwriting recognition with DocTR, TrOCR, and an LLM, then evaluation and adaptive personalization. Typing and tracing are separate inputs. Personalized exercises feed student and teacher dashboards, and a feedback loop returns to the next exercise."
          />
        </div>
        <figcaption>
          How the application works
          <a className="project-link" href="/dyslexai.png" target="_blank" rel="noreferrer">
            open full size →
          </a>
        </figcaption>
      </figure>

      <section className="case-pipeline">
        <div>
          <h2>The pipeline</h2>
          <ol className="pipeline">
            {study.pipeline.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p>{study.pipelineNote}</p>
        </div>
        <div>
          <dl className="case-metrics">
            {study.metrics.map((metric) => (
              <div key={metric.label}>
                <dt>{metric.label}</dt>
                <dd>{metric.value}</dd>
              </div>
            ))}
          </dl>
          <p className="case-metric-note">Best recorded result on the evaluation set.</p>
        </div>
      </section>

      <div className="case-columns">
        {study.sections.map((section) => (
          <section className="case-block" key={section.title}>
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
      </div>

      <p className="case-note">{study.note}</p>

      <div className="case-links">
        {project.demo ? (
          <a className="project-link" href={project.demo} target="_blank" rel="noreferrer">
            live demo →
          </a>
        ) : null}
        <a className="project-link" href={project.href} target="_blank" rel="noreferrer">
          view on github →
        </a>
      </div>
    </article>
  );
}
