import { motion } from 'motion/react'
import { features } from '../../../assets/assets.jsx';

const Features = () => {


    return (
        <section className="my-30 max-w-6xl mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Powerful Features for Video Creation
                </h2>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                    Everything you need to create stunning videos effortlessly
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="relative group"
                    >
                        {/* Card */}
                        <div className="relative bg-[radial-gradient(circle_at_top_left,#160027,#00232d)] rounded-2xl p-8 text-center overflow-hidden backdrop-blur-sm border border-white/10 shadow-lg hover:border-white/20 transition">
                            {/* Background glow effect */}
                            <div className="absolute inset-0 bg-linear-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Content */}
                            <div className="relative z-10">
                                {/* Icon */}
                                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-linear-to-br from-blue-500 to-purple-500 text-white">
                                    {feature.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-300 text-sm">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Get Started Button */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex justify-center my-12"
            >
                <button className="px-7 py-3 rounded-full bg-linear-to-r from-blue-500 via-purple-500 to-indigo-600 text-white text-base md:text-lg hover:scale-105 transition-transform ">
                    Get Started For Free
                </button>
            </motion.div>
        </section>
    )
}

export default Features;
