import Contact from "../components/contact";
import Home from "../components/home";
import Portfolio from "../components/portfolio";
import Project from "../components/project";
import Resume from "../components/resume";
import Services from "../components/services";
import Skills from "../components/skills";

const HomePage = () => {
  return (
    <>
      <main>
        <Home />
        <Skills />
        <Services />
        <Project />
        <Portfolio />
        <Resume />
        <Contact />
      </main>
    </>
  );
};

export default HomePage;
