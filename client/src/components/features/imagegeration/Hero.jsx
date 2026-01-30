import { ChevronRightIcon } from 'lucide-react'
import { motion } from 'motion/react'
import { useState } from 'react';

const Hero = () => {


     const [prompt, setPrompt] = useState('');

    return (
        <section className="text-center mt-20 max-w-2xl mx-auto">

            <motion.a href="#" className="group flex items-center gap-2 rounded-full py-1 px-3 mt-6 mb-2 text-pink-100 bg-pink-500/20 w-fit mx-auto"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                <p className="flex items-center gap-1 text-sm text-pink-100/80 group-hover:underline">
                    <span>Generate AI powered images</span>
                    <ChevronRightIcon size={16} className="group-hover:translate-x-0.5 transition duration-300" />
                </p>
            </motion.a>
            {/* Heading */}
            <motion.h1
                className="text-4xl/13 md:text-6xl/21  max-w-4xl text-center text-white flex flex-wrap justify-center items-center  leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            >
                Create Stunning{" "}
                <span className="move-gradient px-3 rounded-xl text-nowrap mx-2">
                    AI-powered
                </span>
                Images.
            </motion.h1>


            {/* Subtitle */}
            <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="mt-6 text-gray-300 max-w-xl sm:max-w-2xl text-sm sm:text-base md:text-lg"
            >
                Turn your ideas into reality with our powerful AI image generator. Simply enter your prompt and watch the magic happen!
            </motion.p>

            {/* Prompt Input */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-12 flex justify-center px-4"
            >
                <div className="flex w-full max-w-2xl rounded-full bg-white/10 border border-white/20 backdrop-blur-xl overflow-hidden shadow-lg">
                    <input
                        type="text"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="A futuristic cityscape at sunset..."
                        className="flex-1 px-6 py-4 bg-transparent text-white       placeholder:text-gray-400 placeholder:line-clamp-1 border-0 outline-0   ring-0 focus:border-0 focus:outline-0 focus:ring-0
                            focus-visible:outline-none focus-visible:ring-0
                            appearance-none"
                            />
                    <button className="px-8 py-4 bg-linear-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition font-semibold text-white">
                        Generate
                    </button>
                </div>
            </motion.div>

        </section>

    )
}

export default Hero