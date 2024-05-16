import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
import AddAboutMe from "./components/Admin/AddAboutMe/AddAboutMe.jsx";
import { Provider } from "react-redux";
import { store } from "./components/Redux/store.js";
import Blog from "./components/Home/Blog/Blog.jsx";
import BlogDetailsPage from "./components/Ui/BlogDetailsPage.jsx";
import HomeLayout from "./components/HomeLayout.jsx";
import AboutLayout from "./components/AboutLayout.jsx";
import ProjectManage from "./components/Admin/ManageDashboard/ProjectManage.jsx";
import SkillsManage from "./components/Admin/ManageDashboard/SkillsManage.jsx";
import BlogManage from "./components/Admin/ManageDashboard/BlogManage.jsx";
import AboutManage from "./components/Admin/ManageDashboard/AboutManage.jsx";
import ExperianceManage from "./components/Admin/ManageDashboard/ExperianceManage.jsx";
import EducationManage from "./components/Admin/ManageDashboard/EducationManage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <HomeLayout></HomeLayout>,
      },
      {
        path: "home",
        element: <HomeLayout></HomeLayout>,
      },
      {
        path: "about",
        element: <AboutLayout></AboutLayout>,
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
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "blog/:blogId",
        element: <BlogDetailsPage></BlogDetailsPage>,
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
        element: <AddAboutMe></AddAboutMe>,
      },
      {
        path: "/dashboard/add-experience",
        element: <AddExperience></AddExperience>,
      },
      {
        path: "/dashboard/manage-project",
        element: <ProjectManage></ProjectManage>,
      },
      {
        path: "/dashboard/manage-skill",
        element: <SkillsManage></SkillsManage>,
      },
      {
        path: "/dashboard/manage-blog",
        element: <BlogManage></BlogManage>,
      },
      {
        path: "/dashboard/manage-about",
        element: <AboutManage></AboutManage>,
      },
      {
        path: "/dashboard/manage-experience",
        element: <ExperianceManage></ExperianceManage>,
      },
      {
        path: "/dashboard/manage-education",
        element: <EducationManage></EducationManage>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-[1400px] mx-auto">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  </React.StrictMode>
);
