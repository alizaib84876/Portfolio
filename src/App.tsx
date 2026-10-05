import { useEffect } from "react";
import { CaseStudy } from "./components/CaseStudy";
import { Home, Nav } from "./components/Home";
import { projects } from "./data";
import { startMotion } from "./motion.js";

const equations = [
  { className: "eq eq-1", html: "∇<i>L</i>(θ) = −∑ <i>y</i> log(<i>ŷ</i>)" },
  { className: "eq eq-2", html: "σ(<i>z</i>) = 1 / (1 + <i>e</i><sup>−<i>z</i></sup>)" },
  { className: "eq eq-3", html: "θ<sub>t+1</sub> = θ<sub>t</sub> − η ∇<i>L</i>(θ<sub>t</sub>)" },
  { className: "eq eq-4", html: "Attention(<i>Q,K,V</i>) = softmax(<i>QK</i><sup>⊤</sup>/√<i>d<sub>k</sub></i>) <i>V</i>" },
  { className: "eq eq-5", html: "<i>H</i>(<i>p,q</i>) = −∑ <i>p</i><sub>i</sub> log <i>q</i><sub>i</sub>" },
  { className: "eq eq-6", html: "<i>p</i>(<i>y</i>∣<i>x</i>) = softmax(<i>Wx</i> + <i>b</i>)" },
  { className: "eq eq-8", html: "ReLU(<i>x</i>) = max(0, <i>x</i>)" },
  { className: "eq eq-11", html: "<i>F</i><sub>1</sub> = 2·<i>PR</i> / (<i>P</i>+<i>R</i>)" },
];

export default function App() {
  const slug = window.location.pathname.replace(/^\/+|\/+$/g, "");
  const studyProject = projects.find((project) => project.caseStudy?.slug === slug);

  useEffect(() => {
    return startMotion();
  }, [slug]);

  return (
    <>
      <a className="skip" href="#content">
        Skip to content
      </a>
      <div className="bg-grid"></div>
      <div className="bg-glow"></div>
      <div className="bg-math" aria-hidden="true">
        {equations.map((equation) => (
          <span key={equation.className} className={equation.className} dangerouslySetInnerHTML={{ __html: equation.html }} />
        ))}
      </div>
      <div className="cursor-glow"></div>
      <div className="scroll-progress"></div>
      <Nav />
      <main id="content">
        {studyProject ? (
          <div className="container case-page">
            <CaseStudy project={studyProject} />
          </div>
        ) : (
          <Home />
        )}
      </main>
    </>
  );
}
