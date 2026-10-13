import {
  certifications,
  education,
  experience,
  profile,
  projects,
  skillGroups,
} from "../data";

const SITE = "https://muhammadalizaib.netlify.app";

type Section = {
  id: string;
  text: string;
  terms: string[];
};

const STOP = new Set([
  "the", "and", "you", "your", "what", "about", "did", "how", "for", "with",
  "his", "her", "any", "have", "has", "does", "do", "who", "are", "was",
  "were", "tell", "me", "please", "can", "could", "would", "this", "that",
  "there", "from", "into", "just", "know", "make", "hub", "link", "links",
  "where", "when", "why", "which",
]);

function experienceLength(now = new Date()): string {
  const hafizMonths = Math.max(0, (now.getFullYear() - 2026) * 12 + (now.getMonth() + 1 - 7));
  const hafizText = hafizMonths === 1 ? "about 1 month" : `about ${hafizMonths} months`;
  const asOf = now.toLocaleString("en-US", { month: "long", year: "numeric" });
  return `Experience length, already calculated, do not redo the arithmetic: DevelopersHub was May 2025 through July 2025, about 3 months. Al-Hafiz started July 2026, is part-time, and is still ongoing, ${hafizText} as of ${asOf}. State both ranges separately. Do not add them into one year.`;
}

function sections(): Section[] {
  const identity = [
    `${profile.name} is also called Ali and Ali Zaib. Those names mean him.`,
    "Data Science graduate from FAST–NUCES, June 2026. Looking for AI/ML Engineer roles.",
    "He builds applied AI systems that hold up beyond the demo, from models and evaluation to the software that makes them reliable.",
    "Roles: Data Analyst & Developer at Al-Hafiz Protein Farms, where he built FlockOps. Data Science & Analytics Intern at DevelopersHub Corporation.",
    experienceLength(),
    "Capability-Aware Verification is a heterogeneous multi-agent LLM project.",
    `Projects: ${projects.map((project) => project.title).join(", ")}.`,
    "The DevelopersHub internship has no public repository or demo.",
    `Email: ${profile.email}`,
    `Phone: ${profile.phone}`,
    `LinkedIn: ${profile.linkedin}`,
    `GitHub: ${profile.github}`,
    `Portfolio: ${SITE}`,
    `Resume: ${SITE}${profile.resume}`,
    "Homepage counts: 7 selected projects, 2 roles, 2 certifications, graduated 2026.",
    "The animated console on the homepage is decorative. Its speed and request figures are not facts.",
    "Do not name teammates or supervisors. Do not invent employers, cities, freelance work, or deployment counts.",
  ].join("\n");

  const list: Section[] = [
    {
      id: "identity",
      text: identity,
      terms: [
        "ali", "zaib", "muhammad", "who", "about", "yourself", "introduction",
        "graduate", "fast", "nuces", "hire", "role", "looking", "contact",
        "email", "phone", "mobile", "number", "linkedin", "github", "resume",
        "portfolio", "expertise", "expert", "background", "bio",
      ],
    },
  ];

  for (const role of experience) {
    const lines = [
      `${role.title}, ${role.org}, ${role.dates} (${role.meta})`,
      ...role.points.map((point) => `- ${point}`),
    ];
    if (role.org.includes("Hafiz")) {
      lines.push(
        "FlockOps is the operations platform from this role. It is a data and software product, not an AI product.",
        "FlockOps live app: https://flock-ops-theta.vercel.app",
        "FlockOps source: https://github.com/alizaib84876/FlockOps",
        "Sargodha is where this role is based. Do not describe the company beyond this record.",
      );
    }
    if (role.org.includes("DevelopersHub")) {
      lines.push(
        "This internship has no public repository or demo.",
        "Islamabad is where this remote internship was based. Do not describe the company beyond this record.",
      );
    }
    list.push({
      id: `role-${role.org}`,
      text: lines.join("\n"),
      terms: termsFrom(`${role.title} ${role.org} ${role.points.join(" ")} experience job work internship role`),
    });
  }

  for (const project of projects) {
    const lines = [
      `${project.title} (${project.context})`,
      project.summary,
      ...project.points.map((point) => `- ${point}`),
      `Tags: ${project.tags.join(", ")}`,
      `Source: ${project.href}`,
    ];
    if (project.title.startsWith("Capability")) {
      lines.push("This is a heterogeneous multi-agent LLM project.");
    }
    if (project.stat) lines.push(`Figure: ${project.stat.value} ${project.stat.label}`);
    if (project.demo) lines.push(`Live demo: ${project.demo}`);
    if (project.caseStudy) {
      const study = project.caseStudy;
      lines.push(
        `Case study: ${SITE}/${study.slug}`,
        study.lede,
        `Stack: ${study.stack.join(", ")}`,
        `Pipeline: ${study.pipeline.join(" → ")}`,
        study.pipelineNote,
        ...study.metrics.map((metric) => `${metric.label}: ${metric.value}`),
        study.note,
      );
    }
    const extra = project.title.startsWith("Capability") ? " agent agents multiagent llm multi-agent " : "";
    list.push({
      id: `project-${project.title}`,
      text: lines.join("\n"),
      terms: termsFrom(`${project.title} ${project.context} ${project.summary} ${project.tags.join(" ")} ${project.points.join(" ")}${extra}`),
    });
  }

  list.push({
    id: "skills",
    text: skillGroups.map((group) => `${group.label}: ${group.items.join(", ")}`).join("\n"),
    terms: termsFrom(`skills expertise stack tools ${skillGroups.map((group) => `${group.label} ${group.items.join(" ")}`).join(" ")}`),
  });

  list.push({
    id: "education",
    text: education
      .map((item) => {
        const courses = item.courses.length ? ` Courses: ${item.courses.join(", ")}` : "";
        return `${item.credential}, ${item.school}, ${item.dates}${item.detail ? `, ${item.detail}` : ""}.${courses}`;
      })
      .join("\n"),
    terms: termsFrom(`education degree university fast nuces courses ${education.map((item) => `${item.credential} ${item.school} ${item.courses.join(" ")}`).join(" ")}`),
  });

  list.push({
    id: "certifications",
    text: certifications.map((item) => `${item.name}, ${item.issuer}, ${item.date}`).join("\n"),
    terms: ["certification", "certifications", "certificate", "coursera", "deeplearning"],
  });

  const farms = list.find((section) => section.text.includes("Al-Hafiz"));
  if (farms) farms.terms.push("hafix", "alhafeez", "flock", "flockops", "shed", "broiler");

  return list;
}

function termsFrom(value: string): string[] {
  return [...new Set(tokens(value))];
}

function tokens(value: string): string[] {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9+#.]+/g, " ")
    .split(/\s+/)
    .filter((token) => token.length > 2 && !STOP.has(token));
}

function editDistance(left: string, right: string): number {
  const rows = Array.from({ length: left.length + 1 }, () => Array<number>(right.length + 1).fill(0));
  for (let i = 0; i <= left.length; i += 1) rows[i][0] = i;
  for (let j = 0; j <= right.length; j += 1) rows[0][j] = j;
  for (let i = 1; i <= left.length; i += 1) {
    for (let j = 1; j <= right.length; j += 1) {
      const cost = left[i - 1] === right[j - 1] ? 0 : 1;
      rows[i][j] = Math.min(rows[i - 1][j] + 1, rows[i][j - 1] + 1, rows[i - 1][j - 1] + cost);
    }
  }
  return rows[left.length][right.length];
}

function matches(queryToken: string, term: string): boolean {
  if (queryToken === term) return true;
  if (queryToken.length >= 5 && term.startsWith(queryToken)) return true;
  if (queryToken.length !== term.length || queryToken.length < 5) return false;
  return editDistance(queryToken, term) <= 1;
}

/** Keep the identity card and the sections that best match this conversation. */
export function relevantRecord(conversation: string): string {
  const all = sections();
  const query = tokens(conversation);
  const ranked = all
    .filter((section) => section.id !== "identity")
    .map((section) => ({
      section,
      score: query.reduce(
        (total, token) => total + (section.terms.some((term) => matches(token, term)) ? 1 : 0),
        0,
      ),
    }))
    .filter((item) => item.score > 0)
    .sort((left, right) => right.score - left.score);
  const best = ranked[0]?.score ?? 0;
  const floor = best >= 3 ? best - 1 : 1;
  const relevant = ranked.filter((item) => item.score >= floor);

  const chosen: Section[] = [];
  const seen = new Set<string>();
  const asksAboutRoles = query.some((token) =>
    ["experience", "experiences", "expereince", "experince", "years", "year", "months", "month", "company", "companies", "employer", "employers", "internship"].includes(token),
  );
  if (asksAboutRoles) {
    for (const section of all.filter((item) => item.id.startsWith("role-"))) {
      if (seen.has(section.text)) continue;
      seen.add(section.text);
      chosen.push(section);
    }
  }
  for (const item of relevant) {
    const text = item.section.text;
    if (seen.has(text)) continue;
    seen.add(text);
    chosen.push(item.section);
    if (chosen.length === 4) break;
  }

  const identity = all.find((section) => section.id === "identity");
  const parts = [identity?.text ?? "", ...chosen.map((section) => section.text)].filter(Boolean);
  return parts.join("\n\n");
}
