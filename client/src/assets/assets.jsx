import {
  FileText,
  Search,
  Image as ImageIcon,
  PlayCircle,
  Youtube,
  Video,
  Type,
  Zap,
  Film,
  Wand2,
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

export const processData = [
  {
    id: 1,
    title: "Real-Time Analytics",
    description: "Get instant insights into your finances with live dashboards.",
    bgColor: "backdrop-blur-xl bg-purple-950/30",
    borderColor: "border-purple-700",
    iconStroke: "stroke-purple-600",
    Icon: LuKey
  },
  {
    id: 2,
    title: "Bank-Grade Security",
    description: "End-to-end encryption, 2FA, compliance with GDPR standards.",
    bgColor: "backdrop-blur-xl bg-green-950/30",
    borderColor: "border-green-700",
    iconStroke: "stroke-green-600",
    Icon: LuLock
  },
  {
    id: 3,
    title: "Customizable Reports",
    description: "Export professional, audit-ready financial reports for tax or internal review.",
    bgColor: "backdrop-blur-xl bg-orange-950/30",
    borderColor: "border-orange-700",
    iconStroke: "stroke-orange-600",
    Icon: LuDownload
  }
]

export const dummyResumeData = [
  {
    _id: "65b9d3f4e2a1c7b8d9f0e123",
    title: "Frontend Developer Resume",
    personal_info: {
      image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=200",
      full_name: "Rahul Sharma",
      email: "rahul.sharma@example.com",
      phone: "+91-9876543210",
      location: "Jaipur, Rajasthan, India",
      profession: "Frontend Developer",
      linkedin: "linkedin.com/in/rahulsharma",
      github: "github.com/rahulsharma",
      website: "https://rahulsharma.dev"
    },
    professional_summary: "Passionate Frontend Developer with 3+ years of experience in building scalable web applications using React.js and Next.js. Adept at creating responsive, user-friendly interfaces and collaborating with cross-functional teams.",
    experience: [
      {
        id: "exp_1",
        job_title: "Software Engineer",
        company_name: "Tech Innovators Ltd.",
        location: "Bengaluru, India",
        start_date: "2023-02",
        end_date: "Present",
        description: "Developed and maintained user-facing features using React.js. Improved website performance by 25% through code optimization."
      },
      {
        id: "exp_2",
        job_title: "Junior Web Developer",
        company_name: "Creative Solutions",
        location: "Jaipur, India",
        start_date: "2021-06",
        end_date: "2023-01",
        description: "Collaborated with designers to implement pixel-perfect UI. Built reusable components and managed application state using Redux."
      },

    ],
    education: [
      {
        id: "edu_1",
        degree: "Bachelor of Technology in Computer Science",
        institution: "Rajasthan Technical University",
        location: "Kota, India",
        start_date: "2017-08",
        end_date: "2021-05",
        score: "8.5 CGPA"
      },
      {
        id: "edu_2",
        degree: "Bachelor of Technology in Computer Science",
        institution: "Rajasthan Technical University",
        location: "Kota, India",
        start_date: "2017-08",
        end_date: "2021-05",
        score: "8.5 CGPA"
      },

    ],
    project: [
      {
        id: "proj_1",
        title: "E-commerce Admin Dashboard",
        tech_stack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
        link: "https://github.com/rahulsharma/ecom-dash",
        description: "Built a full-stack admin dashboard for managing products, orders, and users with real-time analytics."
      },
      {
        id: "proj_2",
        title: "Weather Tracking App",
        tech_stack: ["JavaScript", "OpenWeather API", "CSS"],
        link: "https://weather-app-rahul.vercel.app",
        description: "Created a responsive weather application that provides real-time forecasts based on user location."
      },

    ],
    skills: [
      "React.js",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Node.js",
      "Git"
    ],
    template: "classic",
    accent_color: "#3B82F6",
    public: false,
  },
  {
    _id: "65b9d4a1e2b2c8c9d0f1e456",
    title: "MERN Stack Developer Resume",
    personal_info: {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
      full_name: "Aarav Patel",
      email: "aarav.mern@example.com",
      phone: "+91-9876500123",
      location: "Pune, Maharashtra, India",
      profession: "Full Stack Developer",
      linkedin: "linkedin.com/in/aaravpatel-dev",
      github: "github.com/aaravpatel-dev",
      website: "https://aaravdev.tech"
    },
    professional_summary: "Results-driven Full Stack Developer with 4+ years of experience building scalable and high-performance web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). Adept at designing robust RESTful APIs, optimizing database schemas, and creating responsive, user-centric front-end interfaces. Proven track record of delivering end-to-end software solutions.",
    experience: [
      {
        id: "exp_1",
        job_title: "Full Stack Engineer",
        company_name: "Nexus Tech Solutions",
        location: "Pune, India",
        start_date: "2022-03",
        end_date: "Present",
        description: "Architected and developed scalable RESTful APIs using Node.js and Express. Integrated React.js frontend with complex backend services, reducing load times by 30%. Implemented secure user authentication using JWT and bcrypt."
      },
      {
        id: "exp_2",
        job_title: "Backend Developer",
        company_name: "CloudSync Web",
        location: "Mumbai, India",
        start_date: "2020-07",
        end_date: "2022-02",
        description: "Designed and managed MongoDB database schemas for high-volume data processing. Created automated data backup scripts and collaborated with frontend teams to define API endpoints."
      }
    ],
    education: [
      {
        id: "edu_1",
        degree: "Bachelor of Engineering in Information Technology",
        institution: "Pune Institute of Computer Technology",
        location: "Pune, India",
        start_date: "2016-08",
        end_date: "2020-05",
        score: "8.8 CGPA"
      }
    ],
    project: [
      {
        id: "proj_1",
        title: "ProShop - MERN E-Commerce",
        tech_stack: ["MongoDB", "Express.js", "React", "Node.js", "Redux"],
        link: "https://github.com/aaravpatel-dev/proshop-mern",
        description: "Built a fully functional e-commerce platform with a custom shopping cart, PayPal payment integration, and a comprehensive admin dashboard for product and user management."
      },
      {
        id: "proj_2",
        title: "Chatify - Real-time Chat App",
        tech_stack: ["React", "Node.js", "Socket.io", "MongoDB", "Tailwind CSS"],
        link: "https://chatify-app-live.vercel.app",
        description: "Developed a real-time messaging application supporting private and group chats, online status indicators, and instant notifications using WebSockets."
      }
    ],
    skills: [
      "MongoDB / Mongoose",
      "Express.js",
      "React.js",
      "Node.js",
      "JavaScript (ES6+) / TypeScript",
      "Redux Toolkit",
      "RESTful API Design",
      "JWT Authentication",
      "Tailwind CSS",
      "Git & GitHub"
    ],
    template: "modern",
    accent_color: "#10B981", // Emerald green color, matches Node/MongoDB vibes
    public: true,
  },
  {
    _id: "65b9d5c3f4d5e6f7a8b9c012",
    title: "Node.js Backend Developer Resume",
    personal_info: {
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200",
      full_name: "Vikram Singh",
      email: "vikram.backend@example.com",
      phone: "+91-9876599887",
      location: "Bengaluru, Karnataka, India",
      profession: "Backend Developer",
      linkedin: "linkedin.com/in/vikram-node",
      github: "github.com/vikram-backend",
      website: "https://vikram-api.dev"
    },
    professional_summary: "Detail-oriented Node.js Backend Developer with 5+ years of experience in designing, building, and maintaining highly scalable APIs and microservices. Expertise in server-side logic, database architecture (SQL & NoSQL), and cloud deployments. Passionate about optimizing system performance and ensuring top-notch security for complex web applications.",
    experience: [
      {
        id: "exp_1",
        job_title: "Senior Backend Engineer",
        company_name: "DataStream Systems",
        location: "Bengaluru, India",
        start_date: "2021-04",
        end_date: "Present",
        description: "Architected a microservices-based backend using Node.js and NestJS. Integrated Redis caching which reduced API response time by 40%. Managed CI/CD pipelines and Docker containerization for seamless cloud deployments on AWS."
      },
      {
        id: "exp_2",
        job_title: "Node.js Developer",
        company_name: "FinTech Solutions",
        location: "Hyderabad, India",
        start_date: "2019-01",
        end_date: "2021-03",
        description: "Developed secure RESTful APIs for a financial transaction system. Optimized MongoDB queries to handle 10,000+ concurrent users. Implemented OAuth2.0 and role-based access control (RBAC)."
      }
    ],
    education: [
      {
        id: "edu_1",
        degree: "B.Tech in Computer Science & Engineering",
        institution: "National Institute of Technology",
        location: "Warangal, India",
        start_date: "2014-08",
        end_date: "2018-05",
        score: "8.2 CGPA"
      }
    ],
    project: [
      {
        id: "proj_1",
        title: "Scalable Notification Service",
        tech_stack: ["Node.js", "RabbitMQ", "Redis", "PostgreSQL"],
        link: "https://github.com/vikram-backend/notify-service",
        description: "Built an asynchronous notification microservice using RabbitMQ and Node.js to handle email, SMS, and push notifications for over 1 million active users."
      },
      {
        id: "proj_2",
        title: "E-Learning GraphQL API",
        tech_stack: ["Node.js", "Express", "GraphQL", "Apollo Server", "MongoDB"],
        link: "https://github.com/vikram-backend/graphql-lms",
        description: "Designed a comprehensive GraphQL API for an e-learning platform, allowing frontend clients to query exact data requirements and minimizing over-fetching."
      }
    ],
    skills: [
      "Node.js & Express.js",
      "NestJS Framework",
      "Database Design (PostgreSQL, MongoDB)",
      "Caching & Messaging (Redis, RabbitMQ)",
      "GraphQL & RESTful APIs",
      "Docker & Microservices",
      "AWS (EC2, S3, Lambda)",
      "Unit Testing (Jest, Mocha)"
    ],
    template: "minimalist", // Ek naya template type example ke liye
    accent_color: "#475569", // Slate gray color, solid and professional for backend
    public: true,
  }
]


export const recentImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1542751110-97427bbecf20", title: "AI Robot" },
  { id: 2, src: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa", title: "Alien Planet" },
  { id: 3, src: "https://images.unsplash.com/photo-1557683316-973673baf926", title: "Abstract AI" },
  { id: 4, src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97", title: "Dark Creature" },
];

export const captionStyles = [
  { id: 'creative', label: 'Creative', color: 'from-purple-500 to-pink-500' },
  { id: 'professional', label: 'Professional', color: 'from-blue-500 to-cyan-500' },
  { id: 'casual', label: 'Casual', color: 'from-green-500 to-emerald-500' },
  { id: 'funny', label: 'Funny', color: 'from-orange-500 to-red-500' },
]

export const highlights = [
  {
    id: 1,
    label: 'No design skills needed',
  },
  {
    id: 2,
    label: 'Fast generation',
  },
  {
    id: 3,
    label: 'High CTR templates',
  },
];

export const features = [
  {
    icon: <Film className="w-8 h-8" />,
    title: "AI-Powered Generation",
    description: "Create professional videos from simple descriptions"
  },
  {
    icon: <Wand2 className="w-8 h-8" />,
    title: "Smart Editing",
    description: "Smart transitions and effects automatically applied"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Lightning Fast",
    description: "Generate stunning videos in 1 to 2 minutes fast"
  },
]

export const platformStyles = {
  instagram: [
    { id: 'aesthetic', label: 'Aesthetic', color: 'from-pink-500 to-rose-500' },
    { id: 'minimal', label: 'Minimal', color: 'from-purple-500 to-indigo-500' },
    { id: 'trendy', label: 'Trendy', color: 'from-fuchsia-500 to-pink-500' },
  ],
  facebook: [
    { id: 'storytelling', label: 'Storytelling', color: 'from-blue-500 to-sky-500' },
    { id: 'friendly', label: 'Friendly', color: 'from-cyan-500 to-teal-500' },
    { id: 'community', label: 'Community', color: 'from-emerald-500 to-green-500' },
  ],
  twitter: [
    { id: 'witty', label: 'Witty', color: 'from-orange-500 to-red-500' },
    { id: 'punchy', label: 'Punchy', color: 'from-amber-500 to-orange-500' },
    { id: 'news', label: 'News', color: 'from-slate-500 to-gray-500' },
  ],
  youtube: [
    { id: 'hook', label: 'Hook', color: 'from-red-500 to-rose-500' },
    { id: 'value', label: 'Value', color: 'from-yellow-500 to-orange-500' },
    { id: 'cta', label: 'CTA', color: 'from-green-500 to-lime-500' },
  ],
};