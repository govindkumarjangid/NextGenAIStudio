import { motion } from "framer-motion";

const AnimatedText = ({ text }) => {
  return (
    <motion.span
      initial={{
        opacity: 0,
        y: 80,
        scale: 0.8,
        filter: "blur(12px)",
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 18,
        duration: 1,
      }}
      whileHover={{
        scale: 1.05,
        textShadow: "0px 0px 25px rgba(168,85,247,0.9)",
      }}
      className="bg-linear-to-r from-purple-400 to-cyan-400 
      text-transparent bg-clip-text inline-block"
    >
      {text}
    </motion.span>
  );
};

export default AnimatedText;
