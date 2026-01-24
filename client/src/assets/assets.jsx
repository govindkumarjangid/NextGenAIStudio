import {
  FileText,
  Search,
  Image as ImageIcon,
  PlayCircle,
  Youtube,
  Video,
  Type,
} from "lucide-react";

export const cardsData = [
  {
    icon: <FileText size={40} />,
    title: "AI Resume Builder",
    desc: "Create ATS-friendly resumes instantly with AI-driven templates.",
  },
  {
    icon: <Search size={40} />,
    title: "Smart Resume Analyzer",
    desc: "Get detailed insights and scores to optimize your resume.",
  },
  {
    icon: <ImageIcon size={40} />,
    title: "AI Image Studio",
    desc: "Generate high-quality images from text prompts in seconds.",
  },
  {
    icon: <PlayCircle size={40} />,
    title: "YT Thumbnail Generator",
    desc: "Design catchy YouTube thumbnails to boost your clicks.",
  },
];

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "Features", path: "/features" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Contact", path: "/contact" },
];

export const featuresCardsData = [
  {
    icon: <FileText size={34} />,
    title: "AI Resume Builder",
    desc: "Create ATS-friendly resumes instantly with AI-driven templates.",
    color: "text-blue-400",
    path: "/resume-builder"
  },
  {
    icon: <Search size={34} />,
    title: "Smart Analyzer",
    desc: "Get detailed insights and scores to optimize your resume.",
    color: "text-purple-400",
    path: "/resume-analyzer"
  },
  {
    icon: <ImageIcon size={34} />,
    title: "AI Image Studio",
    desc: "Generate high-quality 4K images from text prompts in seconds.",
    color: "text-green-400",
    path: "/image-stdio"
  },
  {
    icon: <Youtube size={34} />,
    title: "Thumbnail Gen",
    desc: "Design catchy YouTube thumbnails to boost your clicks.",
    color: "text-red-400",
    path: "/thumbnail-genration"
  },
  {
    icon: <Video size={34} />,
    title: "AI Video Studio",
    desc: "Turn text scripts into short, engaging video clips effortlessly.",
    color: "text-indigo-400",
    path: "/video-stdio"
  },
  {
    icon: <Type size={34} />,
    title: "AI Caption Studio",
    desc: "Auto-generate viral captions and hashtags for social media.",
    color: "text-yellow-400",
    path: "/caption-stdio"
  },
];



