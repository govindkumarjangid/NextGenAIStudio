import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const MainFeaturedCard = ({ icon, title, desc, color, path }) => {

  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      onClick={() => navigate(path)}
      className="relative cursor-pointer p-0.5 rounded-2xl group overflow-hidden"
    >
      {/* Rotating Gradient Border */}
      <div className="absolute inset-0 rounded-full 
      bg-linear-to-r from-purple-500 via-pink-500 to-blue-700
      opacity-0 group-hover:opacity-100 blur-2xl animate-spin-slow"
      />

      {/* Inner Card */}
      <div
        className="relative p-6 rounded-2xl 
      border border-white/15 hover:bg-black/30 backdrop-blur-xl
      group-hover:border-transparent transition duration-300"
      >
        {/* Icon */}
        <div
          className={`w-14 h-14 flex items-center justify-center rounded-xl 
        bg-black/30 border border-white/10 ${color}`}
        >
          {icon}
        </div>

        {/* Title */}
        <h2 className="mt-5 text-xl font-bold text-white">
          {title}
        </h2>

        {/* Desc */}
        <p className="mt-2 text-gray-300 text-sm leading-relaxed">
          {desc}
        </p>
      </div>
    </motion.div>

  )
}

export default MainFeaturedCard