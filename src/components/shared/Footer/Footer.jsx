import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-200 border border-gray-400 pt-12 pb-3 relative bottom-0">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-20">
        <div>
          <h2 className="text-xl font-bold mb-4">About Me</h2>
          <h1 className="text-xl">Arafat Hossen Joni</h1>
          <p className="text-sm">MERN Stack Developer</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Me</h2>
          <p className="text-sm">Email: arafatjibon33@email.com</p>
          <p className="text-sm">Phone: +8801972041006</p>
          <p className="text-sm">Location: Sherpur,Mymensingh,Bangladesh</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Social Media</h2>
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://twitter.com/arafatjibon9"
                className="text-2xl text-black hover:text-blue-900"
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/arafathossenjoni/"
                className="text-2xl text-blue-600 hover:text-blue-900"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/arafat717"
                className="text-2xl text-black hover:text-blue-900"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/arafatjibon.arafatjibon"
                className="text-2xl text-blue-600 hover:text-blue-900"
              >
                <FaFacebook />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Araft Hossen Joni. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
