import { FilePenLineIcon, PencilIcon, PlusIcon, TrashIcon, UploadCloudIcon, XIcon } from 'lucide-react';
import { dummyResumeData } from '../../../assets/assets';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {

  const navigate = useNavigate();
  const colors = ["#9333ea", "#d97706", "#dc2626", "#0284c7", "#16a34a"];
  const [allResumes, setAllResumes] = useState([]);
  const [showCreateResume, setShowCreateResume] = useState(false);
  const [showUploadResume, setShowUploadResume] = useState(false);
  const [title, setTitle] = useState("");
  const [resume, setResume] = useState(null);
  const [editResumeId, setEditResumeId] = useState("");

  // Load all resumes on component mount
  const loadAllResumes = async() => {
      setAllResumes(dummyResumeData);
  }

  const createResume = async(e) => {
      e.preventDefault();
      setShowCreateResume(false);
      setTitle("");
      navigate("/resume-builder/builder/23424");
  }
  const uploadResume = async(e) => {
      e.preventDefault();
      setShowUploadResume(false);
      navigate("/resume-builder/builder/23424");
  }

  useEffect(() => {
      loadAllResumes();
  }, [])

  return (
    <div>
  <div className="max-w-7xl mx-auto px-4 py-8">
    {/* Welcome Header */}
    <p
      className="text-2xl font-medium mb-6 bg-linear-to-r
      from-cyan-600 to-purple-700 bg-clip-text text-transparent"
    >
      Welcome, Govind Jangid
    </p>

    {/* Action Buttons - Create & Upload Resume */}
    <div className="flex gap-4">
      <button
        onClick={() => setShowCreateResume(true)}
        className="w-full bg-white/10 backdrop-blur-md sm:max-w-36 h-48 flex flex-col
        items-center justify-center rounded-lg gap-2 text-slate-300
        border border-dashed border-indigo-400/40 group
        hover:border-indigo-400/80 hover:bg-white/15 hover:shadow-xl hover:shadow-indigo-500/20 transition-all
        duration-300 cursor-pointer"
      >
        <PlusIcon
          className="size-11 transition-all duration-300 p-2.5
          bg-linear-to-br from-indigo-300 to-indigo-500
          text-white rounded-full"
        />
        <p
          className="text-sm group-hover:text-indigo-400
          transition-all duration-300"
        >
          Create Resume
        </p>
      </button>
      <button
        onClick={() => setShowUploadResume(true)}
        className="w-full bg-white/10 backdrop-blur-md sm:max-w-36 h-48 flex flex-col
        items-center justify-center rounded-lg gap-2 text-slate-300
        border border-dashed border-purple-400/40 group
        hover:border-purple-400/80 hover:bg-white/15 hover:shadow-xl hover:shadow-purple-500/20 transition-all
        duration-300 cursor-pointer"
      >
        <UploadCloudIcon
          className="size-11 transition-all duration-300 p-2.5
          bg-linear-to-br from-purple-300 to-purple-500
          text-white rounded-full"
        />
        <p
          className="text-sm group-hover:text-purple-400
          transition-all duration-300"
        >
          Upload Existing
        </p>
      </button>
    </div>

   <hr className="border-slate-300 my-6 sm:w-[90%]"/>

    {/* Resume Cards Grid */}
    <div className="grid grid-cols-3 sm:flex flex-wrap gap-4">
    {
        allResumes.map((resume, index) => {
           const baseColor = colors[index % colors.length];
           return(
            // Resume Card with edit and delete actions
            <button
            onClick={() => navigate(`/resume-builder/builder/${resume._id}`)}
            key={index}
            className="relative w-full sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 group hover:shadow-2xl transition-all duration-300 cursor-pointer backdrop-blur-md border" style={{backgroundColor: `${baseColor}15`, borderColor: baseColor + '60', backdropFilter: 'blur(10px)'}}>
            <FilePenLineIcon  className="size-7 group-hover:scale-105 transition-all" style={{color: baseColor}}/>
            <p className="text-sm group-hover:scale-105 transition-all px-2 text-center font-medium" style={{color: baseColor}}>{resume.title}</p>
              {/* Updated date */}
              <p className="absolute bottom-1 text-[11px] text-slate-400 group-hover:text-slate-300 transition-all duration-300 px-2 text-center" style={{color: baseColor + "90"}}>updated on {new Date(resume.updatedAt).toLocaleDateString()}</p>
             {/* Edit and Delete Actions - appear on hover */}
             <div className="absolute top-2 right-2 group-hover:flex items-center hidden">
           {/* Delete Icon */}
           <TrashIcon className="size-7 p-1.5 hover:bg-white/20 rounded text-slate-300 transition-colors duration-300 cursor-pointer"/>
              {/* Edit Icon */}
              <PencilIcon className="size-7 p-1.5 hover:bg-white/20 rounded text-slate-300 transition-colors duration-300 cursor-pointer"/>
             </div>
            </button>
           )
        })
    }
     </div>

  {/* Create Resume Modal*/}
  {
    showCreateResume && (
        <form
        onSubmit={createResume}
        onClick={() => setShowCreateResume(false)}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-10 flex items-center justify-center p-4">
          <div
          onClick={e => e.stopPropagation()}
          className="bg-linear-to-br from-slate-900 to-slate-800 border border-purple-500/30 rounded-2xl p-8 w-full max-w-md relative shadow-2xl">
            {/* Modal Title */}
            <h2 className="text-2xl font-bold bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">Create a Resume</h2>
            {/* Resume Title Input */}
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter resume title"
              className="w-full px-4 py-3 mb-6 bg-slate-700/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
            />
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-linear-to-r from-purple-500 to-cyan-400 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              Create Resume
            </button>
            {/* Close Button */}
            <XIcon
              className="absolute top-4 right-4 size-6 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200"
              onClick={() => {setShowCreateResume(false); setTitle("")}}
            />
          </div>
        </form>
    )
  }

  {/* Upload Resume Modal */}
  {
    showUploadResume && (
        <form
        onSubmit={uploadResume}
        onClick={() => setShowUploadResume(false)}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-10 flex items-center justify-center p-4">
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-linear-to-br from-slate-900 to-slate-800 border border-purple-500/30 rounded-2xl p-8 w-full max-w-md relative shadow-2xl max-h-[90vh] overflow-y-auto">
            {/* Modal Title */}
            <h2 className="text-2xl font-bold bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">Upload Resume</h2>

            {/* Resume Title Input */}
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter resume title"
              className="w-full px-4 py-3 mb-4 bg-slate-700/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
            />

            {/* File Upload Section with Preview */}
            <div className="mb-6">
              <label htmlFor="resume-input" className="block">
                <input
                  id="resume-input"
                  type="file"
                  onChange={(e) => setResume(e.target.files[0])}
                  className="hidden"
                  accept=".pdf,.doc,.docx"
                />
                <div className="w-full bg-slate-700/50 border-2 border-dashed border-purple-500/50 rounded-lg cursor-pointer hover:border-purple-400/80 transition-all duration-300 overflow-hidden">
                  {
                    resume && resume.type === 'application/pdf' ? (
                      <div className="relative">
                        {/* PDF Preview inside label */}
                        <iframe
                          src={URL.createObjectURL(resume)}
                          className="w-full h-50 rounded"
                          title="PDF Preview"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-slate-900 to-transparent p-4">
                          <p className="text-green-400 font-medium text-center">✓ {resume.name}</p>
                        </div>
                      </div>
                    ) : resume ? (
                      <div className="flex flex-col items-center justify-center py-8 px-4 text-center">
                        <FilePenLineIcon className="size-12 text-purple-400 mb-3" />
                        <p className="text-green-400 font-medium mb-2">✓ File Selected</p>
                        <p className="text-gray-300 text-sm">{resume.name}</p>
                        <p className="text-gray-500 text-xs mt-2">Preview not available for this file type</p>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center py-8 px-4">
                        <UploadCloudIcon className="size-12 text-purple-400 mb-3" />
                        <p className="text-gray-300 text-center">Drag and drop your resume or click to browse</p>
                        <p className="text-gray-500 text-xs mt-2">PDF, DOC, DOCX supported</p>
                      </div>
                    )
                  }
                </div>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-linear-to-r from-purple-500 to-cyan-400 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              Upload Resume
            </button>

            {/* Close Button */}
            <XIcon
              className="absolute top-4 right-4 size-6 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200"
              onClick={() => {setShowUploadResume(false); setTitle(""); setResume(null)}}
            />
          </div>
        </form>
    )
  }

  </div>
</div>

  )
}

export default Dashboard;