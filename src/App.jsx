import { Outlet } from "react-router-dom";
import Navbar from "./components/shared/Navbar/Navbar";
import SocialLink from "./components/Home/SocialLink/SocialLink";
import Footer from "./components/shared/Footer/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <SocialLink></SocialLink>
      <Footer></Footer>
    </>
  );
}

export default App;
