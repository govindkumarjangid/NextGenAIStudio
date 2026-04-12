import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BotOff, Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center px-4 relative overflow-hidden">

      {/* Title */}
      <h1 className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-linear-to-r cursor-default hover:scale-105 transition-transform duration-300 from-cyan-400 to-purple-500 tracking-wider mb-2 drop-shadow-md">
        404
      </h1>

      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 tracking-wide">
        Lost in the Neural Network
      </h2>

      {/* Subtitle */}
      <p className="text-gray-400 mt-2 max-w-lg text-lg leading-relaxed mb-8">
        Oops! Our AI couldn't find the page you're looking for. It might have been moved, deleted, or never existed in this dimension.
      </p>

      {/* Buttons */}
      <div className="flex items-center gap-4 flex-wrap justify-center">
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-3 rounded-full text-gray-300 bg-white/5 border border-white/10 hover:bg-white/10 transition-all active:scale-95 font-medium flex items-center gap-2 backdrop-blur-md"
        >
          <ArrowLeft size={18} />
          Go Back
        </button>

        <Link
          to="/"
          className="px-8 py-3 rounded-full text-white bg-linear-to-r from-purple-500 to-cyan-400 transition-all hover:scale-105  active:scale-95 font-medium flex items-center gap-2"
        >
          <Home size={18} />
          Return to Hub
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
