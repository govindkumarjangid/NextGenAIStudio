import {
  FileText,
  Search,
  Image as ImageIcon,
  PlayCircle,
  Youtube,
  Video,
  Type,
  Phone,
} from "lucide-react";
import { LuKey, LuLock, LuDownload } from "react-icons/lu";

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
  { name: "Pricing", path: "/pricing" },
  { name: "Contact", path: "/contact" },
];

export const specialFeatures = [
  "No credit card",
  "30 days free trial",
  "Setup in 10 minutes",
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

export const testimonialCardsData = [
  {
    image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
    name: 'Briar Martin',
    handle: '@neilstellar',
    date: 'April 20, 2025'
  },
  {
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
    name: 'Avery Johnson',
    handle: '@averywrites',
    date: 'May 10, 2025'
  },
  {
    image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60',
    name: 'Jordan Lee',
    handle: '@jordantalks',
    date: 'June 5, 2025'
  },
  {
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60',
    name: 'Avery Johnson',
    handle: '@averywrites',
    date: 'May 10, 2025'
  },
];

export const plans = [
  {
    name: "Basic",
    price: "₹999",
    period: "/month",
    highlight: false,
    features: [
      "AI Resume Builder (Limited Templates)",
      "Resume Analyzer (5 scans/month)",
      "AI Thumbnail Generator (10)",
      "Image Generation (20 images)",
      "Community Support",
      "Standard Export Quality",
    ],
    button: "Start Building",
  },
  {
    name: "Pro",
    price: "₹2999",
    period: "/month",
    highlight: true,
    badge: "Most Popular",
    features: [
      "Advanced AI Resume Builder",
      "Unlimited Resume Analyzer",
      "Unlimited AI Thumbnails",
      "Unlimited HD Image Generation",
      "AI Short Video Generation",
      "ATS Optimization Report",
      "Priority Support",
    ],
    button: "Upgrade to Pro",
  },
  {
    name: "Enterprise",
    price: "₹6999",
    period: "/month",
    highlight: false,
    features: [
      "Everything in Pro",
      "Custom Resume Branding",
      "Long-form AI Video Generation",
      "Bulk Thumbnail Generator",
      "High-Res Export",
      "Dedicated Support Manager",
      "API Access",
    ],
    button: "Contact Sales",
  },
];

export const trustedUsers = [
  {
    user: "user1",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&amp;w=200",
  },
  {
    user: "user2",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&amp;w=200",
  },
  {
    user: "user3",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&amp;w=200",
  },
  {

    user: "user4",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&amp;w=200",

  },
  {
    user: "user5",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&amp;w=200",
  },
  {
    user: "user6",
    image: "https://randomuser.me/api/portraits/men/75.jpg"
  }
]

export const processData = [
  {
    id: 1,
    title: "Real-Time Analytics",
    description: "Get instant insights into your finances with live dashboards.",
    bgColor: "backdrop-blur-xl bg-purple-950/70",
    hoverBgColor: "group-hover:bg-purple-100",
    borderColor: "border-purple-400",
    hoverBorderColor: "group-hover:border-purple-700",
    iconStroke: "stroke-purple-600",
    Icon: LuKey
  },
  {
    id: 2,
    title: "Bank-Grade Security",
    description: "End-to-end encryption, 2FA, compliance with GDPR standards.",
    bgColor: "backdrop-blur-xl bg-green-950/70",
    hoverBgColor: "group-hover:bg-green-100",
    borderColor: "border-green-400",
    hoverBorderColor: "group-hover:border-green-700",
    iconStroke: "stroke-green-600",
    Icon: LuLock
  },
  {
    id: 3,
    title: "Customizable Reports",
    description: "Export professional, audit-ready financial reports for tax or internal review.",
    bgColor: "backdrop-blur-xl bg-orange-950/70",
    hoverBgColor: "backdrop-blur-xl bg-orange-950/70",
    borderColor: "border-orange-400",
    hoverBorderColor: "group-hover:border-orange-700",
    iconStroke: "stroke-orange-600",
    Icon: LuDownload
  }
]

export const dummyResumeData = [
  {
   personal_info:{
    full_name: "John Doe",
    email: "john.doe@example.com",
    Phone: "+1 234 567 8901",
    location: "New York, USA",
    linkedin: "linkedin.com/in/johndoe",
    website : "johndoe.com",
    profession: "Software Engineer"
   },
   _id: "64f0c8e2b4f5a2d3c4e5f678",
   userId: "8uhu23rh9huhe89er89he8",
   title: "Modern Resume",
   updatedAt: "2024-06-15T10:20:30Z"
}
]