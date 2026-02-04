import { motion } from "motion/react";

const Heading = ({ top, middle, bottom, subTitle }) => {
    return (
        <>
            <motion.h1
                className="text-4xl/tight md:text-5xl/tight lg:text-6xl/tight text-center max-w-3xl text-white font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            >
                {top}
                <span className="move-gradient px-2 sm:px-3 rounded-lg sm:rounded-xl inline-block mx-1 sm:mx-2">
                    {middle}
                </span>
                {bottom}
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="mt-4 sm:mt-6 text-gray-300 max-w-xl text-xs sm:text-sm md:text-base text-center mx-auto px-2"
            >
                {subTitle}
            </motion.p>
        </>
    )
}

export default Heading;