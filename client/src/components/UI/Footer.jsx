import React from "react";
import { motion } from "motion/react";
import { Github, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerData = [
    {
      title: "Product",
      links: [
        { name: "Home", href: "/" },
        { name: "Features", href: "/features" },
        { name: "Pricing", href: "/pricing" },
        { name: "Testimonials", href: "/testimonials" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Contact", href: "/contact" },
        { name: "Community", href: "#community" },
        { name: "Blogs", href: "#blogs" },
        { name: "Support", href: "#support" },
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

  const socialLinks = [
    { icon: Github, link: "https://github.com", label: "GitHub" },
    { icon: Linkedin, link: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, link: "https://twitter.com", label: "Twitter" },
  ];

  const renderFooterLink = (link) => {
    if (link.href.startsWith("/")) {
      return (
        <Link
          to={link.href}
          className="text-gray-300/90 hover:text-cyan-300 transition"
        >
          {link.name}
        </Link>
      );
    }

    return (
      <a
        href={link.href}
        className="text-gray-300/90 hover:text-cyan-300 transition"
      >
        {link.name}
      </a>
    );
  };

  return (
    <footer className="relative mt-40 w-full overflow-hidden px-4 sm:px-6 lg:px-10 border-t border-gray-700/50">

      <div className="mx-auto mb-6 max-w-7xl rounded-3xl  px-6 py-12 backdrop-blur-xl sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 md:col-span-1"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-2xl font-bold bg-linear-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text"
            >
              <img src="./logo.svg" alt="logo" className="h-10" />
              Studio
            </Link>

            <p className="max-w-sm text-sm leading-relaxed text-gray-300/85">
              Create visuals, videos, captions, and resumes with one powerful AI workspace built for modern creators.
            </p>

            <div className="flex gap-3 pt-1">
              {socialLinks.map((item, i) => {
                const Icon = item.icon;

                return (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="rounded-xl border border-purple-400/35 bg-[#0f1f33]/70 p-2.5 text-gray-300 transition hover:-translate-y-0.5 hover:border-cyan-400/60 hover:text-cyan-300"
                >
                  <Icon size={18} />
                </a>
                );
              })}
            </div>
          </motion.div>

          {footerData.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="space-y-4 md:pl-4"
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-cyan-300/90">
                {section.title}
              </h3>

              <ul className="space-y-2.5 text-sm">
                {section.links.map((link, i) => (
                  <li
                    key={i}
                    className="relative w-fit after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-cyan-300/80 after:transition-all hover:after:w-full"
                  >
                    {renderFooterLink(link)}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 h-px w-full bg-linear-to-r from-transparent via-cyan-300/40 to-transparent" />

        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-gray-400/85">
            © {new Date().getFullYear()} NextGen AI Studio. All rights reserved.
          </p>

          <p className="text-xs text-gray-400/85">
            Crafted with AI + React for creators and teams.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
