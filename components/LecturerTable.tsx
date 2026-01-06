
import React, { useState, useMemo } from 'react';
import { Lecturer } from '../types';
import * as XLSX from 'xlsx';

interface LecturerTableProps {
  lecturers: Lecturer[];
}

type SortConfig = {
  key: keyof Lecturer | null;
  direction: 'asc' | 'desc' | null;
};

const LecturerTable: React.FC<LecturerTableProps> = ({ lecturers }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState<SortConfig>({ key: null, direction: null });
  
  const handleSort = (key: keyof Lecturer) => {
    let direction: 'asc' | 'desc' | null = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    } else if (sortConfig.key === key && sortConfig.direction === 'desc') {
      direction = null;
    }
    setSortConfig({ key, direction });
  };

  const sortedAndFilteredLecturers = useMemo(() => {
    let filtered = lecturers.filter(l => 
      l.DOSEN.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.NM_MATA_KULIAH.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.NIP_DOSEN.includes(searchTerm)
    );

    if (sortConfig.key && sortConfig.direction) {
      filtered = [...filtered].sort((a, b) => {
        const aValue = String(a[sortConfig.key!] || '').toLowerCase();
        const bValue = String(b[sortConfig.key!] || '').toLowerCase();

        if (aValue < bValue) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }

    return filtered;
  }, [lecturers, searchTerm, sortConfig]);

  const handleExportExcel = () => {
    const dataToExport = sortedAndFilteredLecturers.map(l => ({
      'Nama Dosen': l.DOSEN,
      'NIP': l.NIP_DOSEN,
      'Mata Kuliah': l.NM_MATA_KULIAH,
      'Jabatan Fungsional': l.NM_JABATAN_FUNGSIONAL,
      'Status Kepegawaian': l.NM_STATUS_KEPEGAWAIAN,
      'Tahun Ajaran': l.TAHUN_AJARAN,
      'Semester': l.GROUP_SEMESTER
    }));

    const worksheet = XLSX.utils.json_to_sheet(dataToExport);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Direktori Pengajar");

    const wscols = [
      {wch: 35}, {wch: 25}, {wch: 40}, {wch: 25}, {wch: 20}, {wch: 15}, {wch: 15}
    ];
    worksheet['!cols'] = wscols;

    const fileName = `Direktori_PDB_${new Date().toISOString().split('T')[0]}.xlsx`;
    XLSX.writeFile(workbook, fileName);
  };

  const SortIcon = ({ column }: { column: keyof Lecturer }) => {
    if (sortConfig.key !== column) {
      return (
        <svg className="w-3 h-3 ml-2 text-slate-300 opacity-0 group-hover/head:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
        </svg>
      );
    }
    return (
      <svg className={`w-3 h-3 ml-2 text-indigo-600 transition-transform ${sortConfig.direction === 'desc' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 15l7-7 7 7" />
      </svg>
    );
  };

  return (
    <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden transition-all hover:shadow-2xl hover:shadow-indigo-100/20">
      <div className="p-8 border-b border-slate-50 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="text-xl font-black text-slate-900 tracking-tight uppercase">Data Direktori</h3>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Daftar Pengajar yang Terfilter</p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <button 
            onClick={handleExportExcel}
            className="group relative flex items-center justify-center space-x-2 bg-gradient-to-br from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-6 py-3 rounded-2xl transition-all duration-300 shadow-lg shadow-emerald-200 hover:shadow-emerald-300 hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <span className="text-xs font-black uppercase tracking-widest">Download Excel</span>
          </button>

          <div className="relative flex-1 sm:w-80">
            <input
              type="text"
              placeholder="Cari Dosen, NIP atau MK..."
              className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none transition-all text-sm font-bold text-slate-700 placeholder:text-slate-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg className="absolute left-4 top-3.5 h-5 w-5 text-slate-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
              <th className="px-8 py-5 cursor-pointer group/head hover:text-indigo-600 transition-colors" onClick={() => handleSort('DOSEN')}>
                <div className="flex items-center">Identitas Dosen <SortIcon column="DOSEN" /></div>
              </th>
              <th className="px-8 py-5 cursor-pointer group/head hover:text-indigo-600 transition-colors" onClick={() => handleSort('NIP_DOSEN')}>
                <div className="flex items-center justify-center">NIP Pengajar <SortIcon column="NIP_DOSEN" /></div>
              </th>
              <th className="px-8 py-5 cursor-pointer group/head hover:text-indigo-600 transition-colors" onClick={() => handleSort('NM_MATA_KULIAH')}>
                <div className="flex items-center">Unit Mata Kuliah <SortIcon column="NM_MATA_KULIAH" /></div>
              </th>
              <th className="px-8 py-5 cursor-pointer group/head hover:text-indigo-600 transition-colors" onClick={() => handleSort('NM_JABATAN_FUNGSIONAL')}>
                <div className="flex items-center">Jabatan Fungsional <SortIcon column="NM_JABATAN_FUNGSIONAL" /></div>
              </th>
              <th className="px-8 py-5 cursor-pointer group/head hover:text-indigo-600 transition-colors" onClick={() => handleSort('NM_STATUS_KEPEGAWAIAN')}>
                <div className="flex items-center justify-center">Status <SortIcon column="NM_STATUS_KEPEGAWAIAN" /></div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50 text-xs">
            {sortedAndFilteredLecturers.map((l, i) => (
              <tr key={`${l.NIP_DOSEN}-${i}`} className="group hover:bg-indigo-50/30 transition-all duration-200">
                <td className="px-8 py-5">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-black text-[10px] group-hover:scale-110 transition-transform">
                      {l.DOSEN.charAt(0)}
                    </div>
                    <span className={`font-black uppercase tracking-tight transition-colors ${sortConfig.key === 'DOSEN' ? 'text-indigo-600' : 'text-slate-800'}`}>{l.DOSEN}</span>
                  </div>
                </td>
                <td className="px-8 py-5 text-center">
                  <code className={`px-2 py-1 rounded text-[10px] font-bold transition-colors ${sortConfig.key === 'NIP_DOSEN' ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-100 text-slate-500'}`}>{l.NIP_DOSEN}</code>
                </td>
                <td className="px-8 py-5">
                  <div className={`font-bold uppercase tracking-tight leading-tight max-w-xs transition-colors ${sortConfig.key === 'NM_MATA_KULIAH' ? 'text-indigo-600' : 'text-slate-600'}`}>{l.NM_MATA_KULIAH}</div>
                </td>
                <td className="px-8 py-5">
                  <span className={`inline-flex items-center px-3 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest ${
                    l.NM_JABATAN_FUNGSIONAL === 'Guru Besar' ? 'bg-rose-50 text-rose-600 border border-rose-100' :
                    l.NM_JABATAN_FUNGSIONAL === 'Lektor Kepala' ? 'bg-indigo-50 text-indigo-600 border border-indigo-100' :
                    l.NM_JABATAN_FUNGSIONAL === 'Lektor' ? 'bg-blue-50 text-blue-600 border border-blue-100' :
                    'bg-slate-100 text-slate-500'
                  } ${sortConfig.key === 'NM_JABATAN_FUNGSIONAL' ? 'ring-2 ring-indigo-200' : ''}`}>
                    {l.NM_JABATAN_FUNGSIONAL}
                  </span>
                </td>
                <td className="px-8 py-5">
                  <div className="flex justify-center">
                    <div className={`w-3 h-3 rounded-full ${l.NM_STATUS_KEPEGAWAIAN === 'PNS' ? 'bg-emerald-500 animate-pulse' : 'bg-amber-400'}`} title={l.NM_STATUS_KEPEGAWAIAN} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {sortedAndFilteredLecturers.length === 0 && (
        <div className="py-24 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-50 rounded-full mb-6">
            <svg className="w-10 h-10 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <p className="text-slate-400 font-black text-xs uppercase tracking-widest">Data Tidak Ditemukan</p>
          <p className="text-slate-300 text-[10px] mt-2 font-bold">Coba kata kunci lain atau periksa kembali ejaan Anda.</p>
        </div>
      )}
      
      <div className="p-6 bg-slate-50/50 border-t border-slate-50 text-right">
        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Showing {sortedAndFilteredLecturers.length} of {lecturers.length} Total Records</span>
      </div>
    </div>
  );
};

export default LecturerTable;
