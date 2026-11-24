import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Qualificatin from "./components/qualificatin/Qualificatin";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Scrollup from "./components/scrollup/Scrollup";

const App = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-[#080B12] text-[#F5F7FC]">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:80px_80px]" />

      <div className="relative z-10">
        <Header />

        <main>
          <Home />
          <About />
          <Skills />
          <Projects />
          <Qualificatin />
          <Contact />
        </main>

        <Footer />
        <Scrollup />
      </div>
    </div>
  );
};

export default App;
