import { useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const Builder = () => {

    const [tab, setTab] = useState("Personal Info");
    const tabs = ["Personal Info", "Education", "Experience", "Skills"];
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-black text-white">
            {/* back to landing page  */}
            <button
                onClick={() => navigate(-1)}
                className="absolute top-6 left-6  text-gray-300 hover:text-white px-4 py-2 rounded-full
                 flex items-center gap-2 transition-colors z-50 cursor-pointer"
            >
                <ChevronLeft className="size-5 group-hover:-translate-x-1 transition-transform duration-200" />
                Back
            </button>

            {/* Page Title */}
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-3xl font-bold px-10 my-6"
            >
                AI Resume Builder
            </motion.h2>


            {/* Main Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-10 pb-10">
                {/* Form Section */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl shadow-xl max-w-xl"
                >
                    {/* Tabs */}
                    <div className="flex gap-6 border-b border-white/10 pb-3 mb-6">
                        {tabs.map((t) => (
                            <button
                                key={t}
                                onClick={() => setTab(t)}
                                className={`text-sm font-medium pb-2 transition ${tab === t
                                    ? "text-blue-400 border-b-2 border-blue-500"
                                    : "text-gray-400 hover:text-white"
                                    }`}
                            >
                                {t}
                            </button>
                        ))}
                    </div>


                    {/* Form Fields */}
                    <div className="space-y-5">
                        <div>
                            <label className="block text-sm text-gray-300 mb-2">Full Name</label>
                            <input
                                placeholder="John Full Name"
                                className="w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-300 mb-2">Job Title</label>
                            <input
                                placeholder="Job Title Template"
                                className="w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-300 mb-2">Summary</label>
                            <textarea
                                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                                className="w-full h-32 rounded-xl bg-black/30 border border-white/10 px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>
                    </div>

                    {/* Button */}
                    < motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-8 w-full py-4 rounded-xl bg-linear-to-r from-blue-500 to-indigo-600 font-semibold text-lg shadow-lg"
                    >
                        Generate with AI
                    </motion.button >
                </motion.div >


                {/* Preview Section */}
                < motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl shadow-xl flex-1"
                >
                    <h3 className="text-lg font-semibold mb-4">Live Preview</h3>
                    {/* Resume Preview Mock */}
                    <div className="bg-white rounded-xl overflow-hidden shadow-2xl flex">
                        {/* Left Sidebar */}
                        <div className="w-1/3 bg-slate-700 text-white p-4 space-y-4">
                            <div className="w-20 h-20 rounded-full bg-gray-300 mx-auto" />
                            <div>
                                <h4 className="text-xs font-bold">CONTACT</h4>
                                <p className="text-[10px] text-gray-200 mt-2">info@email.com</p>
                                <p className="text-[10px] text-gray-200">+91 12345 67890</p>
                            </div>
                            <div>
                                <h4 className="text-xs font-bold">SKILLS</h4>
                                <div className="h-1 bg-white/30 rounded-full mt-2">
                                    <div className="h-1 w-3/4 bg-white rounded-full" />
                                </div>
                            </div>
                        </div>


                        {/* Main Content */}
                        <div className="flex-1 p-6 text-black">
                            <h2 className="text-2xl font-bold">Johnson Smith</h2>
                            <p className="text-sm text-gray-600">Modern Template</p>


                            <div className="mt-4">
                                <h3 className="font-semibold text-sm border-b pb-1">EXPERIENCE</h3>
                                <ul className="text-xs text-gray-700 mt-2 space-y-2">
                                    <li>• Lorem ipsum job title - Aug 2023</li>
                                    <li>• Lorem ipsum dolor sit amet...</li>
                                    <li>• Consectetur adipiscing elit...</li>
                                </ul>
                            </div>


                            <div className="mt-4">
                                <h3 className="font-semibold text-sm border-b pb-1">EDUCATION</h3>
                                <p className="text-xs text-gray-700 mt-2">BCA - 2021</p>
                            </div>
                        </div>
                    </div>
                </motion.div >
            </div >
        </ div >
    )
}

export default Builder;