import React from 'react'
import {motion} from 'motion/react'
const recentImages = [
{ id: 1, src: "https://images.unsplash.com/photo-1542751110-97427bbecf20", title: "AI Robot" },
{ id: 2, src: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa", title: "Alien Planet" },
{ id: 3, src: "https://images.unsplash.com/photo-1557683316-973673baf926", title: "Abstract AI" },
{ id: 4, src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97", title: "Dark Creature" },
];
const ImageStudio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#05070d] via-[#0b1220] to-[#02040a] text-white px-4 md:px-10 py-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center mb-10"
      >
        <h1 className="text-xl md:text-2xl font-semibold tracking-wide">NextGen AI Studio</h1>
        <div className="w-9 h-9 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center font-bold">
          U
        </div>
      </motion.div>


      {/* Main Input Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 md:p-8 shadow-2xl border border-white/10"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-6">AI Image Studio</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <textarea
            placeholder="Describe your image, e.g., A futuristic cyberpunk city at sunset..."
            className="flex-1 bg-black/40 resize-none rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500 transition"
            rows={3}
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-3 rounded-xl font-semibold shadow-lg"
          >
            Generate Image
          </motion.button>
        </div>
      </motion.div>


      {/* Recent Creations */}
      <div className="mt-12">
        <h3 className="text-lg md:text-xl font-semibold mb-6">Recent Creations</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {recentImages.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-lg"
            >
              <img
                src={img.src}
                alt={img.title}
                className="h-40 md:h-52 w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition flex items-end p-3 text-sm font-medium">
                {img.title}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ImageStudio;