import { NextResponse } from 'next/server';

const ABOUT_ME = `
Ali Askari is an 18-year-old Agentic AI Developer and Full-Stack Engineer from Karachi, Pakistan.

## About
- Role: Agentic AI Developer, Full-Stack Developer, Founder @NexuGem, Graphic & Brand Designer
- Location: Karachi, Pakistan
- Availability: Freelance, Contract, Remote & On-site
- Languages: English, Urdu
- Started coding at 17, self-taught through online resources

## Story
Ali began his programming journey in 2024 through the Governor Sindh IT Initiative (GIAIC), where he immersed himself in AI, web development, and automation. He was selected as a Lead Student to mentor peers in Python, web development, and AI fundamentals. Growing up in Karachi without access to Silicon Valley tech networks, he relied on the internet, unlimited curiosity, and determination to figure things out.

He straddles two worlds: the logical, systems-thinking world of full-stack development and AI, and the visual, human-centered world of brand and graphic design. This dual expertise led him to found NexuGem Agency, where he leads a small team building digital products that look as good as they function.

Currently, he's deep into agentic AI systems — building autonomous assistants that reason, plan, and execute. He's fascinated by the shift from "AI as a tool" to "AI as a teammate."

## Skills (All rated 10/10 unless noted)
- Frontend: Next.js, React, TypeScript, JavaScript, Tailwind CSS, HTML5, CSS3, shadcn/ui, Redux, Zustand, Framer Motion (5/10)
- Backend: FastAPI, Node.js, Express.js, REST APIs, JWT Auth, Better Auth
- Database: PostgreSQL, Neon (Serverless), SQLModel, Qdrant (Vector DB), Redis (8/10), MongoDB (8/10)
- AI & ML: OpenAI API, LangChain, RAG (Retrieval-Augmented Generation), Groq (Llama-3), MCP Agents, Prompt Engineering, Claude API
- Design: Figma, Adobe Photoshop, Adobe Illustrator, Canva, Adobe XD (8/10)
- DevOps: Git, GitHub, Docker (5/10), Vercel, Cloudflare (8/10), Linux/WSL (5/10), Kubernetes (learning, 3/10)
- Languages: Python, TypeScript, JavaScript, SQL, C++ (6/10), Java (5/10)

## Experience
1. NexuGem Agency (2025–Present) - Founder & Lead Developer
   - 5-person digital agency offering Web Development, SEO, Digital Marketing, Graphic Design, Video Editing
   - Led client engagement and managed a team of 5 freelancers
   - Delivered 10+ complete web apps and brand identities
   - Served clients across retail, tech education, and startups

2. Freelance Developer & Designer (2024–Present)
   - 2+ years of freelance work across LinkedIn, X, Facebook, Instagram
   - Served 4-10 clients with web apps, logos, and branding
   - Built AI-powered Todo app and AI learning chatbot
   - Created 20+ brand identities and logos

3. GIAIC (2024–2025) - Lead Student & Mentor
   - Taught Python, web development, AI fundamentals
   - Mentored peers through Governor Initiative for AI, Web 3.0 & Metaverse
   - Helped students transition into tech careers

4. Graphic Design (2024–Present)
   - 3rd Place National Graphic Design Contest (Pakistan)
   - Fluent in Figma, Photoshop, and Illustrator

## Projects (Featured)
1. Digital FTE (Full Time Employee 24/7)
   - AI-Powered Employee system using Python and Groq AI (Llama-3.3)
   - Monitors email, WhatsApp, and LinkedIn for tasks
   - Auto-generates plans and executes approved actions
   - Features: multi-channel input watchers, LinkedIn lead gen, dual approval workflow

2. AI Todo Application
   - Full-stack to-do list app with AI chatbot assistant
   - Built with Next.js/React frontend, FastAPI backend
   - User authentication, task CRUD, natural language task creation
   - Technologies: Next.js 16, React 19, TypeScript, Tailwind CSS, Zustand, Framer Motion, OpenAI, SQLModel, Neon PostgreSQL, JWT

3. AI-Spec Driven Book
   - Interactive learning platform with spec-driven modules in robotics and AI
   - RAG-based AI chatbot tutor for instant assistance
   - Bilingual content (English + Urdu support)
   - Built with React, Docusaurus, Qdrant, OpenAI

4. Quizzey App
   - Quiz application for web dev knowledge testing
   - Multiple-choice quizzes and results tracking

5. NexuGem Agency Website
   - Digital agency website for web, branding & SEO services

6. Fullstack Foodily
   - Hackathon food ordering app for home-cooked meals
   - TypeScript/Next.js with REST APIs

7. OpenClaw Learning
   - Agent framework exploration and development
   - Open-source autonomous AI assistant frameworks

8. Baby Steps Tutorials
   - README-based courses on HTML and TypeScript basics
   - Passion for teaching and clear technical writing

## Achievements
- 3rd Place — National Graphic Design Contest (Pakistan, 2026)
- Agentic AI Developer Certification (GitHub, 2026)
- Lead Student & Mentor (GIAIC, 2024–2025)
- Founder — NexuGem Agency (Self-founded, 2025)
- Built 20+ small games and demos with Next.js

## Personal Interests
- Creative Coding: Building small games and animations (Next.js, P5.js)
- Graphic Design & Branding: Sketching logos and posters
- Anime & Gaming: Japanese animation and strategy games
- Sports: Football (soccer) fan
- Photography and gadgets
- Learning: AI and tech blogs, open-source contributions

## Fun Facts
- Drinks 2-3 cups of chai while debugging late nights
- Always carrying a notebook for sudden project ideas with UI sketches
- Big fan of strategy video games which inspire problem-solving approach
- Designed fictional brand logos for fun

## Contact
- Email: syedaliaskrizaidi1@gmail.com
- GitHub: https://github.com/AliAskariGithub
- LinkedIn: https://www.linkedin.com/in/ali-askari-355257308
- Twitter/X: https://x.com/Syed_Ali_Askari
- Agency: https://www.nexugemagency.com

## What He's Learning
- OpenClaw (open-source autonomous AI assistant) and multi-agent frameworks
- Advanced prompt engineering and large-scale model integration (Claude/Mistral)
- Kubernetes basics and cloud architectures for scalable apps
- System design and architecture patterns
`;

// Action keywords detection
function detectActions(message: string): string[] {
  const lowercaseMsg = message.toLowerCase();
  const actions = [];

  if (lowercaseMsg.includes('contact') || lowercaseMsg.includes('hire') || lowercaseMsg.includes('reach out') || lowercaseMsg.includes('get in touch')) {
    actions.push('SHOW_CONTACT_FORM');
  }
  if (lowercaseMsg.includes('project') && !lowercaseMsg.includes('what') && !lowercaseMsg.includes('tell')) {
    actions.push('SHOW_PROJECTS');
  }
  if (lowercaseMsg.includes('skill') || lowercaseMsg.includes('tech') || lowercaseMsg.includes('stack')) {
    actions.push('SHOW_SKILLS');
  }
  if (lowercaseMsg.includes('experience') || lowercaseMsg.includes('work')) {
    actions.push('SHOW_EXPERIENCE');
  }
  if (lowercaseMsg.includes('design') || lowercaseMsg.includes('graphic')) {
    actions.push('SHOW_DESIGN');
  }
  if (lowercaseMsg.includes('resume') || lowercaseMsg.includes('cv')) {
    actions.push('DOWNLOAD_RESUME');
  }

  return actions;
}

export async function POST(request: Request) {
  try {
    const { message, history } = await request.json();

    // Detect if user wants to perform actions
    const actions = detectActions(message);

    const messages = [
      {
        role: 'system',
        content: `You are Ali Askari's AI assistant. You help visitors learn about Ali, his work, skills, and projects.

CRITICAL INSTRUCTIONS:
1. Be friendly, conversational, and enthusiastic — like a helpful friend, not a robot
2. Vary your responses — NEVER use the exact same phrasing twice. Be creative and natural!
3. Use casual language, emojis occasionally, and keep it engaging
4. Keep responses under 120 words unless asked for detailed information
5. If asked about specific projects, give concrete details about technologies and features
6. Mention his achievements naturally when relevant (3rd place national design award, founded agency at 18, etc.)
7. Be genuinely excited about Ali's work — show personality!
8. If you don't know something specific, suggest contacting Ali directly
9. When discussing availability, mention he's open to freelance, contract, and full-time opportunities
10. Reference his dual expertise in both development AND design when relevant

INTERACTIVE ACTIONS:
When users ask about contact, projects, skills, or want to hire Ali, suggest that they can use quick action buttons that will appear with your message.

ABOUT ALI (comprehensive information):
${ABOUT_ME}

IMPORTANT: Always sound natural and varied. Never repeat the same introduction or closing. Be like a real person having a conversation, not a template.`
      },
      ...(history || []),
      { role: 'user', content: message }
    ];

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_GROQAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: process.env.NEXT_PUBLIC_GROQAI_MODEL,
        messages,
        max_tokens: 500,
        temperature: 0.9,
      }),
    });

    if (!response.ok) {
      throw new Error('Groq API request failed');
    }

    const data = await response.json();
    const reply = data.choices[0]?.message?.content || "I'd love to help! What would you like to know about Ali?";

    return NextResponse.json({ reply, actions });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      {
        reply: "Oops! I'm having a small technical hiccup. Mind trying again? Or reach out to Ali directly at syedaliaskrizaidi1@gmail.com — he'd love to hear from you! 🚀",
        actions: ['SHOW_CONTACT_FORM']
      },
      { status: 200 }
    );
  }
}
