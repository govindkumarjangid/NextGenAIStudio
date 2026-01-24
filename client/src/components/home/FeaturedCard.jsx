import { motion } from "framer-motion";

const FeaturedCard = ({ icon, title, desc }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="p-6 rounded-2xl border border-white/20 bg-white/5 
        backdrop-blur-xl shadow-lg hover:shadow-purple-500/30 hover:scale-105 duration-300 transition-transform flex flex-col items-center justify-center"
    >
      {/* Icon */}
      <div className="text-purple-400">{icon}</div>

      {/* Title */}
      <h2 className="mt-4 text-white font-bold text-lg">{title}</h2>

      {/* Description */}
      <p className="mt-2 text-gray-300 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  )
}

export default FeaturedCard;