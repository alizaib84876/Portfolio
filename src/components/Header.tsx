import { profile } from "../data";

const links = [
  { href: "/#experience", id: "experience", label: "Experience" },
  { href: "/#work", id: "work", label: "Work" },
  { href: "/#background", id: "background", label: "Background" },
  { href: "/#skills", id: "skills", label: "Skills" },
  { href: "/#contact", id: "contact", label: "Contact" },
];

export function Header({ active }: { active: string }) {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <a className="brand" href="/#top">
          <span className="brand-mark" aria-hidden="true">
            AZ
          </span>
          <span className="brand-name">{profile.name}</span>
        </a>
        <nav className="nav" aria-label="Page">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              aria-current={active === link.id ? "true" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a className="resume-link" href={profile.resume} download>
          Resume
        </a>
      </div>
    </header>
  );
}
