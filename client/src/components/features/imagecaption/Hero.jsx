import { motion } from 'motion/react';
import { Sparkles, } from 'lucide-react';
import Label from '../../UI/Label';
import Heading from '../../UI/Heading';
import Navigation from '../../UI/Navigation';

const Hero = () => {

    return (
        <>
            <Navigation />
            <section className="relative z-10 my-8 px-4 sm:px-6 lg:px-12 ">
                <div className="max-w-5xl mx-auto">
                    {/* label  */}
                    <Label title="Generate Captions for Every Image" />

                    {/* Heading */}
                    <Heading top="Turn every visual into" middle="high-impact captions" bottom="" subTitle="Upload an image and instantly get platform-ready captions with tone, hashtags, and vibe matched to your audience." />

                    {/* action button  */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4"
                    >
                        <button className="bg-linear-to-r from-purple-500 to-cyan-400
                            hover:scale-[1.02] transition text-white rounded-full px-7 py-3 cursor-pointer text-sm md:text-base active:scale-95 group whitespace-nowrap">Generate Captions
                            <Sparkles className="inline-block ml-2  group-hover:translate-x-0.5 transition duration-300" size={16} />
                        </button>
                    </motion.div>

                </div>

            </section>
        </>
    );
}

export default Hero;