import { useEffect } from "react";
import type { Project } from "../data";

function Arrow() {
  return (
    <svg className="link-arrow" viewBox="0 0 12 12" aria-hidden="true">
      <path
        d="M3.2 8.8 8.8 3.2M4.7 3.2H8.8V7.3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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
      <a className="case-back" href="/#work">
        Back to work
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
          <a className="text-link" href="/dyslexai.png" target="_blank" rel="noreferrer">
            Open full size
            <Arrow />
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
          <a className="text-link" href={project.demo} target="_blank" rel="noreferrer">
            Live demo
            <Arrow />
          </a>
        ) : null}
        <a className="text-link" href={project.href} target="_blank" rel="noreferrer">
          View on GitHub
          <Arrow />
        </a>
      </div>
    </article>
  );
}
