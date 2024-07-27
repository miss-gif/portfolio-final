import React from "react";
import Home from "./components/home";
import Resume from "./components/resume";
import Portfolio from "./components/portfolio";
import Services from "./components/services";
import Skills from "./components/skills";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Project from "./components/project";
import Contact from "./components/contact";
import MouseCursor from "./components/MouseCursor/MouseCursor";

const App = () => {
  return (
    <div>
      <MouseCursor />
      <Header />
      <main>
        <Home />
        <Services />
        <Skills />
        <Project />
        <Portfolio />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
