
import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
  trend?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, color, trend }) => {
  return (
    <div className="relative overflow-hidden group bg-white rounded-3xl p-6 border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className={`absolute top-0 right-0 w-32 h-32 -mr-8 -mt-8 opacity-[0.03] transition-transform duration-500 group-hover:scale-110`}>
        {icon}
      </div>
      <div className="relative flex items-center space-x-4">
        <div className={`p-4 rounded-2xl ${color} text-white shadow-lg shadow-current/20`}>
          {icon}
        </div>
        <div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-0.5">{title}</p>
          <div className="flex items-baseline space-x-2">
            <p className="text-3xl font-black text-slate-900 tracking-tight">{value}</p>
            {trend && <span className="text-[10px] font-bold text-emerald-500 bg-emerald-50 px-1.5 py-0.5 rounded-md">{trend}</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
