import { motion } from 'motion/react';
import { Sparkles, Zap,} from 'lucide-react';

const Hero = () => {

    return (
        <section className="text-center mt-20 max-w-4xl mx-auto px-4">

            <motion.div
                className="group flex items-center gap-2 rounded-full py-1 px-3 mt-6 mb-2 text-pink-100 bg-pink-500/20 w-fit mx-auto"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                <p className="flex items-center gap-1 text-sm text-pink-100/80 group-hover:underline">
                    <span>✨ Generate AI-Powered Captions</span>
                    <Zap size={16} className="group-hover:translate-x-0.5 transition duration-300" />
                </p>
            </motion.div>

            {/* Heading */}
            <motion.h1
                className="text-4xl/13 md:text-6xl/21 font-semibold text-center max-w-4xl text-white flex flex-wrap justify-center items-center mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            >
                Perfect Captions for{" "}
                <span className="move-gradient px-3 rounded-xl text-nowrap mx-2">
                    Every Image.
                </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="mt-6 text-gray-300 max-w-2xl sm:max-w-3xl text-sm sm:text-base md:text-lg mx-auto"
            >
                Upload any image and let our AI generate engaging, creative captions in multiple styles. Perfect for social media, blogs, and content creation.
            </motion.p>

            {/* action button  */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4"
            >
            <button className="bg-linear-to-r from-purple-500 to-cyan-400
              hover:scale-105 transition text-white rounded-full px-7 h-11 cursor-pointer text-xs md:text-base mb-20 active:scale-95 group">Generate Captions
               <Sparkles className="inline-block ml-2  group-hover:translate-x-0.5 transition duration-300" size={16} />
              </button>
            </motion.div>

        </section>
    );
}

export default Hero;