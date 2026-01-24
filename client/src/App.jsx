import { Routes, Route } from "react-router-dom";
import Navbar from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Login from "./components/UI/Login";
import NotFound from "./components/UI/NotFound";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />
      <main className="grow container mx-auto px-4 py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
