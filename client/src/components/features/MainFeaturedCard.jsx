import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const MainFeaturedCard = ({ icon, title, desc, color, path, index }) => {

  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ y: 42, opacity: 0, scale: 0.94, filter: "blur(10px)" }}
      whileInView={{ y: 0, opacity: 1, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 210, damping: 20, mass: 0.9 }}
      onClick={() => navigate(path)}
      className="relative isolate cursor-pointer rounded-3xl group overflow-hidden p-6 border border-white/12 bg-[linear-gradient(135deg,rgba(16,1,30,0.88),rgba(0,35,45,0.88))] backdrop-blur-2xl shadow-[0_12px_30px_rgba(0,0,0,0.35)] hover:border-cyan-300/45 transition-all duration-300 active:scale-95"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(120%_80%_at_0%_0%,rgba(168,85,247,0.22),transparent_55%),radial-gradient(120%_80%_at_100%_100%,rgba(34,211,238,0.22),transparent_55%)]" />
      <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl bg-cyan-400/10 group-hover:bg-cyan-400/25 transition duration-500" />
      <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full blur-2xl bg-purple-500/10 group-hover:bg-purple-500/25 transition duration-500" />

      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: -6, scale: 1.08 }}
          transition={{ type: "spring", stiffness: 260, damping: 14 }}
          className={`w-14 h-14 flex items-center justify-center rounded-2xl bg-black/25 border border-white/15 shadow-inner ${color}`}
        >
          {icon}
        </motion.div>

        {/* Title */}
        <h2 className="mt-5 text-xl font-semibold text-white tracking-tight">
          {title}
        </h2>

        {/* Desc */}
        <p className="mt-2 text-slate-300 text-sm leading-relaxed line-clamp-2">
          {desc}
        </p>

        <div className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-cyan-200/90 group-hover:text-cyan-100 transition-colors">
          <span>Explore Tool</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">{"->"}</span>
        </div>
      </div>
    </motion.div>

  )
}

export default MainFeaturedCard