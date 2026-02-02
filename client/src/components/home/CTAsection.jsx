import { motion } from "motion/react";

const CTASection = ()  => {
    return (
        <motion.div className="max-w-5xl py-16 mt-40 md:pl-20 md:w-full max-md:mx-4 md:mx-auto flex flex-col md:flex-row max-md:gap-6 items-center justify-between rounded-2xl p-6 text-white mb-20 bg-[radial-gradient(circle_at_top_left,#160027,#00232d)] border border-gray-400/20"
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
        >
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
                <motion.h1
                    className="text-4xl md:text-[46px] md:leading-15 font-semibold bg-linear-to-r from-purple-500 to-cyan-500
                    bg-clip-text text-transparent"
                    initial={{ y: 80, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
                >
                    Ready to try-out this app?
                </motion.h1>

                <motion.p className="text-lg"
                    initial={{ y: 80, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, damping: 70, mass: 1 }}
                >
                    Your next favourite tool is just one click away.
                </motion.p>
            </div>
            <motion.button className="px-12 py-3 border border-purple-400/60 text-white hover:bg-purple-500/20  rounded-full text-sm mt-4"
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
            >
                Get Started
            </motion.button>
        </motion.div>
    );
}
export default CTASection;