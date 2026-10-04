import { certifications, education } from "../data";

export function Background() {
  return (
    <section className="section" id="background">
      <div className="section-head">
        <p className="section-index">03</p>
        <h2>Background</h2>
      </div>

      <ol className="timeline">
        {education.map((item) => (
          <li key={item.school}>
            <p className="dates">
              {item.dates}
              {item.detail ? <span>{item.detail}</span> : null}
            </p>
            <div className="timeline-main">
              <h3>{item.credential}</h3>
              <p className="org">{item.school}</p>
              {item.courses.length > 0 ? (
                <p className="courses">
                  <span>Relevant courses. </span>
                  {item.courses.join(", ")}.
                </p>
              ) : null}
            </div>
          </li>
        ))}
      </ol>

      <h3 className="subhead">Certifications</h3>
      <ul className="certs">
        {certifications.map((cert) => (
          <li key={cert.name}>
            <p className="dates">{cert.date}</p>
            <div>
              <p className="cert-name">{cert.name}</p>
              <p className="org">{cert.issuer}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
