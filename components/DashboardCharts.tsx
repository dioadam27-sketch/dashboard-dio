
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';

interface ChartData {
  name: string;
  value: number;
  percentage?: number;
}

const COLORS = ['#6366f1', '#8b5cf6', '#ec4899', '#f43f5e', '#f97316', '#eab308', '#22c55e', '#06b6d4'];

const CustomTooltip = ({ active, payload, label, unit = "Dosen" }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/95 backdrop-blur-md border border-slate-200 p-4 shadow-2xl rounded-2xl animate-in fade-in zoom-in duration-200">
        <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-1">Detail Statistik</p>
        <p className="text-sm font-bold text-slate-800 mb-2">{label || payload[0].name}</p>
        <div className="flex items-center space-x-2 bg-slate-50 p-2 rounded-xl">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: payload[0].color || payload[0].payload.fill }} />
          <p className="text-xs font-bold text-slate-600">
            <span className="text-slate-900">{payload[0].value}</span> {unit}
            {payload[0].payload.percentage && <span className="ml-2 text-indigo-500">({payload[0].payload.percentage}%)</span>}
          </p>
        </div>
      </div>
    );
  }
  return null;
};

export const JabatanChart: React.FC<{ data: ChartData[] }> = ({ data }) => (
  <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 h-[450px] group transition-all hover:border-indigo-100">
    <div className="flex items-center justify-between mb-8">
      <div>
        <h3 className="text-xl font-black text-slate-900 tracking-tight">Distribusi Dosen</h3>
        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Berdasarkan Jabatan Fungsional</p>
      </div>
      <div className="p-4 bg-indigo-50 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-lg shadow-indigo-100/50">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
      </div>
    </div>
    <ResponsiveContainer width="100%" height="75%">
      <BarChart data={data} layout="vertical" margin={{ left: 10, right: 30 }}>
        <XAxis type="number" hide />
        <YAxis dataKey="name" type="category" width={140} tick={{ fontSize: 10, fill: '#64748b', fontWeight: 800 }} axisLine={false} tickLine={false} />
        <Tooltip content={<CustomTooltip />} cursor={{ fill: '#f8fafc', radius: 12 }} />
        <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={24}>
          {data.map((_, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export const AllCoursesAnalytics: React.FC<{ data: ChartData[] }> = ({ data }) => (
  <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 transition-all hover:border-emerald-100">
    <div className="flex items-center justify-between mb-8">
      <div>
        <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-700 tracking-tighter uppercase">Distribusi Dosen PDB</h3>
        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Beban Pengajar Seluruh Mata Kuliah</p>
      </div>
      <div className="hidden sm:flex space-x-2">
        <div className="px-4 py-2 bg-emerald-50 text-emerald-600 rounded-xl text-[10px] font-black uppercase tracking-widest border border-emerald-100 shadow-sm animate-pulse">Live Stats</div>
      </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
      {data.map((course, idx) => (
        <div key={idx} className="group p-5 rounded-3xl border border-transparent hover:border-slate-100 hover:bg-slate-50/50 hover:shadow-xl hover:shadow-indigo-50/50 transition-all duration-300">
          <div className="flex justify-between items-end mb-3">
            <div className="flex-1">
              <span className="text-[9px] font-black text-indigo-500 uppercase tracking-widest block mb-1">Mata Kuliah</span>
              <h4 className="text-sm font-black text-slate-800 uppercase leading-tight group-hover:text-indigo-600 transition-colors line-clamp-2">{course.name}</h4>
            </div>
            <div className="text-right ml-4">
              <span className="text-xl font-black text-slate-900 leading-none">{course.percentage}%</span>
              <p className="text-[9px] font-bold text-slate-400 uppercase leading-none mt-1 whitespace-nowrap">{course.value} Dosen</p>
            </div>
          </div>
          <div className="relative w-full h-4 bg-slate-100 rounded-full overflow-hidden shadow-inner">
            <div 
              className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(99,102,241,0.2)]"
              style={{ width: `${course.percentage}%` }}
            />
            {/* Animated shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
          </div>
        </div>
      ))}
    </div>
  </div>
);
