import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Copy, Check, Download, X } from 'lucide-react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useAppContext } from '../../../context/AppContext'

const RecentCaptions = () => {

  const {user} = useAppContext();
  const [captions, setCaptions] = useState([])
  const [loading, setLoading] = useState(false)
  const [loadingMore, setLoadingMore] = useState(false)
  const [selectedCaption, setSelectedCaption] = useState(null)
  const [copied, setCopied] = useState(false)
  const [visibleCount, setVisibleCount] = useState(4)

  useEffect(() => {
    if(!user) return;
    fetchUserCaptions()
  }, [user]);

  useEffect(() => {
    setVisibleCount(4)
  }, [captions.length])

  const fetchUserCaptions = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get('/caption/user-captions');
      if (data?.success) {
        setCaptions(data.captions)
      }
    } catch (error) {
      console.error("Error fetching captions:", error)
      toast.error("Failed to load captions")
    } finally {
      setLoading(false)
    }
  }

  const handleCopyCaption = () => {
    navigator.clipboard.writeText(selectedCaption.caption)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDownloadImage = () => {
    if (!selectedCaption?.imageUrl) return
    const link = document.createElement('a')
    link.href = selectedCaption.imageUrl
    link.download = `caption-${selectedCaption._id}.webp`
    link.click()
  }

  const handleLoadMore = () => {
    if (loadingMore || visibleCount >= captions.length) return
    setLoadingMore(true)
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + 4, captions.length))
      setLoadingMore(false)
    }, 500)
  }

  const visibleCaptions = captions.slice(0, visibleCount)

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h3 className="text-3xl md:text-4xl font-semibold text-white mb-2">
          Your Recent <span className="bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Captions</span>
        </h3>
        <p className="text-gray-400">Click on any caption to view and manage it</p>
      </motion.div>

      {/* Captions Grid */}
      {loading ? (
        <div className="flex items-center justify-center min-h-96">
          <div className="h-12 w-12 border-4 border-cyan-500/50 border-t-cyan-400 rounded-full animate-spin" />
        </div>
      ) : captions.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-[#150227] border border-white/10 rounded-2xl p-12 text-center backdrop-blur-xl"
        >
          <p className="text-gray-400 text-lg">No captions yet. Upload an image and generate your first caption!</p>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {visibleCaptions.map((cap, index) => (
            <motion.div
              key={cap._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedCaption(cap)}
              className="group cursor-pointer w-full h-full"
            >
              <div className="relative h-full w-full bg-[#19193D] border border-white/10 rounded-xl overflow-hidden  transition-all duration-300">
                {/* Image */}
                <div className="aspect-square overflow-hidden bg-[#19193D]">
                  <img
                    src={cap.imageUrl}
                    alt="caption"
                    className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-500"
                  />
                </div>

                {/* Overlay Area below Image */}
                <div className="p-4 border-t border-white/5 bg-[#19193D]">
                   <p className="text-gray-300 text-sm font-medium line-clamp-2 leading-relaxed">{cap.caption}</p>
                   <p className="text-cyan-400/60 text-xs mt-2 uppercase tracking-wider">{cap.platform || 'Platform'}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {captions.length > 4 && visibleCount < captions.length && (
        <div className="flex items-center justify-center mt-8">
          <button
            onClick={handleLoadMore}
            disabled={loadingMore}
            className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold py-2 px-6 rounded-xl transition flex items-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loadingMore && (
              <span className="h-4 w-4 border-2 border-white/60 border-t-transparent rounded-full animate-spin" />
            )}
            {loadingMore ? 'Loading...' : 'Load More'}
          </button>
        </div>
      )}

      {/* Caption Detail Modal */}
      <AnimatePresence>
        {selectedCaption && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCaption(null)}
              className="fixed inset-0 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-0 flex items-center justify-center z-50 p-4"
            >
              <div className="bg-[#19193D] border border-white/10 shadow-[0_0_40px_rgba(34,211,238,0.1)] rounded-2xl max-w-3xl w-full overflow-hidden relative backdrop-blur-2xl">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedCaption(null)}
                  className="absolute top-0 right-0 bg-white/10 hover:bg-white/20 border border-white/10 p-1 rounded-full transition z-20"
                >
                  <X size={20} className="text-white" />
                </button>

                {/* Image with Details layout */}
                <div className="flex flex-col md:flex-row h-full max-h-[85vh]">
                  {/* Left: Image Container */}
                  <div className="relative group w-full p-4 md:w-1/2 bg-[#19193D] border-r border-white/5">
                    <img
                      src={selectedCaption.imageUrl}
                      alt="caption"
                      className="w-full h-64 md:h-full object-contain"
                    />

                    <div className="absolute top-4 left-4 flex gap-2 z-10">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDownloadImage();
                        }}
                        className="bg-black/60 hover:bg-black/80 backdrop-blur-sm p-2.5 rounded-full transition border border-white/10"
                        title="Download Image"
                      >
                        <Download size={18} className="text-white" />
                      </button>
                    </div>
                  </div>

                  {/* Right: Info Container */}
                  <div className="w-full md:w-1/2 p-6 md:p-6 flex flex-col justify-between overflow-y-auto">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 uppercase tracking-widest">
                          {selectedCaption.platform || 'General'}
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCopyCaption();
                          }}
                          className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded-lg transition"
                          title="Copy Caption"
                        >
                          {copied ? (
                            <><Check size={16} className="text-green-400" /> <span className="text-xs text-green-400 font-medium">Copied</span></>
                          ) : (
                            <><Copy size={16} className="text-gray-300" /> <span className="text-xs text-gray-300 font-medium">Copy</span></>
                          )}
                        </button>
                      </div>

                      <div className="bg-black/20 p-4 rounded-xl border border-white/5">
                        <p className="text-gray-200 text-sm md:text-base leading-relaxed whitespace-pre-wrap">
                          {selectedCaption.caption}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-500 text-xs mt-6">
                      Created on {new Date(selectedCaption.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>

          </>
        )}
      </AnimatePresence>


    </div>
  )
}


export default RecentCaptions
