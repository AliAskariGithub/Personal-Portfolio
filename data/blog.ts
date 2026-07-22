export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  readTime: string;
  image: string;
  summary: string;
  body?: string;
  tags?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    title: "Building Agentic AI Systems",
    slug: "building-agentic-ai-systems",
    date: "Apr 8, 2024",
    readTime: "6 min",
    image: "https://framerusercontent.com/images/a70g11CzlnQYCTEi1c802r8x1CE.jpg",
    summary: "Notes from building autonomous systems that reason, plan, and execute approved actions across real-world workflows.",
    body: "Building agentic AI systems requires a fundamental shift in how we think about software architecture. Unlike traditional applications where every behavior is explicitly programmed, agentic systems must be designed to reason, plan, and adapt.\n\nIn this post, I'll share insights from building autonomous task agents that can operate with minimal human oversight while maintaining safety and reliability. The key is creating systems that can:\n\n1. **Perceive** - Monitor multiple channels (email, WhatsApp, LinkedIn) for incoming tasks\n2. **Plan** - Generate actionable plans using LLMs like Llama-3.3\n3. **Execute** - Carry out approved actions autonomously\n4. **Learn** - Improve over time based on feedback\n\nMy AI Employee project demonstrates this approach, using Python and Groq AI to create a production-grade agent that handles real business workflows. The dual approval workflow ensures safety while maintaining automation benefits.\n\nThe future of software development is agentic - systems that don't just follow instructions but understand intent and adapt to achieve goals.",
    tags: ["AI Agents", "Automation", "Python"],
  },
  {
    title: "Spec-Driven Full-Stack Development",
    slug: "spec-driven-full-stack-development",
    date: "Mar 15, 2024",
    readTime: "6 min",
    image: "https://framerusercontent.com/images/SmKpJArNfpH0J4YgHNcqsyxuyEA.jpg",
    summary: "How I plan, build, and ship Next.js and FastAPI products with clear requirements and scalable architecture.",
    body: "Spec-driven development has transformed how I approach building full-stack applications. By writing comprehensive specifications before writing code, I've been able to deliver products faster, with fewer bugs, and better aligned with client expectations.\n\nThis approach combines the best of traditional software engineering practices with modern agile methodologies. Here's my process:\n\n**1. Define the Problem**\nStart with a clear problem statement. What are we building and why? Who benefits?\n\n**2. Write the Spec**\nDocument every feature, API endpoint, and user flow. This becomes the contract between vision and implementation.\n\n**3. Design the Architecture**\nPlan the database schema, API structure, and component hierarchy before coding.\n\n**4. Implement Incrementally**\nBuild feature by feature, testing against the spec at each step.\n\nThis method has helped me ship projects like the AI Todo App with confidence, knowing every piece serves a defined purpose.",
    tags: ["Next.js", "FastAPI", "Architecture"],
  },
  {
    title: "Designing With AI as a Material",
    slug: "designing-with-ai-as-a-material",
    date: "Feb 28, 2024",
    readTime: "8 min",
    image: "https://framerusercontent.com/images/iwNXp5FbnVuonnC3boDtFbw8Mk.jpg",
    summary: "Thoughts on combining brand design, UX, and AI automation to create more useful digital experiences.",
    body: "When we think of AI as a design material rather than just a backend technology, entirely new possibilities emerge for creating user experiences.\n\nAs someone who bridges both design and development, I've found that the most powerful applications come from treating AI capabilities as first-class design elements:\n\n**AI as Interface**\nNatural language becomes a UI element. Chat interfaces, voice commands, and intelligent suggestions transform how users interact with software.\n\n**AI as Content**\nDynamic, personalized content generation that adapts to user needs in real-time.\n\n**AI as Automation**\nInvisible helpers that work behind the scenes to reduce friction and anticipate user needs.\n\nThe AI-Spec Driven Book project exemplifies this approach - a learning platform where AI isn't just a feature, but the foundation of the entire experience. The RAG-based tutor provides instant, context-aware assistance that feels natural and helpful.\n\nDesign is about solving problems elegantly. AI gives us new tools to solve problems we couldn't before.",
    tags: ["Design", "AI", "UX"],
  },
  {
    title: "Teaching AI and Web Development",
    slug: "teaching-ai-and-web-development",
    date: "Feb 6, 2024",
    readTime: "6 min",
    image: "https://framerusercontent.com/images/zOWx0eEsJcZm7ntGp0RzPSjE00.jpg",
    summary: "Lessons from mentoring new learners in Python, web development, and AI fundamentals at GIAIC.",
    body: "Teaching has been one of the most rewarding experiences of my career. As a lead student at GIAIC, I had the opportunity to mentor beginners through their first steps in Python, web development, and AI.\n\nHere are the key lessons I've learned:\n\n**Start with Why**\nBefore diving into syntax, help students understand why they're learning something. Show real-world applications first.\n\n**Build, Don't Just Read**\nTheory is important, but nothing beats building real projects. My Baby Steps tutorials are structured around creating things from day one.\n\n**Embrace Mistakes**\nErrors are learning opportunities. Teaching debugging skills is as important as teaching coding.\n\n**Meet Students Where They Are**\nEveryone learns differently. Some need visual examples, others need hands-on practice, and some need written explanations.\n\nBeing a mentor made me a better developer. Explaining concepts clearly requires deep understanding, and student questions often reveal gaps in my own knowledge.",
    tags: ["Education", "Python", "Mentoring"],
  },
  {
    title: "Growing a Portfolio as a Young Builder",
    slug: "growing-a-portfolio-as-a-young-builder",
    date: "Jan 12, 2024",
    readTime: "6 min",
    image: "https://framerusercontent.com/images/X45kreSZsm5DFF2be6T8o6YaJAQ.jpg",
    summary: "A personal reflection on projects, client work, design competitions, and staying consistent as a fast learner.",
    body: "Building a portfolio as a young developer is about more than just collecting projects—it's about telling a story of growth, curiosity, and capability.\n\nAt 18, I've built over 20 apps and demos, placed 3rd in a national design contest, and founded a digital agency. Here's what I've learned:\n\n**Quality Over Quantity**\nOne polished project demonstrates more skill than ten half-finished ones. My AI Todo App took months to perfect, but it showcases my abilities across full-stack development, AI integration, and UI design.\n\n**Document Everything**\nWrite about your projects. Create READMEs, blog posts, and case studies. Future clients and employers want to understand your thinking process.\n\n**Embrace Diverse Skills**\nMy background in both design and development makes me unique. Don't limit yourself to one domain.\n\n**Ship Consistently**\nThe best portfolio is one that grows. Set a schedule and stick to it. Even small projects add up over time.\n\nYour portfolio is your story. Make it authentic, diverse, and always evolving.",
    tags: ["Career", "Portfolio", "Growth"],
  },
];
