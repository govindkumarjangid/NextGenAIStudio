import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

const CTASection = ()  => {

    const navigate = useNavigate();
    const {user, setShowLogin, setState} = useAppContext();

    const handlePrimaryAction = () => {
        if (user) {
            navigate("/features");
            return;
        }
        setState("register");
        setShowLogin(true);
    }

    const handleSecondaryAction = () => {
        navigate("/pricing");
    }

    return (
        <motion.section className="relative overflow-hidden max-w-6xl mt-28 mb-24 md:mx-auto mx-4 rounded-3xl border border-white/15 bg-[linear-gradient(130deg,rgba(22,0,39,0.92),rgba(0,35,45,0.92))] text-white"
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 190, damping: 20, mass: 0.9 }}
        >
            <div className="absolute -top-16 -left-12 h-44 w-44 rounded-full bg-purple-500/25 blur-3xl" />
            <div className="absolute -bottom-20 -right-16 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />

            <div className="relative z-10 px-6 md:px-12 py-12 md:py-16 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-end justify-between">
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-5 max-w-3xl">
                    <span className="px-4 py-1.5 rounded-full border border-cyan-300/40 text-cyan-200 text-xs sm:text-sm font-medium bg-white/5">
                        Build Faster With AI
                    </span>

                <motion.h1
                    className="text-3xl sm:text-4xl md:text-5xl md:leading-tight font-semibold tracking-tight"
                    initial={{ y: 60, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 170, damping: 20, mass: 0.9 }}
                >
                    Create resumes, captions, images, and videos in one AI studio.
                </motion.h1>

                <motion.p className="text-lg"
                    initial={{ y: 60, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 160, damping: 20, mass: 0.9, delay: 0.05 }}
                >
                    Turn ideas into publish-ready content in minutes. Start free and scale as you grow.
                </motion.p>

                    <ul className="flex flex-wrap justify-center lg:justify-start gap-3 text-sm text-slate-200/90">
                        <li className="px-3 py-1 rounded-full bg-white/8 border border-white/10">No credit card required</li>
                        <li className="px-3 py-1 rounded-full bg-white/8 border border-white/10">All tools in one dashboard</li>
                    </ul>
                </div>

                <motion.div
                    className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap gap-3 w-full lg:w-auto justify-center lg:justify-end"
                    initial={{ y: 60, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 170, damping: 20, mass: 0.9, delay: 0.1 }}
                >
                    <button
                        onClick={handlePrimaryAction}
                        className="w-full sm:w-auto shrink-0 whitespace-nowrap px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-linear-to-r from-purple-500 to-cyan-400 hover:opacity-90 active:scale-95 transition"
                    >
                        {user ? "Go To Features" : "Get Started Free"}
                    </button>

                    <button
                        onClick={handleSecondaryAction}
                        className="w-full sm:w-auto shrink-0 whitespace-nowrap px-7 py-3.5 rounded-full text-sm font-semibold border border-white/25 bg-white/8 hover:bg-white/14 active:scale-95 transition"
                    >
                        View Pricing
                    </button>
                </motion.div>
            </div>
        </motion.section>
    );
}
export default CTASection;