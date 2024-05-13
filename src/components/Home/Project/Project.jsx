import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useGetProjectQuery } from "../../Redux/api/projectApi";
import Loading from "../../Ui/Loading";

const Projects = () => {
  const { data, isLoading, isError } = useGetProjectQuery({});
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

  if (isLoading)
    return (
      <div>
        <Loading></Loading>
      </div>
    );
  if (isError) return <div>Error fetching blog</div>;
  if (!data) return <div>No blog found</div>;

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
          {data?.data?.map((project, index) => (
            <motion.div
              key={index}
              className="shadow-md shadow-gray-600 rounded-lg "
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={project.imageUrl}
                alt={`Project ${index + 1}`}
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a className="w-1/2 px-6 py-3 m-4" href={project.liveLink}>
                  Project
                </a>
                <div className="flex items-center justify-center">
                  <div>
                    <a className="w-1/2 px-6" href={project.clientRepo}>
                      Client
                    </a>
                  </div>
                  <div>
                    <a className="w-1/2 px-6" href={project.serverRepo}>
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
