export interface Achievement {
  title: string;
  issuer: string;
  year: string;
  description?: string;
  icon: 'award' | 'certification' | 'hackathon' | 'recognition';
}

export const achievements: Achievement[] = [
  {
    title: "3rd Place — National Graphic Design Contest",
    issuer: "Pakistan",
    year: "2026",
    description: "Recognized among thousands of participants nationwide for excellence in graphic design and visual communication.",
    icon: "award",
  },
  {
    title: "Agentic AI Developer Certification",
    issuer: "GitHub",
    year: "2026",
    description: "Completed specialized curriculum focused on building and deploying reliable, safe AI agents in production environments.",
    icon: "certification",
  },
  {
    title: "Lead Student & Mentor",
    issuer: "GIAIC — Governor Initiative for AI",
    year: "2024–2025",
    description: "Selected to mentor peers in Python, web development, and AI fundamentals through a government-backed tech initiative.",
    icon: "recognition",
  },
  {
    title: "Founder — NexuGem Agency",
    issuer: "Self-founded",
    year: "2025",
    description: "Established and grew a 5-person digital agency delivering web development, branding, and AI solutions to clients globally.",
    icon: "recognition",
  },
];
