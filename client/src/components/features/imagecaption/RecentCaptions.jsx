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
  const [selectedCaption, setSelectedCaption] = useState(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if(!user) return;
    fetchUserCaptions()
  }, [user]);

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
          <div className="h-12 w-12 border-4 border-purple-500/50 border-t-purple-500 rounded-full animate-spin" />
        </div>
      ) : captions.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-linear-to-br from-purple-500/10 to-cyan-500/10 border border-purple-400/30 rounded-2xl p-12 text-center"
        >
          <p className="text-gray-400 text-lg">No captions yet. Upload an image and generate your first caption!</p>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {captions.map((cap, index) => (
            <motion.div
              key={cap._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedCaption(cap)}
              className="group cursor-pointer w-full h-full"
            >
              <div className="relative h-full w-full bg-linear-to-br from-purple-500/10 to-cyan-500/10 border border-purple-400/30 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition">
                {/* Image */}
                <div className="aspect-square overflow-hidden bg-black">
                  <img
                    src={cap.imageUrl}
                    alt="caption"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-end justify-center">
                  <div className="text-left p-2 ">
                    <p className="text-white text-sm font-semibold line-clamp-1">{cap.caption}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
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
              <div className="bg-linear-to-br from-slate-900 to-slate-800 border border-purple-400/30 rounded-2xl sm:rounded-3xl max-w-3xl w-full overflow-hidden relative">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedCaption(null)}
                  className="absolute top-2 right-3 sm:top-2 sm:right-6 bg-red-500/80 hover:bg-red-600 p-1.5 sm:p-2 rounded-full transition z-20"
                >
                  <X size={23} className="sm:w-8 sm:h-8 text-white" />
                </button>

                {/* Image with Overlay */}
                <div className="relative group">
                  <img
                    src={selectedCaption.imageUrl}
                    alt="caption"
                    className="w-full h-[50vh] sm:h-[70vh] object-cover"
                  />

                  <div className="absolute top-2 right-14 sm:right-20 flex gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopyCaption();
                      }}
                      className="bg-black/60 hover:bg-black/80 backdrop-blur-sm p-2 sm:p-3 rounded-full transition"
                      title="Copy Caption"
                    >
                      {copied ? (
                        <Check size={20} className="text-green-400 sm:w-6 sm:h-6" />
                      ) : (
                        <Copy size={20} className="text-white sm:w-6 sm:h-6" />
                      )}
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDownloadImage();
                      }}
                      className="bg-black/60 hover:bg-black/80 backdrop-blur-sm p-2 sm:p-3 rounded-full transition"
                      title="Download Image"
                    >
                      <Download size={20} className="text-white sm:w-6 sm:h-6" />
                    </button>
                  </div>


                  <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black via-black/80 to-transparent p-4 sm:p-6 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm sm:text-base lg:text-lg leading-relaxed">
                      {selectedCaption.caption}
                    </p>
                    <p className="text-gray-400 text-xs sm:text-sm mt-3">
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
