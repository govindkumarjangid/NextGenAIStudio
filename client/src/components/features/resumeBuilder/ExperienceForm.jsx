import React from 'react';
import { Briefcase, Building, MapPin, Calendar, FileText, Trash2, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const ExperienceForm = ({ data = [], onChange }) => {
    const handleAdd = () => {
        onChange([
            ...data,
            { id: Date.now().toString(), job_title: "", company_name: "", location: "", start_date: "", end_date: "", description: "" }
        ]);
    };

    const handleRemove = (index) => {
        onChange(data.filter((_, i) => i !== index));
    };

    const handleChange = (index, field, value) => {
        const newData = [...data];
        newData[index][field] = value;
        onChange(newData);
    };

    return (
        <div className='space-y-6'>
            <div>
                <h3 className='text-lg font-semibold text-gray-100'>Professional Experience</h3>
                <p className='mt-1 text-sm text-gray-300/80'>Highlight your work history and key achievements.</p>
            </div>

            <AnimatePresence>
                {data.map((exp, index) => (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        key={exp.id || index}
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
                            {/* Job Title */}
                            <div className='space-y-1.5'>
                                <label className="flex items-center gap-2 text-sm font-medium text-gray-200">
                                    <Briefcase className="size-4 text-cyan-300" />
                                    Job Title
                                </label>
                                <input
                                    type="text"
                                    value={exp.job_title || ""}
                                    onChange={(e) => handleChange(index, 'job_title', e.target.value)}
                                    className='w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white placeholder:text-gray-400 outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/30'
                                    placeholder="e.g. Software Engineer"
                                />
                            </div>

                            {/* Company Name */}
                            <div className='space-y-1.5'>
                                <label className="flex items-center gap-2 text-sm font-medium text-gray-200">
                                    <Building className="size-4 text-cyan-300" />
                                    Company Name
                                </label>
                                <input
                                    type="text"
                                    value={exp.company_name || ""}
                                    onChange={(e) => handleChange(index, 'company_name', e.target.value)}
                                    className='w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white placeholder:text-gray-400 outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/30'
                                    placeholder="e.g. Tech Innovators Ltd."
                                />
                            </div>

                            {/* Location */}
                            <div className='space-y-1.5'>
                                <label className="flex items-center gap-2 text-sm font-medium text-gray-200">
                                    <MapPin className="size-4 text-cyan-300" />
                                    Location
                                </label>
                                <input
                                    type="text"
                                    value={exp.location || ""}
                                    onChange={(e) => handleChange(index, 'location', e.target.value)}
                                    className='w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white placeholder:text-gray-400 outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/30'
                                    placeholder="e.g. Bengaluru, India"
                                />
                            </div>

                            <div className='flex gap-4'>
                                {/* Start Date */}
                                <div className='space-y-1.5 flex-1 pr-1'>
                                    <label className="flex items-center gap-2 text-sm font-medium text-gray-200">
                                        <Calendar className="size-4 text-cyan-300" />
                                        Start Date
                                    </label>
                                    <input
                                        type="month"
                                        value={exp.start_date || ""}
                                        onChange={(e) => handleChange(index, 'start_date', e.target.value)}
                                        className='w-full rounded-xl border border-white/10 bg-black/25 px-4 py-2.5 text-sm text-white placeholder:text-gray-400 outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/30'
                                    />
                                </div>

                                {/* End Date */}
                                <div className='space-y-1.5 flex-1 pl-1'>
                                    <label className="flex items-center gap-2 text-sm font-medium text-gray-200">
                                        <Calendar className="size-4 text-cyan-300" />
                                        End Date
                                    </label>
                                    <input
                                        type="text"
                                        value={exp.end_date || ""}
                                        onChange={(e) => handleChange(index, 'end_date', e.target.value)}
                                        className='w-full rounded-xl border border-white/10 bg-black/25 px-4 py-2.5 text-sm text-white placeholder:text-gray-400 outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/30'
                                        placeholder="e.g. Present"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className='space-y-1.5 pt-2'>
                            <label className="flex items-center gap-2 text-sm font-medium text-gray-200">
                                <FileText className="size-4 text-cyan-300" />
                                Description
                            </label>
                            <textarea
                                value={exp.description || ""}
                                onChange={(e) => handleChange(index, 'description', e.target.value)}
                                rows={4}
                                className='w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white placeholder:text-gray-400 outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/30 resize-none'
                                placeholder="Developed and maintained user-facing features... Improved performance by 25%."
                            />
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>

            <button
                type="button"
                onClick={handleAdd}
                className='flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-cyan-400/30 bg-cyan-900/10 py-3.5 text-sm font-semibold text-cyan-300 hover:bg-cyan-900/20 hover:border-cyan-400/60 transition-all cursor-pointer'
            >
                <Plus className="size-4" /> Add Experience
            </button>
        </div>
    );
};

export default ExperienceForm;