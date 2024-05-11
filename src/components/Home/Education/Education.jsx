/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const animationControls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

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

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
      animationControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
      });
    }
  }, [animationControls, inView]);

  return (
    <div name="Education">
      <div className="w-full">
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
              Education
            </motion.p>
          </motion.div>
          <motion.div
            className="container mx-auto px-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="contents"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="box"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <h4 className="text-green-500">2014 - 2020</h4>
                  <h3 className="text-xl font-semibold mb-2">
                    High School Degree
                  </h3>
                  <p className="text-gray-600">
                    I successfully completed my high school education in science
                    with a notable achievement of 4.22 out of 5.00. I've coded
                    my way through challenges, showcasing my dedication to
                    excellence in both academics and web development."
                  </p>
                </motion.div>
              </motion.div>
              <motion.div
                className="contents"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="box"
                  initial={{ opacity: 0, y: 60 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  <h4 className="text-green-500">2020 - 2022</h4>
                  <h3 className="text-xl font-semibold mb-2">
                    {" "}
                    Higher Secondary Certificate
                  </h3>
                  <p className="text-gray-600">
                    I have successfully graduated with a Higher Secondary
                    Certificate in the field of Science, achieving a commendable
                    result of 4.42 out of 5.00.
                  </p>
                </motion.div>
              </motion.div>
              <motion.div
                className="contents"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="box"
                  initial={{ opacity: 0, y: 40 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <h4 className="text-green-500">2022 - present</h4>
                  <h3 className="text-xl font-semibold mb-2">
                    Bachelor's Degree
                  </h3>
                  <p className="text-gray-600">
                    I am currently immersed in pursuing my Bachelor's Degree in
                    Botany while also exploring the fascinating realm of web
                    development. Balancing the study of plant sciences with the
                    dynamic world of coding, I am dedicated to honing my skills
                    in both disciplines for a versatile and fulfilling career
                    journey.
                  </p>
                </motion.div>
              </motion.div>
              <motion.div
                className="contents"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="box"
                  initial={{ opacity: 0, y: 40 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <h4 className="text-green-500">2023 - present</h4>
                  <h3 className="text-xl font-semibold mb-2">
                    Learning Web Development
                  </h3>
                  <p className="text-gray-600">
                    Driven by a passion for crafting dynamic digital
                    experiences, I am fully dedicated to mastering web
                    development since 2023. With each certification earned and
                    every line of code written, I'm continually expanding my
                    expertise to deliver innovative solutions.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Education;
