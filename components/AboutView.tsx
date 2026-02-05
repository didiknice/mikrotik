import React from 'react';
import { Info, Shield, Cookie, Github, Mail, Globe, Heart, Code2, Server } from 'lucide-react';

const AboutView: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto bg-slate-50 h-full scrollbar-thin scrollbar-thumb-slate-300">
      <div className="max-w-4xl mx-auto p-4 md:p-10">
        
        {/* Header Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 mb-8 border border-slate-100 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
          
          <div className="relative z-10">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl mx-auto flex items-center justify-center shadow-lg shadow-slate-800/20 mb-6">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 12V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2 tracking-tight">MikroTik Master Guide</h1>
            <p className="text-slate-500 font-medium text-lg mb-6">Versi 2.1.0 (Stable Release)</p>
            
            <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Platform edukasi interaktif untuk mempelajari konfigurasi RouterOS. 
              Dirancang untuk Network Engineer pemula hingga mahir dengan panduan langkah-demi-langkah, 
              perbandingan GUI vs CLI, dan Asisten AI cerdas.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Developer Info */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Code2 size={20} className="text-indigo-500" />
              Pengembang
            </h3>
            <div className="space-y-4">
              <p className="text-slate-600 text-sm leading-relaxed">
                Aplikasi ini dikembangkan dengan semangat Open Source untuk membantu komunitas jaringan di Indonesia.
              </p>
              
              <div className="flex flex-col gap-3">
                <a href="#" className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors group">
                  <div className="p-2 bg-white rounded-lg shadow-sm group-hover:scale-110 transition-transform">
                    <Github size={18} className="text-slate-700" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-400 uppercase">Repository</span>
                    <span className="text-sm font-semibold text-slate-800">github.com/mikrotik-guide</span>
                  </div>
                </a>
                
                <a href="mailto:contact@example.com" className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors group">
                  <div className="p-2 bg-white rounded-lg shadow-sm group-hover:scale-110 transition-transform">
                    <Mail size={18} className="text-slate-700" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-400 uppercase">Kontak</span>
                    <span className="text-sm font-semibold text-slate-800">dev@mikrotik-guide.id</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Server size={20} className="text-blue-500" />
              Teknologi
            </h3>
            <p className="text-slate-600 text-sm mb-4">
              Dibangun menggunakan teknologi web modern untuk performa maksimal dan pengalaman pengguna yang mulus.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold border border-blue-100">React 19</span>
              <span className="px-3 py-1 rounded-full bg-sky-50 text-sky-600 text-xs font-bold border border-sky-100">Tailwind CSS</span>
              <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-xs font-bold border border-purple-100">Gemini AI</span>
              <span className="px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-bold border border-orange-100">Fuse.js</span>
              <span className="px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-bold border border-green-100">PWA Ready</span>
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold border border-slate-200">TypeScript</span>
            </div>
          </div>
        </div>

        {/* Legal & Policy */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Shield size={20} className="text-emerald-500" />
              Kebijakan Layanan (Service Policy)
            </h3>
            <div className="prose prose-sm text-slate-600 max-w-none">
              <p>
                Dengan menggunakan aplikasi MikroTik Master Guide, Anda menyetujui ketentuan berikut:
              </p>
              <ul className="list-disc pl-4 space-y-1">
                <li>Aplikasi ini disediakan "sebagaimana adanya" untuk tujuan edukasi dan referensi.</li>
                <li>Pengembang tidak bertanggung jawab atas kerusakan perangkat keras, kehilangan data, atau gangguan jaringan akibat penerapan konfigurasi yang dihasilkan oleh aplikasi ini.</li>
                <li>Fitur AI Assistant menggunakan API pihak ketiga (Google Gemini). Jangan mengirimkan data sensitif seperti password asli, IP Address publik statis, atau kunci enkripsi privat ke dalam chat AI.</li>
                <li>Konten panduan dapat berubah sewaktu-waktu mengikuti pembaruan RouterOS.</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Cookie size={20} className="text-amber-500" />
              Kebijakan Cookie & Data
            </h3>
            <div className="prose prose-sm text-slate-600 max-w-none">
              <p>
                Kami menghargai privasi Anda. Berikut adalah cara kami menangani data:
              </p>
              <ul className="list-disc pl-4 space-y-1">
                <li><strong>Local Storage:</strong> Aplikasi ini menyimpan preferensi tampilan dan cache panduan secara lokal di browser Anda untuk mempercepat akses offline.</li>
                <li><strong>Tanpa Tracking:</strong> Kami tidak menggunakan cookie pelacak pihak ketiga untuk iklan atau analitik perilaku.</li>
                <li><strong>Data AI:</strong> Percakapan Anda dengan AI Assistant diproses oleh Google Cloud Platform sesuai dengan kebijakan privasi API mereka, namun tidak disimpan secara permanen di server aplikasi kami.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Credit */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 text-sm flex items-center justify-center gap-1">
            Dibuat dengan <Heart size={14} className="text-red-400 fill-red-400" /> oleh Tim Pengembang Indonesia
          </p>
          <p className="text-slate-300 text-xs mt-2">© 2024 MikroTik Master Guide. All rights reserved.</p>
        </div>

      </div>
    </div>
  );
};

export default AboutView;