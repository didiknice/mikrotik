import React, { useState } from 'react';
import { Topic, Step } from '../types';
import { MIKROTIK_GUIDES } from '../data/guides';
import { ArrowRight, Copy, Check, MousePointer2, Terminal as TerminalIcon, Home, ChevronRight, ChevronLeft, Image as ImageIcon, ExternalLink, BookOpen } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface TopicViewerProps {
  topic: Topic;
  onBack: () => void;
  onNavigate: (id: string) => void;
}

const TopicViewer: React.FC<TopicViewerProps> = ({ topic, onBack, onNavigate }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Logic for Navigation Buttons
  const currentIndex = MIKROTIK_GUIDES.findIndex(t => t.id === topic.id);
  const prevTopic = MIKROTIK_GUIDES[currentIndex - 1];
  const nextTopic = MIKROTIK_GUIDES[currentIndex + 1];

  const MarkdownRenderer = ({ content, className }: { content: string, className?: string }) => (
    <div className={className}>
      <ReactMarkdown
        components={{
          a: ({ node, href, children, ...props }) => {
            const isInternal = href?.startsWith('topic://');
            if (isInternal) {
              const topicId = href?.replace('topic://', '') || '';
              return (
                <button
                  onClick={() => onNavigate(topicId)}
                  className="text-blue-600 hover:text-blue-800 font-bold hover:underline inline transition-colors"
                  title="Lihat Panduan Terkait"
                >
                  {children}
                </button>
              );
            }
            return (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center gap-0.5 font-medium"
                {...props}
              >
                {children}
                <ExternalLink size={12} className="mb-0.5" />
              </a>
            );
          },
          p: ({children}) => <span className="block mb-2 last:mb-0 leading-relaxed">{children}</span>,
          strong: ({children}) => <span className="font-bold text-slate-800">{children}</span>,
          code: ({children}) => <code className="bg-slate-100 px-1 py-0.5 rounded text-pink-600 font-mono text-sm">{children}</code>
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );

  return (
    <div className="flex-1 h-full overflow-y-auto bg-slate-50 scrollbar-thin scrollbar-thumb-slate-300">
      {/* Dynamic Header Background */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white sticky top-0 z-20 shadow-lg">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
        
        <div className="max-w-6xl mx-auto px-4 md:px-10 py-6 relative z-10">
          {/* Breadcrumb Navigation - Optimized for Mobile */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-2 text-xs md:text-sm text-blue-200 mb-6 font-medium leading-none">
            <button 
              onClick={onBack}
              className="flex items-center hover:text-white transition-colors focus:outline-none bg-white/10 px-2.5 py-1.5 rounded-lg hover:bg-white/20 flex-shrink-0 active:scale-95 transform duration-200"
            >
              <Home size={14} />
              <span className="ml-2 hidden sm:inline">Dashboard</span>
            </button>
            
            <ChevronRight size={14} className="opacity-50 flex-shrink-0" />
            
            <span className="bg-blue-500/20 px-2.5 py-1 rounded-md text-blue-100 whitespace-nowrap border border-blue-400/20 flex-shrink-0">
              {topic.category}
            </span>
            
            <ChevronRight size={14} className="opacity-50 flex-shrink-0" />
            
            <span className="text-white/90 font-semibold truncate max-w-[160px] sm:max-w-xs md:max-w-md" title={topic.title}>
              {topic.title}
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="w-full">
              <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white mb-3 leading-tight drop-shadow-sm break-words">
                {topic.title}
              </h1>
              <div className="flex items-center gap-3 text-sm flex-wrap">
                <span className={`px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider border ${
                  topic.difficulty === 'Beginner' ? 'bg-green-500/20 border-green-400 text-green-300' : 
                  topic.difficulty === 'Intermediate' ? 'bg-yellow-500/20 border-yellow-400 text-yellow-300' : 
                  'bg-red-500/20 border-red-400 text-red-300'
                }`}>
                  {topic.difficulty}
                </span>
                <span className="text-blue-400 hidden md:inline">•</span>
                <span className="text-blue-200 font-medium flex items-center gap-1">
                   <BookOpen size={14} /> {topic.steps.length} Langkah
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Steps Content */}
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-6 md:py-10 space-y-12 md:space-y-16">
        {topic.steps.map((step, index) => (
          <div key={step.id} className="relative group animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
            
            {/* Step Connector Line */}
            {index !== topic.steps.length - 1 && (
              <div className="absolute left-[23px] top-16 bottom-[-64px] w-[2px] bg-slate-200 -z-10 group-hover:bg-blue-200 transition-colors hidden md:block"></div>
            )}

            <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6 mb-6 md:mb-8">
              {/* Step Number Bubble */}
              <div className="flex items-center gap-4 md:block">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-lg shadow-blue-500/30 ring-4 ring-slate-50 z-10 transform md:group-hover:scale-110 transition-transform duration-300">
                  {index + 1}
                </div>
                {/* Mobile Title Layout */}
                <h2 className="text-xl font-bold text-slate-800 md:hidden">{step.title}</h2>
              </div>

              <div className="flex-1 pt-1">
                <h2 className="text-2xl font-bold text-slate-800 mb-2 hidden md:block group-hover:text-blue-700 transition-colors">{step.title}</h2>
                <div className="text-slate-600 text-base md:text-lg leading-relaxed">
                   <MarkdownRenderer content={step.description} />
                </div>
              </div>
            </div>

            {/* Split View */}
            <div className="ml-0 md:ml-[72px] grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8">
              
              {/* GUI Card */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group/card">
                <div className="bg-slate-50 px-5 py-3 border-b border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-blue-100 text-blue-600 rounded-lg">
                       <MousePointer2 size={16} />
                    </div>
                    <span className="font-bold text-slate-700 text-sm tracking-wide">WinBox / WebFig (GUI)</span>
                  </div>
                </div>
                
                <div className="p-5 md:p-6 flex-1 flex flex-col">
                  <ul className="space-y-4 mb-8 flex-1">
                    {step.guiInstructions.map((instruction, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed group/item">
                        <div className="mt-1 w-5 h-5 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center flex-shrink-0 group-hover/item:bg-blue-500 group-hover/item:text-white transition-colors">
                           <ArrowRight size={12} />
                        </div>
                        <span className="group-hover/item:text-slate-900 transition-colors">{instruction}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Visualization Image Area */}
                  <div className="mt-auto">
                    <div className="flex items-center gap-2 mb-3">
                       <ImageIcon size={14} className="text-slate-400" />
                       <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Visualisasi</span>
                    </div>
                    <div className="rounded-xl border border-slate-200 overflow-hidden bg-slate-50 relative group/img aspect-video shadow-inner">
                       <img 
                         src={step.imageUrl || `https://placehold.co/800x450/f1f5f9/475569?text=Winbox+GUI&font=roboto`}
                         alt={`Visualisasi ${step.title}`}
                         className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
                         loading="lazy"
                       />
                       {!step.imageUrl && (
                         <div className="absolute inset-0 flex items-center justify-center bg-slate-100/50 backdrop-blur-[1px]">
                           <span className="text-slate-400 text-sm font-medium">No Preview</span>
                         </div>
                       )}
                    </div>
                  </div>
                </div>
              </div>

              {/* CLI Card */}
              <div className="bg-[#1e293b] rounded-2xl border border-slate-700/50 overflow-hidden shadow-lg shadow-slate-900/10 flex flex-col h-full transform md:hover:-translate-y-1 transition-transform duration-300">
                <div className="bg-[#0f172a] px-5 py-3 border-b border-slate-700 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-green-500/20 text-green-400 rounded-lg">
                      <TerminalIcon size={16} />
                    </div>
                    <span className="font-bold text-slate-200 text-sm tracking-wide">Terminal (CLI)</span>
                  </div>
                  <button 
                    onClick={() => handleCopy(step.cliCommand, step.id)}
                    className="text-slate-400 hover:text-white hover:bg-white/10 transition-all p-1.5 rounded-lg flex items-center gap-2 text-xs font-medium"
                    title="Copy Command"
                  >
                    {copiedId === step.id ? (
                      <>
                        <Check size={14} className="text-green-400" /> Copied
                      </>
                    ) : (
                      <>
                        <Copy size={14} /> Copy Code
                      </>
                    )}
                  </button>
                </div>
                <div className="p-4 md:p-6 font-mono text-sm overflow-x-auto flex-1 bg-[#1e293b] scrollbar-thin scrollbar-thumb-slate-600">
                  <pre className="text-green-400 whitespace-pre-wrap leading-relaxed selection:bg-green-900 selection:text-white text-xs md:text-sm">{step.cliCommand}</pre>
                </div>
              </div>

            </div>
            
            {/* Explanation Note */}
            <div className="ml-0 md:ml-[72px] mt-6 relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 shadow-sm">
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
              <div className="p-4 md:p-5 flex gap-4">
                 <div className="mt-1 text-blue-600 bg-white p-2 rounded-full shadow-sm h-fit hidden md:block">
                    <BookOpen size={18} />
                 </div>
                 <div className="text-sm text-slate-700 leading-relaxed">
                   <h4 className="font-bold text-blue-800 mb-1 flex items-center gap-2">
                     <BookOpen size={16} className="md:hidden" />
                     Penjelasan Teknis
                   </h4>
                   <MarkdownRenderer content={step.explanation} className="inline" />
                 </div>
              </div>
            </div>

          </div>
        ))}
        
        {/* Navigation Footer */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Previous Button */}
            {prevTopic ? (
              <button
                onClick={() => onNavigate(prevTopic.id)}
                className="group relative flex flex-col items-start p-5 rounded-2xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md text-left w-full"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 group-hover:text-blue-500">
                  <ChevronLeft size={16} />
                  Sebelumnya
                </div>
                <div className="text-slate-800 font-bold text-lg group-hover:text-blue-700">
                  {prevTopic.title}
                </div>
                <div className="text-xs text-slate-500 mt-1">{prevTopic.category}</div>
              </button>
            ) : (
              <div /> // Spacer for layout
            )}

            {/* Next Button */}
            {nextTopic ? (
              <button
                onClick={() => onNavigate(nextTopic.id)}
                className="group relative flex flex-col items-end p-5 rounded-2xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md text-right w-full"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 group-hover:text-blue-500">
                  Selanjutnya
                  <ChevronRight size={16} />
                </div>
                <div className="text-slate-800 font-bold text-lg group-hover:text-blue-700">
                  {nextTopic.title}
                </div>
                <div className="text-xs text-slate-500 mt-1">{nextTopic.category}</div>
              </button>
            ) : (
              <div /> // Spacer for layout
            )}
          </div>
        </div>

        <div className="h-10 flex items-center justify-center text-slate-400 text-sm font-medium mt-6">
           🎉 Anda telah mencapai akhir materi ini
        </div> 
      </div>
    </div>
  );
};

export default TopicViewer;