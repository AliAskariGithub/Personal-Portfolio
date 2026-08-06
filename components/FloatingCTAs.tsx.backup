'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Trash2, AlertTriangle } from 'react-feather';
import { useState, useRef, useEffect } from 'react';
import { RiRobot3Fill } from 'react-icons/ri';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

const CHAT_STORAGE_KEY = 'ali-askari-chat-messages';

// Popup messages that rotate
const POPUP_MESSAGES = [
  "Hi! Want to know more about Ali?",
  "Ask me about AI projects!",
  "Curious about Ali's skills?",
  "Need a developer? Let's chat!",
  "Explore Ali's portfolio!",
  "Looking for an AI expert?",
  "Hi there! How can I help?",
  "Want to hire Ali? Let's talk!",
  "Check out cool projects!",
  "Ask me anything! I'm here to help"
];

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
  const [showPopup, setShowPopup] = useState(false);
  const [currentPopupIndex, setCurrentPopupIndex] = useState(0);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
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

  // Popup message rotation - every 5-10 seconds
  useEffect(() => {
    if (isOpen) {
      setShowPopup(false);
      return;
    }

    const showRandomPopup = () => {
      const randomDelay = 5000 + Math.random() * 5000;
      return setTimeout(() => {
        setCurrentPopupIndex((prev) => (prev + 1) % POPUP_MESSAGES.length);
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
      }, randomDelay);
    };

    const timeout = showRandomPopup();
    const interval = setInterval(() => {
      const newTimeout = showRandomPopup();
      return () => clearTimeout(newTimeout);
    }, 10000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [isOpen]);

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

  const handleDeleteChat = () => {
    localStorage.removeItem(CHAT_STORAGE_KEY);
    setMessages([
      { role: 'bot', text: "Hi! I'm Ali's AI assistant. Ask me about his projects, skills, or experience!" }
    ]);
    setShowDeleteConfirm(false);
  };

  return (
    <>
      {/* Desktop Chatbot - visible on lg and above */}
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
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setShowDeleteConfirm(true)}
                      className="hover:bg-white/20 p-1.5 rounded transition-colors"
                      title="Clear chat"
                    >
                      <Trash2 size={16} />
                    </button>
                    <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1.5 rounded transition-colors">
                      <X size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Delete Confirmation Modal */}
              <AnimatePresence>
                {showDeleteConfirm && (
                  <motion.div
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.div
                      className="bg-bg border border-purple/30 rounded-xl p-5 mx-4 max-w-[260px]"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <AlertTriangle size={20} className="text-red-400" />
                        <h5 className="font-poppins font-semibold text-white">Clear Chat?</h5>
                      </div>
                      <p className="text-sm text-gray-400 mb-4">
                        This will delete all your conversation history. You can&apos;t undo this action.
                      </p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setShowDeleteConfirm(false)}
                          className="flex-1 px-3 py-2 text-sm rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-800 transition-colors"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleDeleteChat}
                          className="flex-1 px-3 py-2 text-sm rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

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

        {/* Popup Message */}
        <AnimatePresence>
          {showPopup && !isOpen && (
            <motion.div
              className="absolute bottom-16 right-0 w-[200px] px-4 py-2 rounded-xl shadow-lg cursor-pointer"
              style={{
                background: 'rgba(157,76,204,0.95)',
                backdropFilter: 'blur(10px)'
              }}
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              onClick={() => setIsOpen(true)}
            >
              <p className="text-white text-xs font-medium text-center">{POPUP_MESSAGES[currentPopupIndex]}</p>
              <div
                className="absolute -bottom-1 right-6 w-2 h-2 rotate-45"
                style={{ background: 'rgba(157,76,204,0.95)' }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* AI Agent Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg relative overflow-hidden"
          style={{ background: '#9D4CCC' }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
        >
          {/* Animated glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)'
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {isOpen ? (
            <X size={24} className="text-white relative z-10" />
          ) : (
            <motion.div
              className="text-white relative z-10"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <RiRobot3Fill size={24} />
            </motion.div>
          )}

          {/* Pulse ring */}
          {!isOpen && (
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-purple"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.8, 0, 0.8]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          )}
        </motion.button>
      </div>

      {/* Mobile/Tablet Chatbot - Full screen modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 z-[60] bg-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Mobile Header */}
            <div className="bg-purple p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <motion.div
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <RiRobot3Fill size={20} />
                </motion.div>
                <div>
                  <h4 className="font-poppins font-semibold">AI Assistant</h4>
                  <p className="text-xs opacity-80">Ask me anything about Ali</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowDeleteConfirm(true)}
                  className="hover:bg-white/20 p-2 rounded-lg transition-colors"
                >
                  <Trash2 size={20} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-white/20 p-2 rounded-lg transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Mobile Delete Confirmation */}
            <AnimatePresence>
              {showDeleteConfirm && (
                <motion.div
                  className="absolute inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    className="bg-bg border border-purple/30 rounded-xl p-6 mx-6 max-w-[300px]"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <AlertTriangle size={24} className="text-red-400" />
                      <h5 className="font-poppins font-semibold text-white text-lg">Clear Chat?</h5>
                    </div>
                    <p className="text-gray-400 mb-6">
                      This will delete all your conversation history. You can&apos;t undo this action.
                    </p>
                    <div className="flex gap-3">
                      <button
                        onClick={() => setShowDeleteConfirm(false)}
                        className="flex-1 px-4 py-3 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-800 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleDeleteChat}
                        className="flex-1 px-4 py-3 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Mobile Messages */}
            <div className="h-[calc(100vh-140px)] overflow-y-auto p-4 space-y-3 bg-gray-50">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div
                    className={`max-w-[85%] px-4 py-3 rounded-2xl ${msg.role === 'user'
                        ? 'bg-purple text-white rounded-br-md'
                        : 'bg-white text-bg rounded-bl-md shadow'
                      }`}
                  >
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                  </div>
                </motion.div>
              ))}
              {isLoading && <TypingIndicator />}
              <div ref={messagesEndRef} />
            </div>

            {/* Mobile Input */}
            <form onSubmit={handleSubmit} className="absolute bottom-0 left-0 right-0 p-4 border-t bg-bg">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about Ali's work..."
                  className="flex-1 px-4 py-3 text-sm bg-black border-2 rounded-xl focus:outline-none focus:border-purple"
                  disabled={isLoading}
                />
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className="w-12 h-12 bg-purple text-white rounded-xl flex items-center justify-center disabled:opacity-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send size={20} />
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile/Tablet AI Button - Always visible */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed bottom-5 right-5 z-50 w-16 h-16 rounded-full flex items-center justify-center shadow-lg overflow-hidden"
        style={{ background: '#9D4CCC' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Animated glow */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)'
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        <motion.div
          className="text-white relative z-10"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <RiRobot3Fill size={28} />
        </motion.div>

        {/* Pulse ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-purple"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.8, 0, 0.8]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.button>

      {/* Mobile Popup Message */}
      <AnimatePresence>
        {showPopup && !isOpen && (
          <motion.div
            className="lg:hidden fixed bottom-24 right-5 z-50 max-w-[180px] px-4 py-2 rounded-xl shadow-lg cursor-pointer"
            style={{
              background: 'rgba(157,76,204,0.95)',
              backdropFilter: 'blur(10px)'
            }}
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            onClick={() => setIsOpen(true)}
          >
            <p className="text-white text-xs font-medium text-center">{POPUP_MESSAGES[currentPopupIndex]}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
