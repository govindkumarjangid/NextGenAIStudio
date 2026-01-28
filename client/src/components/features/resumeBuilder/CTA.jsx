import { ArrowRight } from 'lucide-react';
import { Link ,useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';

const CTA = () => {
     const navigate = useNavigate();
    return (
        <div className="border-y border-dashed border-gray-700 w-full max-w-5xl mx-auto px-10 sm:px-16 mt-5 mb-30">
        <motion.div
            className="flex flex-col md:flex-row text-center md:text-left items-center justify-between gap-8 px-3 md:px-10 border-x border-dashed border-gray-700 py-16 sm:py-20 -mt-10 -mb-10 w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
            <motion.p
                className="text-xl font-medium max-w-md text-gray-300 z-99"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
            >
                Build a Professional Resume That Helps You Stand Out and Get Hired
            </motion.p>
            <motion.button
                onClick={() => navigate("/resume-builder/builder")}
                className="flex items-center gap-2 rounded-full py-3 px-8 bg-linear-to-r from-purple-500 to-cyan-600 transition text-white group cursor-pointer hover:scale-105 z-99"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <span>Get Started</span>
               <ArrowRight  size={20} className="group-hover:translate-x-1 transition-transform duration-300"/>
            </motion.button>
        </motion.div>
        </div>
    )
}

export default CTA;