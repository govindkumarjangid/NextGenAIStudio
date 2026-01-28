import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const MainFeaturedCard = ({ icon, title, desc, color, path, index }) => {

  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
       initial={{ y: 150, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
      onClick={() => navigate(path)}
      className="relative cursor-pointer rounded-2xl group overflow-hidden  transition-colors duration-200 bg-black/10 p-6  border border-white/10 backdrop-blur-3xl shadow-lg hover:border-white/20"
    >

        {/* Icon */}
        <div
          className={`w-12 h-12 flex items-center justify-center rounded-xl bg-black/30 border border-white/10 ${color}`}
        >
          {icon}
        </div>

        {/* Title */}
        <h2 className="mt-5 text-xl font-semibold text-white">
          {title}
        </h2>

        {/* Desc */}
        <p className="mt-2 text-gray-300 text-sm leading-relaxed line-clamp-2">
          {desc}
        </p>
    </motion.div>

  )
}

export default MainFeaturedCard