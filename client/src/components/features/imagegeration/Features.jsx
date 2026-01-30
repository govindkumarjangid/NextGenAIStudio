import { motion } from 'motion/react'
import { Zap, Star, Sparkles } from 'lucide-react'

const Features = () => {
    const features = [
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Fast & Easy",
            description: "Generate images in seconds"
        },
        {
            icon: <Star className="w-8 h-8" />,
            title: "High Quality",
            description: "Amazing, detailed visuals"
        },
        {
            icon: <Sparkles className="w-8 h-8" />,
            title: "Endless Possibilities",
            description: "Create anything you imagine"
        }
    ]

    return (
        <section className="mt-20 max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                        <div className="relative bg-linear-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-lg border border-purple-500/30 rounded-2xl p-8 text-center overflow-hidden">
                            {/* Background glow effect */}
                            <div className="absolute inset-0 bg-linear-to-br from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Content */}
                            <div className="relative z-10">
                                {/* Icon */}
                                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-linear-to-br from-purple-500 to-pink-500 text-white">
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
                <button className="px-12 py-4 rounded-full bg-linear-to-r from-purple-500 via-pink-500 to-purple-600 text-white font-semibold text-lg hover:scale-105 transition-transform ">
                    Get Started For Free
                </button>
            </motion.div>
        </section>
    )
}

export default Features
