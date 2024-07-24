import React from "react";
import Home from "./components/home";
import Resume from "./components/resume";
import Portfolio from "./components/portfolio";
import Services from "./components/services";
import Skills from "./components/skills";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Home />
        <Portfolio />
        <Resume />
        <Services />
        <Skills />
      </main>
      <Footer />
      <footer>푸터</footer>
    </div>
  );
};

export default App;
