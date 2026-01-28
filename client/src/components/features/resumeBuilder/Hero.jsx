import { motion } from "motion/react";
import { trustedUsers } from "../../../assets/assets";
import { ChevronLeft, Star, VideoIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {

    const navigate = useNavigate();

    return (
        <div className="w-full mb-30 relative">

            <button
            onClick={() => navigate(-1)}
            className="absolute top-6 left-30 text-gray-300 hover:text-white cursor-pointer flex items-center gap-2 z-49 max-w-6xl group active:scale-95 transition-transform"
            >
                <ChevronLeft className="size-5 group-hover:-translate-x-1 transition-transform duration-200" />
                Back to features
            </button>

            {/* Background Glow Effects - Optimized */}
            <div className="fixed top-0 left-0 w-125 h-125
             bg-purple-500 opacity-40 blur-[150px] rounded-full will-change-transform" />
            <div className="fixed bottom-0 right-0  w-125 h-125
             bg-cyan-400 opacity-40 blur-[150px] rounded-full will-change-transform" />

            {/* Hero Section */}
            <section className="flex flex-col items-center text-center
                 px-4 sm:px-6 lg:px-12 relative z-10">

                <motion.div className="flex items-center mt-24"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className="flex -space-x-3 pr-3">
                        {trustedUsers.map((user, index) => (
                            <img key={index} alt={`user${index}`} className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition-transform duration-200 z-1" src={user.image} />
                        ))}
                    </div>
                    <div className="flex flex-col">
                        <div className="flex gap-1">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <Star
                                    key={index}
                                    className="w-4 h-4 text-purple-400 fill-purple-400"
                                />
                            ))}
                        </div>
                        <p className="text-sm text-gray-400">Used by 10,000+ users</p>
                    </div>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    className="text-4xl/13 md:text-6xl/21  max-w-4xl text-center text-white flex flex-wrap justify-center items-center  leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                >
                    Land your dream job with
                    <span className="move-gradient px-3 rounded-xl text-nowrap mx-2">
                        AI-powered
                    </span>
                    resumes.
                </motion.h1>


                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    className="mt-6 text-gray-300 max-w-xl sm:max-w-2xl
                     text-sm sm:text-base md:text-lg"
                >
                    Your all-in-one platform for professional resumes, document
                    analysis, and stunning visuals.
                </motion.p>

                {/* CTA Button */}
                <motion.div className="flex items-center gap-4 mt-8"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                >
                    <motion.button
                        className="bg-linear-to-r from-purple-500 to-cyan-400
                      text-white rounded-full px-7 h-11 cursor-pointer text-xs md:text-base"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                        Get started
                    </motion.button>
                    <motion.button
                        className="flex items-center gap-2 border border-purple-400/60 text-white hover:bg-purple-500/20 transition-colors duration-200 rounded-full px-6 h-11  cursor-pointer text-xs md:text-base"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                        <VideoIcon strokeWidth={1} className="size-5" />
                        <span>Try demo</span>
                    </motion.button>
                </motion.div>

            </section>
        </div>
    )
}

export default Hero;