import { motion } from 'motion/react'
import { useState } from 'react';
import Label from '../../UI/Label';
import Heading from '../../UI/Heading';
import Navigation from '../../UI/Navigation';

const Hero = ({ builderRef }) => {

    const [prompt, setPrompt] = useState('');
    const scrollToBuilder = () => {
        if (builderRef?.current) {
            builderRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <>
            <div className="fixed top-0 left-0 w-125 h-125 bg-purple-500 opacity-20 blur-[150px] rounded-full pointer-events-none" />
            <div className="fixed bottom-0 right-0 w-125 h-125 bg-cyan-400 opacity-20 blur-[150px] rounded-full pointer-events-none " />
            <Navigation />

            <section className="flex flex-col items-center text-center px-4 sm:px-6 lg:px-12 relative z-10 my-10">

                {/* label  */}
                <Label title="Generate Stunning AI Images" />

                {/* Heading */}
                <Heading top="Create Stunning" middle="AI-powered" bottom="Images" subTitle="Turn your ideas into reality with our powerful AI image generator. Simply enter your prompt and watch the magic happen!" />

                {/* Prompt Input */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-12 w-full flex justify-center px-4 max-w-2xl"
                >
                    <div className="flex flex-col sm:flex-row w-full rounded-lg sm:rounded-full bg-white/10 border border-white/20 backdrop-blur-xl overflow-hidden shadow-lg">
                        <input
                            type="text"
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            onFocus={scrollToBuilder}
                            placeholder="A futuristic cityscape at sunset..."
                            className="flex-1 px-4 sm:px-6 py-3 sm:py-4 bg-transparent text-white text-sm sm:text-base placeholder:text-gray-400 placeholder:line-clamp-1 border-0 outline-0 ring-0 focus:border-0 focus:outline-0 focus:ring-0 focus-visible:outline-none focus-visible:ring-0 appearance-none cursor-pointer"
                        />
                        <button className="px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition font-semibold text-white text-sm sm:text-base whitespace-nowrap">
                            Generate
                        </button>
                    </div>
                </motion.div>

            </section>
        </>
    )
}

export default Hero