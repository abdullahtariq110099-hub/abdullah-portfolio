import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ProjectSection from "./components/ProjectSection";
import Experience from "./components/Experience";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ProjectSection />
        <Experience />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
