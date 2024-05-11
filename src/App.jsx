import { Outlet } from "react-router-dom";
import Navbar from "./components/shared/Navbar/Navbar";
import SocialLink from "./components/Home/SocialLink/SocialLink";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <SocialLink></SocialLink>
    </>
  );
}

export default App;
