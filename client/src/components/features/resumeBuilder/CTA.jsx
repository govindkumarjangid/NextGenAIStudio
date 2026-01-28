import { ArrowRight } from 'lucide-react';
import { Link ,useNavigate } from 'react-router-dom';

const CTA = () => {
     const navigate = useNavigate();
    return (
        <div className="border-y border-dashed border-gray-700 w-full max-w-5xl mx-auto px-10 sm:px-16 mt-5 mb-30">
        <div className="flex flex-col md:flex-row text-center md:text-left items-center justify-between gap-8 px-3 md:px-10 border-x border-dashed border-gray-700 py-16 sm:py-20 -mt-10 -mb-10 w-full">
            <p className="text-xl font-medium max-w-md text-gray-300">Build a Professional Resume That Helps You Stand Out and Get Hired</p>
            <button onClick={() => navigate("/resume-builder/builder")} className="flex items-center gap-2 rounded-full py-3 px-8 bg-linear-to-r from-purple-500 to-cyan-600 transition text-white group cursor-pointer hover:scale-105 z-99">
                <span>Get Started</span>
               <ArrowRight  size={20} className="group-hover:translate-x-1 transition-transform duration-300"/>
            </button>
        </div>
        </div>
    )
}

export default CTA;