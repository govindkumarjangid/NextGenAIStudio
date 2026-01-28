import { motion } from "framer-motion";
import { User, Mail, MapPin, BookOpen, MessageSquare, ArrowRight } from "lucide-react";
import { FaTwitter, FaLinkedin, FaDiscord } from "react-icons/fa";
import Input from '../components/contact/Input'
import SocialIcon from '../components/contact/SocialIcon'
import Title from "../components/UI/Title";
import Symbol from "../components/UI/Symbol";

const Contect = () => {
  return (
    <div className="h-auto text-white px-2 sm:px-6 py-20 relative max-w-8xl">

      {/* Glow Background */}
      {/* <div className="fixed top-0 left-0 w-125 h-125
      bg-purple-500 opacity-30 blur-[100px] rounded-full" />

      <div className="fixed bottom-0 right-0  w-125 h-125
      bg-cyan-400 opacity-30 blur-[100px] rounded-full" /> */}

      {/* Heading */}
      <div className="flex flex-col justify-center items-center text-center gap-4">
       <Symbol title="CONTACT" />
      {/* title  */}
      <Title title="Get in Touch" subTitle="Have questions or ideas? We’re here to help!" />
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

            {/* Name */}
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300 w-5 h-5" />
              <Input placeholder="Your Name" />
            </div>

            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300 w-5 h-5" />
              <Input placeholder="Your Email" />
            </div>
          </div>

          {/* Subject */}
          <div className="mt-6 relative">
            <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300 w-5 h-5" />
            <Input placeholder="Subject" />
          </div>

          {/* Message */}
          <div className="mt-6 relative">
            <MessageSquare className="absolute left-4 top-4 text-cyan-300 w-5 h-5" />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full rounded-xl pl-12 pr-4 py-4 bg-black/20
             border border-cyan-400/40 text-white placeholder-gray-400
              focus:outline-none focus:border-cyan-400/60
              focus:ring-2 focus:ring-cyan-400/30 transition resize-none"
            />
          </div>

          {/* Button */}
          <motion.button
            whileTap={{ scale: 0.99 }}
            className="mt-8 w-fit py-3.5 px-5 rounded-full text-sm
              bg-linear-to-r from-purple-500 to-cyan-400 cursor-pointer flex gap-2 items-center font-medium group "
          >
            Send Message
            <ArrowRight  size={20} className="group-hover:translate-x-1 transition-transform duration-300"/>
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
    </div>
  )
}

export default Contect