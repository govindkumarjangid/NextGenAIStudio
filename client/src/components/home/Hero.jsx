import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      <section className="flex flex-col relative items-center text-center mt-16 z-10">
        {/* Background Glow Effects */}
        <div className="absolute -top-50 -left-50 w-125 h-125 bg-purple-500 opacity-30 blur-[150px]" />
        <div className="absolute -bottom-50 -right-50 w-125 h-125 bg-cyan-400 opacity-30 blur-[150px]" />
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight"
        >
          <span className="bg-linear-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
            UNLEASH YOUR CREATIVE
          </span>
          <br />
          <span className="bg-linear-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
            POTENTIAL WITH AI
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-gray-300 max-w-2xl text-lg"
        >
          Your all -in -one platform for professional resumes, document
          analysis, and stunning visuals.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-10 py-3 rounded-full font-semibold text-white 
       bg-linear-to-r from-purple-500 to-cyan-400 shadow-lg shadow-purple-500/30"
        >
          Get Started Now
        </motion.button>
        {/* Bottom Star Icon */}
        <div className="absolute bottom-10 right-10 text-gray-400 text-4xl">
          ✦
        </div>
      </section>
    </div>
  );
};

export default Hero;
