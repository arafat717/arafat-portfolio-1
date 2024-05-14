import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-200 border border-gray-400 pt-12 pb-3 relative bottom-0">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-20">
        <div>
          <h2 className="text-xl font-bold mb-4">About Me</h2>
          <p className="text-sm">
            Brief description about yourself and your expertise.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Me</h2>
          <p className="text-sm">Email: your@email.com</p>
          <p className="text-sm">Phone: +1234567890</p>
          <p className="text-sm">Location: Your City, Country</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Social Media</h2>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#" className="">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="#" className="">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="#" className="text-xl text-blue-600">
                <FaFacebook />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Name. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
