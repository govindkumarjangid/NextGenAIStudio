import { Routes, Route } from "react-router-dom";
import Navbar from "./components/UI/Header";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Testimonials from "./pages/Testimonials";
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


const App = () => {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <Login showLogin={showLogin} setShowLogin={setShowLogin} />
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume-builder" element={<ResumeBuilder />} />
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
