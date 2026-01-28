import { motion } from "motion/react";
import { Check } from "lucide-react";

const PricingCard = ({ plan, i }) => {
    return (
        <motion.div
            key={i}
            /* Card Entry Animation */
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}

            /* Hover Animation */
            whileHover={{
                scale: plan.highlight ? 1.05 : 1.03,
                rotate: plan.highlight ? 1 : 0,
            }}
            className={`relative rounded-3xl p-8 border
        ${plan.highlight
                    ? "bg-linear-to-b from-purple-900/70 to-black/20 border-purple-400/40"
                    : "bg-linear-to-b from-black/20 to-purple-950/40 border-purple-500/20"
                }
        shadow-xl`}
        >
            {/* Badge */}
            {plan.highlight && (
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 12 }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2"
                >
                    <span className="px-4 py-1 text-sm rounded-full backdrop-blur-md text-white font-semibold border border-purple-400/30 bg-purple-600/30">
                        {plan.badge}
                    </span>
                </motion.div>
            )}

            {/* Title */}
            <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl font-semibold text-white mb-2 text-center"
            >
                {plan.name}
            </motion.h3>

            {/* Price */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center mb-6"
            >
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-400">{plan.period}</span>
            </motion.div>

            {/* Features */}
            <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.15 },
                    },
                }}
                className="space-y-4 mb-8"
            >
                {plan.features.map((feature, idx) => (
                    <motion.li
                        key={idx}
                        variants={{
                            hidden: { opacity: 0, x: -20 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        className="flex items-center gap-3 text-gray-200"
                    >
                        <Check className="text-purple-400 w-5 h-5" />
                        {feature}
                    </motion.li>
                ))}
            </motion.ul>

            {/* Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 200 }}
                className={`w-full py-3 rounded-full font-semibold transition cursor-pointer
          ${plan.highlight
                        ? "bg-white text-black hover:bg-gray-200"
                        : "bg-purple-500 text-white hover:bg-purple-600"
                    }`}
            >
                {plan.button}
            </motion.button>
        </motion.div>
    )
}

export default PricingCard;