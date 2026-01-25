import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, Home, Folder, Sparkles, Settings } from "lucide-react";

const VideoStdio = () => {
  const [prompt, setPrompt] = useState("");
  const [progress, setProgress] = useState(45);


  const creations = [
    { title: "Neon City", time: "0:15", img: "https://picsum.photos/400/250?random=1" },
    { title: "Space Travel", time: "0:15", img: "https://picsum.photos/400/250?random=2" },
    { title: "Ocean Waves", time: "0:15", img: "https://picsum.photos/400/250?random=3" },
    { title: "Ocean Waves", time: "0:15", img: "https://picsum.photos/400/250?random=4" },
    { title: "Storm Road", time: "0:15", img: "https://picsum.photos/400/250?random=5" },
    { title: "City Lights", time: "0:15", img: "https://picsum.photos/400/250?random=6" },
  ];
  return (
    <div className="min-h-screen flex bg-linear-to-br from-slate-950 via-slate-900 to-black text-white">


      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Prompt Box */}
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl shadow-xl"
        >
          <h2 className="text-lg font-semibold mb-3">Enter Video Prompt</h2>

          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g., A futuristic city skyline at sunset, drone shot..."
            className="w-full h-24 rounded-xl bg-black/30 border border-white/10 px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
          />

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            className="mt-5 w-full py-4 rounded-full font-semibold text-lg bg-linear-to-r from-blue-500 to-purple-600 shadow-lg"
          >
            Generate Video
          </motion.button>
          {/* Progress Bar */}
          <div className="mt-5">
            <div className="flex justify-between text-sm text-gray-400 mb-1">
              <span>Generating...</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 1 }}
                className="h-2 bg-linear-to-r from-blue-500 to-purple-500"
              />
            </div>
          </div>
        </motion.div>

        {/* Recent Creations */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-10"
        >
          <h2 className="text-2xl font-bold mb-6">Recent Creations</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {creations.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-lg backdrop-blur-xl"
              >
                {/* Thumbnail */}
                <div className="relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 bg-black/50 rounded-full flex items-center justify-center">
                      <Play size={28} className="text-white" />
                    </div>
                  </div>
                  <span className="absolute bottom-2 left-2 text-xs bg-black/60 px-2 py-1 rounded-lg">
                    {item.time}
                  </span>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}

export default VideoStdio;