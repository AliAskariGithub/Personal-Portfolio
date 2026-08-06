export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  href: string;
  tags?: string[];
  featured?: boolean;
  category?: 'development' | 'design';
  gallery?: string[];
}

export const projects: Project[] = [
  {
    title: "AI Todo Application",
    description: "Full-stack AI task app with natural language chat",
    longDescription: "A full-stack to-do list app with an AI chatbot assistant. Built with Next.js/React and FastAPI, offering user authentication, task CRUD, and natural language task creation.",
    image: "/todo.png",
    href: "https://ai-y-todo.vercel.app",
    tags: ["Next.js", "FastAPI", "OpenAI", "PostgreSQL"],
    featured: true,
    category: 'development',
  },
  {
    title: "AI-Spec Driven Book",
    description: "Interactive AI learning platform with RAG chatbot",
    longDescription: "An interactive learning platform with spec-driven modules in robotics and AI. Features a RAG-based AI chatbot tutor and bilingual content (English + Urdu support).",
    image: "/Book.png",
    href: "https://ai-powered-book.vercel.app",
    tags: ["React", "Docusaurus", "RAG", "Education"],
    featured: true,
    category: 'development',
  },
  {
    title: "Branding & Identity Design",
    description: "Complete brand identity systems for businesses",
    longDescription: "Professional branding projects including logo design, brand guidelines, color palettes, typography systems, and complete visual identity packages for various clients.",
    image: "/Graphic_Portfolio/Branding/Branding-01.png",
    href: "#graphic-portfolio",
    tags: ["Branding", "Identity", "Visual Design"],
    featured: true,
    category: 'design',
    gallery: Array.from({ length: 15 }, (_, i) => `/Graphic_Portfolio/Branding/Branding-${String(i + 1).padStart(2, '0')}.png`),
  },
  {
    title: "Logo Design Portfolio",
    description: "Collection of professional logo designs",
    longDescription: "Diverse collection of logo designs showcasing versatility across different industries and styles, from minimalist to complex emblems.",
    image: "/Graphic_Portfolio/Logofolio/LOGOs-01.jpg",
    href: "#graphic-portfolio",
    tags: ["Logo Design", "Branding", "Icon Design"],
    featured: true,
    category: 'design',
    gallery: Array.from({ length: 10 }, (_, i) => `/Graphic_Portfolio/Logofolio/LOGOs-${String(i + 1).padStart(2, '0')}.jpg`),
  },
  {
    title: "Social Media Design",
    description: "Engaging social media graphics and campaigns",
    longDescription: "Creative social media posts, banners, and marketing materials designed to boost engagement and brand awareness across various platforms.",
    image: "/Graphic_Portfolio/Social_Media/SOCIAL_MEDIAs-01.png",
    href: "#graphic-portfolio",
    tags: ["Social Media", "Marketing", "Graphics"],
    category: 'design',
    gallery: Array.from({ length: 16 }, (_, i) => `/Graphic_Portfolio/Social_Media/SOCIAL_MEDIAs-${String(i + 1).padStart(2, '0')}.png`),
  },
  {
    title: "Quizzey App",
    description: "Interactive quiz experience for web dev knowledge",
    longDescription: "A quiz web application to test web dev knowledge with multiple-choice quizzes and results tracking.",
    image: "/Quiz.png",
    href: "https://quizzey.vercel.app",
    tags: ["React", "TypeScript"],
    category: 'development',
  },
  {
    title: "NexuGem Agency Website",
    description: "Digital agency for web, branding & SEO",
    longDescription: "Founded and lead a 5-person digital agency delivering web development, branding, SEO, digital marketing, and video editing for small businesses.",
    image: "https://framerusercontent.com/images/tRZviFpeGXyuMVmVqGj8O1XPpo.webp",
    href: "https://www.nexugemagency.com",
    tags: ["Web Dev", "Branding", "SEO"],
    category: 'development',
  },
  {
    title: "Fullstack Foodily",
    description: "Hackathon food ordering app",
    longDescription: "A food ordering website for home-cooked meals. Built with TypeScript/Next.js with REST APIs and engaging UI.",
    image: "/Food.png",
    href: "https://foodily-three.vercel.app/",
    tags: ["Next.js", "TypeScript", "REST API"],
    category: 'development',
  },
  {
    title: "Digital FTE - (Full Time Employee 24/7)",
    description: "Autonomous AI agent for business automation",
    longDescription: "An AI-Powered Employee system using Python and Groq AI (Llama-3.3) to monitor email, WhatsApp, and LinkedIn for tasks, auto-generating plans and executing approved actions.",
    image: "https://framerusercontent.com/images/4mYEXU91rLBNKIW9k6hZh16l7Q.jpeg",
    href: "https://github.com/AliAskariGithub/Hackathon-0-AI-Personal-Employee",
    tags: ["Python", "Groq AI", "Llama-3.3", "Automation"],
    featured: true,
    category: 'development',
  },
  {
    title: "OpenClaw Learning",
    description: "Agent framework exploration & development",
    longDescription: "Exploring open-source autonomous AI assistant frameworks and multi-agent systems.",
    image: "https://framerusercontent.com/images/QYuBadXuZMyXPEyAxGrVh7iNaU.jpg",
    href: "https://github.com/AliAskariGithub",
    tags: ["AI Agents", "OpenClaw", "Python"],
    category: 'development',
  },
  {
    title: "Baby Steps Tutorials",
    description: "Beginner-friendly coding tutorials",
    longDescription: "Structured README-based courses on HTML and TypeScript basics, showing passion for teaching and clear technical writing.",
    image: "https://framerusercontent.com/images/7kBqJ0RIpManswToNr6JFv8Jv8.png",
    href: "https://github.com/AliAskariGithub",
    tags: ["Education", "TypeScript", "HTML"],
    category: 'development',
  },
];
