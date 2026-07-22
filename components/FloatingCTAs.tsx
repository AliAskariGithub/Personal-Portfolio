'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'react-feather';
import { useState, useRef, useEffect } from 'react';
import { RiRobot3Fill } from 'react-icons/ri';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

const CHAT_STORAGE_KEY = 'ali-askari-chat-messages';

// Typing indicator component with animated dots
function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="bg-bg text-white rounded-xl rounded-bl-none shadow px-4 py-3">
        <div className="flex items-center gap-1">
          <motion.div
            className="w-2 h-2 bg-purple rounded-full"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
          />
          <motion.div
            className="w-2 h-2 bg-purple rounded-full"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
          />
          <motion.div
            className="w-2 h-2 bg-purple rounded-full"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
          />
        </div>
        <motion.p
          className="text-xs text-gray-500 mt-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          AI is typing...
        </motion.p>
      </div>
    </div>
  );
}

export default function FloatingCTAs() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load messages from localStorage on mount
  useEffect(() => {
    const savedMessages = localStorage.getItem(CHAT_STORAGE_KEY);
    if (savedMessages) {
      try {
        const parsed = JSON.parse(savedMessages);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMessages(parsed);
        } else {
          // Initialize with welcome message if no saved messages
          setMessages([
            { role: 'bot', text: "Hi! I'm Ali's AI assistant. Ask me about his projects, skills, or experience!" }
          ]);
        }
      } catch {
        setMessages([
          { role: 'bot', text: "Hi! I'm Ali's AI assistant. Ask me about his projects, skills, or experience!" }
        ]);
      }
    } else {
      // Initialize with welcome message
      setMessages([
        { role: 'bot', text: "Hi! I'm Ali's AI assistant. Ask me about his projects, skills, or experience!" }
      ]);
    }
  }, []);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(messages));
    }
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage,
          history: messages.map(m => ({ role: m.role === 'bot' ? 'assistant' : m.role, content: m.text }))
        }),
      });

      const data = await response.json();
      setMessages(prev => [...prev, { role: 'bot', text: data.reply }]);
    } catch {
      setMessages(prev => [...prev, {
        role: 'bot',
        text: "Sorry, I'm having trouble connecting. Reach out to Ali at syedaliaskrizaidi1@gmail.com"
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="hidden lg:block fixed bottom-5 right-5 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute bottom-16 right-0 w-80 bg-bg/30 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="bg-purple p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <motion.div
                    className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <RiRobot3Fill size={16} />
                  </motion.div>
                  <div>
                    <h4 className="font-poppins font-semibold text-sm">AI Assistant</h4>
                    <p className="text-xs opacity-80">Ask me anything about Ali</p>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded">
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="h-64 overflow-y-auto p-4 space-y-3 bg-gray-50">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-xl text-sm ${msg.role === 'user'
                        ? 'bg-purple text-white rounded-br-none'
                        : 'bg-white text-bg backdrop-blur-md text-gray-800 rounded-bl-none shadow'
                      }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isLoading && <TypingIndicator />}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-3 border-t bg-bg/50 backdrop-blur-md">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about Ali's work..."
                  className="flex-1 px-3 py-2 text-sm bg-black border rounded-lg focus:outline-none focus:border-purple"
                  disabled={isLoading}
                />
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className="w-10 h-10 bg-purple text-white rounded-lg flex items-center justify-center disabled:opacity-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send size={16} />
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AI Agent Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
        style={{ background: '#9D4CCC' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ rotate: isOpen ? 180 : 0 }}
      >
        {isOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <motion.div
            className="text-white"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <RiRobot3Fill size={24} />
          </motion.div>
        )}
      </motion.button>
    </div>
  );
}
