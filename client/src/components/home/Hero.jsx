import { motion } from "framer-motion";
import {  specialFeatures } from "../../assets/assets.jsx";
import { CheckIcon, ChevronRightIcon, VideoIcon } from "lucide-react";
import { useAppContext } from "../../context/AppContext.jsx";

const Hero = () => {

  const { setShowLogin, setState } = useAppContext();

  return (
    <div className="w-full">
      {/* Background Glow Effects */}
      <div className="fixed top-0 left-0 w-125 h-125
      bg-purple-500 opacity-40 blur-[150px] rounded-full" />

      <div className="fixed bottom-0 right-0  w-125 h-125
      bg-cyan-400 opacity-40 blur-[150px] rounded-full" />

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center
      px-4 sm:px-6 lg:px-12 pt-20 relative z-10">


        <motion.a href="#" className="group flex items-center gap-2 rounded-full p-1 pr-3 mt-6 mb-2 text-pink-100 bg-pink-200/15"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
        >
          <span className="bg-purple-800 text-white text-xs px-3.5 py-1 rounded-full">
            NEW
          </span>
          <p className="flex items-center gap-1 text-sm text-pink-100/80 group-hover:underline">
            <span>Try 30 days free trial option </span>
            <ChevronRightIcon size={16} className="group-hover:translate-x-0.5 transition duration-300" />
          </p>
        </motion.a>

        {/* Heading */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
          className="font-bold leading-tight"
        >
          <motion.h1 className="text-4xl/13 md:text-6xl/21 font-medium max-w-3xl text-center text-white"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
          >
            Unleash your creative potential{" "}
            <span className="move-gradient px-3 rounded-full text-nowrap">with AI.</span>
          </motion.h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-gray-300 max-w-xl sm:max-w-2xl
          text-sm sm:text-base md:text-lg"
        >
          Your all-in-one platform for professional resumes, document
          analysis, and stunning visuals.
        </motion.p>

        {/* CTA Button */}
        <motion.div className="flex items-center gap-4 mt-8"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
        >
          <button
             onClick={() => {
                setState("register");
                setShowLogin(true);
             }}
             className="bg-linear-to-r from-purple-500 to-cyan-400
              hover:scale-105 transition text-white rounded-full px-7 h-11 cursor-pointer text-xs md:text-base">
            Get started
          </button>
          <button className="flex items-center gap-2 border border-purple-400/60 text-white hover:bg-purple-500/20 transition rounded-full px-6 h-11 cursor-pointer text-xs md:text-base">
            <VideoIcon strokeWidth={1} className="size-5" />
            <span>Watch demo</span>
          </button>
        </motion.div>

        {/* Special Features */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-14 mt-10 z-999">
          {specialFeatures.map((feature, index) => (
            <motion.p className="flex items-center gap-2" key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.3 }}
            >
              <CheckIcon className="size-5 text-purple-600" />
              <span className="text-slate-400">{feature}</span>
            </motion.p>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hero;
