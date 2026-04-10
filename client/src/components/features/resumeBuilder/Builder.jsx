import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useNavigate, useParams } from "react-router-dom";
import {
    ChevronLeft,
    Sparkles,
    User,
    GraduationCap,
    FileText,
    Briefcase,
    FolderIcon,
    ChevronRight,
} from "lucide-react";
import { dummyResumeData } from "../../../assets/assets";
import PersonalInfoForm from "./PersonalInfoForm";
import ResumePreview from "./ResumePreview";

const Builder = () => {

    const [activeSectionIndex, setActiveSectionIndex] = useState(0);
    const [removeBackground, setRemoveBackground] = useState(false);

    const { resumeId } = useParams();
    const navigate = useNavigate();

    const [resumeData, setResumeData] = useState({
        _id: "",
        title: "",
        personal_info: {},
        professional_summary: "",
        experience: [],
        education: [],
        project: [],
        skills: [],
        template: "classic",
        accent_color: "#3B82F6",
        public: false,
    });

    const loadExitingResume = async () => {
        const resume = dummyResumeData.find((resume) => resume._id === resumeId);
        if (resume) {
            setResumeData(resume);
            document.title = resume.title + " - NextGen AI Studio";
        }
    }


    const sections = [
        { id: "personal", name: "Personal Info", icon: User },
        { id: "summary", name: "Summary", icon: FileText },
        { id: "experience", name: "Experience", icon: Briefcase },
        { id: "education", name: "Education", icon: GraduationCap },
        { id: "projects", name: "Projects", icon: FolderIcon },
        { id: "skills", name: "Skills", icon: Sparkles },
    ]

    const activeSection = sections[activeSectionIndex];

    useEffect(() => {
        if (resumeId) loadExitingResume();
    }, []);


    return (
        <div className="relative min-h-screen max-w-7xl mx-auto overflow-hidden text-white px-4 sm:px-8 lg:px-10 pb-10">

            <button
                onClick={() => navigate(-1)}
                className="mt-10 inline-flex items-center gap-2  text-gray-200 backdrop-blur-md hover:text-white"
            >
                <ChevronLeft className="size-5" />
                Back to Dashboard
            </button>

            <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-6 mb-7 flex flex-wrap items-center justify-between gap-4"
            >
                <div>
                    <h2 className="bg-linear-to-r from-purple-400 via-cyan-300 to-cyan-400 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
                        AI Resume Builder
                    </h2>
                    <p className="mt-2 text-sm text-gray-300/85">
                        Fill details tab by tab and get an instant live resume preview.
                    </p>
                </div>

                <div className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs text-cyan-200">
                    Auto-save draft enabled
                </div>
            </motion.div>


            <div className="flex gap-6" >
                {/* left side form */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative rounded-lg overflow-hidden w-full max-w-md shrink-0"
                >
                    <div className="bg-[#0f1f33]/50 p-5 pt-1 rounded-lg shadow-sm border border-white/10 backdrop-blur-xl">

                        {/* progress bar  */}
                        <hr className="absolute top-0 left-0 right-0 border-2 border-gray-200" />
                        <hr className="absolute top-0 left-0 h-1 bg-linear-to-r from-[#160027] to-[#00232d] border-none transition-all duration-2000"
                            style={{ width: `${activeSectionIndex * 100 / (sections.length - 1)}% ` }}
                        />

                        {/* navigation tabs */}
                        <div className="flex justify-between items-center mb-6 border-b border-gray-300 py-1">

                            <div></div>

                            <div className='flex items-center justify-between'>
                                {activeSectionIndex !== 0 && (
                                    <button onClick={() => setActiveSectionIndex((prevIndex) => Math.
                                        max(prevIndex - 1, 0))} className='flex items-center gap-1 p-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all' disabled={activeSectionIndex === 0}>
                                        <ChevronLeft className="size-4" /> Previous
                                    </button>
                                )}

                                <button onClick={() => setActiveSectionIndex((prevIndex) => Math.
                                    min(prevIndex + 1, sections.length - 1))} className={`flex items-center gap-1 p-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all ${activeSectionIndex == sections.length - 1 && 'opcity-50'}`} disabled={activeSectionIndex === sections.length - 1}>
                                    Next  <ChevronRight className="size-4" />
                                </button>

                            </div>

                        </div>

                        {/* form sections  */}
                        <div className="space-y-6">
                            {activeSection.id === "personal" && (
                                <PersonalInfoForm
                                    data={resumeData.personal_info}
                                    onChange={(data) => setResumeData(prev => ({ ...prev, personal_info: data }))}
                                    removeBackground={removeBackground} setRemoveBackground={setRemoveBackground}
                                />
                            )}
                        </div>

                    </div>



                </motion.div >

                {/* right side preview */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full"
                >

                    <div>
                        {/* buttons  */}
                    </div>

                    {/* resume preview  */}
                    <ResumePreview data={resumeData} template={resumeData.template} accentColor={resumeData.accent_color} />

                </motion.div>

            </div>
        </div>
    );
};

export default Builder;