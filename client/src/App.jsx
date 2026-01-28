import { Routes, Route } from "react-router-dom";
import Navbar from "./components/UI/Header";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import Footer from "./components/UI/Footer";
import NotFound from "./components/UI/NotFound";
import ResumeBuilder from './pages/owner/ResumeBuilder'
import ResumeAnalyzer from './pages/owner/ResumeAnalyzer'
import ImageStudio from './pages/owner/ImageStudio'
import YTThumbnail from './pages/owner/YTThumbnail'
import VideoStudio from './pages/owner/VideoStdio'
import CaptionStudio from './pages/owner/CaptionStdio'
import { useState } from "react";
import Login from './components/UI/Login'
import Pricing from "./pages/Pricing";
import ScrollToTop from "./components/UI/ScrollToTop";
import Builder from "./components/features/resumeBuilder/Builder";
import ResumeLanding from "./components/features/resumeBuilder/ResumeLanding";
import Dashboard from "./components/features/resumeBuilder/Dashboard";


const App = () => {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <Login showLogin={showLogin} setShowLogin={setShowLogin} />
      <Navbar setShowLogin={setShowLogin} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume-builder" element={<ResumeBuilder />}>
          <Route index element={<ResumeLanding />} />
          <Route path="builder" element={<Dashboard />} />
          <Route path="builder/:resumeId" element={<Builder />} />
        </Route>
        <Route path="/resume-analyzer" element={<ResumeAnalyzer />} />
        <Route path="/image-stdio" element={<ImageStudio />} />
        <Route path="/thumbnail-genration" element={<YTThumbnail />} />
        <Route path="/video-stdio" element={<VideoStudio />} />
        <Route path="/caption-stdio" element={<CaptionStudio />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
