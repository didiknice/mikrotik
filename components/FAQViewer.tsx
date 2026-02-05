import React, { useState, useMemo } from 'react';
import { MIKROTIK_FAQS } from '../data/faqs';
import { ChevronDown, ChevronUp, HelpCircle, Search, AlertTriangle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import Fuse from 'fuse.js';

const FAQViewer: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openId, setOpenId] = useState<string | null>(null);

  // Initialize Fuse instance with optimized settings
  const fuse = useMemo(() => new Fuse(MIKROTIK_FAQS, {
    keys: [
      { name: 'question', weight: 0.7 }, // Prioritaskan judul pertanyaan
      { name: 'answer', weight: 0.2 },   // Bobot lebih rendah untuk isi jawaban
      { name: 'category', weight: 0.1 }
    ],
    threshold: 0.4,       // Toleransi typo (0.0 = exact, 1.0 = loose)
    distance: 100,        // Jarak toleransi fuzzy
    minMatchCharLength: 2,// Minimal karakter untuk match
    shouldSort: true,     // Urutkan berdasarkan relevansi (score)
    includeScore: true,
    ignoreLocation: true, // Cari kata di posisi mana saja
  }), []);

  // Advanced Search Logic
  const filteredFaqs = useMemo(() => {
    if (!searchQuery.trim()) return MIKROTIK_FAQS;

    const results = fuse.search(searchQuery);
    return results.map(result => result.item);
  }, [searchQuery, fuse]);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className="flex-1 overflow-y-auto bg-slate-50 p-4 md:p-10 h-full scrollbar-thin scrollbar-thumb-slate-300">
      <div className="max-w-3xl mx-auto animate-fade-in">
        <div className="mb-6 md:mb-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-gradient-to-br from-orange-400 to-amber-500 text-white shadow-xl shadow-orange-500/20 mb-4 md:mb-6 transform hover:rotate-6 transition-transform">
            <HelpCircle size={32} className="md:w-10 md:h-10" />
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">FAQ & Troubleshooting</h1>
          <p className="text-slate-500 mt-2 font-medium text-sm md:text-base">Database solusi cepat untuk masalah umum MikroTik.</p>
        </div>

        <div className="relative mb-6 md:mb-8 group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
             <Search className="text-slate-400" size={20} />
          </div>
          <input 
            type="text" 
            placeholder="Cari masalah (contoh: winbox, reset)..." 
            className="w-full pl-11 pr-12 py-3 md:py-4 bg-white border border-slate-200 rounded-2xl text-slate-800 placeholder-slate-400 focus:ring-4 focus:ring-orange-100 focus:border-orange-400 transition-all shadow-sm group-hover:shadow-md text-sm md:text-base"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button 
              onClick={clearSearch}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-200 transition-colors"
            >
              <div className="w-4 h-4 flex items-center justify-center font-bold text-xs">✕</div>
            </button>
          )}
        </div>

        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = searchQuery.length > 0 ? true : openId === faq.id;

            return (
              <div key={faq.id} className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                 isOpen ? 'border-orange-200 shadow-lg shadow-orange-500/5' : 'border-slate-200 shadow-sm hover:border-orange-200 hover:shadow-md'
              }`}>
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-4 py-4 md:px-6 md:py-5 flex items-start justify-between text-left focus:outline-none"
                >
                  <div className="flex flex-col gap-2">
                    <span className={`w-fit px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      faq.category === 'Security' ? 'bg-red-50 text-red-600 border border-red-100' :
                      faq.category === 'Troubleshooting' ? 'bg-amber-50 text-amber-600 border border-amber-100' :
                      'bg-blue-50 text-blue-600 border border-blue-100'
                    }`}>
                      {faq.category}
                    </span>
                    <span className={`text-base md:text-lg font-bold transition-colors ${isOpen ? 'text-orange-600' : 'text-slate-800'}`}>
                      {faq.question}
                    </span>
                  </div>
                  <div className={`mt-1 p-1.5 md:p-2 rounded-full transition-all flex-shrink-0 ${isOpen ? 'bg-orange-50 text-orange-600 rotate-180' : 'bg-slate-50 text-slate-400'}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>
                
                {isOpen && (
                  <div className="px-4 pb-4 md:px-6 md:pb-6 pt-0 animate-fade-in">
                    <div className="h-px w-full bg-slate-100 mb-4"></div>
                    <div className="text-slate-600 leading-relaxed prose prose-sm max-w-none prose-strong:text-slate-800 prose-a:text-orange-600">
                      <ReactMarkdown>{faq.answer}</ReactMarkdown>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-300">
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-400">
                 <AlertTriangle size={32} />
              </div>
              <p className="text-slate-800 font-bold text-lg">Tidak ditemukan</p>
              <p className="text-slate-500">Coba kata kunci lain.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQViewer;