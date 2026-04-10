import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Trash2, Sparkles } from 'lucide-react';

const SkillsForm = ({ data = [], onChange }) => {
    const handleAdd = () => {
        onChange([...data, ""]);
    };

    const handleRemove = (index) => {
        onChange(data.filter((_, i) => i !== index));
    };

    const handleChange = (index, value) => {
        const newData = [...data];
        newData[index] = value;
        onChange(newData);
    };

    return (
        <div className='space-y-6'>
            <div>
                <h3 className='text-lg font-semibold text-gray-100'>Skills</h3>
                <p className='mt-1 text-sm text-gray-300/80'>List your technical and professional skills.</p>
            </div>

            <div className='space-y-3'>
                <AnimatePresence>
                    {data.map((skill, index) => (
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.2 }}
                            key={index}
                            className='relative flex items-center gap-3'
                        >
                            <div className='flex-1 relative'>
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Sparkles className="size-4 text-cyan-300" />
                                </div>
                                <input
                                    type="text"
                                    value={skill || ""}
                                    onChange={(e) => handleChange(index, e.target.value)}
                                    className='w-full rounded-xl border border-white/10 bg-black/25 py-3 pl-11 pr-4 text-sm text-white placeholder:text-gray-400 outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/30'
                                    placeholder="e.g. React.js, Python, Project Management"
                                />
                            </div>
                            <button
                                type="button"
                                onClick={() => handleRemove(index)}
                                className="p-3 text-gray-400 border border-white/10 rounded-xl bg-black/25 hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/30 transition cursor-pointer shrink-0"
                            >
                                <Trash2 className="size-4" />
                            </button>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            <button
                type="button"
                onClick={handleAdd}
                className='flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-cyan-400/30 bg-cyan-900/10 py-3.5 text-sm font-semibold text-cyan-300 hover:bg-cyan-900/20 hover:border-cyan-400/60 transition-all cursor-pointer'
            >
                <Plus className="size-4" /> Add Skill
            </button>
        </div>
    );
};

export default SkillsForm;