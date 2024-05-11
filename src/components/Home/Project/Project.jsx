import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import reactWeather1 from "../../../assets/assets/Screenshot (146).png";
import reactWeather2 from "../../../assets/assets/Screenshot (147).png";
import reactWeather3 from "../../../assets/assets/portfolio/Screenshot (74).png";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const animationControls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
      animationControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1, delay: 0.4, ease: "easeOut" },
      });
    }
  }, [animationControls, inView]);

  const projectCards = [
    {
      image: reactWeather3,
      projectLink: "https://asetta-autos-645ad.web.app/",
      clientLink: "https://github.com/arafat717/Asetta-Autos-client",
      serverLink: "https://github.com/arafat717/Asetta-Autos-Server",
    },
    {
      image: reactWeather1,
      projectLink: "https://disaster-relif.vercel.app/",
      clientLink: "https://github.com/arafat717/Disaster-Relif-Frontend",
      serverLink: "https://github.com/arafat717/Disaster-Relif-Backend",
    },
    {
      image: reactWeather2,
      projectLink: "https://mobile-shope-deploy.vercel.app/",
      clientLink: "https://github.com/arafat717/mobile-shop-client",
      serverLink: "https://github.com/arafat717/Mobile-shop-backend",
    },
  ];

  const headerVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
      },
    },
  };

  return (
    <div name="Project" className="w-full">
      <div
        ref={ref}
        className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full"
      >
        <motion.div
          className="pb-8"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={headerVariants}
        >
          <motion.p
            className="text-4xl font-bold inline border-b-4 border-gray-500"
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Projects
          </motion.p>
          <p className="py-6">Check out some of my work right here</p>
        </motion.div>
        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.4 }}
        >
          {projectCards.map((project, index) => (
            <motion.div
              key={index}
              className="shadow-md shadow-gray-600 rounded-lg "
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={project.image}
                alt={`Project ${index + 1}`}
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a className="w-1/2 px-6 py-3 m-4" href={project.projectLink}>
                  Project
                </a>
                <div className="flex items-center justify-center">
                  <div>
                    <a className="w-1/2 px-6" href={project.clientLink}>
                      Client
                    </a>
                  </div>
                  <div>
                    <a className="w-1/2 px-6" href={project.serverLink}>
                      Server
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
