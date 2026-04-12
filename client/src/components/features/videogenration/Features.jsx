import { motion } from 'motion/react';
import { features } from '../../../assets/assets.jsx';

const Features = () => {

    return (
        <section className="my-30 max-w-6xl mx-auto px-4 relative">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16 relative z-10"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Powerful Features for Video Creation
                </h2>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                    Everything you need to create stunning videos effortlessly
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
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
                        <div className="relative h-full bg-[radial-gradient(circle_at_top_left,#160027,#00232d)] rounded-2xl p-8 text-center overflow-hidden backdrop-blur-xl border border-white/5 shadow-2xl hover:border-indigo-400/30 transition-all duration-500 hover:-translate-y-2">
                            {/* Background glow effect */}
                            <div className="absolute inset-0 bg-linear-to-br from-indigo-500/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Content */}
                            <div className="relative z-10 flex flex-col items-center">
                                {/* Icon */}
                                <div className="inline-flex items-center justify-center w-16 h-16 mb-5 bg-white/5  text-indigo-400 group-hover:scale-110  transition-all duration-500 rounded-full">
                                    {feature.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-white mb-3 tracking-wide group-hover:text-indigo-300 transition-colors duration-300">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Features;
