import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home/Home.jsx";
import About from "./components/Home/About/About.jsx";
import Education from "./components/Home/Education/Education.jsx";
import Projects from "./components/Home/Project/Project.jsx";
import Skills from "./components/Home/Skills/Skills.jsx";
import Contact from "./components/Home/Contact/Contact.jsx";
import AdminDashboard from "./components/Admin/AdminDashboard.jsx";
import AddSkills from "./components/Admin/AddSkills/AddSkills.jsx";
import AddProject from "./components/Admin/AddProject/AddProject.jsx";
import AddEducation from "./components/Admin/AddEducation/AddEducation.jsx";
import AddBlog from "./components/Admin/AddBlog/AddBlog.jsx";
import AddExperience from "./components/Admin/AddExperience/AddExperience.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "Education",
        element: <Education></Education>,
      },
      {
        path: "Project",
        element: <Projects></Projects>,
      },
      {
        path: "Skills",
        element: <Skills></Skills>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <AdminDashboard></AdminDashboard>,
    children: [
      {
        path: "/dashboard/add-skills",
        element: <AddSkills></AddSkills>,
      },
      {
        path: "/dashboard/add-project",
        element: <AddProject></AddProject>,
      },
      {
        path: "/dashboard/add-education",
        element: <AddEducation></AddEducation>,
      },
      {
        path: "/dashboard/add-blog",
        element: <AddBlog></AddBlog>,
      },
      {
        path: "/dashboard/add-about",
        element: <AddBlog></AddBlog>,
      },
      {
        path: "/dashboard/add-experience",
        element: <AddExperience></AddExperience>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
