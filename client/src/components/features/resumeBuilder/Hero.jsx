import { motion } from "motion/react";
import { VideoIcon} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Label from "../../UI/Label";
import Heading from "../../UI/Heading";
import Navigation from "../../UI/Navigation";

const Hero = () => {

    const navigate = useNavigate();

    return (
        <>
            <Navigation />
            {/* Hero Section */}
            <section className="flex flex-col items-center text-center px-4 sm:px-6 lg:px-12 relative z-10 my-10">
                {/* label  */}
                <Label title="Create Professional Resumes with AI" />

                {/* Heading */}
                <Heading top="Land your dream job with" middle="AI-powered" bottom="resumes" subTitle="  Your all-in-one platform for professional resumes, document
                analysis, and stunning visuals." />

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
        </>
    )
}

export default Hero;