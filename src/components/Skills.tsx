import { skillGroups } from "../data";

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-head">
        <p className="section-index">04</p>
        <h2>Skills</h2>
      </div>
      <div className="skill-grid">
        {skillGroups.map((group) => (
          <section key={group.label} className="skill-group">
            <h3>{group.label}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}
