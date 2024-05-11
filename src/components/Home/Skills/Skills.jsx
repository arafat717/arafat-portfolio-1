import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import html from "../../../assets/assets/html.png";
import css from "../../../assets/assets/css.png";
import javascript from "../../../assets/assets/javascript.png";
import reactImage from "../../../assets/assets/react.png";
import nextjs from "../../../assets/assets/nextjs.png";
import github from "../../../assets/assets/github.png";
import tailwind from "../../../assets/assets/tailwind.png";
import firebase from "../../../assets/assets/portfolio/Screenshot (10).png";
import mongodb from "../../../assets/assets/portfolio/Screenshot (8).png";
import boostrap from "../../../assets/assets/portfolio/Screenshot (12).png";
import Redux from "../../../assets/assets/portfolio/Redux.jpg";
import TypeScript from "../../../assets/assets/portfolio/TypeScript.png";
import mongoose from "../../../assets/assets/mongoose.svg";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const techs = [
    { id: 1, src: html, title: "HTML" },
    { id: 2, src: css, title: "CSS" },
    { id: 3, src: javascript, title: "JavaScript" },
    { id: 4, src: reactImage, title: "React" },
    { id: 5, src: tailwind, title: "Tailwind CSS" },
    { id: 6, src: nextjs, title: "Next.js" },
    { id: 7, src: mongodb, title: "MongoDB" },
    { id: 8, src: github, title: "GitHub" },
    { id: 9, src: firebase, title: "Firebase" },
    { id: 10, src: boostrap, title: "Bootstrap" },
    { id: 11, src: Redux, title: "Redux" },
    { id: 12, src: TypeScript, title: "TypeScript" },
    { id: 13, src: mongoose, title: "Mongoose" },
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
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <section name="Skills">
        <div className="max-w-6xl mx-auto px-4">
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
              Skills
            </motion.p>
          </motion.div>
          <div
            ref={ref}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
          >
            {techs.map(({ id, src, title }) => (
              <motion.div
                key={id}
                className="flex flex-col items-center p-3 rounded-lg border border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.4 }}
              >
                <motion.img
                  src={src}
                  alt={title}
                  className="w-20 h-20 mb-3"
                  initial={{ opacity: 0.1 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 * id }}
                />
                <p className="text-lg font-semibold text-center">{title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
