import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Trash2, FolderCode, Link2, Code2, ListStart } from 'lucide-react';

const ProjectForm = ({ data = [], onChange }) => {
    const handleAdd = () => {
        onChange([
            ...data,
            { id: Date.now().toString(), title: "", tech_stack: [], link: "", description: "" }
        ]);
    };

    const handleRemove = (index) => {
        onChange(data.filter((_, i) => i !== index));
    };

    const handleChange = (index, field, value) => {
        const newData = [...data];
        if (field === 'tech_stack') {
            newData[index][field] = value.split(',').map(s => s.trim()).filter(s => s !== '');
        } else {
            newData[index][field] = value;
        }
        onChange(newData);
    };

    // Helper to join tech_stack array for input display
    const getTechStackString = (techArray) => {
        if (!techArray || !Array.isArray(techArray)) return "";
        return techArray.join(', ');
    };

    return (
        <div className='space-y-6'>
            <div>
                <h3 className='text-lg font-semibold text-gray-100'>Projects</h3>
                <p className='mt-1 text-sm text-gray-300/80'>Highlight your key projects, tech stack, and responsibilities.</p>
            </div>

            <AnimatePresence>
                {data.map((proj, index) => (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        key={proj.id || index}
                        className='relative space-y-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl'
                    >
                        <button
                            type="button"
                            onClick={() => handleRemove(index)}
                            className="absolute right-4 top-4 text-gray-400 hover:text-red-400 transition cursor-pointer"
                        >
                            <Trash2 className="size-4" />
                        </button>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-2'>
                            {/* Project Title */}
                            <div className='space-y-1.5 md:col-span-2'>
                                <label className="flex items-center gap-2 text-sm font-medium text-gray-200">
                                    <FolderCode className="size-4 text-cyan-300" />
                                    Project Title
                                </label>
                                <input
                                    type="text"
                                    value={proj.title || ""}
                                    onChange={(e) => handleChange(index, 'title', e.target.value)}
                                    className='w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white placeholder:text-gray-400 outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/30'
                                    placeholder="e.g. E-commerce Admin Dashboard"
                                />
                            </div>

                            {/* Project Link */}
                            <div className='space-y-1.5 md:col-span-2'>
                                <label className="flex items-center gap-2 text-sm font-medium text-gray-200">
                                    <Link2 className="size-4 text-cyan-300" />
                                    Project Link
                                </label>
                                <input
                                    type="text"
                                    value={proj.link || ""}
                                    onChange={(e) => handleChange(index, 'link', e.target.value)}
                                    className='w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white placeholder:text-gray-400 outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/30'
                                    placeholder="e.g. https://github.com/rahulsharma/ecom-dash"
                                />
                            </div>

                            {/* Tech Stack */}
                            <div className='space-y-1.5 md:col-span-2'>
                                <label className="flex items-center gap-2 text-sm font-medium text-gray-200">
                                    <Code2 className="size-4 text-cyan-300" />
                                    Tech Stack (comma-separated)
                                </label>
                                <input
                                    type="text"
                                    value={getTechStackString(proj.tech_stack)}
                                    onChange={(e) => handleChange(index, 'tech_stack', e.target.value)}
                                    className='w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white placeholder:text-gray-400 outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/30'
                                    placeholder="e.g. React, Node.js, MongoDB, Tailwind CSS"
                                />
                            </div>

                            {/* Description */}
                            <div className='space-y-1.5 md:col-span-2'>
                                <label className="flex items-center gap-2 text-sm font-medium text-gray-200">
                                    <ListStart className="size-4 text-cyan-300" />
                                    Description
                                </label>
                                <textarea
                                    value={proj.description || ""}
                                    onChange={(e) => handleChange(index, 'description', e.target.value)}
                                    rows={4}
                                    className='w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white placeholder:text-gray-400 outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/30 resize-none'
                                    placeholder="Briefly describe the project, your role, and key achievements..."
                                />
                            </div>

                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>

            <button
                type="button"
                onClick={handleAdd}
                className='flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-cyan-400/30 bg-cyan-900/10 py-3.5 text-sm font-semibold text-cyan-300 hover:bg-cyan-900/20 hover:border-cyan-400/60 transition-all cursor-pointer'
            >
                <Plus className="size-4" /> Add Project
            </button>
        </div>
    );
};

export default ProjectForm;
