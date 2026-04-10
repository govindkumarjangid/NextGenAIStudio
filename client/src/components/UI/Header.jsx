import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navLinks } from "../../assets/assets";
import { motion, AnimatePresence } from "motion/react";
import { useAppContext } from "../../context/AppContext";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [showCreditsTooltip, setShowCreditsTooltip] = useState(false);
  const location = useLocation();
  const { user, setShowLogin, logout, setState, handleGetStarted } = useAppContext();

  let isActive = (path) => location.pathname === path;

  const handleLogout = async () => {
    if (user) await logout();
    setState("login");
    setShowLogin(true);
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
      className="sticky top-2 w-full bg-[#00232d]/70 border border-gray-700/50 rounded-full h-18 backdrop-filter backdrop-blur-lg z-99 ">

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
            {user ? (
              <>
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-900/20 text-cyan-50">
                  <span className="text-sm font-medium">Hey, {user.name?.split(' ')[0] || 'User'}</span>
                </div>
                <div className="relative">
                  <button
                    type="button"
                    className="px-6 py-2 rounded-full border border-purple-400/60 text-white hover:bg-purple-500/20 transition-transform active:scale-95 cursor-pointer group text-center"
                    onMouseEnter={() => setShowCreditsTooltip(true)}
                    onMouseLeave={() => setShowCreditsTooltip(false)}
                    onClick={handleLogout}
                  >
                    Logout
                  </button>

                  <AnimatePresence>
                    {showCreditsTooltip && (
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
                        <div className="absolute -top-1 right-4 w-1.5 h-1.5 bg-linear-to-br from-purple-600 to-cyan-600 rotate-45" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </>
            ) : (
              <>
                <button
                  type="button"
                  onClick={handleGetStarted}
                  className="px-6 py-2 rounded-full text-white bg-linear-to-r from-purple-500 to-cyan-400 transition-transform active:scale-95"
                >
                  Get Started
                </button>
                <button
                  type="button"
                  className="px-6 py-2 rounded-full border border-purple-400/60 text-white hover:bg-purple-500/20 transition-transform active:scale-95 cursor-pointer"
                  onClick={handleLogout}
                >
                  Login
                </button>
              </>
            )}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden z-100">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-300 cursor-pointer active:scale-95 transition z-100"
            > {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden absolute top-[calc(100%+0.5rem)] left-0 right-0 z-90 px-3"
          >
            <div className="bg-[#150227] border border-gray-700/80 rounded-3xl shadow-xl p-5">
              {/* Links */}
              <div className="flex flex-col space-y-4 text-base font-medium text-white">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`rounded-xl px-4 py-2 transition ${isActive(link.path)
                      ? "text-cyan-300 bg-white/8"
                      : "text-gray-200 hover:bg-white/6"
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-col space-y-3 mt-5">
                {user ? (
                  <>
                    <div className="flex items-center justify-between px-4 py-3 rounded-full border border-cyan-400/30 bg-cyan-900/20 text-cyan-50">
                      <span className="text-sm font-medium">Hey, {user.name?.split(' ')[0] || 'User'}</span>
                      <span className="text-xs font-semibold text-cyan-200">💳 {user?.credits || 0} Credits</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setIsOpen(false);
                        handleLogout();
                      }}
                      className="w-full py-3 rounded-full border border-purple-400/60 text-white hover:bg-purple-500/20 transition cursor-pointer"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => {
                        setIsOpen(false);
                        handleGetStarted();
                      }}
                      className="w-full py-3 rounded-full bg-linear-to-r from-purple-500 to-cyan-400 text-white font-semibold hover:opacity-90 transition cursor-pointer"
                    >
                      Get Started
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setIsOpen(false);
                        handleLogout();
                      }}
                      className="w-full py-3 rounded-full border border-purple-400/60 text-white hover:bg-purple-500/20 transition cursor-pointer"
                    >
                      Login
                    </button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>



    </motion.nav>
  );
};

export default Navbar;
