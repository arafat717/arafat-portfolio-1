import Home from "./Home/Home/Home";
import About from "./Home/About/About";
import Education from "./Home/Education/Education";
import Projects from "./Home/Project/Project";
import Skills from "./Home/Skills/Skills";
import Blog from "./Home/Blog/Blog";
import Contact from "./Home/Contact/Contact";

const HomeLayout = () => {
  return (
    <div>
      <div className="mb-28 mt-14">
        <Home></Home>
      </div>
      <div className="my-28">
        <About></About>
      </div>
      <div className="my-28">
        <Education></Education>
      </div>
      <div className="my-28">
        <Projects></Projects>
      </div>
      <div className="my-28">
        <Skills></Skills>
      </div>
      <div className="my-28">
        <Blog></Blog>
      </div>
      <div className="my-28">
        <Contact></Contact>
      </div>
    </div>
  );
};

export default HomeLayout;
