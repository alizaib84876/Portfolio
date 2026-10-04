import { projects } from "../data";

export function Work() {
  return (
    <section className="section" id="work">
      <div className="section-head">
        <p className="section-index">02</p>
        <h2>Selected work</h2>
      </div>
      <ol className="project-list">
        {projects.map((project, index) => (
          <li className="project" key={project.title}>
            <div className="project-rail">
              <p className="project-index">{String(index + 1).padStart(2, "0")}</p>
              <p className="project-context">{project.context}</p>
            </div>
            <div className="project-body">
              <h3>
                <a href={project.href} target="_blank" rel="noreferrer">
                  {project.title}
                </a>
              </h3>
              <p className="project-summary">{project.summary}</p>
              <ul className="points">
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <ul className="tags">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
            <div className="project-side">
              {project.stat ? (
                <p className="stat">
                  <span className="stat-value">{project.stat.value}</span>
                  <span className="stat-label">{project.stat.label}</span>
                </p>
              ) : (
                <span />
              )}
              <div className="project-links">
                {project.demo ? (
                  <a className="text-link" href={project.demo} target="_blank" rel="noreferrer">
                    Live demo
                    <span aria-hidden="true"> ↗</span>
                  </a>
                ) : null}
                <a className="text-link" href={project.href} target="_blank" rel="noreferrer">
                  View on GitHub
                  <span aria-hidden="true"> ↗</span>
                </a>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
