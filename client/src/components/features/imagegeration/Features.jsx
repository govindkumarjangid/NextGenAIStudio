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
        <section className="my-30 max-w-5xl mx-auto px-4 relative">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
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
                        <div className="relative bg-[radial-gradient(circle_at_top_left,#160027,#00232d)] rounded-2xl p-8 text-center overflow-hidden backdrop-blur-xl border border-white/5 shadow-2xl hover:border-cyan-400/30  transition-all duration-500 hover:-translate-y-2">
                            {/* Background glow effect */}
                            <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Content */}
                            <div className="relative z-10 flex flex-col items-center">
                                {/* Icon */}
                                <div className="inline-flex items-center justify-center w-16 h-16 mb-5 rounded-2xl bg-white/5  transition-all duration-500">
                                    {feature.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-white mb-3 tracking-wide group-hover:text-cyan-300 transition-colors duration-300">
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
    )
}

export default Features
