import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navLinks } from "../../assets/assets";
import { motion, AnimatePresence } from "motion/react";
import { useAppContext } from "../../context/AppContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCreditsTooltip, setShowCreditsTooltip] = useState(false);
  const location = useLocation();
  const { user, setShowLogin, logout, setState } = useAppContext();

  let isActive = (path) => location.pathname === path;


  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
      className="sticky top-0 z-50 w-full backdrop-blur-sm">
      <div className="relative max-w-350 mx-auto px-4 md:px-16 lg:px-20 xl:px-22">
        <div className="flex justify-between items-center h-18">

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold bg-linear-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text flex items-center justify-center gap-2 z-100"
          >
            <img src="./logo.svg" alt="logo" className="h-10" /> Studio
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 text-gray-300 font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={{ pathname: link.path }}
                className={`transition hover:text-white ${isActive(link.path)
                  ? "text-white"
                  : "text-gray-400"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Button */}
          <div className="hidden md:flex items-center space-x-4">

            {/* Get Started */}
            <button
              type="button"
              onClick={() => {
                setState("register");
                setShowLogin(true);
              }}
              className="px-6 py-2 rounded-full text-white
              bg-linear-to-r from-purple-500 to-cyan-400
              hover:scale-105 transition-transform active:scale-99
              disabled:opacity-60 disabled:cursor-not-allowed"
            >
              Get Started
            </button>

            {/* Login/Logout Button with Tooltip */}
            <div className="relative">
              <Link
                className="px-6 py-2 rounded-full border border-purple-400/60 text-white hover:bg-purple-500/20 transition-transform active:scale-99 cursor-pointer group text-center"
                onMouseEnter={() => user && setShowCreditsTooltip(true)}
                onMouseLeave={() => setShowCreditsTooltip(false)}
                onClick={async () => {
                  if (user) {
                    await logout();
                  } else {
                    setState("login");
                    setShowLogin(true);
                  }
                }}
              >
                {user ? "Logout" : "Login"}
              </Link>

              {/* Credits Tooltip */}
              <AnimatePresence>
                {showCreditsTooltip && user && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-4 bg-linear-to-br from-purple-600 to-cyan-600 text-white px-2 py-1 rounded-lg text-[11px] font-medium whitespace-nowrap shadow-lg border border-purple-400/50 pointer-events-none"
                  >
                    <div className="flex items-center gap-1">
                      <span>💳 Credits:</span>
                      <span className="text-cyan-200">{user?.credits || 0}</span>
                    </div>
                    {/* Arrow */}
                    <div className="absolute -top-1 right-4 w-1.5 h-1.5 bg-linear-to-br from-purple-600 to-cyan-600 rotate-45"></div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden z-100">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-300 cursor-pointer active:scale-95 transition"
            > {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

        </div>
      </div>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{  scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{  scaleX: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="fixed inset-0 z-99 w-full h-screen flex flex-col justify-center items-center text-center bg-[radial-gradient(circle_at_top_left,#160027,#00232d)]"
            >
              {/* Links */}
              <div className="flex flex-col space-y-8 text-2xl font-medium text-white ">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`hover:scale-105 transition-transform duration-300 ${isActive(link.path) ? "text-cyan-300" : ""
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-col space-y-5 mt-12 w-[80%] max-w-sm">
                <button
                  type="button"
                  onClick={() => {
                    setState("register");
                    setShowLogin(true);
                  }}
                  className="w-full py-3 rounded-full bg-linear-to-r from-purple-500 to-cyan-400 text-white font-semibold
                    hover:opacity-90 transition"
                >
                  Get Started
                </button>

                <button
                  type="button"
                  onClick={async () => {
                    if (user) await logout();
                    else {
                      setState("login");
                      setShowLogin(true);
                    }
                  }}
                  className="w-full py-3 rounded-full border border-purple-400/60 text-white hover:bg-purple-500/20 transition"
                >
                  {user ? "Logout" : "Login"}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>



    </motion.nav>
  );
};

export default Navbar;
