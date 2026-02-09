import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Upload, Sparkles, Copy, Check, Download, X, LoaderCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import axios from 'axios';
import { platformStyles } from '../../../assets/assets';


const getStylesForPlatform = (platform) => platformStyles[platform] || platformStyles.instagram;

const Builder = () => {

  const [uploadedImage, setUploadedImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [imageId, setImageId] = useState('');
  const [caption, setCaption] = useState('');
  const [captionEmojis, setCaptionEmojis] = useState([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [captionStyle, setCaptionStyle] = useState(getStylesForPlatform('instagram')[0].id);
  const [platform, setPlatform] = useState('instagram');
  const fileInputRef = useRef(null);

  const filteredStyles = getStylesForPlatform(platform);


 const handleImageUpload = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      setImageFile(file);
      const reader = new FileReader()
      reader.onload = (event) => {
        setUploadedImage(event.target?.result)
        setCaption('')
        setCaptionEmojis([])
      }
      reader.readAsDataURL(file)
    }
  }

  const handleImageUploadOnServer = async() => {
     try {
        if(!imageFile) {
          toast.error("Please upload an image");
          return;
        }
        setUploading(true);
        const formData = new FormData();
        formData.append('image', imageFile);

         const {data}  = await axios.post('/caption/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
         });
         if(data?.success) {
            toast.success(data.message);
            setImageUrl(data.imageUrl);
            setImageId(data.id);
         }else{
            toast.error("Failed to upload image. Please try again.")
         }
     } catch (error) {
        console.log("Error uploading image:", error);
        toast.error("Failed to upload image. Please try again.")
      } finally {
        setUploading(false);
     }
  }

  const handleGenerateCaption = async () => {
    if (!uploadedImage) return;
    if (!imageUrl) {
      toast.error('Please upload the image first.');
      return;
    }
    setLoading(true)
    try {
        const {data} = await axios.post('/caption/generate-caption', {
            imageUrl,
            id: imageId,
            style: captionStyle,
            platform,
        });
        if(data?.success) {
            setCaption(data.caption);
          setCaptionEmojis(Array.isArray(data?.output?.emojis) ? data.output.emojis : []);
        } else {
            toast.error("Failed to generate caption. Please try again.");
        }
    }catch (error) {
      console.error("Caption Generation Error:", error)
      toast.error("Failed to generate caption. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleCopyCaption = () => {
    navigator.clipboard.writeText(caption)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDownloadImage = () => {
    if (!uploadedImage) return
    const link = document.createElement('a')
    link.href = uploadedImage
    link.download = 'image-with-caption.png'
    link.click()
  }

  const handleRemoveImage = () => {
    setUploadedImage(null)
    setCaption('')
    setCaptionEmojis([])
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  return (
    <div className="min-h-screen w-full relative overflow-hidden">

      {/* Background Effects */}
      <div className="fixed top-0 left-0 w-125 h-125 bg-purple-500 opacity-20 blur-[150px] rounded-full pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-125 h-125 bg-cyan-400 opacity-20 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">
            AI Caption <span className="bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Generator</span>
          </h2>
          <p className="text-gray-400 text-lg">Upload your image and choose a style to generate the perfect caption</p>
        </motion.div>

        {/* Main Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Side - Image Upload */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div className="bg-linear-to-br from-purple-500/10 to-cyan-500/10 border-2 border-dashed border-purple-400/50 rounded-2xl p-8 min-h-96 flex flex-col items-center justify-center cursor-pointer hover:border-cyan-400/50 transition"
              onClick={() => fileInputRef.current?.click()}
            >
              {uploadedImage ? (
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src={uploadedImage}
                    alt="uploaded"
                    className="max-w-full max-h-full rounded-xl object-contain"
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleRemoveImage()
                    }}
                    className="absolute top-4 right-4 bg-red-500/80 hover:bg-red-600 p-2 rounded-full transition"
                  >
                    <X size={20} className="text-white" />
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-4">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Upload size={48} className="text-purple-400" />
                  </motion.div>
                  <div className="text-center">
                    <p className="text-white font-semibold text-lg">Drop your image here</p>
                    <p className="text-gray-400 text-sm mt-2">or click to browse</p>
                  </div>
                </div>
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>

            {uploadedImage && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <button
                  onClick={handleGenerateCaption}
                  disabled={loading || !imageUrl}
                  className="flex-1 bg-linear-to-r from-purple-500 to-cyan-400 hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <LoaderCircle size={20} className="animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles size={20} />
                      Generate Caption
                    </>
                  )}
                </button>
                <button
                  onClick={handleImageUploadOnServer}
                  disabled={uploading}
                  className="flex-1 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold py-3 rounded-xl transition flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {uploading ? (
                    <>
                      <span className="h-4 w-4 border-2 border-white/60 border-t-transparent rounded-full animate-spin" />
                      Uploading...
                    </>
                  ) : (
                    <>
                      <Upload size={20} />
                      Upload
                    </>
                  )}
                </button>
                <button
                  onClick={handleDownloadImage}
                  className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold py-3 px-6 rounded-xl transition flex items-center justify-center gap-2"
                >
                  <Download size={20} />
                </button>
              </motion.div>
            )}

          </motion.div>

          {/* Right Side - Caption Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {/* Style Selection */}
            <div className="flex flex-col gap-3">
              <label className="text-white font-semibold">Platform</label>
              <div className="grid grid-cols-2 gap-3">
                {["instagram", "facebook", "twitter", "youtube"].map((item) => (
                  <motion.button
                    key={item}
                    onClick={() => {
                      setPlatform(item)
                      const nextStyles = getStylesForPlatform(item)
                      setCaptionStyle(nextStyles[0].id)
                      setCaption('')
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`py-2 px-4 rounded-lg font-semibold transition ${
                      platform === item
                        ? 'bg-linear-to-r from-cyan-500 to-blue-400 text-white'
                        : 'bg-white/10 border border-white/30 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </motion.button>
                ))}
              </div>

              <label className="text-white font-semibold">Caption Style</label>
              <div className="grid grid-cols-2 gap-3">
                {filteredStyles.map((style) => (
                  <motion.button
                    key={style.id}
                    onClick={() => {
                      setCaptionStyle(style.id)
                      setCaption('')
                      setCaptionEmojis([])
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`py-2 px-4 rounded-lg font-semibold transition ${
                      captionStyle === style.id
                        ? `bg-linear-to-r ${style.color} text-white`
                        : 'bg-white/10 border border-white/30 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {style.label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Caption Preview */}
            <div className="flex flex-col gap-3">
              <label className="text-white font-semibold">Generated Caption</label>
              <div className="bg-linear-to-br from-white/10 to-white/5 border border-purple-400/30 rounded-2xl p-6 min-h-40 flex flex-col justify-between backdrop-blur-sm">
                {caption ? (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="text-gray-100 text-lg leading-relaxed"
                  >
                    {caption}
                  </motion.p>
                ) : (
                  <p className="text-gray-500 italic">
                    {uploadedImage
                      ? 'Click "Generate Caption" to create a caption'
                      : 'Upload an image to get started'
                    }
                  </p>
                )}

                {caption && (
                  <div className="mt-3 text-gray-200 text-lg">
                    {captionEmojis.length > 0 ? captionEmojis.join(' ') : ''}
                  </div>
                )}

                {caption && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={handleCopyCaption}
                    className="mt-4 w-full bg-linear-to-r from-purple-500 to-cyan-400 hover:opacity-90 text-white font-semibold py-2 rounded-lg transition flex items-center justify-center gap-2"
                  >
                    {copied ? (
                      <>
                        <Check size={18} />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy size={18} />
                        Copy Caption
                      </>
                    )}
                  </motion.button>
                )}
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-linear-to-r from-purple-500/20 to-cyan-500/20 border border-purple-400/30 rounded-xl p-4">
              <p className="text-gray-300 text-sm">
                💡 <span className="font-semibold">Tip:</span> Try different styles to find the perfect caption for your image. Each style offers unique formatting and tone.
              </p>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Builder;