import { motion } from "motion/react";
import { ChevronRightIcon, Rocket } from "lucide-react";

const Label = ({ title }) => {
  return (
    <motion.div className="flex items-center gap-1 sm:gap-2 justify-start rounded-full py-1 px-2 sm:px-3 mt-6 mb-2 text-white bg-[radial-gradient(circle_at_top_left,#160027,#00232d)] border border-cyan-500/20 w-fit mx-auto cursor-pointer group max-w-[90vw]"
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}>
      <Rocket size={12} className="inline-block flex-shrink-0" />
      <p className="flex items-center gap-1 text-xs sm:text-sm">
        <span className="line-clamp-1">{title}</span>
        <ChevronRightIcon size={14} className="group-hover:translate-x-1 transition duration-300 flex-shrink-0" />
      </p>
    </motion.div>
  )
}

export default Label;