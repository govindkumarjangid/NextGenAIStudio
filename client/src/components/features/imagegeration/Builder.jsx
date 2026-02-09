import { useState, forwardRef } from "react";
import { motion } from "motion/react";
import { Sparkles, Download, Copy, LoaderCircle } from "lucide-react";
import { useAppContext } from "../../../context/AppContext";
import toast from "react-hot-toast";

const Builder = forwardRef((props, ref) => {
  const { axios } = useAppContext();
  const { onImageGenerated } = props || {};

  const [prompt, setPrompt] = useState("");
  const [generatedImage, setGeneratedImage] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [imageError, setImageError] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  };


  const handleGenerate = async () => {
    if (!prompt.trim()) return toast.error("Please enter a prompt!");
    try {
      setIsGenerating(true);
      setImageError(false);
      setGeneratedImage("");
      const { data } = await axios.post(
        "/image/generate-image",
        { prompt },
        {
          timeout: 30000,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (data.success && data.imageUrl) {
        setGeneratedImage(data.imageUrl + "?t=" + Date.now());
        toast.success("Image generated successfully!");
        setPrompt("");
        if (onImageGenerated) {
          onImageGenerated();
        }
      } else {
        toast.error("No image URL returned!");
        setIsGenerating(false);
      }
    } catch (error) {
      console.log("Error:", error);
      toast.error(error.response?.data?.message || "Image generation failed!");
      setIsGenerating(false);
    }
  };


  const handleImageLoad = () => {
    setIsGenerating(false);
    setImageError(false);
  };


  const handleImageError = () => {
    setIsGenerating(false);
    setImageError(true);
    toast.error("Image failed to load!");
  };


  const handleDownload = () => {
    if (!generatedImage) return;
    const link = document.createElement("a");
    link.href = generatedImage;
    link.download = "ai-generated-image.jpg";
    link.click();
  };


  const handleCopyLink = () => {
    if (!generatedImage) return;
    navigator.clipboard.writeText(generatedImage);
    toast.success("Image link copied!");
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-280 mx-auto min-h-120"
    >

      {/* Prompt Input and Generate Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-[radial-gradient(circle_at_top_left,#160027,#00232d)] backdrop-blur-xl rounded-xl p-4 md:p-6 shadow-2xl border border-white/10 flex flex-col h-90 md:h-120"
      >
        <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
          <Sparkles className="text-purple-400" size={26} />
          <h2 className="text-2xl font-bold">AI Image Studio</h2>
        </motion.div>

        <motion.label variants={itemVariants} className="text-sm text-slate-300 mb-2">
          Describe your image
        </motion.label>

        <motion.textarea
          variants={itemVariants}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="A futuristic cyberpunk city at sunset..."
          className="w-full h-40 flex-1 rounded-xl p-4 bg-black/20
              border border-purple-400/40 text-white placeholder:line-clamp-1 placeholder-gray-400 focus:outline-none focus:border-purple-400/60
              focus:ring-2 focus:ring-purple-400/30 transition resize-none"
        />

        <motion.button
          variants={itemVariants}
          onClick={handleGenerate}
          disabled={isGenerating || !prompt.trim()}
          aria-disabled={isGenerating || !prompt.trim()}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full mt-5 bg-linear-to-r from-purple-500 via-pink-500 to-indigo-600 py-4 rounded-xl font-semibold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isGenerating ? (
            <span className="flex items-center justify-center gap-2">
              <LoaderCircle  className="animate-spin" size={20} />
              Generating...
            </span>
          ) : (
            "Generate Image"
          )}
        </motion.button>

      </motion.div>

     {/* right div  */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-[radial-gradient(circle_at_top_left,#160027,#00232d)] backdrop-blur-xl rounded-xl p-4 md:p-6 shadow-2xl border border-white/10 flex flex-col h-90 md:h-120"
      >
        <motion.h3 variants={itemVariants} className="text-xl font-semibold mb-5">
          Generated Image Preview
        </motion.h3>

        {/* Image Box */}
        <motion.div
          variants={itemVariants}
          className="relative flex-1 rounded-xl overflow-hidden bg-black/40 border border-white/10 flex items-center justify-center"
        >

          {/* Image */}
          {generatedImage && !imageError && (
            <motion.img
              src={generatedImage}
              alt="Generated AI"
              onLoad={handleImageLoad}
              onError={handleImageError}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              className="w-full h-full object-cover"
            />
          )}

          {/* Loader Overlay */}
          {isGenerating && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 flex items-center justify-center bg-black/70"
            >
              <div className="text-center text-white">
                <LoaderCircle className="mx-auto mb-3 animate-spin" size={40} />
                <p className="text-lg font-medium animate-pulse">Generating Your Image...</p>
              </div>
            </motion.div>
          )}

          {/* Placeholder */}
          {!generatedImage && !isGenerating && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-slate-400 p-2"
            >
              <Sparkles className="mx-auto mb-3 opacity-50" size={48} />
              <p>Your generated image will appear here</p>
            </motion.div>
          )}

          {/* Error */}
          {imageError && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-red-400"
            >
              <p>Failed to load image</p>
              <p className="text-sm text-slate-400 mt-2">
                Please try again
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Action Buttons */}
        {generatedImage && !imageError && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-3 mt-4"
          >
            <motion.button
              onClick={handleDownload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 py-3 rounded-xl font-medium"
            >
              <Download size={18} />
              Download
            </motion.button>

            <motion.button
              onClick={handleCopyLink}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium"
            >
              <Copy size={18} />
              Copy Link
            </motion.button>
          </motion.div>
        )}

      </motion.div>

    </motion.div>
  );
});

Builder.displayName = "Builder";

export default Builder;
