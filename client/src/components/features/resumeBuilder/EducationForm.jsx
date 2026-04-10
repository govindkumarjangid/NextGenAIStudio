import React from 'react';
import { GraduationCap, Building, MapPin, Calendar, Award, Trash2, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const EducationForm = ({ data = [], onChange }) => {
    const handleAdd = () => {
        onChange([
            ...data,
            { id: Date.now().toString(), degree: "", institution: "", location: "", start_date: "", end_date: "", score: "" }
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
                <h3 className='text-lg font-semibold text-gray-100'>Education</h3>
                <p className='mt-1 text-sm text-gray-300/80'>Add details about your academic background and achievements.</p>
            </div>

            <AnimatePresence>
                {data.map((edu, index) => (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        key={edu.id || index}
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
                            {/* Degree */}
                            <div className='space-y-1.5 md:col-span-2'>
                                <label className="flex items-center gap-2 text-sm font-medium text-gray-200">
                                    <GraduationCap className="size-4 text-cyan-300" />
                                    Degree / Course
                                </label>
                                <input
                                    type="text"
                                    value={edu.degree || ""}
                                    onChange={(e) => handleChange(index, 'degree', e.target.value)}
                                    className='w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white placeholder:text-gray-400 outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/30'
                                    placeholder="e.g. Bachelor of Technology in Computer Science"
                                />
                            </div>

                            {/* Institution */}
                            <div className='space-y-1.5'>
                                <label className="flex items-center gap-2 text-sm font-medium text-gray-200">
                                    <Building className="size-4 text-cyan-300" />
                                    Institution / University
                                </label>
                                <input
                                    type="text"
                                    value={edu.institution || ""}
                                    onChange={(e) => handleChange(index, 'institution', e.target.value)}
                                    className='w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white placeholder:text-gray-400 outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/30'
                                    placeholder="e.g. Rajasthan Technical University"
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
                                    value={edu.location || ""}
                                    onChange={(e) => handleChange(index, 'location', e.target.value)}
                                    className='w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white placeholder:text-gray-400 outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/30'
                                    placeholder="e.g. Kota, India"
                                />
                            </div>

                             {/* Score */}
                             <div className='space-y-1.5 md:col-span-2'>
                                <label className="flex items-center gap-2 text-sm font-medium text-gray-200">
                                    <Award className="size-4 text-cyan-300" />
                                    Score / CGPA
                                </label>
                                <input
                                    type="text"
                                    value={edu.score || ""}
                                    onChange={(e) => handleChange(index, 'score', e.target.value)}
                                    className='w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white placeholder:text-gray-400 outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/30'
                                    placeholder="e.g. 8.5 CGPA"
                                />
                            </div>

                            <div className='flex gap-4 md:col-span-2'>
                                {/* Start Date */}
                                <div className='space-y-1.5 flex-1 pr-1'>
                                    <label className="flex items-center gap-2 text-sm font-medium text-gray-200">
                                        <Calendar className="size-4 text-cyan-300" />
                                        Start Date
                                    </label>
                                    <input
                                        type="month"
                                        value={edu.start_date || ""}
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
                                        value={edu.end_date || ""}
                                        onChange={(e) => handleChange(index, 'end_date', e.target.value)}
                                        className='w-full rounded-xl border border-white/10 bg-black/25 px-4 py-2.5 text-sm text-white placeholder:text-gray-400 outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/30'
                                        placeholder="e.g. 2021-05"
                                    />
                                </div>
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
                <Plus className="size-4" /> Add Education
            </button>
        </div>
    );
};

export default EducationForm;