import React from "react";
import Home from "./components/home";
import Resume from "./components/resume";
import Portfolio from "./components/portfolio";
import Services from "./components/services";
import Skills from "./components/skills";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Project from "./components/project";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Home />
        <Services />
        <Skills />
        <Project />
        <Portfolio />
        <Resume />
      </main>
      <Footer />
    </div>
  );
};

export default App;
