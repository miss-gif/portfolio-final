import React from "react";
import Home from "./components/home";
import Resume from "./components/resume";
import Portfolio from "./components/portfolio";
import Services from "./components/services";
import Skills from "./components/skills";

const App = () => {
  return (
    <div>
      <header>헤더</header>
      <main>
        <Home />
        <Portfolio />
        <Resume />
        <Services />
        <Skills />
      </main>
      <footer>푸터</footer>
    </div>
  );
};

export default App;
