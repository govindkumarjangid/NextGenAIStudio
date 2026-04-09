import { motion } from "motion/react";
import { User, Mail, MapPin, BookOpen, MessageSquare, ArrowRight, Clock3 } from "lucide-react";
import { FaTwitter, FaLinkedin, FaDiscord } from "react-icons/fa";
import Input from '../components/contact/Input'
import SocialIcon from '../components/contact/SocialIcon'
import Title from "../components/UI/Title";
import Symbol from "../components/UI/Symbol";

const Contect = () => {
  return (
    <section className="h-auto text-white px-2 sm:px-6 py-20 relative max-w-8xl overflow-hidden">


      {/* Heading */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center gap-4">
        <Symbol title="CONTACT" />
        {/* title  */}
        <Title title="Let’s Build Something Great" subTitle="Questions, feedback, or collaboration ideas? Our team would love to hear from you." />
      </div>


      {/* Main Grid */}
      <div className="relative z-10 mt-14 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="lg:col-span-2 rounded-3xl border border-white/15 bg-[linear-gradient(150deg,rgba(16,1,30,0.72),rgba(0,35,45,0.65))] backdrop-blur-xl p-5 sm:p-8 md:p-10 shadow-[0_16px_34px_rgba(0,0,0,0.28)]"
        >
          <div className="flex items-center justify-between gap-4 mb-6 sm:mb-7">
            <h2 className="text-xl sm:text-2xl font-semibold">Send us a message</h2>
            <span className="px-3 py-1 rounded-full text-xs border border-white/15 bg-white/6 text-slate-200">Reply in 24h</span>
          </div>

          {/* Inputs Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

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
          <div className="mt-5 relative">
            <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300 w-5 h-5" />
            <Input placeholder="Subject" />
          </div>

          {/* Message */}
          <div className="mt-5 relative">
            <MessageSquare className="absolute left-4 top-4 text-cyan-300 w-5 h-5" />
            <textarea
              placeholder="Tell us what you need help with..."
              rows="5"
              className="w-full rounded-2xl pl-12 pr-4 py-4 bg-white/6 border border-white/15 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-300/70 focus:ring-2 focus:ring-cyan-300/30 transition resize-none"
            />
          </div>

          {/* Button */}
          <motion.button
            whileTap={{ scale: 0.99 }}
            className="mt-8 w-full sm:w-fit py-3.5 px-6 rounded-full text-sm bg-linear-to-r from-purple-500 to-cyan-400 cursor-pointer inline-flex justify-center gap-2 items-center font-semibold group hover:opacity-90 transition"
          >
            Send Message
            <ArrowRight  size={20} className="group-hover:translate-x-1 transition-transform duration-300"/>
          </motion.button>

          <p className="mt-3 text-xs text-slate-300/90">
            By submitting this form, you agree to be contacted regarding your request.
          </p>
        </motion.div>

        {/* Contact Info Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.05 }}
          className="rounded-3xl border border-white/15 bg-[linear-gradient(150deg,rgba(16,1,30,0.72),rgba(0,35,45,0.65))] backdrop-blur-xl p-6 sm:p-8 shadow-[0_16px_34px_rgba(0,0,0,0.28)]"
        >
          <h2 className="text-2xl font-bold mb-6">Contact Info</h2>

          {/* Email */}
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-black/30 border border-purple-400/40">
              <Mail className="text-cyan-400" />
            </div>
            <p className="text-gray-200">support@nextgenaistudio.com</p>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 rounded-xl bg-black/30 border border-purple-400/40">
              <MapPin className="text-purple-400" />
            </div>
            <p className="text-gray-200">Remote-First Team, Worldwide</p>
          </div>

          <div className="flex items-center gap-4 mb-7">
            <div className="p-3 rounded-xl bg-black/30 border border-purple-400/40">
              <Clock3 className="text-cyan-300" />
            </div>
            <div>
              <p className="text-gray-200">Mon - Fri, 9:00 AM - 6:00 PM</p>
              <p className="text-xs text-slate-400 mt-0.5">IST / UTC+5:30</p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/12 bg-white/6 p-4 mb-7">
            <p className="text-sm font-medium text-white">Need a faster response?</p>
            <p className="text-xs text-slate-300 mt-1">Mention "Priority" in your subject and include your use case details.</p>
          </div>

          {/* Social Icons */}
          <p className="text-sm text-slate-300 mb-4">Follow us</p>
          <div className="flex gap-4 text-xl">
            <SocialIcon icon={<FaTwitter />} />
            <SocialIcon icon={<FaLinkedin />} />
            <SocialIcon icon={<FaDiscord />} />
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Contect