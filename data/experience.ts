export interface Experience {
  company: string;
  role: string;
  date: string;
  description: string;
  href: string;
  achievements?: string[];
}

export const experiences: Experience[] = [
  {
    company: "Freelance",
    role: "Full-Stack Developer & Designer",
    date: "2024 – Present",
    description: "Built websites, AI tools, design web app, and brand assets for clients across LinkedIn, X, Facebook, and Instagram. Served 4-10 clients with web apps.",
    href: "https://www.linkedin.com/in/ali-askari-355257308",
    achievements: [
      "2+ years of freelance work across multiple platforms",
      "Built AI-powered Todo app and AI learning chatbot",
      "Created brand identities for small businesses"
    ],
  },
  {
    company: "Freelance",
    role: "Brand Designer & Visual Creator",
    date: "2024 – Present",
    description: "Placed 3rd in a national graphic design contest and continue creating logos, brand identities, and social media graphics. Fluent in Figma, Photoshop, and Illustrator.",
    href: "https://github.com/AliAskariGithub",
    achievements: [
      "3rd Place - National Graphic Design Contest (Pakistan)",
      "Created 20+ brand identities and logos",
      "Designed for clients across multiple industries"
    ],
  },
  {
    company: "NexuGem Agency",
    role: "Founder & Lead Developer",
    date: "2025 – Present",
    description: "Founded a 5-person digital agency offering Digital Marketing, Graphic Design, Web Development, SEO, and Video Editing services. We focus on helping small businesses get online with modern branding and AI tools.",
    href: "http://www.nexugemagency.com",
    achievements: [
      "Led client engagement and managed a team of 5 freelancers",
      "Delivered 10+ complete web apps and brand identities",
      "Served clients across retail, tech education, and startups"
    ],
  },
  {
    company: "GIAIC (Governor Initiative for AI)",
    role: "Lead Student & Mentor",
    date: "2024 – 2025",
    description: "Led programming classes for new learners. Taught Python, web development, and AI fundamentals through the Governor Initiative for AI, Web 3.0 & Metaverse.",
    href: "https://github.com/AliAskariGithub",
    achievements: [
      "Mentored peers in Python and AI fundamentals",
      "Led programming classes for 1 year",
      "Helped students transition into tech careers"
    ],
  },
];
