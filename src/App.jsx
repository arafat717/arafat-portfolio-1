import About from "./components/Home/About/About";
import Contact from "./components/Home/Contact/Contact";
import Education from "./components/Home/Education/Education";
import Home from "./components/Home/Home/Home";
import Projects from "./components/Home/Project/Project";
import Skills from "./components/Home/Skills/Skills";
import Navbar from "./components/shared/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Education></Education>
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
    </>
  );
}

export default App;
