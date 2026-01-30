import React, { useState } from 'react'
import { motion } from 'motion/react'
import { Download, Copy, Sparkles } from 'lucide-react'

const Builder = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState("https://images.unsplash.com/photo-1517694712202-14dd9538aa97");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setGeneratedImage("https://images.unsplash.com/photo-1517694712202-14dd9538aa97");
      setIsGenerating(false);
    }, 2000);
  };

  const handleDownload = () => {
    if (!generatedImage) return;
    const link = document.createElement('a');
    link.href = generatedImage;
    link.download = 'ai-generated-image.jpg';
    link.click();
  };

  const handleCopyLink = () => {
    if (!generatedImage) return;
    navigator.clipboard.writeText(generatedImage);
    alert('Image link copied to clipboard!');
  };

  return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 max-w-280 mx-auto min-h-100 lg:min-h-120 ">

        {/* Prompt Input Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 sm:p-6 lg:p-8 xl:p-12 shadow-2xl border border-white/10 flex flex-col min-h-[350px] lg:min-h-0"
        >
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <Sparkles className="text-purple-400" size={24} />
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">AI Image Studio</h2>
          </div>

          <div className="space-y-4 flex-1 flex flex-col">
            <div className="flex-1 flex flex-col">
              <label className="text-sm text-slate-300 mb-2 block">
                Describe your image
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="A futuristic cyberpunk city at sunset with neon lights..."
                className="w-full flex-1 bg-black/40 resize-none rounded-xl p-4 outline-none focus:ring-2 focus:ring-purple-500 transition border border-white/10 text-white placeholder-slate-500"
              />
            </div>

            <motion.button
              onClick={handleGenerate}
              disabled={isGenerating || !prompt.trim()}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-600 px-6 py-4 rounded-xl font-semibold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {isGenerating ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                  Generating...
                </span>
              ) : (
                'Generate Image'
              )}
            </motion.button>
          </div>
        </motion.div>

        {/* Image Preview Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 sm:p-6 lg:p-8 xl:p-12 shadow-2xl border border-white/10 flex flex-col min-h-125 lg:min-h-0"
        >
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 sm:mb-6">Preview</h3>

          <div className="space-y-4 flex-1 flex flex-col">
            {/* Image Display Area */}
            <div className="relative flex-1 rounded-xl overflow-hidden bg-black/40 border border-white/10">
              {generatedImage ? (
                <img
                  src={generatedImage}
                  alt="Generated AI"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-slate-500">
                  <div className="text-center">
                    <Sparkles className="mx-auto mb-3 opacity-50" size={48} />
                    <p>Your generated image will appear here</p>
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            {generatedImage && (
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.button
                  onClick={handleDownload}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2.5 sm:py-3 rounded-xl font-medium transition-colors text-sm sm:text-base"
                >
                  <Download size={18} />
                  Download
                </motion.button>

                <motion.button
                  onClick={handleCopyLink}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2.5 sm:py-3 rounded-xl font-medium transition-colors text-sm sm:text-base"
                >
                  <Copy size={18} />
                  Copy Link
                </motion.button>
              </div>
            )}
          </div>
        </motion.div>

      </div>
  )
}

export default Builder