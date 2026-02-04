import React from "react";
import { motion } from "motion/react";
import { Github, Twitter, Linkedin, ArrowRight } from "lucide-react";

const Footer = () => {
  const footerData = [
    {
      title: "Product",
      links: [
        { name: "Home", href: "#" },
        { name: "Support", href: "#support" },
        { name: "Pricing", href: "#pricing" },
        { name: "Affiliate", href: "#affiliate" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Company", href: "#company" },
        { name: "Blogs", href: "#blogs" },
        { name: "Community", href: "#community" },
        { name: "Careers", href: "#careers" },
        { name: "About", href: "#about" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Terms & Conditions", href: "#terms" },
      ],
    },
  ];

  return (
    <footer className="relative mt-40 w-full overflow-hidden bg-slate-950 border-t border-slate-800">

      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 py-16">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="size-10 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">✨</span>
              </div>

              <div>
                <h2 className="text-white font-bold text-lg">NextGen</h2>
                <p className="text-blue-400 text-sm font-medium">
                  AI Studio
                </p>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Transform your creativity with powerful AI-driven design and
              content generation tools for the future.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              {[
                { icon: <Github />, link: "https://github.com" },
                { icon: <Linkedin />, link: "https://linkedin.com" },
                { icon: <Twitter />, link: "https://twitter.com" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 transition group"
                >
                  <span className="text-gray-400 group-hover:text-blue-400 transition">
                    {item.icon}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerData.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="space-y-4"
            >
              <h3 className="text-white font-semibold text-sm">
                {section.title}
              </h3>

              <ul className="space-y-2 text-sm">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition relative group"
                    >
                      {link.name}
                      <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-blue-400 transition-all group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} NextGen AI Studio. All rights reserved.
          </p>

          <p className="text-gray-500 text-xs">
            Built with ❤️ using AI + React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
