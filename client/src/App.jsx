import { useAppContext } from "./context/AppContext";
import { Routes, Route, useLocation } from "react-router-dom";
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
import PreviewPage from "./components/features/resumeBuilder/templates/PreviewPage";

const App = () => {

  const { showLogin } = useAppContext();
  const location = useLocation();
  const isViewRoute = location.pathname.startsWith('/view/');

  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={10}
        toastOptions={{
          duration: 3000,
          style: {
            background: "linear-gradient(135deg, rgba(22,0,39,0.96), rgba(0,35,45,0.96))",
            color: "#f8fafc",
            border: "1px solid rgba(255,255,255,0.14)",
            borderRadius: "14px",
            backdropFilter: "blur(10px)",
            padding: "12px 14px",
            fontSize: "14px",
            fontWeight: 500,
          },
          success: {
            iconTheme: {
              primary: "#22c55e",
              secondary: "#052e16",
            },
            style: {
              border: "1px solid rgba(34,197,94,0.7)",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#450a0a",
            },
            style: {
              border: "1px solid rgba(239,68,68,0.7)",
            },
          },
        }}
      />
      {showLogin && <Login />}
      {!isViewRoute && <Navbar />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/view/:resumeId" element={<PreviewPage />} />
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
      {!isViewRoute && <Footer />}
    </>
  );
};

export default App;
