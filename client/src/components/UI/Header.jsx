import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navLinks } from "../../assets/assets";
import { motion, AnimatePresence } from "motion/react";

const Navbar = ({ setShowLogin }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
      className="sticky top-0 z-50 w-full backdrop-blur-sm">

      <div className="relative max-w-350 mx-auto px-4 md:px-16 lg:px-24 xl:px-32">
        <div className="flex justify-between items-center h-18">

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
                to={{pathname: link.path, scrollToTop: 0}}
                className={`transition hover:text-white ${isActive(link.path)
                  ? "text-white"
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
              className="px-6 py-2 rounded-full text-white
              bg-linear-to-r from-purple-500 to-cyan-400
              hover:scale-105 transition-transform active:scale-99 "
            >
              Get Started
            </Link>

            {/* Login Button */}
            <Link
              onClick={() => setShowLogin(true)}
              className="px-6 py-2 rounded-full border border-purple-400/60 text-white hover:bg-purple-500/20 transition-transform active:scale-99 cursor-pointer"
            >
              Log In
            </Link>
          </div>

          {/* ✅ Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-300 cursor-pointer active:scale-95 transition"
            > {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

        </div>
      </div>

      {/* ✅ Mobile Dropdown with Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className=" md:hidden absolute top-20 left-0 w-full bg-[#050818]/90 backdrop-blur-xl border-t border-white/10 z-50"
          >
            <motion.div
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.08 },
                },
              }}
              className="flex flex-col space-y-5 px-8 py-6 text-gray-300"
            >
              {/* Links */}
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    show: { opacity: 1, x: 0 },
                  }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`hover:text-white transition ${isActive(link.path) ? " text-white" : ""
                      }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              {/* Buttons */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  show: { opacity: 1, scale: 1 },
                }}
                className="flex flex-col space-y-4 pt-3"
              >
                <Link
                  to="/get-started"
                  className="text-center px-6 py-2 rounded-full text-white bg-linear-to-r from-purple-500 to-cyan-400"
                >
                  Get Started
                </Link>

                <Link
                  onClick={() => setShowLogin(true)}
                  className="text-center px-6 py-2 rounded-full border border-purple-400/60 hover:bg-purple-500/20 transition"
                >
                  Log In
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


    </motion.nav>
  );
};

export default Navbar;
