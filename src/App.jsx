import React from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Qualificatin from "./components/qualificatin/Qualificatin";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Scrollup from "./components/scrollup/Scrollup";
import "./app.css";
import Projects from "./components/projects/Projects";

const App = () => {
  return (
    <div className="max-w-[2000px] mx-auto ">
      <Header />
      <main className="main">
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
  );
};

export default App;
