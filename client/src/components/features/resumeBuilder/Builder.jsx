import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
    ChevronLeft,
    Sparkles,
    User,
    GraduationCap,
    FileText,
    Briefcase,
    FolderIcon,
    EyeOffIcon,
    EyeIcon,
    Share2Icon,
    DownloadIcon,
    ArrowLeftIcon,
    ArrowRightIcon,
} from "lucide-react";
import { dummyResumeData } from "../../../assets/assets";
import PersonalInfoForm from "./PersonalInfoForm";
import SummaryForm from "./SummaryForm";
import ExperienceForm from "./ExperienceForm";
import EducationForm from "./EducationForm";
import ProjectForm from "./ProjectForm";
import SkillsForm from "./SkillsForm";
import ResumePreview from "./ResumePreview";
import TemplateSelector from "./templates/TemplateSelector";

const Builder = () => {

    const [activeSectionIndex, setActiveSectionIndex] = useState(0);
    const [removeBackground, setRemoveBackground] = useState(false);

    const { resumeId } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const titleFromDashboard = location.state?.title?.trim();

    const [resumeData, setResumeData] = useState({
        _id: resumeId || Date.now().toString(),
        title: titleFromDashboard || "Untitled Resume",
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

    useEffect(() => {
        document.title = `${resumeData.title} - NextGen AI Studio`;
    }, [resumeData.title]);


    const handleSubmit = async () => {
        console.log(resumeData);
    }

    const chnageResumeVisibility = async () => {
        setResumeData(prev => ({ ...prev, public: !prev.public }));
    }

    const handleShare = () => {
        const frontUrl = window.location.origin;
        const resumeUrl = `${frontUrl}/view/${resumeData._id}`;
        if (navigator.share)
            navigator.share({ url: resumeUrl, text: "My Resume" });
        else
            alert("Share is not supported in this browser.");
    }

    const handleDownload = () => {
        window.print();
    }


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
                className="mt-6 mb-7 flex md:flex-row flex-col items-center justify-between gap-4"
            >
                <div className="max-w-md flex flex-col gap-2 md:w-1/2 w-full">
                    <h2 className="bg-linear-to-r from-purple-400 via-cyan-300 to-cyan-400 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
                        AI Resume Builder
                    </h2>
                    <p className="mt-2 text-sm text-gray-300/85">
                        Fill details tab by tab and get an instant live resume preview.
                    </p>
                </div>

                <div className="md:flex hidden items-center gap-2 bg">
                    {resumeData.public && (
                        <button
                            onClick={handleShare}
                            className="px-4 py-2 rounded-xl text-sm font-medium text-gray-300 border border-gray-700 hover:bg-white/10 hover:text-white transition-all active:scale-95 flex items-center gap-1">
                            <Share2Icon className="size-4" />
                            Share
                        </button>
                    )}
                    <button className=" px-4 py-2 rounded-xl text-sm font-medium text-gray-300 border border-gray-700 hover:bg-white/10 hover:text-white transition-all active:scale-95 flex items-center gap-1" onClick={chnageResumeVisibility}>
                        {resumeData?.public ? (
                            <>
                                <EyeIcon className="size-4" />
                                <span>Public</span>
                            </>
                        ) : (
                            <>
                                <EyeOffIcon className="size-4" />
                                <span>Private</span>
                            </>
                        )}
                    </button>
                    <button
                        onClick={handleDownload}
                        className="px-4 py-2 rounded-xl text-sm font-medium text-gray-300 border border-gray-700 hover:bg-white/10 hover:text-white transition-all active:scale-95 flex items-center gap-1" >
                        <DownloadIcon className="size-4" />
                        Download
                    </button>

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
                        <hr className="absolute top-0 left-0 right-0 border-2 border-gray-700/50" />
                        <hr className="absolute top-0 left-0 h-1 bg-linear-to-r from-purple-500 to-cyan-400 border-none transition-all duration-1000"
                            style={{ width: `${activeSectionIndex * 100 / (sections.length - 1)}% ` }}
                        />

                        {/* navigation tabs */}
                        <div className="flex justify-between items-center border-b border-gray-700 py-4 mb-4">

                            <div className="flex items-center gap-3">
                                <TemplateSelector selectedTemplate={resumeData.template} onChange={(template) => setResumeData(prev => ({ ...prev, template }))} />
                            </div>

                            <div className='flex items-center gap-2'>

                                {activeSectionIndex !== 0 && (
                                    <button onClick={() => setActiveSectionIndex((prevIndex) => Math.
                                        max(prevIndex - 1, 0))} className='p-3 rounded-full text-sm font-medium text-gray-300 border border-gray-700 hover:bg-white/10 hover:text-white transition-all active:scale-95 flex items-center gap-1' disabled={activeSectionIndex === 0}>
                                        <ArrowLeftIcon className="size-4" />
                                    </button>
                                )}

                                <button onClick={() => setActiveSectionIndex((prevIndex) => Math.
                                    min(prevIndex + 1, sections.length - 1))} className={`p-3 rounded-full text-sm font-medium text-gray-300 border border-gray-700 hover:bg-white/10 hover:text-white transition-all active:scale-95 flex items-center gap-1  ${activeSectionIndex == sections.length - 1 && 'opacity-50 cursor-not-allowed!'}`} disabled={activeSectionIndex === sections.length - 1}>
                                    <ArrowRightIcon className="size-4" />
                                </button>

                            </div>

                        </div>


                        {/* form sections  */}
                        <div className="space-y-6">
                            {activeSection.id === "personal" && (
                                <PersonalInfoForm
                                    data={resumeData.personal_info}
                                    onChange={(data) => setResumeData(prev => ({ ...prev, personal_info: data }))}
                                    removeBackground={removeBackground}
                                    setRemoveBackground={setRemoveBackground}
                                />
                            )}

                            {activeSection.id === "experience" && (
                                <ExperienceForm
                                    data={resumeData.experience}
                                    onChange={(data) => setResumeData(prev => ({ ...prev, experience: data }))}
                                />
                            )}

                            {
                                activeSection.id === "summary" && (
                                    <SummaryForm
                                        data={resumeData.professional_summary}
                                        onChange={(data) => setResumeData(prev => ({ ...prev, professional_summary: data }))}
                                    />
                                )
                            }

                            {activeSection.id === "education" && (
                                <EducationForm
                                    data={resumeData.education}
                                    onChange={(data) => setResumeData(prev => ({ ...prev, education: data }))}
                                />
                            )}

                            {activeSection.id === "projects" && (
                                <ProjectForm
                                    data={resumeData.project}
                                    onChange={(data) => setResumeData(prev => ({ ...prev, project: data }))}
                                />
                            )}


                            {
                                activeSection.id === "skills" && (
                                    <SkillsForm
                                        data={resumeData.skills}
                                        onChange={(data) => setResumeData(prev => ({ ...prev, skills: data }))}
                                    />
                                )
                            }
                        </div>


                        {/* save buttom  */}
                        <button
                            onClick={handleSubmit}
                            className="mt-6 flex items-center gap-1 text-sm text-cyan-300 bg-linear-to-br from-cyan-900/20 to-purple-900/20 border border-cyan-400/30 hover:border-cyan-400/60 transition-all px-4 py-2.5 rounded-xl active:scale-95"
                        >
                            Save Changes
                        </button>

                    </div>



                </motion.div >

                {/* right side preview */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full"
                >
                    {/* resume preview  */}
                    <ResumePreview data={resumeData} template={resumeData.template} accentColor={resumeData.accent_color} />

                </motion.div>

            </div>
        </div>
    );
};

export default Builder;