import { motion } from "framer-motion";
import {  specialFeatures } from "../../assets/assets.jsx";
import { CheckIcon, VideoIcon } from "lucide-react";
import { useAppContext } from "../../context/AppContext.jsx";
import Label from "../UI/Label.jsx";
import Heading from "../UI/Heading.jsx";

const Hero = () => {

  const { setShowLogin, setState } = useAppContext();

  return (
    <div className="w-full">

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center
      px-4 sm:px-6 lg:px-12 pt-20 relative z-10">

      {/* label   */}
        <Label title="Welcome to NextGen AI Studio" />

        {/* Heading */}
        <Heading  top="Unleash your creative potential" middle="with AI." bottom ="" subTitle=" Your all-in-one platform for professional resumes, document analysis, and stunning visuals."/>

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
