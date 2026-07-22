import { NextResponse } from 'next/server';

const ABOUT_ME = `
Ali Askari is an 18-year-old Agentic AI Developer and Full-Stack Engineer from Karachi, Pakistan.

## About
- Role: Agentic AI Developer, Full-Stack Developer, Founder @NexuGem, Graphic & Brand Designer
- Location: Karachi, Pakistan
- Availability: Freelance, Contract, Remote & On-site
- Languages: English, Urdu

## Skills
- Frontend: Next.js, React, TypeScript, JavaScript, Tailwind CSS, HTML5, CSS3, shadcn/ui, Redux, Zustand, Framer Motion
- Backend: FastAPI, Node.js, REST APIs, JWT Auth, Better Auth
- Database: PostgreSQL, Neon, SQLModel, Qdrant (Vector DB), Redis, MongoDB
- AI & ML: OpenAI API, RAG, Groq (Llama-3), MCP Agents, Prompt Engineering, Claude API
- Design: Figma, Adobe Photoshop, Adobe Illustrator, Canva, Adobe XD
- DevOps: Git, GitHub, Docker, Vercel, Cloudflare, Linux/WSL, Kubernetes (learning)

## Experience
1. NexuGem Agency (2025–Present) - Founder & Lead Developer
   - 5-person digital agency offering Web Development, SEO, Digital Marketing, Graphic Design, Video Editing

2. Freelance Developer & Designer (2024–Present)
   - 2+ years of freelance work, served 4-10 clients
   - Built AI-powered Todo app and AI learning chatbot

3. GIAIC (2024–2025) - Lead Student & Mentor
   - Taught Python, web development, AI fundamentals

4. Graphic Design (2024–Present)
   - 3rd Place National Graphic Design Contest (Pakistan)

## Projects
- Digital FTE: AI-Powered Employee system using Python and Groq AI (Llama-3.3)
- AI Todo Application: Full-stack app with AI chatbot assistant
- AI-Spec Driven Book: Interactive learning platform with RAG chatbot
- Quizzey App: Quiz application for web dev knowledge
- NexuGem Agency Website: Digital agency website
- Fullstack Foodily: Food ordering app

## Contact
- Email: syedaliaskrizaidi1@gmail.com
- GitHub: https://github.com/AliAskariGithub
- LinkedIn: https://www.linkedin.com/in/ali-askari-355257308
- Twitter: https://x.com/Syed_Ali_Askari
- Agency: https://www.nexugemagency.com

## Fun Facts
- Built 20+ small games and demos with Next.js
- Drinks 2-3 cups of chai while debugging
- Big fan of strategy video games
- Always carrying a notebook for ideas
- Learning Kubernetes & advanced AI DevOps
`;

export async function POST(request: Request) {
  try {
    const { message, history } = await request.json();

    const messages = [
      {
        role: 'system',
        content: `You are Ali Askari's AI assistant. You help visitors learn about Ali, his work, skills, and projects. Be friendly, helpful, and concise. Use the following information about Ali to answer questions:

${ABOUT_ME}

Keep responses under 100 words unless asked for detailed information. Be conversational and helpful. If you don't know something specific, suggest they contact Ali directly at syedaliaskrizaidi1@gmail.com.`
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
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error('Groq API request failed');
    }

    const data = await response.json();
    const reply = data.choices[0]?.message?.content || "I'm having trouble responding right now. Please try again!";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { reply: "Sorry, I'm having trouble connecting right now. Please reach out to Ali directly at syedaliaskrizaidi1@gmail.com" },
      { status: 200 }
    );
  }
}
