import Hero from '../../components/features/imagegeration/Hero.jsx';
import Features from '../../components/features/imagegeration/Features.jsx';
import Builder from '../../components/features/imagegeration/Builder.jsx';
import RecentImages from '../../components/features/imagegeration/RecentImages.jsx';



const ImageStudio = () => {
  return (
    <div className="relative text-white overflow-hidden min-h-screen">

      <div className="fixed inset-0 opacity-60 pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 2px, transparent 2px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="fixed left-20 top-30 w-72 h-72 bg-linear-to-tl from-purple-500 to-purple-400 rounded-full blur-3xl animate-float pointer-events-none" style={{opacity: 0.2}} />

      <div className="fixed -bottom-10 right-20 w-72 h-72 bg-linear-to-bl from-blue-500 to-cyan-400 rounded-full blur-3xl pointer-events-none animate-float" style={{opacity: 0.2, animationDelay: '2s'}} />

      <div className="relative z-20 px-4 md:px-10 py-6">
        <Hero />
        <Features />
        <Builder />
        <RecentImages />
      </div>

    </div>
  )
}

export default ImageStudio;