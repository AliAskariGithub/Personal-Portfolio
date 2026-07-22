export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  href: string;
  tags?: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Digital FTE - (Full Time Employee 24/7)",
    description: "Autonomous AI agent for business automation",
    longDescription: "An AI-Powered Employee system using Python and Groq AI (Llama-3.3) to monitor email, WhatsApp, and LinkedIn for tasks, auto-generating plans and executing approved actions.",
    image: "https://framerusercontent.com/images/4mYEXU91rLBNKIW9k6hZh16l7Q.jpeg",
    href: "https://github.com/AliAskariGithub/Hackathon-0-AI-Personal-Employee",
    tags: ["Python", "Groq AI", "Llama-3.3", "Automation"],
    featured: true,
  },
  {
    title: "AI Todo Application",
    description: "Full-stack AI task app with natural language chat",
    longDescription: "A full-stack to-do list app with an AI chatbot assistant. Built with Next.js/React and FastAPI, offering user authentication, task CRUD, and natural language task creation.",
    image: "/todo.png",
    href: "https://ai-y-todo.vercel.app",
    tags: ["Next.js", "FastAPI", "OpenAI", "PostgreSQL"],
    featured: true,
  },
  {
    title: "AI-Spec Driven Book",
    description: "Interactive AI learning platform with RAG chatbot",
    longDescription: "An interactive learning platform with spec-driven modules in robotics and AI. Features a RAG-based AI chatbot tutor and bilingual content (English + Urdu support).",
    image: "/Book.png",
    href: "https://ai-powered-book.vercel.app",
    tags: ["React", "Docusaurus", "RAG", "Education"],
    featured: true,
  },
  {
    title: "Quizzey App",
    description: "Interactive quiz experience for web dev knowledge",
    longDescription: "A quiz web application to test web dev knowledge with multiple-choice quizzes and results tracking.",
    image: "/Quiz.png",
    href: "https://quizzey.vercel.app",
    tags: ["React", "TypeScript"],
  },
  {
    title: "NexuGem Agency Website",
    description: "Digital agency for web, branding & SEO",
    longDescription: "Founded and lead a 5-person digital agency delivering web development, branding, SEO, digital marketing, and video editing for small businesses.",
    image: "https://framerusercontent.com/images/tRZviFpeGXyuMVmVqGj8O1XPpo.webp",
    href: "https://www.nexugemagency.com",
    tags: ["Web Dev", "Branding", "SEO"],
  },
  {
    title: "Fullstack Foodily",
    description: "Hackathon food ordering app",
    longDescription: "A food ordering website for home-cooked meals. Built with TypeScript/Next.js with REST APIs and engaging UI.",
    image: "/Food.png",
    href: "https://foodily-three.vercel.app/",
    tags: ["Next.js", "TypeScript", "REST API"],
  },
  {
    title: "OpenClaw Learning",
    description: "Agent framework exploration & development",
    longDescription: "Exploring open-source autonomous AI assistant frameworks and multi-agent systems.",
    image: "https://framerusercontent.com/images/QYuBadXuZMyXPEyAxGrVh7iNaU.jpg",
    href: "https://github.com/AliAskariGithub",
    tags: ["AI Agents", "OpenClaw", "Python"],
  },
  {
    title: "Baby Steps Tutorials",
    description: "Beginner-friendly coding tutorials",
    longDescription: "Structured README-based courses on HTML and TypeScript basics, showing passion for teaching and clear technical writing.",
    image: "https://framerusercontent.com/images/7kBqJ0RIpManswToNr6JFv8Jv8.png",
    href: "https://github.com/AliAskariGithub",
    tags: ["Education", "TypeScript", "HTML"],
  },
];
