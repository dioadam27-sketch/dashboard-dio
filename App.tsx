
import React, { useMemo, useState } from 'react';
import { parseCSV, RAW_CSV_DATA } from './constants';
import { JabatanChart, AllCoursesAnalytics } from './components/DashboardCharts';
import LecturerTable from './components/LecturerTable';
import StatCard from './components/StatCard';

const App: React.FC = () => {
  const [showPublishGuide, setShowPublishGuide] = useState(false);
  const lecturers = useMemo(() => parseCSV(RAW_CSV_DATA), []);

  const stats = useMemo(() => {
    const total = lecturers.length;
    const courses = new Set(lecturers.map(l => l.NM_MATA_KULIAH)).size;
    const profs = lecturers.filter(l => l.NM_JABATAN_FUNGSIONAL === 'Guru Besar').length;
    const pns = Math.round((lecturers.filter(l => l.NM_STATUS_KEPEGAWAIAN === 'PNS').length / total) * 100);
    return { total, courses, profs, pns };
  }, [lecturers]);

  const jabatanData = useMemo(() => {
    const counts: Record<string, number> = {};
    lecturers.forEach(l => {
      counts[l.NM_JABATAN_FUNGSIONAL] = (counts[l.NM_JABATAN_FUNGSIONAL] || 0) + 1;
    });
    return Object.entries(counts)
      .map(([name, value]) => ({ 
        name, 
        value,
        percentage: Math.round((value / lecturers.length) * 100)
      }))
      .sort((a, b) => b.value - a.value);
  }, [lecturers]);

  const allCourseData = useMemo(() => {
    const counts: Record<string, number> = {};
    lecturers.forEach(l => {
      counts[l.NM_MATA_KULIAH] = (counts[l.NM_MATA_KULIAH] || 0) + 1;
    });
    
    return Object.entries(counts)
      .map(([name, value]) => ({ 
        name, 
        value,
        percentage: Math.round((value / lecturers.length) * 100) 
      }))
      .sort((a, b) => b.value - a.value);
  }, [lecturers]);

  return (
    <div className="min-h-screen bg-[#fcfdfe] text-slate-900 selection:bg-indigo-100 overflow-x-hidden relative">
      <div className="fixed inset-0 bg-grain z-0 pointer-events-none opacity-[0.05]" />
      
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-200/40 rounded-full blur-[120px] animate-float" />
        <div className="absolute top-[10%] right-[-10%] w-[45%] h-[45%] bg-teal-100/40 rounded-full blur-[120px] animate-float-delayed" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[55%] h-[55%] bg-purple-100/40 rounded-full blur-[140px] animate-float" />
      </div>
      
      <nav className="sticky top-0 z-[60] backdrop-blur-2xl bg-white/60 border-b border-white/20 px-6 py-4 shadow-xl shadow-indigo-100/20">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl blur opacity-40 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-14 h-14 bg-gradient-to-br from-indigo-600 to-violet-700 rounded-2xl flex items-center justify-center text-white shadow-2xl">
                <span className="text-2xl font-black tracking-tighter">P</span>
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-black tracking-tighter text-slate-900 leading-none uppercase">Dashboard PDB</h1>
              <p className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.4em] mt-1.5 flex items-center">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
                Universitas Analitik Intelligence Platform
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setShowPublishGuide(true)}
              className="flex items-center space-x-2 bg-slate-900 text-white px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-xl shadow-indigo-200/30"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              <span>🚀 Publikasikan Web</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Deployment Guide Modal */}
      {showPublishGuide && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-white w-full max-w-4xl rounded-[3rem] shadow-2xl relative animate-in zoom-in-95 duration-300 flex flex-col max-h-[90vh]">
            <div className="p-10 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900">Pusat Publikasi</h2>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Langkah-langkah untuk meng-onlinekan website Anda</p>
              </div>
              <button onClick={() => setShowPublishGuide(false)} className="p-4 bg-slate-50 text-slate-400 hover:text-slate-900 rounded-2xl transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-10 space-y-12 custom-scrollbar">
              {/* Vercel Option */}
              <div className="group bg-indigo-50/50 p-8 rounded-[2rem] border border-indigo-100 transition-all hover:bg-indigo-50">
                <div className="flex items-start gap-8">
                  <div className="w-16 h-16 bg-indigo-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black flex-shrink-0 shadow-lg shadow-indigo-200">1</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-black uppercase tracking-tight text-indigo-900 mb-3">Cara Tercepat: Vercel / Netlify</h3>
                    <p className="text-sm text-slate-600 font-medium leading-relaxed mb-6">Cocok untuk hosting React modern dengan performa tinggi. Gratis selamanya.</p>
                    <ol className="space-y-3 text-xs font-bold text-slate-500 uppercase tracking-wide list-decimal pl-4">
                      <li>Upload kode Anda ke <span className="text-indigo-600">GitHub</span></li>
                      <li>Login ke <span className="text-indigo-600">Vercel.com</span> atau <span className="text-indigo-600">Netlify.com</span></li>
                      <li>Pilih "Import Project" dan pilih repositori GitHub Anda</li>
                      <li>Klik "Deploy" dan tunggu 1 menit. Web Anda akan online dengan URL publik!</li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* Google Apps Script Option */}
              <div className="group bg-emerald-50/50 p-8 rounded-[2rem] border border-emerald-100 transition-all hover:bg-emerald-50">
                <div className="flex items-start gap-8">
                  <div className="w-16 h-16 bg-emerald-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black flex-shrink-0 shadow-lg shadow-emerald-200">2</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-black uppercase tracking-tight text-emerald-900 mb-3">Google Apps Script (Web App)</h3>
                    <p className="text-sm text-slate-600 font-medium leading-relaxed mb-6">Terintegrasi dengan ekosistem Google (Spreadsheet/Drive). Sesuai dengan file <code>Code.gs</code> yang Anda miliki.</p>
                    <ol className="space-y-3 text-xs font-bold text-slate-500 uppercase tracking-wide list-decimal pl-4">
                      <li>Buka <a href="https://script.google.com" target="_blank" className="text-emerald-600 underline">script.google.com</a></li>
                      <li>Copy isi <code>Code.gs</code> ke editor script</li>
                      <li>Buat file baru di Google Script bernama <code>index.html</code></li>
                      <li>Copy isi <code>index.html</code> (Pastikan semua JS & CSS sudah tergabung)</li>
                      <li>Klik <strong>Deploy > New Deployment > Web App</strong></li>
                      <li>Atur akses ke "Anyone" dan dapatkan URL Web App Anda</li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* WordPress Iframe Option */}
              <div className="group bg-slate-900 p-8 rounded-[2rem] border border-slate-800 transition-all">
                <div className="flex items-start gap-8 text-white">
                  <div className="w-16 h-16 bg-white text-slate-900 rounded-2xl flex items-center justify-center text-2xl font-black flex-shrink-0 shadow-lg">3</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-black uppercase tracking-tight text-white mb-3">WordPress / Google Sites</h3>
                    <p className="text-sm text-slate-400 font-medium leading-relaxed mb-6">Jika sudah dipublish di salah satu cara di atas, gunakan kode Iframe ini untuk menempelkan dashboard di website lain:</p>
                    <div className="relative">
                      <pre className="bg-slate-800 p-6 rounded-2xl overflow-x-auto text-[10px] text-emerald-400 font-mono border border-slate-700">
                        {`<iframe \n  src="URL_PUBLIK_ANDA" \n  width="100%" \n  height="1000px" \n  frameborder="0">\n</iframe>`}
                      </pre>
                      <button 
                        onClick={() => {
                          navigator.clipboard.writeText('<iframe src="URL_PUBLIK_ANDA" width="100%" height="1000px" frameborder="0"></iframe>');
                          alert('Template Iframe tersalin! Ganti URL_PUBLIK_ANDA dengan link web Anda.');
                        }}
                        className="absolute top-4 right-4 px-4 py-2 bg-indigo-600 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-indigo-500"
                      >
                        Salin Template
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 bg-slate-50 rounded-b-[3rem] flex justify-end">
              <button onClick={() => setShowPublishGuide(false)} className="px-10 py-4 bg-slate-900 text-white rounded-2xl text-xs font-black uppercase tracking-[0.2em] hover:bg-indigo-600 transition-all">Siap Mempublikasikan!</button>
            </div>
          </div>
        </div>
      )}

      <main className="max-w-[1440px] mx-auto px-6 py-12 space-y-16 relative z-10">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard 
            title="Total Dosen Pengajar" 
            value={stats.total} 
            color="bg-indigo-600" 
            trend="+4%" 
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>} 
          />
          <StatCard 
            title="Mata Kuliah Aktif" 
            value={stats.courses} 
            color="bg-emerald-500" 
            trend="Stable" 
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>} 
          />
          <StatCard 
            title="Guru Besar (Profesor)" 
            value={stats.profs} 
            color="bg-rose-500" 
            trend="+1 New" 
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.022.547l-2.387 2.387a2 2 0 001.414 3.414h15.858a2 2 0 001.414-3.414l-2.387-2.387zM12 11a4 4 0 100-8 4 4 0 000 8z"/></svg>} 
          />
          <StatCard 
            title="Rasio Kepegawaian PNS" 
            value={stats.pns + '%'} 
            color="bg-amber-500" 
            trend="68/100" 
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>} 
          />
        </section>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 items-start">
          <div className="xl:col-span-4 h-full">
            <JabatanChart data={jabatanData} />
          </div>
          <div className="xl:col-span-8">
            <AllCoursesAnalytics data={allCourseData} />
          </div>
        </div>

        <section className="relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 px-2">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-2.5 h-10 bg-indigo-600 rounded-full" />
                <h2 className="text-4xl font-black tracking-tighter uppercase text-slate-900">Direktori Pengajar PDB</h2>
              </div>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Data Terstruktur Dosen dan Unit Mata Kuliah</p>
            </div>
          </div>
          <LecturerTable lecturers={lecturers} />
        </section>
      </main>

      <footer className="bg-slate-950 text-slate-400 py-24 px-8 mt-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[150px]" />
        <div className="max-w-[1440px] mx-auto text-center relative z-10">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-indigo-400 mb-2">Developed with Intelligence</p>
          <p className="text-2xl font-black text-white tracking-tighter uppercase mb-8">PDB ANALYTICS SYSTEM</p>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">© 2025 All rights reserved globally.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
