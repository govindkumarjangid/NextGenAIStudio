import Hero from '../../components/features/imagegeration/Hero.jsx';
import Features from '../../components/features/imagegeration/Features.jsx';
import Builder from '../../components/features/imagegeration/Builder.jsx';
import RecentImages from '../../components/features/imagegeration/RecentImages.jsx';



const ImageStudio = () => {
  return (
    <div className="relative text-white px-4 md:px-10 py-6 overflow-hidden min-h-screen">

      {/* 🔥 Animated Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-900 via-indigo-900 to-pink-800 animate-gradient pointer-events-none" />

      {/* 🌌 Floating Blur Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl animate-float pointer-events-none" />

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-floatSlow pointer-events-none" />

      {/* ⭐ Particles Effect */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,white_2px,transparent_1px)] bg-size-[40px_40px] pointer-events-none" />

      <div className="relative z-10">
        <Hero />
        <Features />
        <Builder />
        <RecentImages />
      </div>

    </div>
  )
}

export default ImageStudio;