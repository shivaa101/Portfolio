import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import SalesforceExpertise from './components/SalesforceExpertise.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Certifications from './components/Certifications.jsx';
import Education from './components/Education.jsx';
import Social from './components/Social.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import BackgroundFX from './components/BackgroundFX.jsx';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink-950">
      <BackgroundFX />

      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-sf-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Skills />
        <SalesforceExpertise />
        <Projects />
        <Experience />
        <Certifications />
        <Education />
        <Social />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
