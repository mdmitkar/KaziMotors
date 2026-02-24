import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Bot, User, Sparkles } from "lucide-react";
import Fuse from "fuse.js";
import { chatData, synonymMap } from "../../data/chatData";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hi! 👋 I can answer questions about Kazi Motors. Ask me anything!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [siteContent, setSiteContent] = useState([]);
  const messagesEndRef = useRef(null);
  const [suggestions] = useState(["Services", "Contact", "Owner", "Location"]);

  // Load scanned content on mount
  useEffect(() => {
    fetch("/bot-memory.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Bot memory loaded:", data.length, "items");
        setSiteContent(data);
      })
      .catch((err) => console.error("Failed to load bot memory:", err));
  }, []);

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  const normalizeText = (text) => {
    return text
      .toLowerCase()
      .split(" ")
      .map((word) => synonymMap[word] || word)
      .join(" ");
  };

  const findAnswer = (query) => {
    const normalizedQuery = normalizeText(query);

    // 1. Fuzzy Match Manual Intents
    // Flatten intents for fuzzy searching
    const intentList = chatData.flatMap((intent) =>
      intent.keywords.map((keyword) => ({
        topic: intent.topic,
        keyword,
        content: intent.content,
      })),
    );

    const intentFuse = new Fuse(intentList, {
      keys: ["keyword"],
      threshold: 0.3, // Allow minor typos (like hiii -> hi)
      distance: 10,
    });

    const intentResults = intentFuse.search(normalizedQuery);
    if (intentResults.length > 0) {
      return intentResults[0].item.content;
    }

    // 2. Fuzzy Search in Scanned Content
    if (siteContent.length > 0) {
      const fuse = new Fuse(siteContent, {
        keys: ["text"],
        threshold: 0.4, // Lower = stricter
        distance: 100,
      });

      const results = fuse.search(normalizedQuery);
      if (results.length > 0) {
        // Return top match
        return `Here's what I found on our website:\n\n"${results[0].item.text}"`;
      }
    }

    // 3. Fallback
    return "I'm not sure about that, but you can browse our [Services](/services) or [Contact Us](/contact) for more help.";
  };

  const handleSend = async (text = input) => {
    if (!text.trim()) return;

    // User Message
    const userMsg = { type: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate thinking delay
    setTimeout(() => {
      const answer = findAnswer(text);
      setMessages((prev) => [...prev, { type: "bot", text: answer }]);
      setIsTyping(false);
    }, 800);
  };

  const parseMarkdown = (text) => {
    // Convert [Link Text](url) to <a href="url">Link Text</a>
    const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
    return parts.map((part, index) => {
      const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (match) {
        return (
          <a
            key={index}
            href={match[2]}
            className="text-yellow-400 hover:text-yellow-300 font-medium hover:underline"
            target={match[2].startsWith("http") ? "_blank" : "_self"}
            rel="noopener noreferrer"
          >
            {match[1]}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black p-1 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center group border border-yellow-400/50"
        >
          <img
            src="/assets/datamatex-ai-bot.png"
            alt="Chat"
            className="w-14 h-14 object-cover rounded-full group-hover:rotate-12 transition-transform"
          />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-zinc-900 border border-zinc-800 w-[360px] h-[550px] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-zinc-800 p-4 flex justify-between items-center border-b border-zinc-700">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center relative">
                <img
                  src="/assets/datamatex-ai-bot.png"
                  alt="Bot"
                  className="w-full h-full object-cover rounded-full"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-zinc-800 rounded-full"></span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg font-oswald tracking-wide">
                  Datamatex AI Bot
                </h3>
                <p className="text-zinc-400 text-xs flex items-center gap-1">
                  <Sparkles size={10} className="text-yellow-500" /> Online
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-zinc-400 hover:text-white hover:bg-zinc-700 p-2 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black custom-scrollbar">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-3 ${msg.type === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.type === "bot" && (
                  <div className="w-8 h-8 bg-yellow-600 rounded-full flex-shrink-0 flex items-center justify-center mt-1 border border-yellow-500/20">
                    <img
                      src="/assets/datamatex-ai-bot.png"
                      alt="Bot"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                )}

                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                    msg.type === "user"
                      ? "bg-zinc-800 text-white rounded-br-none border border-zinc-700"
                      : "bg-zinc-900 text-zinc-100 rounded-bl-none border border-zinc-800"
                  }`}
                >
                  {parseMarkdown(msg.text)}
                </div>

                {msg.type === "user" && (
                  <div className="w-8 h-8 bg-zinc-800 rounded-full flex-shrink-0 flex items-center justify-center mt-1 border border-zinc-700">
                    <User size={14} className="text-zinc-400" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 bg-yellow-600 rounded-full flex-shrink-0 flex items-center justify-center mt-1 border border-yellow-500/20">
                  <img
                    src="/assets/datamatex-ai-bot.png"
                    alt="Bot"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="bg-zinc-900 p-3 rounded-2xl rounded-bl-none border border-zinc-800 flex gap-1 items-center">
                  <span
                    className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  ></span>
                  <span
                    className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  ></span>
                  <span
                    className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  ></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Chips */}
          <div className="px-4 py-2 flex gap-2 overflow-x-auto custom-scrollbar bg-zinc-900 border-t border-zinc-800">
            {suggestions.map((chip) => (
              <button
                key={chip}
                onClick={() => handleSend(chip)}
                className="whitespace-nowrap px-3 py-1 bg-zinc-800 text-zinc-300 text-xs rounded-full border border-zinc-700 hover:bg-yellow-600 hover:text-black hover:border-yellow-500 transition-colors duration-300"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-zinc-800 border-t border-zinc-700">
            <div className="flex gap-2 relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask e.g., 'What are your prices?'..."
                className="flex-1 bg-zinc-900 text-white placeholder-zinc-500 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-yellow-500 border border-zinc-700 text-sm transition-all"
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim()}
                className="bg-yellow-500 text-black p-3 rounded-xl hover:bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
              >
                <Send size={18} />
              </button>
            </div>
            <div className="text-center mt-2">
              <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">
                Powered by Offline AI
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
