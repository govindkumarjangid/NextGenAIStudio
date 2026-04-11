import {
  FilePenLineIcon,
  PencilIcon,
  PlusIcon,
  SearchIcon,
  TrashIcon,
  UploadCloudIcon,
  XIcon,
} from 'lucide-react';
import { dummyResumeData } from '../../../assets/assets';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../../context/AppContext.jsx';
import { motion, AnimatePresence } from 'motion/react';


const Dashboard = () => {

  const navigate = useNavigate();

  const { user } = useAppContext();
  const colors = ["#9333ea", "#d97706", "#dc2626", "#0284c7", "#16a34a"];
  const [allResumes, setAllResumes] = useState([]);
  const [showCreateResume, setShowCreateResume] = useState(false);
  const [showUploadResume, setShowUploadResume] = useState(false);
  const [title, setTitle] = useState("");
  const [resume, setResume] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const loadAllResumes = async () => {
    setAllResumes(dummyResumeData);
  };

  const resumePreviewUrl = useMemo(() => {
    if (!resume || resume.type !== 'application/pdf') return '';
    return URL.createObjectURL(resume);
  }, [resume]);

  useEffect(() => {
    return () => {
      if (resumePreviewUrl) URL.revokeObjectURL(resumePreviewUrl);
    };
  }, [resumePreviewUrl]);

  const filteredResumes = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return allResumes;
    return allResumes.filter((item) => item.title?.toLowerCase().includes(query));
  }, [allResumes, searchQuery]);

  const closeCreateModal = () => {
    setShowCreateResume(false);
    setTitle('');
  };

  const closeUploadModal = () => {
    setShowUploadResume(false);
    setTitle('');
    setResume(null);
  };

  const createResume = async (e) => {
    e.preventDefault();
    const resumeId = Date.now().toString();
    const resumeTitle = title.trim();
    closeCreateModal();
    navigate(`/resume-builder/builder/${resumeId}`, {
      state: { title: resumeTitle },
    });
  };

  const uploadResume = async (e) => {
    e.preventDefault();
    const resumeId = Date.now().toString();
    const resumeTitle = title.trim();
    closeUploadModal();
    navigate(`/resume-builder/builder/${resumeId}`, {
      state: { title: resumeTitle },
    });
  };

  const handleDeleteResume = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this resume?");
    if (confirm) setAllResumes((prev) => prev.filter((item) => item._id !== id));
  };

  const handleEditResume = (id) => {
    navigate(`/resume-builder/builder/${id}`);
  };

  useEffect(() => {
    loadAllResumes();
  }, []);

  const totalResumes = allResumes.length;
  const lastUpdated = allResumes[0]?.updatedAt
    ? new Date(allResumes[0].updatedAt).toLocaleDateString()
    : 'N/A';

  return (
    <div className="relative min-h-screen overflow-hidden px-4 py-8 sm:px-6 lg:px-10">

      <div className="mx-auto max-w-6xl">

        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl">
              Welcome, {user?.username || user?.name || 'User'}
            </p>
            <p className="mt-2 text-sm text-gray-300/85">
              Manage your resumes, create new drafts, and continue editing in seconds.
            </p>
          </div>

          <div className="flex w-full gap-3 sm:w-auto">
            <button
              onClick={() => setShowCreateResume(true)}
              className="rounded-full bg-linear-to-r from-purple-500 to-cyan-400 px-5 py-2.5 text-sm font-medium text-white shadow-lg transition hover:opacity-90"
            >
              Create Resume
            </button>
            <button
              onClick={() => setShowUploadResume(true)}
              className="rounded-full border border-purple-300/50 bg-[#00232d]/60 px-5 py-2.5 text-sm font-medium text-gray-100 backdrop-blur-md transition hover:border-cyan-300/60"
            >
              Upload Resume
            </button>
          </div>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-[#00232d]/55 p-4 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-wider text-gray-400">Total Resumes</p>
            <p className="mt-2 text-2xl font-semibold text-white">{totalResumes}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#00232d]/55 p-4 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-wider text-gray-400">Last Updated</p>
            <p className="mt-2 text-xl font-semibold text-white">{lastUpdated}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#00232d]/55 p-4 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-wider text-gray-400">Quick Search</p>
            <div className="mt-2 flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-3">
              <SearchIcon className="size-4 text-gray-400" />
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title"
                className="w-full border-0 bg-transparent px-0 py-2.5 text-sm text-white placeholder:text-gray-400 focus:ring-0"
              />
            </div>
          </div>
        </div>

        <div className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <button
            onClick={() => setShowCreateResume(true)}
            className="group flex h-44 w-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-indigo-400/40 bg-[#00232d]/60 text-slate-300 backdrop-blur-md transition-all duration-300 hover:border-indigo-400/80"
          >
            <PlusIcon className="size-11 rounded-full bg-linear-to-br from-indigo-300 to-indigo-500 p-2.5 text-white transition-all duration-300" />
            <p className="text-sm transition-all duration-300 group-hover:text-indigo-300">Create Resume</p>
          </button>

          <button
            onClick={() => setShowUploadResume(true)}
            className="group flex h-44 w-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-purple-400/40 bg-[#00232d]/60 text-slate-300 backdrop-blur-md transition-all duration-300 hover:border-purple-400/80"
          >
            <UploadCloudIcon className="size-11 rounded-full bg-linear-to-br from-purple-300 to-purple-500 p-2.5 text-white transition-all duration-300" />
            <p className="text-sm transition-all duration-300 group-hover:text-purple-300">Upload Existing</p>
          </button>

          <div className="rounded-2xl border border-white/10 bg-[#00232d]/55 p-5 backdrop-blur-xl sm:col-span-2">
            <h3 className="text-sm font-semibold text-cyan-200">Pro Tip</h3>
            <p className="mt-2 text-sm text-gray-300/90">
              Use clear titles like “Frontend Dev - Product Resume” so your drafts stay organized and easier to identify.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {filteredResumes.map((resume, index) => {
            const baseColor = colors[index % colors.length];
            return (
              <motion.button
                whileHover={{ y: -4 }}
                onClick={() => navigate(`/resume-builder/builder/${resume._id}`)}
                key={resume._id || index}
                className="group relative flex h-48 w-full flex-col items-start justify-between rounded-2xl border p-4 text-left shadow-lg backdrop-blur-md transition-all duration-300"
                style={{
                  backgroundColor: `${baseColor}16`,
                  borderColor: `${baseColor}75`,
                }}
              >
                <div className="flex w-full items-start justify-between gap-2">
                  <div>
                    <FilePenLineIcon className="size-7" style={{ color: baseColor }} />
                    <p className="mt-3 line-clamp-2 text-sm font-semibold" style={{ color: baseColor }}>
                      {resume.title}
                    </p>
                  </div>
                  <div className="hidden items-center gap-1 group-hover:flex">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEditResume(resume._id);
                      }}
                      className="rounded-md p-1.5 text-slate-200 transition hover:bg-white/20"
                      aria-label="Edit resume"
                    >
                      <PencilIcon className="size-4" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteResume(resume._id);
                      }}
                      className="rounded-md p-1.5 text-slate-200 transition hover:bg-white/20"
                      aria-label="Delete resume"
                    >
                      <TrashIcon className="size-4" />
                    </button>
                  </div>
                </div>

                <p className="text-[11px] text-slate-200/75">
                  Updated on {new Date(resume.updatedAt).toLocaleDateString()}
                </p>
              </motion.button>
            );
          })}
        </div>

        {!filteredResumes.length && (
          <div className="mt-6 rounded-2xl border border-dashed border-purple-300/40 bg-[#00232d]/55 p-8 text-center backdrop-blur-xl">
            <p className="text-sm text-gray-200">No resumes found for “{searchQuery}”.</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-3 text-xs text-cyan-300 transition hover:text-cyan-200"
            >
              Clear search
            </button>
          </div>
        )}

        <AnimatePresence>
          {showCreateResume && (
            <form
              onSubmit={createResume}
              onClick={closeCreateModal}
              className="fixed inset-0 z-100 flex items-center justify-center bg-black/35 p-4 backdrop-blur-sm"
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-md rounded-2xl border border-purple-500/30 bg-[radial-gradient(circle_at_top_left,#160027,#00232d)] p-8 shadow-2xl"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              >
                <h2 className="mb-2 bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-2xl font-bold text-transparent">
                  Create a Resume
                </h2>
                <p className="mb-6 text-sm text-gray-300/90">Give your resume a title to get started.</p>

                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter resume title"
                  className="mb-6 w-full rounded-lg border border-purple-500/30 bg-slate-700/50 px-4 py-3 text-white placeholder-gray-400 transition-all duration-300 focus:border-purple-500/60 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                />

                <button
                  type="submit"
                  disabled={!title.trim()}
                  className="w-full rounded-lg bg-linear-to-r from-purple-500 to-cyan-400 py-3 font-semibold text-white transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Create Resume
                </button>

                <XIcon
                  className="absolute right-4 top-4 size-6 cursor-pointer text-gray-400 transition-colors duration-200 hover:text-white"
                  onClick={closeCreateModal}
                />
              </motion.div>
            </form>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showUploadResume && (
            <form
              onSubmit={uploadResume}
              onClick={closeUploadModal}
              className="fixed inset-0 z-100 flex items-center justify-center bg-black/35 p-4 backdrop-blur-sm"
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl border border-purple-500/30 bg-[radial-gradient(circle_at_top_left,#160027,#00232d)] p-8 shadow-2xl"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              >
                <h2 className="mb-2 bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-2xl font-bold text-transparent">
                  Upload Resume
                </h2>
                <p className="mb-6 text-sm text-gray-300/90">
                  Upload PDF, DOC, or DOCX to continue editing with AI.
                </p>

                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter resume title"
                  className="mb-4 w-full rounded-lg border border-purple-500/30 bg-slate-700/50 px-4 py-3 text-white placeholder-gray-400 transition-all duration-300 focus:border-purple-500/60 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                />

                <div className="mb-6">
                  <label htmlFor="resume-input" className="block">
                    <input
                      id="resume-input"
                      type="file"
                      onChange={(e) => setResume(e.target.files[0])}
                      className="hidden"
                      accept=".pdf,.doc,.docx"
                    />
                    <div className="w-full overflow-hidden rounded-lg border-2 border-dashed border-purple-500/50 bg-slate-700/50 transition-all duration-300 hover:border-purple-400/80">
                      {resume && resume.type === 'application/pdf' ? (
                        <div className="relative">
                          <iframe src={resumePreviewUrl} className="h-50 w-full rounded" title="PDF Preview" />
                          <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-slate-900 to-transparent p-4">
                            <p className="text-center font-medium text-green-400">✓ {resume.name}</p>
                          </div>
                        </div>
                      ) : resume ? (
                        <div className="flex flex-col items-center justify-center px-4 py-8 text-center">
                          <FilePenLineIcon className="mb-3 size-12 text-purple-400" />
                          <p className="mb-2 font-medium text-green-400">✓ File Selected</p>
                          <p className="text-sm text-gray-300">{resume.name}</p>
                          <p className="mt-2 text-xs text-gray-500">Preview not available for this file type</p>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center px-4 py-8">
                          <UploadCloudIcon className="mb-3 size-12 text-purple-400" />
                          <p className="text-center text-gray-300">Drag and drop your resume or click to browse</p>
                          <p className="mt-2 text-xs text-gray-500">PDF, DOC, DOCX supported</p>
                        </div>
                      )}
                    </div>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={!title.trim() || !resume}
                  className="w-full rounded-lg bg-linear-to-r from-purple-500 to-cyan-400 py-3 font-semibold text-white transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Upload Resume
                </button>

                <XIcon
                  className="absolute right-4 top-4 size-6 cursor-pointer text-gray-400 transition-colors duration-200 hover:text-white"
                  onClick={closeUploadModal}
                />
              </motion.div>
            </form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Dashboard;