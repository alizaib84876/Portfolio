import { experience } from "../data";

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="section-head">
        <p className="section-index">01</p>
        <h2>Experience</h2>
      </div>
      <ol className="timeline">
        {experience.map((role) => (
          <li key={role.org}>
            <p className="dates">
              {role.dates}
              <span>{role.meta}</span>
            </p>
            <div className="timeline-main">
              <h3>{role.title}</h3>
              <p className="org">{role.org}</p>
              <ul className="points">
                {role.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
