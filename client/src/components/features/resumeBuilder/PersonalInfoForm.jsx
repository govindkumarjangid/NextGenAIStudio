import { BriefcaseBusiness, Github, Globe, Linkedin, Mail, MapPin, Phone, User } from 'lucide-react';
import React from 'react'

const PersonalInfoForm = ({ data, onChange, removeBackground, setRemoveBackground }) => {

    const handleChange = (field, value) => {
        if (!onChange) return;
        onChange({ ...data, [field]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        handleChange("image", file);
    };

    const fields = [
        { key: "full_name", label: "Full Name", icon: User, type: "text", required: true },
        { key: "email", label: "Email Address", icon: Mail, type: "email", required: true },
        { key: "phone", label: "Phone Number", icon: Phone, type: "tel" },
        { key: "location", label: "Location", icon: MapPin, type: "text" },
        { key: "profession", label: "Profession", icon: BriefcaseBusiness, type: "text" },
        { key: "linkedin", label: "LinkedIn Profile", icon: Linkedin, type: "url" },
        { key: "website", label: "Personal Website", icon: Globe, type: "url" },
        { key: "github", label: "Github", icon: Github, type: "url" }
    ]

    return (
        <div className='space-y-6'>
            <div>
                <h3 className='text-lg font-semibold text-gray-100'>Personal Information</h3>
                <p className='mt-1 text-sm text-gray-300/80'>Add your details so the resume header looks clean and professional.</p>
            </div>

            <div className='flex flex-wrap items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl'>
                <label>
                    {data.image ? (
                        <img src={typeof data.image === 'string' ? data.image : URL.
                            createObjectURL(data.image)} alt="user-image" className='size-16 rounded-full object-cover ring-2 ring-cyan-300/60 transition hover:opacity-80' />
                    ) : (
                        <div className="inline-flex items-center gap-2 text-sm text-gray-300 cursor-pointer">
                            <User className="size-10 rounded-full border border-purple-300/40 bg-white/5 p-2.5" />
                            Upload user image
                        </div>
                    )}
                    <input type="file" accept='image/*' className="hidden" onChange={handleImageChange} />
                </label>
                {typeof data.image === 'object' && (
                    <div className='flex flex-col gap-1 text-sm text-gray-200'>
                        <p>Remove Background</p>
                        <label className='relative inline-flex items-center cursor-pointer gap-3'>
                            <input type="checkbox" className="sr-only peer" onChange={() => setRemoveBackground(prev => !prev)} checked=
                                {removeBackground} />
                            <div className='h-5 w-9 rounded-full bg-slate-500/70 peer peer-checked:bg-cyan-500 transition-colors duration-200'>
                            </div>
                            <span className='dot absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-4'></span>
                        </label>
                    </div>
                )}
            </div>

            <div className='grid grid-cols-1 gap-2'>
                {fields.map((field) => {
                const Icon = field.icon;
                return (
                        <div key={field.key} className='space-y-1.5'>
                            <label className="flex items-center gap-2 text-sm font-medium text-gray-200">
                                <Icon className="size-4 text-cyan-300" />
                                {field.label}
                                {field.required && <span className="text-pink-400">*</span>}
                            </label>
                            <input
                                type={field.type}
                                value={data[field.key] || ""}
                                onChange={(e) => handleChange(field.key, e.target.value)}
                                className='w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white placeholder:text-gray-400 outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/30'
                                placeholder={`Enter ${field.label.toLowerCase()}`}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PersonalInfoForm;