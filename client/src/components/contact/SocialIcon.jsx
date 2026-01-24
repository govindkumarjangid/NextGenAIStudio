import { motion } from "framer-motion";
const SocialIcon = ({ icon }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      className="cursor-pointer text-gray-300 hover:text-cyan-400 transition"
    >
      {icon}
    </motion.div>
  )
}

export default SocialIcon