import { Background } from "./components/Background";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Work } from "./components/Work";
import { profile } from "./data";
import { useActiveSection } from "./useActiveSection";

export default function App() {
  const active = useActiveSection();

  return (
    <>
      <a className="skip" href="#content">
        Skip to content
      </a>
      <Header active={active} />
      <main id="content">
        <div className="wrap">
          <Hero />
          <Experience />
          <Work />
          <Background />
          <Skills />
          <Contact />
        </div>
      </main>
      <footer className="site-footer">
        <div className="wrap footer-inner">
          <p>
            {profile.name}
            <span> · AI/ML Engineer</span>
          </p>
          <p>© {new Date().getFullYear()}</p>
        </div>
      </footer>
    </>
  );
}
