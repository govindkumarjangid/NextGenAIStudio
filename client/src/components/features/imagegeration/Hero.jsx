import { motion } from 'motion/react'
import { useState } from 'react';
import Label from '../../UI/Label';
import Heading from '../../UI/Heading';
import Navigation from '../../UI/Navigation';

const Hero = ({ builderRef }) => {

    const scrollToBuilder = () => {
        if (builderRef?.current)
            builderRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <>
            <div className="fixed top-0 left-0 w-125 h-125 bg-purple-500 opacity-20 blur-[150px] rounded-full pointer-events-none" />
            <div className="fixed bottom-0 right-0 w-125 h-125 bg-cyan-400 opacity-20 blur-[150px] rounded-full pointer-events-none " />
            <Navigation />

            <section className="relative z-10 my-8 px-4 sm:px-6 lg:px-12 text-center">
                <div className="max-w-5xl mx-auto">

                    {/* label  */}
                    <Label title="Generate Stunning AI Images" />

                    {/* Heading */}
                    <Heading top="Create Visuals that look" middle="studio-grade" bottom="in seconds" subTitle="Describe your concept once and generate polished images ready for social posts, campaigns, and product mockups." />

                    {/* Prompt Input */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-10 w-full flex justify-center max-w-3xl mx-auto"
                    >
                        <div className="flex flex-col sm:flex-row w-full rounded-2xl sm:rounded-full bg-white/8 border border-white/18 backdrop-blur-xl overflow-hidden shadow-lg">
                            <input
                                type="text"
                                onFocus={scrollToBuilder}
                                placeholder="Try: cinematic futuristic cityscape at golden hour..."
                                className="flex-1 px-4 sm:px-6 py-3 sm:py-4 bg-transparent text-white text-sm sm:text-base placeholder:text-gray-400 placeholder:line-clamp-1 border-0 outline-0 ring-0 focus:border-0 focus:outline-0 focus:ring-0 focus-visible:outline-none focus-visible:ring-0 appearance-none cursor-pointer"
                            />
                            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition font-semibold text-white text-sm sm:text-base whitespace-nowrap shrink-0">
                                Generate Image
                            </button>
                        </div>
                    </motion.div>

                </div>

            </section>
        </>
    )
}

export default Hero