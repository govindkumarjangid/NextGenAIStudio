import Hero from '../../components/features/resumeAnalysis/Hero'

const ResumeAnalyzer = () => {
  return (
    <div className="relative text-white min-h-screen">
      <Hero />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 pb-14">
        <div className="rounded-3xl border border-white/12 bg-white/6 backdrop-blur-xl p-6 sm:p-8 text-center text-slate-200">
          Resume analyzer modules are coming next.
        </div>
      </div>
    </div>
  )
}

export default ResumeAnalyzer