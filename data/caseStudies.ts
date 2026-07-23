export interface CaseStudy {
  slug: string;
  title: string;
  problem: string;
  build: string;
  outcome: string;
  outcomeMetric?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  image: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "digital-fte",
    title: "Digital FTE — AI Employee",
    problem: "Small businesses and solo entrepreneurs struggle to keep up with incoming tasks across multiple channels like email, WhatsApp, and LinkedIn. Hiring a full-time employee is expensive, and important leads or requests often slip through the cracks due to delayed responses.",
    build: "Built an autonomous AI-powered employee system using Python and Groq AI (Llama-3.3). The system monitors multiple communication channels simultaneously, automatically generates action plans from incoming messages, and executes approved actions. Key technical decisions included using Llama-3.3 for cost-effective inference, a dual-approval workflow for safety, and modular channel watchers for extensibility.",
    outcome: "The system can process and categorize incoming requests 24/7, reducing response time from hours to minutes. [ADD METRIC: e.g., 'Handles X requests per day' or 'Saves Y hours per week']",
    outcomeMetric: "[ADD METRIC]",
    technologies: ["Python", "Groq AI", "Llama-3.3", "WhatsApp API", "LinkedIn API", "Gmail API"],
    liveUrl: "https://github.com/AliAskariGithub/Hackathon-0-AI-Personal-Employee",
    githubUrl: "https://github.com/AliAskariGithub/Hackathon-0-AI-Personal-Employee",
    image: "https://framerusercontent.com/images/4mYEXU91rLBNKIW9k6hZh16l7Q.jpeg",
  },
  {
    slug: "ai-todo-app",
    title: "AI Todo Application",
    problem: "Traditional todo apps require manual entry and organization, which becomes tedious for users managing complex projects. Users often abandon task management tools because the friction of keeping them updated outweighs the benefits.",
    build: "Developed a full-stack application with an AI chatbot assistant that understands natural language. Users can say 'Add a task to call the client tomorrow at 3pm' and the AI parses, categorizes, and schedules it. Built with Next.js on the frontend for a responsive UI, FastAPI for the backend API, PostgreSQL for persistence, and OpenAI for natural language understanding.",
    outcome: "Users can create and manage tasks 3x faster through natural conversation compared to manual form entry. The chat interface also helps users prioritize and reschedule tasks contextually.",
    outcomeMetric: "3x faster task creation",
    technologies: ["Next.js", "FastAPI", "OpenAI", "PostgreSQL", "JWT Auth", "Zustand"],
    liveUrl: "https://ai-y-todo.vercel.app",
    githubUrl: "https://github.com/AliAskariGithub",
    image: "/todo.png",
  },
  {
    slug: "ai-spec-driven-book",
    title: "AI-Spec Driven Book",
    problem: "Technical documentation and learning materials are often dense and one-size-fits-all. Learners struggle to find answers quickly or get explanations at their level, leading to frustration and drop-off.",
    build: "Created an interactive learning platform with spec-driven modules covering robotics and AI topics. Integrated a RAG-based AI chatbot tutor that can answer questions about the content and provide contextual explanations. The platform supports bilingual content (English + Urdu) for accessibility. Built with Docusaurus for documentation structure and custom React components for interactivity.",
    outcome: "Learners can get instant, contextual help without leaving the learning environment. The bilingual support opens the content to a wider audience.",
    outcomeMetric: "[ADD METRIC: e.g., 'X active learners' or 'Y questions answered by AI']",
    technologies: ["React", "Docusaurus", "RAG", "Qdrant", "OpenAI", "TypeScript"],
    liveUrl: "https://ai-powered-book.vercel.app",
    githubUrl: "https://github.com/AliAskariGithub",
    image: "/Book.png",
  },
];
