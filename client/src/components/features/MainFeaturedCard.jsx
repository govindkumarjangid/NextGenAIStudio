import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const MainFeaturedCard = ({ icon, title, desc, color, path }) => {

  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      onClick={() => navigate(path)}
      className="cursor-pointer p-6 rounded-2xl 
      border border-white/15 bg-white/5 backdrop-blur-xl
      hover:border-purple-400/50 transition duration-300"
    >
      {/* Icon */}
      <div
        className={`w-14 h-14 flex items-center justify-center rounded-xl 
        bg-black/30 border border-white/10 ${color}`}
      >
        {icon}
      </div>

      {/* Title */}
      <h2 className="mt-5 text-xl font-bold text-white">{title}</h2>

      {/* Desc */}
      <p className="mt-2 text-gray-300 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  )
}

export default MainFeaturedCard