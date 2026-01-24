import React from "react";
import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center">

      {/* Icon */}
      <AlertTriangle size={80} className="text-red-500 mb-4" />

      {/* Title */}
      <h1 className="text-4xl font-bold text-slate-800">
        404 - Page Not Found
      </h1>

      {/* Subtitle */}
      <p className="text-gray-500 mt-3 max-w-md">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      {/* Button */}
      <Link
        to="/"
        className="mt-6 px-6 py-2 bg-green-500 text-white rounded-full font-medium hover:bg-green-600 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
