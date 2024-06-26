import { Link, Outlet } from "react-router-dom";

function AdminDashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}

      <div className={`bg-gray-800 text-white w-64 h-full`}>
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
          <ul className="mt-10">
            <li className="mb-4">
              <Link
                to="/dashboard/manage-about"
                className="ml-6 text-white hover:text-gray-300"
              >
                Manage About
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="/dashboard/manage-education"
                className="ml-6 text-white hover:text-gray-300"
              >
                Manage Education
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="/dashboard/manage-project"
                className="ml-6 text-white hover:text-gray-300"
              >
                Manage Project
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="/dashboard/manage-skill"
                className="ml-6 text-white hover:text-gray-300"
              >
                Manage Skills
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="/dashboard/manage-blog"
                className="ml-6 text-white hover:text-gray-300"
              >
                Manage Blog
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="/dashboard/manage-experience"
                className="ml-6 text-white hover:text-gray-300"
              >
                Manage Experience
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1">
        {/* Top Navigation */}
        <nav className="bg-gray-800 p-4 sticky top-0">
          <div className="flex justify-between items-center">
            <button className="text-white focus:outline-none md:hidden">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
            <div>
              <Link to="/" className="ml-6 text-white hover:text-gray-300">
                HOME
              </Link>
              <Link
                to="/dashboard"
                className="ml-6 text-white hover:text-gray-300"
              >
                HOME
              </Link>
              <Link
                to="/dashboard/add-about"
                className="ml-6 text-white hover:text-gray-300"
              >
                About Me
              </Link>
              <Link
                to="/dashboard/add-education"
                className="ml-6 text-white hover:text-gray-300"
              >
                Add Education
              </Link>
              <Link
                to="/dashboard/add-project"
                className="ml-6 text-white hover:text-gray-300"
              >
                Add Project
              </Link>
              <Link
                to="/dashboard/add-skills"
                className="ml-6 text-white hover:text-gray-300"
              >
                Add Skills
              </Link>
              <Link
                to="/dashboard/add-blog"
                className="ml-6 text-white hover:text-gray-300"
              >
                Add Blog
              </Link>
              <Link
                to="/dashboard/add-experience"
                className="ml-6 text-white hover:text-gray-300"
              >
                Add Experience
              </Link>
              <a href="#" className="ml-6 text-white hover:text-gray-300">
                Logout
              </a>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Welcome to Dashboard</h1>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
