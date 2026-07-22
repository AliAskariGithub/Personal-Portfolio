/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "framerusercontent.com",
      },

      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
      },

      // shadcn/ui
      {
        protocol: "https",
        hostname: "ui.shadcn.com",
      },

      // Zustand
      {
        protocol: "https",
        hostname: "zustand-demo.pmnd.rs",
      },

      // JWT
      {
        protocol: "https",
        hostname: "jwt.io",
      },

      // Better Auth
      {
        protocol: "https",
        hostname: "www.better-auth.com",
      },

      // Neon
      {
        protocol: "https",
        hostname: "neon.com",
      },

      // SQLModel
      {
        protocol: "https",
        hostname: "sqlmodel.tiangolo.com",
      },

      // Qdrant
      {
        protocol: "https",
        hostname: "qdrant.tech",
      },

      // OpenAI
      {
        protocol: "https",
        hostname: "openai.com",
      },

      // LangChain
      {
        protocol: "https",
        hostname: "www.langchain.com",
      },

      // Groq
      {
        protocol: "https",
        hostname: "groq.com",
      },

      // MCP
      {
        protocol: "https",
        hostname: "modelcontextprotocol.io",
      },

      // Anthropic
      {
        protocol: "https",
        hostname: "www.anthropic.com",
      },
    ],
  },
};

export default nextConfig;
