import Contact from "../components/contact";
import Home from "../components/home";
import Portfolio from "../components/portfolio";
import Project from "../components/project";
import Resume from "../components/resume";
import Roadmap from "../components/roadmap";
import Services from "../components/services";
import Skills from "../components/skills";
import Visitors from "../components/visitors/Visitors";
import OneTest from "./../components/roadmap/OneTest";

const HomePage = () => {
  return (
    <>
      <main>
        <Home />
        {/* <OneTest /> */}
        <Roadmap />
        <Skills />
        <Services />
        <Project />
        <Portfolio />
        <Resume />
        <Contact />
        <Visitors />
      </main>
    </>
  );
};

export default HomePage;
