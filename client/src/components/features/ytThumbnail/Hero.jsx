import { motion } from 'motion/react';
import { Check, Eye } from 'lucide-react';
import { highlights } from '../../../assets/assets';
import Label from '../../UI/Label';
import Heading from '../../UI/Heading';
import Navigation from '../../UI/Navigation';

const Hero = () => {


  return (
    <>
      <Navigation />
      <section className="flex flex-col items-center text-center px-4 sm:px-6 lg:px-12 relative z-10 my-10">

        {/* label  */}
        <Label title="AI Thumbnail Generator for Your Videos" />

        {/* Heading */}
        <div className="max-w-3xl w-full px-2">
            <Heading top="AI Thumbnail Generator for" middle=" Your Videos" bottom="" subTitle="Stop wasting hours on design. Get high-converting thumbnails in seconds with our advanced AI." />
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-row justify-center items-center gap-4"
        >
          <button className="bg-linear-to-r from-pink-500 to-fuchsia-600 hover:scale-105 transition text-white rounded-full px-7 h-11 text-xs sm:text-sm md:text-base active:scale-95">
            Generate now
          </button>
          <button className="flex items-center gap-2 border border-pink-400/40 text-white/90 hover:bg-pink-500/10 transition rounded-full px-6 h-11 text-xs sm:text-sm md:text-base active:scale-95">
            <Eye className="size-4 sm:size-5" />
            View Creations
          </button>
        </motion.div>

        <motion.div
          className="mt-6 sm:mt-8 md:mt-10 flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-10 px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {highlights.map((item) => (
            <div key={item.id} className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base text-gray-300">
              <Check className="size-3.5 sm:size-4 text-pink-500 flex-shrink-0" />
              <span>{item.label}</span>
            </div>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default Hero;