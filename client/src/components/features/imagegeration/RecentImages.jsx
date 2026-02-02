import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import toast from 'react-hot-toast'
import { useAppContext } from '../../../context/AppContext'
import { Copy, Download, X } from 'lucide-react'

const RecentImages = () => {

    const { axios } = useAppContext();
    const [images, setImages] = useState([]);
    const [userImages, setUserImages] = useState([]);
    const [loadingImages, setLoadingImages] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [displayUserCount, setDisplayUserCount] = useState(4);


    const fetchUserImages = async () => {
      setLoadingImages(true);
      try {
        const {data} = await axios.get('/image/get-images');
        if(data?.success) setUserImages(data?.images);
        else toast.error("Could not fetch user images");
      } catch (error) {
        console.log(error);
        toast.error("Could not fetch user images");
      } finally {
        setLoadingImages(false);
      }
    }

    const fetchRecentImages = async () => {
      setLoadingImages(true);
      try {
        const {data} = await axios.get('/image/default-images');
        if(data?.success) console.log(data);
        if(data?.success) setImages(data?.images);
        else toast.error("Could not fetch recent images");
      } catch (error) {
        console.log(error);
        toast.error("Could not fetch recent images");
      } finally {
      setLoadingImages(false);
    }
    }

     useEffect(() => {
       const token = localStorage.getItem("token");
       if (token && !axios.defaults.headers.common["Authorization"]) {
         axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
       }
       fetchRecentImages();
       if (token) {
         fetchUserImages();
       }
     }, [axios]);


     const handleCopyLink = async () => {
       if (!selectedImage?.prompt) return;
       try {
         await navigator.clipboard.writeText(selectedImage.prompt);
         toast.success("Prompt copied!");
       } catch (error) {
         toast.error("Failed to copy prompt");
       }
     };

     const handleDownload = () => {
       if (!selectedImage?.imageUrl) return;
       const link = document.createElement('a');
       link.href = selectedImage.imageUrl;
       link.download = `ai-image-${Date.now()}.jpg`;
       link.click();
       toast.success("Image download started!");
     };

     const handleImageClick = (img) => {
       setSelectedImage(img);
     };

     const loadMoreUserImages = () => {
       setDisplayUserCount(prev => prev + 4);
     };

     const handleClosePopup = () => {
       setSelectedImage(null);
     };

  return (
    <>
     <div className="mt-8 sm:mt-12 max-w-280 mx-auto">
        <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-4 sm:mb-6">Your Recent Images</h3>
        {loadingImages ? (
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
             {/* images grid  */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
              {userImages.slice(0, displayUserCount).map((img, i) => (
                <motion.div
                  key={img._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-lg cursor-pointer"
                  onClick={() => handleImageClick(img)}
                >
                  <img
                    src={img.imageUrl}
                    alt={img.prompt}
                    className="h-40 md:h-52 w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition flex items-end p-3 text-sm font-medium line-clamp-1">
                    <p className="line-clamp-1">{img.prompt}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* load more button  */}
            {userImages.length > displayUserCount && (
              <div className="flex justify-center mb-10">
                <motion.button
                  onClick={loadMoreUserImages}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-xl bg-linear-to-r from-purple-500 via-pink-500 to-indigo-600 transition text-sm font-medium"
                >
                  Load More
                </motion.button>
              </div>
            )}

          </>
        )}

        <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-4 sm:mb-6">Default Images preview</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-lg cursor-pointer"
              onClick={() => handleImageClick(img)}
            >
              <img
                src={img.imageUrl}
                alt={img.prompt}
                className="h-40 md:h-52 w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition flex items-end p-3 text-sm font-medium line-clamp-1">
                <p className="line-clamp-1">{img.prompt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* image popup  */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
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
                    <h4 className="text-lg sm:text-xl font-semibold">Image Preview</h4>
                    <p className="text-sm text-slate-400 line-clamp-2 mt-1">{selectedImage.prompt}</p>
                  </div>
                  <button
                    onClick={handleClosePopup}
                    className="text-sm p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                  >
                    <X className="size-5" />
                  </button>
                </div>

                <div className="relative group flex-1 w-full max-h-90 rounded-xl overflow-hidden border border-white/10">
                  <img
                    src={selectedImage.imageUrl}
                    alt={selectedImage.prompt}
                    className="w-full h-full object-cover"
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
                      title="Download Image"
                    >
                      <Download size={18} className="text-white" />
                    </button>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black via-black/80 to-transparent p-4 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm sm:text-base line-clamp-4">
                      {selectedImage.prompt}
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

export default RecentImages;