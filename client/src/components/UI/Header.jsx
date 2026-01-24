import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navLinks } from "../../assets/assets"

const Navbar = ({ setShowLogin }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-700 backdrop-blur-sm">

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">

          {/* ✅ Logo */}
          <Link
            to="/"
            className="text-2xl font-bold bg-linear-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text flex items-center justify-center gap-2"
          >
            <img src="./logo.svg" alt="logo" className="h-10" /> Studio
          </Link>

          {/* ✅ Desktop Menu */}
          <div className="hidden md:flex space-x-10 text-gray-300 font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`transition hover:text-white ${isActive(link.path)
                  ? "text-white font-semibold"
                  : "text-gray-400"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* ✅ Desktop Button */}
          <div className="hidden md:flex items-center space-x-4">

            {/* Get Started */}
            <Link
              to="/get-started"
              className="px-6 py-2 rounded-full font-semibold text-white 
              bg-linear-to-r from-purple-500 to-cyan-400 
              shadow-lg shadow-purple-500/30 hover:scale-105 transition"
            >
              Get Started
            </Link>

            {/* Login Button */}
            <Link
              onClick={() => setShowLogin(true)}
              className="px-6 py-2 rounded-full border border-purple-400/60 
              text-white hover:bg-purple-500/20 transition"
            >
              Log In
            </Link>
          </div>

          {/* ✅ Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-300 hover:bg-white/10"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#050818]/90 backdrop-blur-xl border-t border-white/10">
          <div className="flex flex-col space-y-5 px-8 py-6 text-gray-300">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`hover:text-white transition ${isActive(link.path) ? "font-semibold text-white" : ""
                  }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Buttons */}
            <Link
              to="/get-started"
              className="text-center px-6 py-2 rounded-full font-semibold text-white 
              bg-linear-to-r from-purple-500 to-cyan-400"
            >
              Get Started
            </Link>

            <Link
              onClick={() => setShowLogin(true)}
              className="text-center px-6 py-2 rounded-full border border-purple-400/60 
              hover:bg-purple-500/20 transition"
            >
              Log In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
