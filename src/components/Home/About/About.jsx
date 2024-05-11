/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
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
    <div name="about">
      <div className="w-full bg-gradient-to-b">
        <div
          className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full"
          ref={ref}
        >
          <motion.div
            className="pb-5"
            initial={{ opacity: 0, y: -20 }}
            animate={animationControls}
            variants={headerVariants}
          >
            <motion.p
              className="text-4xl font-bold inline border-b-4 border-gray-500"
              initial={{ opacity: 0, y: -20 }}
              animate={animationControls}
            >
              About Me
            </motion.p>
          </motion.div>

          <motion.p
            className="mt-5"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Welcome to my corner of the web! I'm a passionate web developer with
            a knack for transforming ideas into captivating digital experiences.
            Whether it's crafting sleek user interfaces or optimizing backend
            functionality, I thrive on the creative process of bringing concepts
            to life in the digital realm.
          </motion.p>
          <br />

          <motion.p
            className=""
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            My journey into web development was sparked by my early fascination
            with computers. From the moment I laid eyes on a computer screen, I
            was captivated by the endless possibilities it offered. As I delved
            deeper into the world of technology, I discovered the artistry and
            technical precision of web development, and I knew I had found my
            calling.
          </motion.p>
          <motion.p
            className="mt-5"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            With each project, I relish the opportunity to push boundaries and
            explore innovative solutions that elevate user engagement and
            experience. Beyond coding, I'm deeply committed to understanding the
            needs of clients and users alike. Collaboration is at the heart of
            what I do, and I take pride in fostering open communication and
            delivering results that exceed expectations.
          </motion.p>
          <motion.p
            className="mt-5"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            When I'm not coding, you'll often find me immersed in playing
            outdoor sports and sometime watching movie with my friends and
            family. I believe in the importance of maintaining a balanced
            lifestyle, as it not only fuels creativity but also enriches the
            quality of work.
          </motion.p>
          <motion.p
            className="mt-5"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            I'm incredibly excited about the endless possibilities that lie
            ahead in the dynamic world of web development. Whether you're a
            startup with big dreams or an established business seeking to
            innovate, I'm here to help turn your vision into reality.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default About;
