import { useEffect, useState } from 'react'
import { recentImages } from '../../../assets/assets';
import { motion } from 'motion/react'

const RecentImages = () => {

    const [images, setImages] = useState([]);

    const fetchRecentImages = async () => {
        setImages(recentImages);
    }

    useEffect(() => {
        fetchRecentImages();
    }, [])

  return (
     <div className="mt-8 sm:mt-12 max-w-280 mx-auto">
        <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-4 sm:mb-6">Recent Creations</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {images.map((img, i) => (
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
              <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition flex items-end p-3 text-sm font-medium">
                {img.title}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
  )
}

export default RecentImages;