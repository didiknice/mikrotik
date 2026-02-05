import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopicViewer from './components/TopicViewer';
import AIAssistant from './components/AIAssistant';
import FAQViewer from './components/FAQViewer';
import AboutView from './components/AboutView';
import { MIKROTIK_GUIDES } from './data/guides';
import { AppView } from './types';
import { Network, Search, ArrowRight, Book, Zap, Shield, Cpu, Wifi, Activity, Layers, Lock, Globe, Menu } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.TOPICS);
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleTopicSelect = (id: string) => {
    setSelectedTopicId(id);
    setCurrentView(AppView.GUIDE);
  };

  const selectedTopic = MIKROTIK_GUIDES.find(t => t.id === selectedTopicId);
  
  const filteredTopics = MIKROTIK_GUIDES.filter(topic => 
    topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    topic.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Configuration for Category Colors and Icons
  const getCategoryStyle = (category: string) => {
    switch(category) {
      case 'Basic': return { 
        bg: 'bg-blue-50', border: 'border-blue-100', iconBg: 'bg-blue-500', 
        text: 'text-blue-700', icon: <Layers size={24} className="text-white" />,
        gradient: 'from-blue-500 to-cyan-400'
      };
      case 'Security': return { 
        bg: 'bg-red-50', border: 'border-red-100', iconBg: 'bg-red-500', 
        text: 'text-red-700', icon: <Shield size={24} className="text-white" />,
        gradient: 'from-red-500 to-rose-400'
      };
      case 'Security Hardening': return { 
        bg: 'bg-rose-50', border: 'border-rose-100', iconBg: 'bg-rose-600', 
        text: 'text-rose-800', icon: <Lock size={24} className="text-white" />,
        gradient: 'from-rose-600 to-pink-500'
      };
      case 'Routing': return { 
        bg: 'bg-orange-50', border: 'border-orange-100', iconBg: 'bg-orange-500', 
        text: 'text-orange-700', icon: <Network size={24} className="text-white" />,
        gradient: 'from-orange-500 to-amber-400'
      };
      case 'Management': return { 
        bg: 'bg-purple-50', border: 'border-purple-100', iconBg: 'bg-purple-500', 
        text: 'text-purple-700', icon: <Cpu size={24} className="text-white" />,
        gradient: 'from-purple-500 to-violet-400'
      };
      case 'Wireless': return { 
        bg: 'bg-cyan-50', border: 'border-cyan-100', iconBg: 'bg-cyan-500', 
        text: 'text-cyan-700', icon: <Wifi size={24} className="text-white" />,
        gradient: 'from-cyan-500 to-sky-400'
      };
      case 'Optical': return { 
        bg: 'bg-yellow-50', border: 'border-yellow-100', iconBg: 'bg-yellow-500', 
        text: 'text-yellow-700', icon: <Zap size={24} className="text-white" />,
        gradient: 'from-yellow-400 to-amber-500'
      };
      case 'VPN': return { 
        bg: 'bg-emerald-50', border: 'border-emerald-100', iconBg: 'bg-emerald-500', 
        text: 'text-emerald-700', icon: <Globe size={24} className="text-white" />,
        gradient: 'from-emerald-500 to-teal-400'
      };
      case 'Monitoring': return { 
        bg: 'bg-indigo-50', border: 'border-indigo-100', iconBg: 'bg-indigo-500', 
        text: 'text-indigo-700', icon: <Activity size={24} className="text-white" />,
        gradient: 'from-indigo-500 to-blue-500'
      };
      case 'Advanced Config': return { 
        bg: 'bg-pink-50', border: 'border-pink-100', iconBg: 'bg-pink-500', 
        text: 'text-pink-700', icon: <Zap size={24} className="text-white" />,
        gradient: 'from-pink-500 to-fuchsia-400'
      };
      default: return { 
        bg: 'bg-gray-50', border: 'border-gray-100', iconBg: 'bg-gray-500', 
        text: 'text-gray-700', icon: <Book size={24} className="text-white" />,
        gradient: 'from-gray-500 to-slate-400'
      };
    }
  };

  return (
    <div className="flex h-screen w-full bg-slate-50 font-sans overflow-hidden">
      <Sidebar 
        topics={MIKROTIK_GUIDES}
        currentView={currentView}
        currentTopicId={selectedTopicId}
        onViewChange={setCurrentView}
        onTopicSelect={handleTopicSelect}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Mobile Header */}
        <div className="md:hidden bg-[#0f172a] px-4 py-3 flex items-center justify-between sticky top-0 z-30 shadow-md flex-none">
           <div className="flex items-center gap-3">
              <button 
                onClick={() => setIsSidebarOpen(true)} 
                className="text-white p-2 -ml-2 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Open Menu"
              >
                 <Menu size={24} />
              </button>
              <span className="text-white font-bold text-lg tracking-tight">MikroTik Guide</span>
           </div>
        </div>

        {currentView === AppView.GUIDE && selectedTopic ? (
          <TopicViewer 
            topic={selectedTopic} 
            onBack={() => setCurrentView(AppView.TOPICS)}
            onNavigate={handleTopicSelect}
          />
        ) : currentView === AppView.AI_ASSISTANT ? (
          <AIAssistant />
        ) : currentView === AppView.FAQ ? (
          <FAQViewer />
        ) : currentView === AppView.ABOUT ? (
          <AboutView />
        ) : (
          /* Dashboard / Topic List View */
          <div className="flex-1 overflow-y-auto p-4 md:p-10 scrollbar-thin scrollbar-thumb-gray-300">
            <div className="max-w-6xl mx-auto animate-fade-in">
              
              {/* Hero Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-6 md:p-10 mb-8 text-white shadow-xl shadow-blue-500/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-cyan-400 opacity-20 rounded-full blur-2xl"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <div>
                     <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">Panduan Konfigurasi</h1>
                     <p className="text-blue-100 text-sm md:text-lg max-w-xl leading-relaxed">
                       Kumpulan materi konfigurasi MikroTik dari dasar hingga mahir. 
                       Lengkap dengan CLI dan GUI.
                     </p>
                  </div>
                  
                  {/* Modern Search Bar */}
                  <div className="relative w-full md:w-96">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Search className="text-blue-200" size={20} />
                    </div>
                    <input 
                      type="text" 
                      placeholder="Cari konfigurasi (cth: VLAN, VPN)..." 
                      className="w-full pl-11 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20 transition-all backdrop-blur-sm"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Grid Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredTopics.map((topic, index) => {
                  const style = getCategoryStyle(topic.category);
                  return (
                    <button
                      key={topic.id}
                      onClick={() => handleTopicSelect(topic.id)}
                      className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300 text-left group relative overflow-hidden h-full flex flex-col"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {/* Top Color Line */}
                      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${style.gradient}`}></div>
                      
                      <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 rounded-2xl shadow-md bg-gradient-to-br ${style.gradient}`}>
                          {style.icon}
                        </div>
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${style.bg} ${style.text} border ${style.border}`}>
                          {topic.category}
                        </span>
                      </div>
                      
                      <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors leading-tight">
                        {topic.title}
                      </h3>
                      
                      <p className="text-slate-500 text-sm mb-6 line-clamp-2 leading-relaxed flex-1">
                         Pelajari {topic.steps.length} langkah konfigurasi mendalam untuk topik ini.
                      </p>
                      
                      <div className="mt-auto flex items-center text-sm font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
                        Mulai Belajar 
                        <div className="ml-2 p-1 rounded-full bg-slate-100 group-hover:bg-blue-100 transition-colors">
                           <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {filteredTopics.length === 0 && (
                <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4 text-slate-400">
                    <Search size={32} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800">Tidak ada hasil</h3>
                  <p className="text-slate-500">Coba kata kunci lain atau reset pencarian.</p>
                  <button onClick={() => setSearchQuery('')} className="mt-4 text-blue-600 font-bold hover:underline">
                    Reset Pencarian
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;