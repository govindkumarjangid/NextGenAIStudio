import { motion } from "motion/react";

const Symbol = ({ title }) => {
    return (
        <motion.p className="text-center font-medium text-white/90  px-10 py-2 rounded-full bg-purple-950/70 border border-purple-800 w-max mx-auto"
            initial={{ y: 120, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
        >
            {title}
        </motion.p>
    )
}

export default Symbol;