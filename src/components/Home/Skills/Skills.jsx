import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useGetSkillQuery } from "../../Redux/api/skillApi";

const Skills = () => {
  const { data } = useGetSkillQuery({});
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

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
            {data?.data?.map(({ id, imageUrl, skillName }) => (
              <motion.div
                key={id}
                className="flex flex-col items-center p-3 rounded-lg border border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.4 }}
              >
                <motion.img
                  src={imageUrl}
                  alt={skillName}
                  className="w-20 h-20 mb-3"
                  initial={{ opacity: 0.1 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 * id }}
                />
                <p className="text-lg font-semibold text-center">{skillName}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
