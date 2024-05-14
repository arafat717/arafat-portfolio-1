/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import HeroImage2 from "../../../assets/assets/arafat.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      name="home"
      className="gap-1 w-full"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full md:w-1/2">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-3xl sm:text-5xl font-semibold "
          >
            Hi, I'm Arafat Hossen Joni
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-xl mt-2 sm:text-4xl  "
          >
            MERN Stack Developer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-gray-500 py-4 max-w-md"
          >
            I specialize in building and maintaining websites and web
            applications while continuously expanding my skills and knowledge..
            <br />
            Currently, I love to work on web application using technologies like
            React, Tailwind, Next JS.
          </motion.p>

          <div>
            <Link
              to="/project"
              smooth
              duration={500}
              className="group  w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              My Works
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="md:w-1/2"
        >
          <img
            src={HeroImage2}
            alt="my profile"
            className="rounded-2xl mx-auto w-full md:full"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
