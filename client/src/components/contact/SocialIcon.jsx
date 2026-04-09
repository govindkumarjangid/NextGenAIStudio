import { motion } from "motion/react";
const SocialIcon = ({ icon }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.08, y: -3 }}
      whileTap={{ scale: 0.96 }}
      className="cursor-pointer size-11 rounded-xl border border-white/15 bg-white/8 text-slate-200 hover:text-cyan-200 hover:border-cyan-300/50 hover:bg-cyan-300/10 transition flex items-center justify-center"
    >
      {icon}
    </motion.div>
  )
}

export default SocialIcon