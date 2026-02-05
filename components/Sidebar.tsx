import React from 'react';
import { BookOpen, Terminal, Cpu, Network, Shield, Wifi, LayoutDashboard, HelpCircle, Zap, Lock, Sliders, Activity, ShieldCheck, X, Info } from 'lucide-react';
import { AppView, Topic } from '../types';

interface SidebarProps {
  topics: Topic[];
  currentView: AppView;
  currentTopicId: string | null;
  onViewChange: (view: AppView) => void;
  onTopicSelect: (id: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  topics, 
  currentView, 
  currentTopicId, 
  onViewChange, 
  onTopicSelect,
  isOpen,
  onClose
}) => {
  
  const categories = Array.from(new Set(topics.map(t => t.category))) as string[];

  // Helper to get color-coded icons
  const getIcon = (cat: string) => {
    switch(cat) {
      case 'Basic': return <LayoutDashboard size={18} className="text-blue-400" />;
      case 'Security': return <Shield size={18} className="text-red-400" />;
      case 'Routing': return <Network size={18} className="text-orange-400" />;
      case 'Management': return <Cpu size={18} className="text-purple-400" />;
      case 'Wireless': return <Wifi size={18} className="text-cyan-400" />;
      case 'Optical': return <Zap size={18} className="text-yellow-400" />;
      case 'VPN': return <Lock size={18} className="text-emerald-400" />;
      case 'Advanced Config': return <Sliders size={18} className="text-pink-400" />;
      case 'Monitoring': return <Activity size={18} className="text-indigo-400" />;
      case 'Security Hardening': return <ShieldCheck size={18} className="text-rose-500" />;
      default: return <BookOpen size={18} className="text-gray-400" />;
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/80 z-40 md:hidden backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />
      )}

      <div className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-[#0f172a] text-slate-300 flex flex-col h-full border-r border-slate-800 shadow-2xl transition-transform duration-300 ease-in-out flex-shrink-0
        md:translate-x-0 md:static md:inset-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Brand Header */}
        <div className="p-6 flex items-center justify-between gap-4 bg-gradient-to-r from-slate-900 to-slate-800 border-b border-slate-800 flex-none">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 text-white flex-shrink-0 ring-2 ring-white/10">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 7V17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 7V17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 12V22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-extrabold tracking-tight text-white">MikroTik</h1>
              <span className="text-[9px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 tracking-[0.2em] uppercase">Master Guide</span>
            </div>
          </div>
          
          {/* Close Button Mobile */}
          <button 
            onClick={onClose}
            className="md:hidden text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Content (Menu & Topics) */}
        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-8 scrollbar-thin scrollbar-thumb-slate-700">
          
          {/* Top Menu Section (Tools & Main) */}
          <div className="space-y-2">
            
             {/* AI Assistant */}
             <button
              onClick={() => {
                onViewChange(AppView.AI_ASSISTANT);
                onClose();
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ease-in-out border border-transparent group ${
                currentView === AppView.AI_ASSISTANT 
                  ? 'bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg shadow-purple-500/25 translate-x-1' 
                  : 'bg-slate-800/30 text-purple-300 hover:bg-slate-800 hover:text-white border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className={`${currentView === AppView.AI_ASSISTANT ? 'text-white' : 'text-purple-400'}`}>
                <Terminal size={20} />
              </div>
              <div className="flex flex-col items-start text-left">
                 <span className="font-bold text-sm">AI Assistant</span>
                 <span className={`text-[10px] ${currentView === AppView.AI_ASSISTANT ? 'text-purple-100' : 'text-slate-500'} font-medium`}>Auto Script Generator</span>
              </div>
            </button>

            {/* FAQ */}
            <button
              onClick={() => {
                onViewChange(AppView.FAQ);
                onClose();
              }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-300 ease-in-out group ${
                currentView === AppView.FAQ 
                  ? 'bg-slate-800 text-orange-400 shadow-sm border border-slate-700 translate-x-1' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
               <div className={`${currentView === AppView.FAQ ? 'text-orange-400' : 'text-slate-500 group-hover:text-orange-400'}`}>
                <HelpCircle size={18} />
              </div>
              <span className="font-semibold text-sm">FAQ & Troubleshoot</span>
            </button>

            {/* Info Aplikasi */}
            <button
              onClick={() => {
                onViewChange(AppView.ABOUT);
                onClose();
              }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-300 ease-in-out group ${
                currentView === AppView.ABOUT
                  ? 'bg-slate-800 text-sky-400 shadow-sm border border-slate-700 translate-x-1' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
               <div className={`${currentView === AppView.ABOUT ? 'text-sky-400' : 'text-slate-500 group-hover:text-sky-400'}`}>
                <Info size={18} />
              </div>
              <span className="font-semibold text-sm">Info Aplikasi</span>
            </button>

            {/* Divider */}
            <div className="py-2">
               <div className="h-px bg-slate-800 w-full"></div>
            </div>

            {/* Daftar Panduan (Main List) */}
            <button
              onClick={() => {
                onViewChange(AppView.TOPICS);
                onClose();
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ease-in-out group ${
                currentView === AppView.TOPICS 
                  ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/25 translate-x-1' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <BookOpen size={20} className={currentView === AppView.TOPICS ? 'text-white' : 'group-hover:text-blue-400 transition-colors'} />
              <div className="flex flex-col items-start">
                <span className="font-bold text-sm">Daftar Panduan</span>
              </div>
            </button>
          </div>

          {/* Topics List Categories */}
          <div className="pt-2">
             <div className="px-4 mb-4">
               <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                  Kategori Materi
               </span>
             </div>

            {categories.map(category => (
              <div key={category} className="animate-fade-in mb-6 last:mb-0">
                <h3 className="px-4 text-[11px] font-extrabold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                  {getIcon(category)}
                  {category}
                </h3>
                <div className="space-y-1 relative">
                  {/* Vertical line for connecting items */}
                  <div className="absolute left-[21px] top-2 bottom-2 w-[2px] bg-slate-800 rounded-full"></div>
                  
                  {topics.filter(t => t.category === category).map(topic => (
                    <button
                      key={topic.id}
                      onClick={() => {
                        onViewChange(AppView.GUIDE);
                        onTopicSelect(topic.id);
                        onClose();
                      }}
                      className={`relative w-full text-left pl-10 pr-3 py-2 text-[13px] rounded-lg transition-all duration-300 ease-in-out truncate leading-relaxed ${
                        currentView === AppView.GUIDE && currentTopicId === topic.id
                          ? 'text-cyan-300 bg-slate-800/50 font-semibold translate-x-1' 
                          : 'text-slate-400 hover:text-white hover:bg-slate-800/30'
                      }`}
                    >
                       {currentView === AppView.GUIDE && currentTopicId === topic.id && (
                         <div className="absolute left-[19px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-fade-in"></div>
                       )}
                      {topic.title}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;