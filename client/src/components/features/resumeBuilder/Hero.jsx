import { motion } from "motion/react";
import { trustedUsers } from "../../../assets/assets";
import { Star, VideoIcon } from "lucide-react";

const Hero = () => {
    return (
        <div className="w-full mb-30 relative">

            {/* Background Glow Effects */}
            <div className="fixed top-0 left-0 w-125 h-125
             bg-purple-500 opacity-40 blur-[150px] rounded-full" />
            <div className="fixed bottom-0 right-0  w-125 h-125
             bg-cyan-400 opacity-40 blur-[150px] rounded-full" />

            {/* Hero Section */}
            <section className="flex flex-col items-center text-center
                 px-4 sm:px-6 lg:px-12 relative z-10">

                <motion.div className="flex items-center mt-24"
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    <div className="flex -space-x-3 pr-3">
                        {trustedUsers.map((user, index) => (
                            <img alt={`user${index}`} className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-1" src={user.image} />
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
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="font-bold leading-tight"
                >
                    <motion.h1
                        className="text-4xl/13 md:text-6xl/21 font-medium max-w-4xl text-center text-white flex flex-wrap justify-center items-center"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: 0.2,
                            type: "spring",
                            stiffness: 120,
                            damping: 18,
                        }}
                    >
                        Land your dream job with
                        <span className="move-gradient px-3 rounded-xl text-nowrap mx-2">
                            AI-powered
                        </span>
                        resumes.
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
                    <button className="bg-linear-to-r from-purple-500 to-cyan-400
                      hover:scale-105 transition text-white rounded-full px-7 h-11 cursor-pointer text-xs md:text-base">
                        Get started
                    </button>
                    <button className="flex items-center gap-2 border border-purple-400/60 text-white hover:bg-purple-500/20 transition rounded-full px-6 h-11  cursor-pointer text-xs md:text-base">
                        <VideoIcon strokeWidth={1} className="size-5" />
                        <span>Try demo</span>
                    </button>
                </motion.div>

            </section>
        </div>
    )
}

export default Hero;