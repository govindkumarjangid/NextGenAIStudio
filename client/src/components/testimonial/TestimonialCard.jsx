import {motion} from "motion/react";
import { HiCheckBadge } from "react-icons/hi2";
import { FaXTwitter } from "react-icons/fa6";

const TestimonialCard = ({ card, index }) => {
  return (
    <motion.div
      className="relative w-72 shrink-0 mx-4"
      initial={{ y: 150, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
    >
      <div className="relative p-5 rounded-2xl border border-white/10 backdrop-blur-3xl shadow-lg hover:border-white/20 transition-colors duration-200 bg-black/20">
        <div className="flex items-center gap-3">
          <img
            className="size-12 rounded-full border border-white/10 object-cover"
            src={card.image}
            alt={`${card.name} avatar`}
          />

          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-white">
              <p className="font-semibold">{card.name}</p>

              <HiCheckBadge className="mt-0.5 text-cyan-200" size={18} />
            </div>

            <span className="text-xs text-slate-400">{card.handle}</span>
          </div>
        </div>

        <p className="text-xs leading-relaxed py-4 text-slate-200">
          Radiant made undercutting all of our competitors an absolute breeze.
        </p>

        <div className="flex items-center justify-between text-slate-400 text-xs">
          <div className="flex items-center gap-2">
            <span>Posted on</span>

            <a
              className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/5 border border-white/10 text-slate-200 hover:border-cyan-300/60 hover:text-cyan-200 transition-colors"
            >
              <FaXTwitter size={12} />
              <span className="text-[11px] font-medium">X</span>
            </a>
          </div>

          <p className="text-slate-300">{card.date}</p>
        </div>

      </div>
    </motion.div>
  );
};

export default TestimonialCard;
