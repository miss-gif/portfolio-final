import Cv from "./components/Cv";
import GlobalNav from "./components/GlobalNav";
import Contact from "./components/contact";
import Home from "./components/home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Portfolio from "./components/portfolio";
import Project from "./components/project";
import Resume from "./components/resume";
import Services from "./components/services";
import Skills from "./components/skills";
// import MouseCursor from "./components/MouseCursor/MouseCursor";

const App = () => {
  return (
    <div>
      {/* <MouseCursor /> */}
      <Header />
      <GlobalNav />
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
      <Cv />
    </div>
  );
};

export default App;
