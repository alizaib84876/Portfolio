import {
  certifications,
  education,
  experience,
  profile,
  projects,
  skillGroups,
} from "../data";

const SITE = "https://muhammadalizaib.netlify.app";

/** Plain-text record the chat model is allowed to use. */
export function portfolioRecord(): string {
  const lines: string[] = [
    `Name: ${profile.name}. He is also called Ali and Ali Zaib. Those names mean him.`,
    "Looking for AI/ML Engineer roles.",
    "Data Science graduate from FAST–NUCES. He builds applied AI systems that hold up beyond the demo, from models and evaluation to the software that makes them reliable and useful.",
    `Email: ${profile.email}`,
    `Phone: ${profile.phone}`,
    `LinkedIn: ${profile.linkedin}`,
    `GitHub: ${profile.github}`,
    `Portfolio: ${SITE}`,
    `Resume PDF: ${SITE}${profile.resume}`,
    "The homepage counts are 7 selected projects, 2 roles, 2 certifications, and graduation in 2026.",
    "The animated console on the homepage is decorative. Its tokens-per-second, latency, and request figures are not facts about his work.",
    "Do not name teammates, supervisors, or collaborators. Do not invent employers, cities, freelance work, or deployment counts.",
    "",
    "Education:",
  ];

  for (const item of education) {
    lines.push(`- ${item.credential}, ${item.school}, ${item.dates}${item.detail ? `, ${item.detail}` : ""}`);
    if (item.courses.length) lines.push(`  Courses: ${item.courses.join(", ")}`);
  }

  lines.push("", "Experience:");
  for (const role of experience) {
    lines.push(`- ${role.title}, ${role.org}, ${role.dates} (${role.meta})`);
    for (const point of role.points) lines.push(`  - ${point}`);
  }
  lines.push(
    "FlockOps is the operations platform from the Al-Hafiz Protein Farms role. It is a data and software product, not an AI product.",
    "FlockOps live app: https://flock-ops-theta.vercel.app",
    "FlockOps source: https://github.com/alizaib84876/FlockOps",
  );

  lines.push("", "Projects:");
  for (const project of projects) {
    lines.push(`- ${project.title} (${project.context})`);
    lines.push(`  ${project.summary}`);
    for (const point of project.points) lines.push(`  - ${point}`);
    lines.push(`  Tags: ${project.tags.join(", ")}`);
    if (project.stat) lines.push(`  Figure: ${project.stat.value} ${project.stat.label}`);
    lines.push(`  Source: ${project.href}`);
    if (project.demo) lines.push(`  Live demo: ${project.demo}`);
    if (project.caseStudy) {
      const study = project.caseStudy;
      lines.push(`  Case study: ${SITE}/${study.slug}`);
      lines.push(`  ${study.kicker}`);
      lines.push(`  ${study.lede}`);
      lines.push(`  Stack: ${study.stack.join(", ")}`);
      lines.push(`  Pipeline: ${study.pipeline.join(" → ")}`);
      lines.push(`  ${study.pipelineNote}`);
      for (const metric of study.metrics) lines.push(`  ${metric.label}: ${metric.value}`);
      for (const section of study.sections) {
        lines.push(`  ${section.title}`);
        for (const paragraph of section.paragraphs) lines.push(`  ${paragraph}`);
      }
      lines.push(`  ${study.note}`);
    }
  }

  lines.push("", "Skills:");
  for (const group of skillGroups) {
    lines.push(`- ${group.label}: ${group.items.join(", ")}`);
  }

  lines.push("", "Certifications:");
  for (const item of certifications) {
    lines.push(`- ${item.name}, ${item.issuer}, ${item.date}`);
  }

  return lines.join("\n");
}
