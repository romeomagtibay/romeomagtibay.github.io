import { About } from "./components/About";
import { Awards } from "./components/Awards";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { TechStack } from "./components/TechStack";
import { useReveal } from "./hooks/useReveal";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { theme, toggleTheme } = useTheme();
  useReveal();

  return (
    <div className="min-h-screen bg-white text-slate-700 antialiased dark:bg-[#0b0d12] dark:text-slate-300">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
