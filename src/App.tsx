import About from "./components/about/About";
import Education from "./components/education/Education";
import Hero from "./components/hero/Hero";
import FloatingLink from "./components/layout/FloatingLink";
import Footer from "./components/layout/Footer";
import NavBar from "./components/layout/Navbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <FloatingLink />
      <About />
      <Skills />
      <Work />
      <Education />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
