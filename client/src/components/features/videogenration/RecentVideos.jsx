import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import toast from 'react-hot-toast'
import { useAppContext } from '../../../context/AppContext'
import { Copy, Download, X, Play } from 'lucide-react'

// Default placeholder videos
const defaultVideos = [
  {
    _id: '1',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    prompt: 'A serene forest landscape with flowing water and wildlife'
  },
  {
    _id: '2',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    prompt: 'Abstract futuristic environment with mechanical structures'
  },
  {
    _id: '3',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    prompt: 'Epic cinematic scene with dramatic lighting and action'
  },
  {
    _id: '4',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    prompt: 'Beautiful animated story with fantasy elements'
  }
];

const RecentVideos = () => {

  const { axios } = useAppContext();
  const [videos, setVideos] = useState(defaultVideos);
  const [userVideos, setUserVideos] = useState([]);
  const [loadingVideos, setLoadingVideos] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [displayUserCount, setDisplayUserCount] = useState(4);
  const token = localStorage.getItem("token");


  const fetchUserVideos = async () => {
    setLoadingVideos(true);
    try {
      const { data } = await axios.get('/video/get-videos');
      if (data?.success) setUserVideos(data?.videos || []);
    } catch (error) {
      console.log(error);
      // Don't show error for user videos as they might not have any yet
      setUserVideos([]);
    } finally {
      setLoadingVideos(false);
    }
  }

  const fetchRecentVideos = async () => {
    setLoadingVideos(true);
    try {
      const { data } = await axios.get('/video/default-videos');
      if (data?.success && data?.videos?.length > 0) {
        console.log(data);
        setVideos(data?.videos);
      } else {
        // Use default placeholder videos if API fails
        setVideos(defaultVideos);
      }
    } catch (error) {
      console.log(error);
      // Use default placeholder videos on error
      setVideos(defaultVideos);
    } finally {
      setLoadingVideos(false);
    }
  }

  useEffect(() => {
    if (token && !axios.defaults.headers.common["Authorization"]) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    fetchRecentVideos();
  }, [axios, token]);

  useEffect(() => {
    if (token) fetchUserVideos();
  }, []);


  const handleCopyLink = async () => {
    if (!selectedVideo?.prompt) return;
    try {
      await navigator.clipboard.writeText(selectedVideo.prompt);
      toast.success("Prompt copied!");
    } catch (error) {
      toast.error("Failed to copy prompt");
    }
  };

  const handleDownload = () => {
    if (!selectedVideo?.videoUrl) return;
    const link = document.createElement('a');
    link.href = selectedVideo.videoUrl;
    link.download = `ai-video-${Date.now()}.mp4`;
    link.click();
    toast.success("Video download started!");
  };

  const handleVideoClick = (vid) => {
    setSelectedVideo(vid);
  };

  const loadMoreUserVideos = () => {
    setDisplayUserCount(prev => prev + 4);
  };

  const handleClosePopup = () => {
    setSelectedVideo(null);
  };

  return (
    <>
      <div className="mt-8 sm:mt-12 max-w-280 mx-auto">

        <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-4 sm:mb-6 text-white">Your Recent Videos</h3>
        {loadingVideos ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-40 md:h-52 rounded-2xl bg-linear-to-r from-gray-700 to-gray-600 animate-pulse"
              />
            ))}
          </div>
        ) : (
          <>
            {userVideos.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 mb-10">
                <Play className="w-16 h-16 text-gray-500 mb-4 opacity-50" />
                <p className="text-gray-400 text-lg">No videos generated yet</p>
                <p className="text-gray-500 text-sm mt-2">Start creating amazing videos with AI!</p>
              </div>
            ) : (
              <>
                {/* videos grid  */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
                  {userVideos.slice(0, displayUserCount).map((vid, i) => (
                    <motion.div
                      key={vid._id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-lg cursor-pointer group"
                      onClick={() => handleVideoClick(vid)}
                    >
                      <video
                        src={vid.videoUrl}
                        className="h-40 md:h-52 w-full object-cover"
                        muted
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Play className="w-12 h-12 text-white" fill="white" />
                      </div>
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-0 translate-y-3 hover:opacity-100 hover:translate-y-0 transition-all duration-300 ease-out flex items-end p-3 text-sm font-medium line-clamp-1">
                        <p className="line-clamp-1">{vid.prompt}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* load more button  */}
                {userVideos.length > displayUserCount && (
                  <div className="flex justify-center mb-10">
                    <motion.button
                      onClick={loadMoreUserVideos}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 rounded-xl bg-linear-to-r from-blue-500 via-purple-500 to-indigo-600 transition text-sm font-medium"
                    >
                      Load More
                    </motion.button>
                  </div>
                )}
              </>
            )}
          </>
        )}

        <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-4 sm:mb-6 text-white">Default Videos preview</h3>
        {loadingVideos ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-40 md:h-52 rounded-2xl bg-linear-to-r from-gray-700 to-gray-600 animate-pulse"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {videos.map((vid, i) => (
              <motion.div
                key={vid._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-lg cursor-pointer group"
                onClick={() => handleVideoClick(vid)}
              >
                <video
                  src={vid.videoUrl}
                  className="h-40 md:h-52 w-full object-cover"
                  muted
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Play className="w-12 h-12 text-white" fill="white" />
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-0 translate-y-3 hover:opacity-100 hover:translate-y-0 transition-all duration-300 ease-out flex items-end p-3 text-sm font-medium line-clamp-1">
                  <p className="line-clamp-1">{vid.prompt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* video popup  */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            onClick={() => setSelectedVideo(null)}
            className="fixed inset-0 z-49 flex items-center justify-center backdrop-blur-sm "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="max-w-130 max-h-130 rounded-2xl bg-[radial-gradient(circle_at_top_left,#160027,#00232d)] border-white/20 shadow-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            >
              <div className="p-4 sm:p-6 flex flex-col gap-4 h-full w-full">

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-white">Video Preview</h4>
                    <p className="text-sm text-slate-400 line-clamp-2 mt-1">{selectedVideo.prompt}</p>
                  </div>
                  <button
                    onClick={handleClosePopup}
                    className="text-sm p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                  >
                    <X className="size-5 text-white" />
                  </button>
                </div>

                <div className="relative group flex-1 w-full max-h-90 rounded-xl overflow-hidden border border-white/10">
                  <video
                    src={selectedVideo.videoUrl}
                    className="w-full h-full object-cover aspect-video"
                    controls
                    autoPlay
                  />

                  <div className="absolute top-3 right-3 flex gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={handleCopyLink}
                      className="bg-black/60 hover:bg-black/80 backdrop-blur-sm p-2 rounded-full transition"
                      title="Copy Prompt"
                    >
                      <Copy size={18} className="text-white" />
                    </button>
                    <button
                      onClick={handleDownload}
                      className="bg-black/60 hover:bg-black/80 backdrop-blur-sm p-2 rounded-full transition"
                      title="Download Video"
                    >
                      <Download size={18} className="text-white" />
                    </button>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black via-black/80 to-transparent p-4 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <p className="text-white text-sm sm:text-base line-clamp-4">
                      {selectedVideo.prompt}
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  )
}

export default RecentVideos;
