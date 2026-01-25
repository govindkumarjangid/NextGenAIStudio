import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { FaTwitter, FaLinkedin, FaDiscord } from "react-icons/fa";
import Input from '../components/contact/Input'
import SocialIcon from '../components/contact/SocialIcon'
import Title from "../components/UI/Title";

const Contect = () => {
  return (
    <div className="min-h-screen bg-[#050818] text-white px-2 sm:px-6 py-20 relative overflow-hidden">

      {/* Glow Background */}
      <div className="absolute -top-50 -left-50 w-125 h-125 bg-purple-500/30 blur-[160px]" />
      <div className="absolute -bottom-50 -right-50  w-125 h-125 bg-cyan-400/30 blur-[160px]" />

      {/* Heading */}
      <div className="md:pl-22">
        <Title title="Get in Touch." subTitle="Have questions or ideas? We’re here to help!" align="left" />
      </div>


      {/* Main Grid */}
      <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="lg:col-span-2 rounded-2xl border border-white/15 
        bg-white/5 backdrop-blur-xl p-5 sm:p-10 shadow-xl"
        >
          {/* Inputs Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input placeholder="Your Name" />
            <Input placeholder="Your Email" />
          </div>

          {/* Subject */}
          <div className="mt-6">
            <Input placeholder="Subject" />
          </div>

          {/* Message */}
          <div className="mt-6">
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full rounded-xl px-5 py-4 bg-black/20 
            border border-cyan-400/40 text-white placeholder-gray-400
            focus:outline-none focus:ring-2 focus:ring-purple-500/60 transition resize-none"
            />
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="mt-8 w-full py-4 rounded-full font-semibold text-lg
             bg-linear-to-r from-purple-500 to-cyan-400 cursor-pointer"
          >
            Send Message
          </motion.button>
        </motion.div>

        {/* Contact Info Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="rounded-2xl border border-white/15 
        bg-white/5 backdrop-blur-xl p-8 shadow-xl"
        >
          <h2 className="text-2xl font-bold mb-8">Contact Info</h2>

          {/* Email */}
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-black/30 border border-purple-400/40">
              <Mail className="text-cyan-400" />
            </div>
            <p className="text-gray-200">support@nextgen.ai</p>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 rounded-xl bg-black/30 border border-purple-400/40">
              <MapPin className="text-purple-400" />
            </div>
            <p className="text-gray-200">Global HQ, Internet</p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 text-3xl">
            <SocialIcon icon={<FaTwitter />} />
            <SocialIcon icon={<FaLinkedin />} />
            <SocialIcon icon={<FaDiscord />} />
          </div>
        </motion.div>
      </div>

      {/* Bottom Star */}
      <div className="absolute bottom-10 right-10 text-gray-400 text-4xl">
        ✦
      </div>
    </div>
  )
}

export default Contect