



import React from 'react';
import { Github, Twitter, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-gray-400 border-t border-slate-800 py-8 mt-auto ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          {/* Brand Info */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white">NextGen AI Studio</h3>
            <p className="text-sm mt-1">Empowering creators with Generative AI.</p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a href="#" className="hover:text-blue-400 transition-colors"><Github size={20} /></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><Linkedin size={20} /></a>
          </div>

          {/* Copyright */}
          <div className="text-sm flex items-center gap-1">
            <span>Built with</span>
            <Heart size={14} className="text-red-500 fill-red-500" />
            <span>using MERN Stack</span>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-slate-900 text-center text-xs">
          © {new Date().getFullYear()} NextGen AI Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;