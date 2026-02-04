import { useState } from "react";
import { motion } from "framer-motion";
import Hero from "../../components/features/ytThumbnail/Hero";

const YTThumbnail = () => {

  const [title, setTitle] = useState("INSANE AI TOOLS! Must Try");
  const [style, setStyle] = useState("Gaming (High Energy)");
  const [theme, setTheme] = useState("Abstract Tech");
  const [textColor, setTextColor] = useState("#000000");
  const [accentColor, setAccentColor] = useState("#0FFFFFF");

  return (
    <>
    <Hero />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-800 text-white flex flex-col items-center px-6 py-10">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-10"
      >
        YouTube Thumbnail Generator
      </motion.h1>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl">
        {/* Left Panel */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-white/10"
        >
          <h2 className="text-2xl font-semibold mb-6">Customize Your Thumbnail</h2>

          {/* Video Title */}
          <div className="mb-5">
            <label className="block mb-2 text-sm text-gray-300">Video Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-lg bg-black/30 border border-white/10 px-4 py-3 focus:ring-2 focus:ring-cyan-500 outline-none"
            />
          </div>

          {/* Style */}
          <div className="mb-5">
            <label className="block mb-2 text-sm text-gray-300">Style</label>
            <select
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              className="w-full rounded-lg bg-black/30 border border-white/10 px-4 py-3"
            >
              <option>Gaming (High Energy)</option>
              <option>Minimal Clean</option>
              <option>Tech Modern</option>
            </select>
          </div>

          {/* Background Theme */}
          <div className="mb-5">
            <label className="block mb-2 text-sm text-gray-300">Background Theme</label>
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="w-full rounded-lg bg-black/30 border border-white/10 px-4 py-3"
            >
              <option>Abstract Tech</option>
              <option>Neon Burst</option>
              <option>Dark Gradient</option>
            </select>
          </div>

          {/* Colors */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div>
              <label className="block mb-2 text-sm text-gray-300">Text Color</label>
              <input
                type="color"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
                className="w-full h-12 rounded-lg cursor-pointer"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm text-gray-300">Accent Color</label>
              <input
                type="color"
                value={accentColor}
                onChange={(e) => setAccentColor(e.target.value)}
                className="w-full h-12 rounded-lg cursor-pointer"
              />
            </div>
          </div>

          {/* Generate Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-lg font-semibold shadow-xl"
          >
            Generate Thumbnail
          </motion.button>
        </motion.div>

        {/* Right Preview */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-white/10 flex flex-col"
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">Live Preview</h2>

          {/* Preview Box */}
          <div className="flex-1 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="w-full max-w-lg aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/20"
              style={{ background: accentColor }}
            >
              <div className="w-full h-full flex flex-col justify-center items-center bg-gradient-to-br from-purple-700 via-blue-600 to-cyan-500">
                <h1
                  style={{ color: textColor }}
                  className="text-4xl md:text-5xl font-extrabold drop-shadow-lg text-center"
                >
                  {title.split("!")[0]}!
                </h1>
                <p className="text-yellow-300 font-bold text-2xl mt-3">
                  MUST TRY
                </p>
              </div>
            </motion.div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 justify-center mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 rounded-lg bg-blue-600 shadow-md"
            >
              Download
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 rounded-lg bg-gray-700 shadow-md"
            >
              Save Template
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
    </>

  );
}

export default YTThumbnail;