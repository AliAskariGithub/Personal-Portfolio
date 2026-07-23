export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "What's your process for a new project?",
    answer: "I follow a spec-driven approach: we start with a clear problem definition and requirements, then move to design mockups (if UI is involved), followed by iterative development with regular check-ins. You'll see progress at key milestones, and I prioritize shipping working software early so we can iterate based on real usage.",
  },
  {
    question: "What's your typical response time?",
    answer: "I aim to respond to all inquiries within 24 hours on weekdays. During active projects, I provide daily updates via your preferred channel (email, Slack, or WhatsApp). For urgent matters, I'm reachable within a few hours.",
  },
  {
    question: "Do you take on small or short-term projects?",
    answer: "Absolutely. I've worked on everything from quick landing pages and logo designs to multi-month AI system builds. Small projects are a great way for us to build trust before larger engagements. If your project is well-defined, I can often deliver quickly.",
  },
  {
    question: "What's your pricing range?",
    answer: "Pricing depends on scope, complexity, and timeline. I offer fixed-price quotes for well-defined projects and hourly rates for ongoing or exploratory work. You can indicate your budget range in the contact form, and I'll let you know if it's a good fit or suggest alternatives.",
  },
  {
    question: "Do you work with international clients / remote-only?",
    answer: "Yes, most of my client work is remote-first. I've collaborated with clients across time zones using async communication, scheduled video calls, and shared documentation tools. Whether you're in Karachi or California, we can make it work.",
  },
];
