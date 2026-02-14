import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Bot, User, Sparkles } from 'lucide-react';
import Fuse from 'fuse.js';
import { chatData, synonymMap } from '../../data/chatData';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'bot', text: 'Hi! 👋 I can answer questions about Kazi Motors. Ask me anything!' }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [siteContent, setSiteContent] = useState([]);
    const messagesEndRef = useRef(null);
    const [suggestions] = useState(['Services', 'Contact', 'Owner', 'Location']);

    // Load scanned content on mount
    useEffect(() => {
        fetch('/bot-memory.json')
            .then(res => res.json())
            .then(data => {
                console.log("Bot memory loaded:", data.length, "items");
                setSiteContent(data);
            })
            .catch(err => console.error("Failed to load bot memory:", err));
    }, []);

    // Auto-scroll to bottom
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping, isOpen]);

    const normalizeText = (text) => {
        return text.toLowerCase().split(' ').map(word => synonymMap[word] || word).join(' ');
    };

    const findAnswer = (query) => {
        const normalizedQuery = normalizeText(query);

        // 1. Check Manual Intents (Exact Match on Keywords)
        for (const intent of chatData) {
            if (intent.keywords.some(k => normalizedQuery.includes(k))) {
                return intent.content;
            }
        }

        // 2. Fuzzy Search in Scanned Content
        if (siteContent.length > 0) {
            const fuse = new Fuse(siteContent, {
                keys: ['text'],
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
        const userMsg = { type: 'user', text };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        // Simulate thinking delay
        setTimeout(() => {
            const answer = findAnswer(text);
            setMessages(prev => [...prev, { type: 'bot', text: answer }]);
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
                        className="text-blue-400 hover:underline font-medium"
                        target={match[2].startsWith('http') ? '_blank' : '_self'}
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
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center group"
                >
                    <MessageCircle size={28} className="group-hover:rotate-12 transition-transform" />
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="bg-slate-900 border border-slate-700 w-[360px] h-[550px] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
                    {/* Header */}
                    <div className="bg-slate-800 p-4 flex justify-between items-center border-b border-slate-700">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center relative">
                                <Bot size={20} className="text-white" />
                                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-slate-800 rounded-full"></span>
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-lg">Kazi AI</h3>
                                <p className="text-slate-400 text-xs flex items-center gap-1"><Sparkles size={10} /> Online</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-slate-400 hover:text-white hover:bg-slate-700 p-2 rounded-full transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900 custom-scrollbar">
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`flex gap-3 ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                {msg.type === 'bot' && (
                                    <div className="w-8 h-8 bg-indigo-600 rounded-full flex-shrink-0 flex items-center justify-center mt-1">
                                        <Bot size={14} className="text-white" />
                                    </div>
                                )}

                                <div
                                    className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${msg.type === 'user'
                                            ? 'bg-blue-600 text-white rounded-br-none'
                                            : 'bg-slate-800 text-slate-100 rounded-bl-none border border-slate-700'
                                        }`}
                                >
                                    {parseMarkdown(msg.text)}
                                </div>

                                {msg.type === 'user' && (
                                    <div className="w-8 h-8 bg-slate-700 rounded-full flex-shrink-0 flex items-center justify-center mt-1">
                                        <User size={14} className="text-slate-300" />
                                    </div>
                                )}
                            </div>
                        ))}

                        {isTyping && (
                            <div className="flex gap-3 justify-start">
                                <div className="w-8 h-8 bg-indigo-600 rounded-full flex-shrink-0 flex items-center justify-center mt-1">
                                    <Bot size={14} className="text-white" />
                                </div>
                                <div className="bg-slate-800 p-3 rounded-2xl rounded-bl-none border border-slate-700 flex gap-1 items-center">
                                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Quick Chips */}
                    <div className="px-4 py-2 flex gap-2 overflow-x-auto custom-scrollbar bg-slate-900 border-t border-slate-800">
                        {suggestions.map(chip => (
                            <button
                                key={chip}
                                onClick={() => handleSend(chip)}
                                className="whitespace-nowrap px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full border border-slate-700 hover:bg-slate-700 hover:text-white transition-colors"
                            >
                                {chip}
                            </button>
                        ))}
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-slate-800 border-t border-slate-700">
                        <div className="flex gap-2 relative">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Ask e.g., 'What are your prices?'..."
                                className="flex-1 bg-slate-900 text-white placeholder-slate-500 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-slate-700 text-sm"
                            />
                            <button
                                onClick={() => handleSend()}
                                disabled={!input.trim()}
                                className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                <Send size={18} />
                            </button>
                        </div>
                        <div className="text-center mt-2">
                            <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Powered by Offline AI</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
