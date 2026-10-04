import { useState } from "react";
import { profile } from "../data";

export function Contact() {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
    window.setTimeout(() => setCopyState("idle"), 2200);
  }

  return (
    <section className="section contact" id="contact">
      <div className="section-head">
        <p className="section-index">05</p>
        <h2>Contact</h2>
      </div>
      <div className="contact-layout">
        <div>
          <p className="email">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
          <div className="contact-actions">
            <button type="button" className="ghost-button" onClick={copyEmail}>
              {copyState === "copied" ? "Copied" : copyState === "failed" ? "Couldn’t copy" : "Copy email"}
            </button>
            <a className="ghost-button" href={profile.resume} download>
              Download resume
            </a>
          </div>
        </div>
        <ul className="contact-list">
        <li>
          <span>Phone</span>
          <a href={profile.phoneHref}>{profile.phone}</a>
        </li>
        <li>
          <span>LinkedIn</span>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            {profile.linkedinLabel}
          </a>
        </li>
        <li>
          <span>GitHub</span>
          <a href={profile.github} target="_blank" rel="noreferrer">
            github.com/alizaib84876
          </a>
        </li>
        </ul>
      </div>
    </section>
  );
}
