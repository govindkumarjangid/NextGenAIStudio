import { motion } from "framer-motion";

const FeaturedCard = ({ icon, title, desc, index }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
      className="p-6 rounded-2xl border border-white/20 bg-white/5
        backdrop-blur-xl hover:scale-105 duration-300 transition-transform flex flex-col items-center justify-center"
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