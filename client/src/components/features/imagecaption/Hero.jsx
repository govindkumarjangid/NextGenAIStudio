import { motion } from 'motion/react';
import { Sparkles,} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Label from '../../UI/Label';
import Heading from '../../UI/Heading';
import Navigation from '../../UI/Navigation';

const Hero = () => {

    const navigate = useNavigate();

    return (
        <>
        <Navigation />
        <section className="flex flex-col items-center text-center px-4 sm:px-6 lg:px-12 relative z-10 my-10">

           {/* label  */}
           <Label title="Generate Captions for Every Image" />

            {/* Heading */}
            <Heading top="Perfect Captions for" middle="Every Image" bottom="" subTitle="Upload any image and let our AI generate engaging, creative captions in multiple styles. Perfect for social media, blogs, and content creation."/>

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
        </>
    );
}

export default Hero;