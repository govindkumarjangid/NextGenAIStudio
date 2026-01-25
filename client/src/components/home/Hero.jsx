import { motion } from "framer-motion";
import { cardsData } from "../../assets/assets";
import FeaturedCard from "./FeaturedCard";
import AnimatedText from "../../Animation/AnimatedText";

const Hero = () => {
  return (
    <div className="min-h-screen w-full relative overflow-hidden">

      {/* Background Glow Effects */}
      <div className="absolute -top-40 -left-20 w-125 h-125
      bg-purple-500 opacity-30 blur-[150px]" />

      <div className="absolute bottom-0 -right-10  w-125 h-125 
      bg-cyan-400 opacity-30 blur-[150px]" />

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center 
      px-4 sm:px-6 lg:px-12 pt-20 relative z-10">

        {/* Bottom Star Icon */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "linear",
          }}
          className="hidden lg:flex absolute top-7 left-25 
          text-6xl font-bold bg-linear-to-r from-purple-600  to-cyan-400 text-transparent bg-clip-text
           drop-shadow-[0_0_25px_rgba(168,85,247,0.8)]"
        >
          ✦
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-bold leading-tight"
        >
          <h1
            className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl"
          >
            <AnimatedText text="UNLEASH YOUR CREATIVE" />
            <br />
            <AnimatedText text="POTENTIAL WITH AI" />
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-gray-300 
          max-w-xl sm:max-w-2xl 
          text-sm sm:text-base md:text-lg"
        >
          Your all-in-one platform for professional resumes, document
          analysis, and stunning visuals.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-8 sm:px-10 py-3 rounded-full 
          font-semibold text-white text-sm sm:text-base
          bg-linear-to-r from-purple-500 to-cyan-400 cursor-pointer"
        >
          Get Started Now
        </motion.button>

        {/* Bottom Star Icon */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "linear",
          }}
          className="hidden lg:flex absolute top-55 right-25 
          text-6xl font-bold bg-linear-to-r from-purple-600  to-cyan-400 text-transparent bg-clip-text
           drop-shadow-[0_0_25px_rgba(168,85,247,0.8)]"
        >
          ✦
        </motion.div>

        {/* Feature Cards Section */}
        <section
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
          gap-6 mt-16 w-full max-w-7xl px-2 sm:px-6 lg:px-10 pb-20"
        >
          {cardsData.map((card) => (
            <FeaturedCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              desc={card.desc}
            />
          ))}
        </section>
      </section>
    </div>
  );
};

export default Hero;
