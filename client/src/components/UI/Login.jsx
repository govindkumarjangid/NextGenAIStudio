import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const Login = ({ showLogin, setShowLogin }) => {

  const [state, setState] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Submit (Dummy)
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${state === "login" ? "Logging In" : "Signing Up"} Successfully!`);
    setShowLogin(false);
  };

  return (
    <AnimatePresence>
      {showLogin && (
        <motion.div
          onClick={() => setShowLogin(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-999 flex items-center justify-center 
           backdrop-blur-xl px-4"
        >
          {/* Modal Box */}
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
            className="w-full max-w-sm rounded-2xl py-8 px-6 
            border border-white/15 bg-white/5 backdrop-blur-2xl 
            shadow-xl shadow-purple-500/20 relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowLogin(false)}
              className="absolute top-2 right-2 text-gray-300 hover:text-white cursor-pointer border border-gray-700 rounded-full p-1"
            >
              <X size={25} />
            </button>

            {/* Heading */}
            <h2 className="text-3xl font-semibold text-center text-white">
              {state === "login" ? "Welcome Back" : "Create Account"}
            </h2>

            <p className="text-gray-400 text-center mt-2 text-sm">
              {state === "login"
                ? "Login to access NextGen AI Studio"
                : "Sign up to start your AI journey"}
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">

              {/* Name Field (Only Signup) */}
              {state === "signup" && (
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-5 py-3 rounded-full bg-black/30 
                  border border-white/10 text-white placeholder-gray-400
                  focus:ring-2 focus:ring-purple-500 outline-none"
                />
              )}

              {/* Email */}
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-3 rounded-full bg-black/30 
                border border-white/10 text-white placeholder-gray-400
                focus:ring-2 focus:ring-cyan-400 outline-none"
              />

              {/* Password */}
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-5 py-3 rounded-full bg-black/30 
                border border-white/10 text-white placeholder-gray-400
                focus:ring-2 focus:ring-purple-500 outline-none"
              />

              {/* Button */}
              <button
                type="submit"
                className="w-full py-3 rounded-full font-semibold text-white
                bg-linear-to-r from-purple-500 to-cyan-400
                shadow-lg shadow-purple-500/30 hover:scale-[1.03] transition"
              >
                {state === "login" ? "Login" : "Sign Up"}
              </button>
            </form>

            {/* Toggle */}
            <p className="text-gray-400 text-sm text-center mt-6">
              {state === "login" ? (
                <>
                  Don’t have an account?{" "}
                  <span
                    onClick={() => setState("signup")}
                    className="text-cyan-400 cursor-pointer hover:underline"
                  >
                    Sign Up
                  </span>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <span
                    onClick={() => setState("login")}
                    className="text-purple-400 cursor-pointer hover:underline"
                  >
                    Login
                  </span>
                </>
              )}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Login;
