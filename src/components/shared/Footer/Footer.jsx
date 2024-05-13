import { Link } from "react-scroll";

const Footer = () => {
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "Education",
    },
    {
      id: 4,
      link: "Project",
    },
    {
      id: 5,
      link: "Skills",
    },
    {
      id: 6,
      link: "contact",
    },
  ];

  return (
    <footer className="py-6 border-t border-gray-200 bg-gray-100 ">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="text-sm mb-4 lg:mb-0 text-gray-600">
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          <p>Designed and developed by Arafat Hossen Joni</p>
        </div>
        <div className="text-sm flex flex-wrap justify-center lg:justify-end">
          <ul className="flex space-x-4">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-2 py-1 rounded-md cursor-pointer capitalize font-medium text-gray-700 hover:text-blue-600 transition duration-300"
              >
                <Link
                  to={link}
                  smooth
                  duration={500}
                  className="hover:underline"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
