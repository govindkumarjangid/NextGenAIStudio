import { useRef, useState } from 'react'
import Hero from '../../components/features/resumeAnalysis/Hero'
import ResumeAnalize from '../../components/features/resumeAnalysis/ResumeAnalize'

const ResumeAnalyzer = () => {
  const analyzeRef = useRef(null);
  const [sampleSignal, setSampleSignal] = useState(0);

  const scrollToAnalyzer = () => {
    analyzeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  const handleLoadSample = () => {
    setSampleSignal((prev) => prev + 1);
    scrollToAnalyzer();
  }

  return (
    <div className="relative text-white min-h-screen">
      <Hero onAnalyzeClick={scrollToAnalyzer} onSampleClick={handleLoadSample} />

      <div ref={analyzeRef}>
        <ResumeAnalize sampleSignal={sampleSignal} />
      </div>
    </div>
  )
}

export default ResumeAnalyzer;