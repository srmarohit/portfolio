import { ThemeModeProvider } from "./theme/ThemeModeContext";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { Introduction } from "./components/Introduction/Introduction";
import { Skills } from "./components/Skills/Skills";
import { ExperienceTimeline } from "./components/Experience/ExperienceTimeline";
import { Projects } from "./components/Projects/Projects";
import { Repos } from "./components/Repos/Repos";
import { ContactForm } from "./components/Contact/ContactForm";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <ThemeModeProvider>
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <Skills />
        <ExperienceTimeline />
        <Projects />
        <Repos />
        <ContactForm />
      </main>
      <Footer />
    </ThemeModeProvider>
  );
}

export default App;
