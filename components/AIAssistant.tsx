import React, { useState, useRef, useEffect } from 'react';
import { generateMikrotikConfig } from '../services/geminiService';
import { Send, Bot, User, Loader2, Copy, Check, Terminal, Sparkles, AlertCircle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface Message {
  id: string;
  role: 'user' | 'model';
  content: string;
  timestamp: Date;
}

const AIAssistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'model',
      content: 'Halo! Saya adalah **AI Network Architect**. Saya bisa membuatkan script konfigurasi RouterOS lengkap, menjelaskan topologi, atau membantu troubleshooting. \n\nCoba tanya: *"Buatkan script load balance PCC untuk 2 ISP"*',
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      // Panggil service tanpa perlu pass API Key (sudah di-handle di service)
      const responseText = await generateMikrotikConfig(input);
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        content: responseText,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error: any) {
      console.error(error);
      const errorContent = `**Error:** ${error.message}\n\nSilakan coba lagi beberapa saat.`;
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'model',
        content: errorContent,
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Custom renderer for ReactMarkdown
  const MarkdownComponents = {
    code({ node, inline, className, children, ...props }: any) {
      const match = /language-(\w+)/.exec(className || '');
      const codeText = String(children).replace(/\n$/, '');
      
      if (!inline && match) {
        const id = Math.random().toString(36).substr(2, 9);
        return (
          <div className="my-4 rounded-xl overflow-hidden border border-slate-700 bg-[#0f172a] shadow-2xl relative group">
            <div className="bg-[#1e293b] px-4 py-2 flex items-center justify-between border-b border-slate-700">
               <div className="flex items-center gap-2 text-xs text-blue-300 font-mono font-bold uppercase tracking-wider">
                 <Terminal size={12} />
                 <span>RouterOS Script</span>
               </div>
               <button 
                  onClick={() => handleCopy(codeText, id)}
                  className="text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 p-1.5 rounded transition-colors"
               >
                 {copiedId === id ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
               </button>
            </div>
            <div className="p-4 overflow-x-auto scrollbar-thin scrollbar-thumb-slate-600">
              <code className={`${className} text-sm font-mono text-cyan-300 whitespace-pre-wrap leading-relaxed`} {...props}>
                {children}
              </code>
            </div>
          </div>
        );
      }
      return (
        <code className="bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded-md text-sm font-mono font-medium" {...props}>
          {children}
        </code>
      );
    }
  };

  // --- SCREEN: CHAT INTERFACE ---
  return (
    <div className="flex flex-col h-full bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20 -mr-20 -mt-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-20 -ml-20 -mb-20 pointer-events-none"></div>

      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 md:px-8 py-4 shadow-sm z-10 flex items-center justify-between">
        <div>
           <h1 className="text-lg md:text-xl font-extrabold text-slate-800 flex items-center gap-2">
            <div className="p-2 bg-gradient-to-tr from-purple-600 to-fuchsia-600 rounded-lg text-white shadow-lg shadow-purple-500/30">
               <Sparkles size={18} />
            </div>
            AI Network Architect
           </h1>
           <p className="text-xs font-medium text-slate-500 ml-11 md:ml-12 flex items-center gap-1">
             Powered by Google Gemini
           </p>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6 md:space-y-8 scrollbar-thin scrollbar-thumb-slate-300 z-0">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex items-start gap-3 md:gap-4 max-w-4xl mx-auto ${msg.role === 'user' ? 'flex-row-reverse' : 'animate-fade-in'}`}
          >
            <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-md ${
              msg.role === 'user' 
                ? 'bg-slate-800 text-white' 
                : 'bg-gradient-to-br from-purple-500 to-fuchsia-600 text-white'
            }`}>
              {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
            </div>
            
            <div className={`flex-1 rounded-2xl p-4 md:p-6 shadow-sm relative ${
              msg.role === 'user' 
                ? 'bg-white text-slate-800 border border-slate-100 rounded-tr-none' 
                : 'bg-white text-slate-800 border border-purple-100 rounded-tl-none ring-1 ring-purple-100'
            }`}>
              {msg.role === 'user' ? (
                <p className="whitespace-pre-wrap leading-relaxed font-medium text-sm md:text-base">{msg.content}</p>
              ) : (
                <div className="prose prose-sm max-w-none prose-slate prose-headings:font-bold prose-headings:text-slate-800 prose-p:text-slate-600 prose-strong:text-purple-700 prose-ul:marker:text-purple-500">
                   <ReactMarkdown components={MarkdownComponents}>
                     {msg.content}
                   </ReactMarkdown>
                </div>
              )}
              <div className="text-[10px] font-bold text-slate-400 mt-2 flex justify-end">
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex items-center gap-4 max-w-4xl mx-auto animate-pulse">
             <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-600 text-white flex items-center justify-center shadow-md">
                <Bot size={16} />
             </div>
             <div className="bg-white px-6 py-4 rounded-2xl rounded-tl-none border border-purple-100 shadow-sm flex items-center gap-3">
                <Loader2 size={18} className="animate-spin text-purple-600" />
                <span className="text-slate-500 text-sm font-semibold">Sedang menganalisis...</span>
             </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="bg-white/90 backdrop-blur-lg border-t border-slate-200 p-4 md:p-6 z-10">
        <div className="max-w-4xl mx-auto relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-fuchsia-400 rounded-xl opacity-20 blur group-focus-within:opacity-40 transition-opacity"></div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ketik permintaan konfigurasi Anda di sini..."
            className="w-full bg-white border border-slate-200 text-slate-800 rounded-xl pl-4 pr-12 md:pl-5 md:pr-14 py-3 md:py-4 focus:ring-0 focus:border-transparent focus:outline-none resize-none shadow-sm relative z-10 text-sm font-medium placeholder:text-slate-400"
            rows={1}
            style={{ minHeight: '50px' }}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="absolute right-2 top-2 md:right-3 md:top-3 p-2 md:p-2.5 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white rounded-lg hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all z-20"
          >
            <Send size={16} />
          </button>
        </div>
        <div className="flex items-center justify-center gap-2 mt-2 md:mt-3 text-[10px] md:text-xs text-slate-400 font-medium text-center">
           <AlertCircle size={10} />
           <span>Hasil script AI mungkin perlu penyesuaian. Selalu validasi sebelum deploy.</span>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;