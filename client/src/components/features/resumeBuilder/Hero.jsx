import { motion } from "motion/react";
import { VideoIcon} from "lucide-react";
import Label from "../../UI/Label";
import Heading from "../../UI/Heading";
import Navigation from "../../UI/Navigation";

const Hero = () => {


    return (
        <>
            <Navigation />
            {/* Hero Section */}
            <section className="relative z-10 my-8 px-4 sm:px-6 lg:px-12 text-center">
                <div className="max-w-5xl mx-auto">
                {/* label  */}
                <Label title="Create Professional Resumes with AI" />

                {/* Heading */}
                <Heading top="Build recruiter-ready" middle="AI resumes" bottom="faster" subTitle="Generate polished, ATS-friendly resumes with smart sections, clean structure, and better role targeting." />

                {/* CTA Button */}
                <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                >
                    <motion.button
                        className="bg-linear-to-r from-purple-500 to-cyan-400
                      text-white rounded-full px-7 py-3.5 cursor-pointer text-sm md:text-base whitespace-nowrap w-full sm:w-auto"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                        Start Building
                    </motion.button>
                    <motion.button
                        className="flex items-center justify-center gap-2 border border-purple-400/60 text-white hover:bg-purple-500/20 transition-colors duration-200 rounded-full px-6 py-3.5 cursor-pointer text-sm md:text-base whitespace-nowrap w-full sm:w-auto"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                        <VideoIcon strokeWidth={1} className="size-5" />
                        <span>Preview Templates</span>
                    </motion.button>
                </motion.div>

                </div>

            </section>
        </>
    )
}

export default Hero;