import { profile } from "../data";

const facts = [
  { label: "Degree", value: "BSc Data Science" },
  { label: "University", value: "FAST–NUCES, Islamabad" },
  { label: "Graduated", value: "June 2026" },
  { label: "Seeking", value: "AI/ML Engineer" },
];

export function Hero() {
  return (
    <section className="hero" id="top">
      <p className="kicker">BSc Data Science · Graduated June 2026</p>
      <div className="hero-title">
        <h1>{profile.name}</h1>
        <div className="portrait">
          <img src="/portrait.jpeg" alt="" />
        </div>
      </div>
      <p className="roles">
        {profile.roles.map((role) => (
          <span key={role}>{role}</span>
        ))}
      </p>
      <div className="hero-lower">
        <p className="lede">
          Data Science graduate from FAST–NUCES. I build applied AI systems
          that hold up beyond the demo, from models and evaluation to the
          software that makes them reliable and useful. I am looking for
          AI/ML Engineer roles.
        </p>
        <ul className="hero-links">
          <li>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </li>
          <li>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
      <dl className="facts">
        {facts.map((fact) => (
          <div key={fact.label}>
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
