import { motion } from "motion/react";
import { ArrowRight, FileSearch2 } from "lucide-react";
import Label from "../../UI/Label";
import Heading from "../../UI/Heading";
import Navigation from "../../UI/Navigation";

const Hero = () => {
  return (
    <>
      <Navigation />

      <section className="relative z-10 my-8 px-4 sm:px-6 lg:px-12 text-center">
        <div className="max-w-5xl mx-auto">
          <Label title="Analyze Your Resume with AI" />

          <Heading
            top="Get clear ATS feedback"
            middle="before you apply"
            bottom=""
            subTitle="Upload your resume and receive instant insights on score, clarity, keyword match, and improvement suggestions."
          />

          <motion.div
            className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <button className="w-full sm:w-auto shrink-0 whitespace-nowrap inline-flex items-center justify-center gap-2 bg-linear-to-r from-purple-500 to-cyan-400 text-white rounded-full px-7 py-3.5 text-sm md:text-base font-semibold active:scale-95 transition-all">
              Analyze Resume
              <ArrowRight className="size-4" />
            </button>

            <button className="w-full sm:w-auto shrink-0 whitespace-nowrap inline-flex items-center justify-center gap-2 border border-purple-400/60 text-white hover:bg-purple-500/20 rounded-full px-7 py-3.5 text-sm md:text-base font-semibold active:scale-95 transition-all">
              <FileSearch2 className="size-4" />
              View Sample Report
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
