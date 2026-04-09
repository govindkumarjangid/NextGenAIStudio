import { motion } from "motion/react";
import { Check } from "lucide-react";

const PricingCard = ({ plan, i }) => {
    return (
        <motion.div
            key={i}
            initial={{ opacity: 0, y: 42, scale: 0.96, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
            whileHover={{
                y: -10,
                scale: plan.highlight ? 1.03 : 1.02,
                transition: { type: "spring", stiffness: 250, damping: 20 }
            }}
            className={`relative isolate rounded-3xl p-7 sm:p-8 border
               ${plan.highlight
                    ? "bg-[linear-gradient(160deg,rgba(91,33,182,0.35),rgba(0,0,0,0.35))] border-cyan-300/50 "
                    : "bg-[linear-gradient(160deg,rgba(10,10,20,0.5),rgba(40,20,80,0.25))] border-white/15 "
                }
         backdrop-blur-xl`}
        >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100" />

            {/* Badge */}
            {plan.highlight && (
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 12 }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2"
                >
                    <span className="px-4 py-1 text-xs sm:text-sm rounded-full backdrop-blur-md text-white font-semibold border border-cyan-300/40 bg-cyan-400/20">
                        {plan.badge}
                    </span>
                </motion.div>
            )}


            <div className="relative z-10">
                {/* Title */}
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl sm:text-2xl font-semibold text-white mb-2 text-center"
                >
                    {plan.name}
                </motion.h3>

                {/* Price */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-center mb-7"
                >
                    <span className="text-4xl sm:text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-300 ml-1">{plan.period}</span>
                    <p className="text-xs text-slate-400 mt-1">Billed monthly. Upgrade anytime.</p>
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
                    className="space-y-3.5 mb-8"
                >
                    {plan.features.map((feature, idx) => (
                        <motion.li
                            key={idx}
                            variants={{
                                hidden: { opacity: 0, x: -20 },
                                visible: { opacity: 1, x: 0 },
                            }}
                            className="flex items-start gap-3 text-slate-200 text-sm"
                        >
                            <span className="mt-0.5 shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full bg-cyan-400/18 border border-cyan-300/30">
                                <Check className="text-cyan-300 w-3.5 h-3.5" />
                            </span>
                            <span>{feature}</span>
                        </motion.li>
                    ))}
                </motion.ul>

                {/* Button */}
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className={`w-full py-3.5 rounded-full font-semibold transition cursor-pointer text-sm sm:text-base
          ${plan.highlight
                            ? "bg-linear-to-r from-cyan-300 to-purple-300 text-slate-950 hover:brightness-95"
                            : "bg-white/10 text-white border border-white/20 hover:bg-white/18"
                        }`}
                >
                    {plan.button}
                </motion.button>
            </div>
        </motion.div>
    )
}

export default PricingCard;