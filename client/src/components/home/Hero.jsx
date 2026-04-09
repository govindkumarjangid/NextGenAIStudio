import { motion } from "motion/react";
import { specialFeatures } from "../../assets/assets.jsx";
import { ArrowRight, CheckIcon, Sparkles, VideoIcon } from "lucide-react";
import { useAppContext } from "../../context/AppContext.jsx";
import { useNavigate } from "react-router-dom";

const Hero = () => {

  const navigate = useNavigate();
  const { handleGetStarted } = useAppContext();

  return (
    <section className="relative w-full px-4 sm:px-6 lg:px-12 py-16 sm:pt-20 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-cyan-300/40 bg-white/6 text-cyan-200 text-xs sm:text-sm font-medium"
        >
          <Sparkles className="size-4" />
          <span>NextGen AI Studio</span>
        </motion.div>

        <motion.h1
          className="mt-6 text-4xl/tight sm:text-5xl/tight lg:text-6xl/tight text-white font-semibold tracking-tight"
          initial={{ y: 28, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.05 }}
        >
          Launch your content workflow
          <span className="block bg-linear-to-r from-purple-400 via-pink-400 to-cyan-300 bg-clip-text text-transparent">
            with one AI-powered studio.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.15 }}
          className="mt-6 max-w-3xl mx-auto text-slate-300 text-sm sm:text-base md:text-lg"
        >
          Build professional resumes, generate images and videos, and create platform-ready captions in minutes.
        </motion.p>

        <motion.div
          className="mt-9 flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap items-center justify-center gap-3"
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.22 }}
        >
          <button
            onClick={handleGetStarted}
            className="w-full sm:w-auto shrink-0 whitespace-nowrap inline-flex items-center justify-center gap-2 bg-linear-to-r from-purple-500 to-cyan-400 active:scale-95 transition-all text-white rounded-full px-7 py-3 text-sm sm:text-base font-semibold"
          >
            <span>Get Started Free</span>
            <ArrowRight className="size-4" />
          </button>

          <button
            onClick={() => navigate("/features")}
            className="w-full sm:w-auto shrink-0 whitespace-nowrap inline-flex items-center justify-center gap-2 border border-purple-400/60 text-white hover:bg-purple-500/20 transition-all active:scale-95 rounded-full px-7 py-3 text-sm sm:text-base font-semibold"
          >
            <VideoIcon strokeWidth={1.8} className="size-4.5" />
            <span>Explore Features</span>
          </button>
        </motion.div>

        <div className="mt-10 flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6">
          {specialFeatures.map((feature, index) => (
            <motion.div
              className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/6 border border-white/12"
              key={index}
              initial={{ y: 18, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.08, duration: 0.35 }}
            >
              <CheckIcon className="size-4 text-cyan-300" />
              <span className="text-slate-200 text-xs sm:text-sm">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
