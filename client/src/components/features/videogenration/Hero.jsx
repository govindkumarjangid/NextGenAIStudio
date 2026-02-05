import { motion } from 'motion/react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Label from '../../UI/Label';
import Heading from '../../UI/Heading';
import Navigation from '../../UI/Navigation';

const Hero = ({ builderRef }) => {

    const navigate = useNavigate();
    const [prompt, setPrompt] = useState('');

    const scrollToBuilder = () => {
      if (builderRef?.current) {
        builderRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    return (
      <>
        <Navigation/>
        <section className="flex flex-col items-center text-center px-4 sm:px-6 lg:px-12 relative z-10 my-10">

           {/* label  */}
            <Label title="Generate Stunning AI Videos" />

            {/* Heading */}
            <Heading top="Create Amazing" middle="AI-Generated" bottom="Videos" subTitle="Transform your creative vision into stunning videos with our powerful AI video generator. Simply describe what you want and let AI bring it to life!"/>

            {/* Prompt Input */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-12 w-full flex justify-center px-4 max-w-2xl"
            >
                <div className="flex flex-col sm:flex-row w-full rounded-lg sm:rounded-full bg-white/10 border border-white/20 backdrop-blur-xl overflow-hidden shadow-lg mb-10">
                    <input
                        type="text"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        onFocus={scrollToBuilder}
                        placeholder="A serene forest landscape with gentle wind and flowing water..."
                        className="flex-1 px-4 sm:px-6 py-3 sm:py-4 bg-transparent text-white text-sm sm:text-base placeholder:text-gray-400 placeholder:line-clamp-1 border-0 outline-0 ring-0 focus:border-0 focus:outline-0 focus:ring-0 focus-visible:outline-none focus-visible:ring-0 appearance-none cursor-pointer"
                            />
                    <button className="px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition font-semibold text-white text-sm sm:text-base whitespace-nowrap">
                        Generate
                    </button>
                </div>
            </motion.div>

        </section>
      </>
    )
}

export default Hero
