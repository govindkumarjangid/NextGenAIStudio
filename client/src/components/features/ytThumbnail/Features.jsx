import { motion } from 'motion/react';
import { Youtube, MousePointerClick, TrendingUp } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <Youtube className="w-8 h-8" />,
            title: "Platform Optimized",
            description: "Thumbnails crafted specifically for YouTube's algorithm and aspect ratios."
        },
        {
            icon: <MousePointerClick className="w-8 h-8" />,
            title: "High CTR",
            description: "Designs proven to grab attention and increase your video click-through rates."
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: "Boost Views",
            description: "Stand out in crowded feeds and drive more organic traffic to your channel."
        }
    ];

    return (
        <section className="my-30 max-w-6xl mx-auto px-4 relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16 relative z-10"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Powerful Features for Thumbnails
                </h2>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                    Everything you need to create catchy YouTube thumbnails effortlessly
                </p>
            </motion.div>

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
                        <div className="relative bg-[radial-gradient(circle_at_top_left,#160027,#00232d)] rounded-2xl p-8 text-center overflow-hidden backdrop-blur-xl border border-white/5 shadow-2xl transition-all duration-500 hover:-translate-y-2">
                            {/* Background glow effect */}
                            <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Content */}
                            <div className="relative z-10 flex flex-col items-center">
                                {/* Icon */}
                                <div className="inline-flex items-center justify-center w-16 h-16 mb-5 rounded-full bg-white/5 text-cyan-400 group-hover:scale-110 transition-all duration-500">
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
    );
};

export default Features;