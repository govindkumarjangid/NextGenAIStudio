import Hero from '../../components/features/imagegeration/Hero.jsx';
import Features from '../../components/features/imagegeration/Features.jsx';
import Builder from '../../components/features/imagegeration/Builder.jsx';
import RecentImages from '../../components/features/imagegeration/RecentImages.jsx';
import { useRef } from 'react';



const ImageStudio = () => {
  const builderRef = useRef(null);

  return (
    <div className="relative text-white overflow-hidden min-h-screen">
      <div className="relative z-20 px-4 md:px-10 py-6">
        <Hero builderRef={builderRef} />
        <Features />
        <Builder ref={builderRef} />
        <RecentImages />
      </div>

    </div>
  )
}

export default ImageStudio;