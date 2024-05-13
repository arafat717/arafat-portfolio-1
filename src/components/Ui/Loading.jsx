import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-96">
      <motion.div
        className="rounded-full border-8 border-gray-300 h-24 w-24 animate-spin"
        style={{
          borderTopColor: "#4F46E5",
          borderRightColor: "#2563EB",
          borderBottomColor: "#1FB6FF",
          borderLeftColor: "#1FB6FF",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
    </div>
  );
};

export default Loading;
