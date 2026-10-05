import {
  certifications,
  education,
  experience,
  profile,
  projects,
  skillGroups,
} from "../data";

const nav = [
  { href: "/#about", id: "about", label: "about" },
  { href: "/#skills", id: "skills", label: "skills" },
  { href: "/#experience", id: "experience", label: "experience" },
  { href: "/#projects", id: "projects", label: "projects" },
  { href: "/#education", id: "education", label: "education" },
  { href: "/#contact", id: "contact", label: "contact" },
];

const icons: Record<string, string> = {
  Python: "/skills/python.png",
  "C++": "/skills/cplusplus.svg",
  PyTorch: "/skills/pytorch.svg",
  TensorFlow: "/skills/tensorflow.png",
  "Scikit-learn": "/skills/scikitlearn.png",
  OpenCV: "/skills/opencv.png",
  Pandas: "/skills/pandas.svg",
  NumPy: "/skills/numpy.svg",
  Matplotlib: "/skills/matplotlib.png",
  Seaborn: "/skills/seaborn.svg",
  PostgreSQL: "/skills/postgresql.svg",
  Supabase: "/skills/supabase.svg",
  SQLAlchemy: "/skills/sqlalchemy.svg",
  "OpenAI API": "/skills/openai.svg",
  MLflow: "/skills/mlflow.svg",
  Kubeflow: "/skills/kubeflow.svg",
  "GitHub Actions": "/skills/githubactions.svg",
  Git: "/skills/git.svg",
  FastAPI: "/skills/fastapi.png",
  Flask: "/skills/flask.svg",
  React: "/skills/react.svg",
  "Next.js": "/skills/nextdotjs.svg",
  Docker: "/skills/docker.png",
  LangChain: "/skills/langchain.png",
  LlamaIndex: "/skills/llamaindex.png",
  Pinecone: "/skills/pinecone.png",
  n8n: "/skills/n8n.svg",
  "Claude Code": "/skills/claude.svg",
  Cursor: "/skills/cursor.svg",
  Antigravity: "/skills/antigravity.png",
};

const marquee = [
  "Python",
  "PyTorch",
  "TensorFlow",
  "Scikit-learn",
  "FastAPI",
  "Docker",
  "React",
  "Next.js",
  "LangChain",
  "LlamaIndex",
  "Pinecone",
  "n8n",
  "Claude Code",
  "Cursor",
  "OpenAI API",
  "Antigravity",
  "PostgreSQL",
  "MLflow",
];

const roleTech: Record<string, string[]> = {
  "Al-Hafiz Protein Farms": ["Next.js", "Supabase", "PostgreSQL", "PWA", "Vercel"],
  "DevelopersHub Corporation": ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
};

const tints = ["tint-mint", "tint-cyan", "tint-violet"];

function Chip({ name }: { name: string }) {
  const icon = icons[name];
  return (
    <span className="skill-chip">
      {icon ? <img src={icon} alt="" /> : null}
      {name}
    </span>
  );
}

export function Nav() {
  return (
    <>
      <nav className="nav">
        <div className="container nav-inner">
          <a href="/#top" className="logo">
            <span className="logo-mark">AZ</span>
            <span>{profile.name}</span>
          </a>
          <div className="nav-links">
            {nav.map((item) => (
              <a key={item.id} className="nav-link" data-target={item.id} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <button className="nav-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </nav>
      <div className="mobile-menu" id="mobile-menu" aria-hidden="true">
        <nav className="mobile-menu-inner">
          {nav.map((item, index) => (
            <a key={item.id} className="m-link" data-target={item.id} href={item.href}>
              <span className="idx">{String(index + 1).padStart(2, "0")}</span>
              <span>{item.label}</span>
              <span className="m-arrow">→</span>
            </a>
          ))}
          <div className="m-channels">
            <a href={`mailto:${profile.email}`}>email</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              linkedin
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              github
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

export function Home() {
  return (
    <>
      <section id="about" className="hero">
        <a id="top"></a>
        <canvas id="hero-bg-canvas" aria-hidden="true"></canvas>
        <div className="hero-orb"></div>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-left">
              <div className="hero-status">
                <span className="avatar">AZ</span>
                <span>{profile.name}</span>
                <span className="sep">/</span>
                <span>AI/ML Engineer</span>
                <span className="ring"></span>
              </div>
              <div className="hero-name mono">CV · NLP · MLOPS · APPLIED AI</div>
              <h1 className="hero-headline">
                <span className="line">
                  <span>Building</span>
                </span>
                <span className="line">
                  <span>
                    <em>applied AI</em>
                  </span>
                </span>
                <span className="line">
                  <span>that holds up</span>
                </span>
                <span className="line">
                  <span>
                    beyond <em>the demo.</em>
                  </span>
                </span>
              </h1>
              <div className="hero-subline">
                <span className="arrow">▸</span>
                <span data-typed>AI/ML Engineer</span>
                <span className="typed-cursor"></span>
              </div>
              <p className="hero-desc">
                Data Science graduate from FAST–NUCES. I build applied AI systems that hold up beyond the demo,
                from models and evaluation to the software that makes them reliable and useful.{" "}
                <span className="scramble" data-scramble="Looking for AI/ML Engineer roles.">
                  Looking for AI/ML Engineer roles.
                </span>
              </p>
              <div className="hero-ctas">
                <a className="btn btn-primary" href="/#contact">
                  Let&apos;s talk
                  <span className="btn-arrow">↗</span>
                </a>
                <a className="btn btn-ghost" href="/#projects">
                  See selected work
                </a>
              </div>
              <div className="hero-stats">
                <div className="hero-stat">
                  <div className="num" data-value="7">
                    0
                  </div>
                  <div className="lbl">Selected projects</div>
                </div>
                <div className="hero-stat">
                  <div className="num" data-value="2">
                    0
                  </div>
                  <div className="lbl">Roles</div>
                </div>
                <div className="hero-stat">
                  <div className="num" data-value="2">
                    0
                  </div>
                  <div className="lbl">Certifications</div>
                </div>
                <div className="hero-stat">
                  <div className="num" data-value="2026">
                    0
                  </div>
                  <div className="lbl">Graduated</div>
                </div>
              </div>
            </div>
            <div className="hero-right">
              <div className="hero-chip chip-1">
                <span className="dot"></span>doctr · trocr
              </div>
              <div className="hero-chip chip-2">
                <span className="dot violet"></span>fastapi · react
              </div>
              <div className="hero-chip chip-3">
                <span className="dot mint"></span>mlflow · docker
              </div>
              <div className="hero-chip chip-4">
                <span className="dot amber"></span>pytorch · sklearn
              </div>
              <div className="console">
                <div className="console-head">
                  <div className="console-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="console-title">
                    alizaib@lab · <b>~/models</b>
                  </div>
                  <div className="console-tag">
                    <span className="pip"></span>LAB
                  </div>
                </div>
                <div className="console-metrics">
                  <div className="metric-cell">
                    <div className="lbl">TOKENS / SEC</div>
                    <div className="val">
                      <span id="m-tps">1284</span> <span className="arrow">↑</span>
                    </div>
                    <svg className="spark" id="spark-1" viewBox="0 0 50 18" preserveAspectRatio="none"></svg>
                  </div>
                  <div className="metric-cell">
                    <div className="lbl">LATENCY P95</div>
                    <div className="val">
                      <span id="m-lat">142</span>
                      <span className="unit">ms</span> <span className="arrow down">↓</span>
                    </div>
                    <svg className="spark" id="spark-2" viewBox="0 0 50 18" preserveAspectRatio="none"></svg>
                  </div>
                  <div className="metric-cell">
                    <div className="lbl">ACTIVE MODELS</div>
                    <div className="val">
                      <span id="m-mod">07</span>
                    </div>
                    <svg className="spark" id="spark-3" viewBox="0 0 50 18" preserveAspectRatio="none"></svg>
                  </div>
                  <div className="metric-cell">
                    <div className="lbl">REQUESTS / MIN</div>
                    <div className="val">
                      <span id="m-req">3.4</span>
                      <span className="unit">k</span> <span className="arrow">↑</span>
                    </div>
                    <svg className="spark" id="spark-4" viewBox="0 0 50 18" preserveAspectRatio="none"></svg>
                  </div>
                </div>
                <div className="console-net">
                  <span className="net-label tl">
                    <span style={{ color: "var(--cyan)" }}>●</span> model.training
                  </span>
                  <span className="net-label tr" id="loss-readout">
                    loss · 0.0042
                  </span>
                  <canvas id="hero-canvas" aria-hidden="true"></canvas>
                  <span className="net-label bl">
                    ARCH · <span className="arch-num">3</span> - <span className="arch-num">5</span> -{" "}
                    <span className="arch-num">6</span> - <span className="arch-num">5</span> -{" "}
                    <span className="arch-num">3</span>
                  </span>
                  <span className="net-label br" id="epoch-readout">
                    epoch 142/∞
                  </span>
                </div>
                <div className="console-log" id="terminal-body"></div>
                <div className="console-foot">
                  <span className="seg ok">
                    <span className="lbl">●</span>
                    <span className="v">healthy</span>
                  </span>
                  <span className="seg">
                    <span className="lbl">stack</span>
                    <span className="v">applied-ai</span>
                  </span>
                  <span className="seg">
                    <span className="lbl">build</span>
                    <span className="v">bsc-ds</span>
                  </span>
                  <span className="grow"></span>
                  <span className="seg">
                    <span className="lbl">uptime</span>
                    <span className="v uptime" id="m-uptime">
                      142h 38m
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-hint">
          <span>SCROLL</span>
          <span className="rail"></span>
        </div>
      </section>

      <div className="marquee">
        <div className="marquee-track">
          {[0, 1].map((copy) =>
            marquee.map((name) => (
              <span className="marquee-item" key={`${copy}-${name}`}>
                {icons[name] ? <img src={icons[name]} alt="" /> : null}
                {name}
              </span>
            )),
          )}
        </div>
      </div>

      <section id="skills" className="section-pad">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <div className="section-tag">
                <span className="square"></span>02 / Toolkit
              </div>
              <h2>
                The stack behind <span className="gradient">applied AI</span>
              </h2>
            </div>
            <div className="section-meta">Models, data, and the software around them</div>
          </div>
          <div className="skill-stack">
            {skillGroups.map((group, index) => (
              <div className={`skill-card reveal${index ? ` reveal-delay-${Math.min(index, 3)}` : ""}`} key={group.label}>
                <div className={`skill-card-head${["", " violet", " mint", " amber", " violet", " mint"][index] ?? ""}`}>
                  <h3>
                    <span className="dot-icon"></span>
                    {group.label}
                  </h3>
                  <span className="num">/ {String(group.items.length).padStart(2, "0")}</span>
                </div>
                <div className="skill-list">
                  {group.items.map((item) => (
                    <Chip key={item} name={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section-pad">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <div className="section-tag">
                <span className="square"></span>03 / Track record
              </div>
              <h2>
                From analysis to <span className="gradient">shipped software</span>
              </h2>
            </div>
            <div className="section-meta">2025 — present · {experience.length} roles</div>
          </div>
          <div className="timeline">
            {experience.map((role) => (
              <div className={`tl-item reveal${role.dates.includes("Present") ? " current" : ""}`} key={role.org}>
                <div className="tl-dot"></div>
                <div className="tl-row">
                  <div className="tl-period">
                    {role.dates.toUpperCase()}
                    <div>{role.meta}</div>
                    {role.dates.includes("Present") ? (
                      <div>
                        <span className="badge">● ACTIVE</span>
                      </div>
                    ) : null}
                  </div>
                  <div className="tl-body">
                    <h3>{role.title}</h3>
                    <div className="company">{role.org}</div>
                    <ul className="tl-points">
                      {role.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                    <div className="tl-tech">
                      {(roleTech[role.org] ?? []).map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section-pad">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <div className="section-tag">
                <span className="square"></span>04 / Selected work
              </div>
              <h2>
                Selected work, <span className="gradient">built to be used</span>
              </h2>
            </div>
            <div className="section-meta">CV · NLP · MLOps · data</div>
          </div>
          <div className="projects-stack">
            {projects.map((project, index) => (
              <article className={`project-card ${tints[index % tints.length]}${project.image ? " has-shot" : ""} reveal`} key={project.title}>
                <div className="project-img-wrap">
                  <span className="project-cat">{project.context}</span>
                  <span className="project-num">{String(index + 1).padStart(2, "0")}</span>
                  {project.image ? (
                    <img className="project-shot" src={project.image} alt={`${project.title} application`} />
                  ) : project.stat ? (
                    <div className="project-stat-panel">
                      <div className="big">{project.stat.value}</div>
                      <div className="lbl">{project.stat.label}</div>
                    </div>
                  ) : null}
                </div>
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <ul className="project-feature-list">
                    {project.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <div className="project-tech">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-actions">
                    {project.caseStudy ? (
                      <a className="project-link" href={`/${project.caseStudy.slug}`}>
                        case study →
                      </a>
                    ) : null}
                    {project.demo ? (
                      <a className="project-link" href={project.demo} target="_blank" rel="noreferrer">
                        live demo →
                      </a>
                    ) : null}
                    <a className="project-link" href={project.href} target="_blank" rel="noreferrer">
                      view on github →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="section-pad">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <div className="section-tag">
                <span className="square"></span>05 / Education
              </div>
              <h2>
                Formal training, <span className="gradient">still building</span>
              </h2>
            </div>
            <div className="section-meta">2019 — 2026</div>
          </div>
          <div className="edu-grid">
            {education.map((item, index) => (
              <div className="edu-card reveal" key={item.credential}>
                <div className="edu-short">{index === 0 ? "BSDS" : "FSc"}</div>
                <h3>{item.credential}</h3>
                <div className="inst">{item.school}</div>
                <div className="meta">
                  <span>
                    {item.dates.toUpperCase()}
                    {item.detail ? ` · ${item.detail}` : ""}
                  </span>
                  {item.courses.length > 0 ? <span>{item.courses.join(" · ")}</span> : null}
                </div>
              </div>
            ))}
            <div className="edu-card reveal reveal-delay-2">
              <div className="edu-short">Certs</div>
              <h3>DeepLearning.ai</h3>
              <div className="inst">Coursera</div>
              <div className="meta">
                {certifications.map((item) => (
                  <span key={item.name}>
                    {item.name} · {item.date}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-pad">
        <div className="container">
          <div className="contact-card reveal">
            <div className="availability">
              <span className="ring"></span>
              OPEN TO AI/ML ENGINEER ROLES
            </div>
            <h2>
              Have a problem worth <em>building through?</em>
            </h2>
            <p>
              I am looking for AI/ML Engineer roles. The useful part of the work is taking a model past the notebook
              and into software someone can actually use.
            </p>
            <div className="contact-meta">
              <div className="item">
                <span className="v mint">FAST–NUCES</span>
                <span className="l">BSc Data Science</span>
              </div>
              <div className="item">
                <span className="v">June 2026</span>
                <span className="l">Graduated</span>
              </div>
              <div className="item">
                <span className="v">Remote · Hybrid</span>
                <span className="l">Open to</span>
              </div>
              <div className="item">
                <span className="v">Resume</span>
                <span className="l">PDF below</span>
              </div>
            </div>
            <div className="contact-actions">
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                {profile.email}
                <span className="btn-arrow">↗</span>
              </a>
              <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="btn btn-ghost" href={profile.resume}>
                Resume
              </a>
            </div>
            <div className="contact-channels">
              <a href={profile.phoneHref}>
                <span className="label">phone ·</span>
                {profile.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="signature">
            <span className="ping"></span>
            <span>
              © {new Date().getFullYear()} {profile.name.toUpperCase()} · AI/ML ENGINEER
            </span>
          </div>
          <div>REACT · FASTAPI · MODELS THAT LEAVE THE NOTEBOOK</div>
        </div>
      </footer>
    </>
  );
}
