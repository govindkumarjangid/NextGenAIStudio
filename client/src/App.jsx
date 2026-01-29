import { useAppContext } from "./context/AppContext";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/UI/Header";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import Footer from "./components/UI/Footer";
import NotFound from "./components/UI/NotFound";
import ResumeBuilder from './pages/owner/ResumeBuilder';
import ResumeAnalyzer from './pages/owner/ResumeAnalyzer';
import ImageStudio from './pages/owner/ImageStudio';
import YTThumbnail from './pages/owner/YTThumbnail';
import VideoStudio from './pages/owner/VideoStdio';
import CaptionStudio from './pages/owner/CaptionStdio';
import Login from './components/UI/Login';
import Pricing from "./pages/Pricing";
import ScrollToTop from "./components/UI/ScrollToTop";
import Builder from "./components/features/resumeBuilder/Builder";
import ResumeLanding from "./components/features/resumeBuilder/ResumeLanding";
import Dashboard from "./components/features/resumeBuilder/Dashboard";
import ProtectRoute from "./context/ProtectRoute";

const App = () => {

  const { showLogin } = useAppContext();

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      {showLogin && <Login />}
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume-builder" element={
          <ProtectRoute>
            <ResumeBuilder />
          </ProtectRoute>}>
          <Route index element={<ResumeLanding />} />
          <Route path="builder" element={<Dashboard />} />
          <Route path="builder/:resumeId" element={<Builder />} />
        </Route>
        <Route path="/resume-analyzer" element={
          <ProtectRoute>
            <ResumeAnalyzer />
          </ProtectRoute>} />
        <Route path="/image-stdio" element={
          <ProtectRoute>
            <ImageStudio />
          </ProtectRoute>} />
        <Route path="/thumbnail-genration" element={
          <ProtectRoute>
            <YTThumbnail />
          </ProtectRoute>} />
        <Route path="/video-stdio" element={
          <ProtectRoute>
            <VideoStudio />
          </ProtectRoute>} />
        <Route path="/caption-stdio" element={
          <ProtectRoute>
            <CaptionStudio />
          </ProtectRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
