import { useState } from 'react'
import { motion } from 'motion/react'
import { Download, Copy, Sparkles, Loader } from 'lucide-react'
import axios from 'axios';
import toast from 'react-hot-toast';

const Builder = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [imageError, setImageError] = useState(false);
  const imageLoadTimeoutRef = useState(null)[1];

const handleGenerate = async () => {
    try {
    if (!prompt.trim()) {
      toast.error("Please enter a prompt");
      return;
    }

    setIsGenerating(true);
    setGeneratedImage('');
    setImageError(false);
    console.log("Generating with prompt:", prompt);

    // Create axios instance with timeout
    const config = {
      timeout: 30000, // 30 second timeout
      headers: {
        'Content-Type': 'application/json',
      }
    };

    console.log("Sending request to /image/generate-image");
    const {data} = await axios.post('/image/generate-image', { prompt }, config);
    console.log("Response received:", data);

     if (data.success) {
      setGeneratedImage(data.imageUrl);
      console.log("Image URL set:", data.imageUrl)
      toast.success("Image generated successfully!");
      setIsGenerating(false);
     } else {
      throw new Error(data.message || "Failed to generate image");
     }
    } catch (error) {
      console.error("Full error object:", error);
      console.error("Error response:", error.response);

      if (error.response?.status === 401) {
        toast.error("Please login first!");
      } else if (error.code === 'ECONNABORTED') {
        toast.error("Request timeout. Please try again.");
      } else if (error.response?.status === 500) {
        toast.error("Server error. Please try again later.");
      } else {
        toast.error(error.response?.data?.message || error.message || "Failed to generate image");
      }

      setIsGenerating(false);
      setImageError(true);
    }
  };

  const handleImageLoad = () => {
    setIsGenerating(false);
    setImageError(false);
  };

  const handleImageError = () => {
    // Retry with cache busting parameter
    const urlWithRetry = `${generatedImage}${generatedImage.includes('?') ? '&' : '?'}retry=${Date.now()}`;
    setGeneratedImage(urlWithRetry);
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
          className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 sm:p-6 lg:p-8 xl:p-12 shadow-2xl border border-white/10 flex flex-col min-h-87.5 lg:min-h-0"
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
                className="w-full h-full rounded-xl p-4 py-4 bg-black/20
              border border-cyan-400/40 text-white placeholder-gray-400
              focus:outline-none focus:border-cyan-400/60
              focus:ring-2 focus:ring-cyan-400/30 transition resize-none"
              />
            </div>

            <motion.button
              onClick={handleGenerate}
              disabled={isGenerating || !prompt.trim()}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-linear-to-r from-purple-500 via-pink-500 to-indigo-600 px-6 py-4 rounded-xl font-semibold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {isGenerating ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader className="animate-spin " size={20}/>
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
              {imageError ? (
                <div className="absolute inset-0 flex items-center justify-center text-slate-500">
                  <div className="text-center">
                    <Sparkles className="mx-auto mb-3 opacity-50 text-red-400" size={48} />
                    <p className="text-red-400">Failed to load image</p>
                    <p className="text-sm text-slate-400 mt-2">Please try again</p>
                  </div>
                </div>
              ) : generatedImage ? (
                <img
                  key={generatedImage}
                  src={generatedImage}
                  alt="Generated AI"
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                  className="w-full h-full object-cover"
                  crossOrigin="anonymous"
                />
              ) : isGenerating ? (
                <div className="absolute inset-0 flex items-center justify-center text-slate-500">
                  <div className="text-center">
                    <Loader className="mx-auto mb-3 animate-spin" size={48} />
                    <p>Generating...</p>
                  </div>
                </div>
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

export default Builder;