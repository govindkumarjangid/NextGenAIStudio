import React from 'react';
import { motion } from 'motion/react';
import { FileText } from 'lucide-react';

const SummaryForm = ({ data = "", onChange }) => {
    return (
        <div className='space-y-6'>
            <div>
                <h3 className='text-lg font-semibold text-gray-100'>Professional Summary</h3>
                <p className='mt-1 text-sm text-gray-300/80'>Write a brief summary to show your strengths, experience, and career direction.</p>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                className='relative space-y-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl'
            >
                <div className='space-y-1.5'>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-200">
                        <FileText className="size-4 text-cyan-300" />
                        Summary Overview
                    </label>
                    <textarea
                        value={data || ""}
                        onChange={(e) => onChange(e.target.value)}
                        rows={8}
                        className='w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white placeholder:text-gray-400 outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/30 resize-none'
                        placeholder="e.g. Passionate Frontend Developer with 3+ years of experience in building scalable web applications using React.js and Next.js. Adept at creating responsive, user-friendly interfaces and collaborating with cross-functional teams..."
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default SummaryForm;