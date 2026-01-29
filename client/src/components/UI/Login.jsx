import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X,Loader  } from "lucide-react";
import axios from "axios";
import { useAppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Login = () => {

  const { showLogin, setShowLogin, setToken,state, setState } = useAppContext();


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();




  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const {data} = await axios.post(`/user/${state}`, {
				name,
				email,
				password,
			});
      if(data?.success){
        navigate("/");
        setToken(data.token);
        localStorage.setItem("token", data.token);
        toast.success("Login successful");
        setShowLogin(false);
      }else{
        toast.error(data?.message);
      }
    } catch (error) {
      console.error("Error during authentication:", error);
      const message = error?.response?.data?.message || error?.message || "Something went wrong";
      toast.error(message);
    }finally{
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {showLogin && (
        <motion.div
          onClick={() => setShowLogin(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-99 flex items-center justify-center backdrop-blur-xl px-4"
        >
          {/* Modal Box */}
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
            className="w-full max-w-sm rounded-2xl py-8 px-6
            border border-white/15 backdrop-blur-2xl bg-black/30
            shadow-xl relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowLogin(false)}
              className="absolute top-2 right-2 text-gray-300 hover:text-white cursor-pointer border border-gray-700 bg-white/10 rounded-full p-1"
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
                : "Register to start your AI journey"}
            </p>

            {/* Form */}
            <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
            onClick={(e) => e.stopPropagation()}
            >

              {/* Name Field (Only Register) */}
              {state === "register" && (
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-5 py-3 rounded-full bg-white/10
                  border border-white/10 text-white placeholder-gray-400
                  focus:ring-1 focus:ring-purple-500 outline-none"
                />
              )}

              {/* Email */}
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-3 rounded-full bg-white/10
                border border-white/10 text-white placeholder-gray-400
                focus:ring-1 focus:ring-cyan-400 outline-none"
              />

              {/* Password */}
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-5 py-3 rounded-full bg-white/10
                border border-white/10 text-white placeholder-gray-400
                focus:ring-1 focus:ring-purple-500 outline-none"
              />

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-full text-white
                bg-linear-to-r from-purple-500 to-cyan-400
                shadow-lg transition flex items-center justify-center gap-2
                hover:scale-[1.03] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader className="h-5 w-5 animate-spin" />
                    {state === "login" ? "Logging in..." : "Registering..."}
                  </>
                ) : (
                  <>{state === "login" ? "Login" : "Register"}</>
                )}
              </button>
            </form>

            {/* Toggle */}
            <p className="text-gray-400 text-sm text-center mt-6">
              {state === "login" ? (
                <>
                  Don’t have an account?{" "}
                  <span
                    onClick={() => setState("register")}
                    className="text-cyan-400 cursor-pointer hover:underline"
                  >
                    Register
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
