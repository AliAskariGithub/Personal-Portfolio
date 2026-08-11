import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import FloatingCTAs from "@/components/FloatingCTAs";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata: Metadata = {
  title: "Ali Askari — Agentic AI Developer",
  description: "Karachi-based Agentic AI Developer and Full-Stack Engineer building intelligent software, AI automation, and creative digital brands.",
  verification: {
    google: "MdYI1tXopBF9AAyfZgWEOrTNGd8DhP5QnJMB8EVO6p8",
  },
  twitter: {
    creator: "@Syed_Ali_Askari",
  },
  openGraph: {
    url: "https://aliaskari.dev",
    title: "Ali Askari — Agentic AI Developer",
    description: "Karachi-based Agentic AI Developer and Full-Stack Engineer building intelligent software, AI automation, and creative digital brands.",
  },
  icons: {
    icon: '/profile.jpg',
    apple: '/profile.jpg',
    shortcut: '/profile.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-bg min-h-screen relative">
        <ScrollProgress />
        <NavBar />
        {children}
        <FloatingCTAs />
      </body>
    </html>
  );
}
