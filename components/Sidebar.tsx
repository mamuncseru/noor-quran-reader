
import React, { useState } from 'react';
import { MergedSurah } from '../types';

interface SidebarProps {
  surahs: MergedSurah[];
  activeSurahId: number;
  isOpen: boolean;
  onClose: () => void;
  onSelectSurah: (id: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ surahs, activeSurahId, isOpen, onClose, onSelectSurah }) => {
  const [search, setSearch] = useState('');

  const filteredSurahs = surahs.filter(s => 
    s.transliteration.toLowerCase().includes(search.toLowerCase()) || 
    s.id.toString().includes(search)
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" onClick={onClose} />
      
      {/* Sidebar Content */}
      <div className="relative w-full max-w-xs bg-[#fdfbf7] h-full shadow-2xl flex flex-col animate-in slide-in-from-left duration-300">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <h3 className="font-inter font-semibold text-gray-800">Select Surah</h3>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        <div className="p-4">
          <input 
            type="text"
            placeholder="Search Surah..."
            className="w-full bg-gray-100 border-none rounded-lg px-4 py-2 text-sm font-inter outline-none focus:ring-1 focus:ring-gray-300"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex-1 overflow-y-auto px-2 pb-6">
          {filteredSurahs.map(s => (
            <button
              key={s.id}
              onClick={() => {
                onSelectSurah(s.id);
                onClose();
              }}
              className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors mb-1 ${
                activeSurahId === s.id ? 'bg-[#1f2937] text-white' : 'hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`font-inter text-xs w-6 h-6 flex items-center justify-center rounded-full ${activeSurahId === s.id ? 'bg-white/20' : 'bg-gray-100'}`}>
                  {s.id}
                </span>
                <div>
                  <p className="font-inter text-sm font-medium">{s.transliteration}</p>
                  <p className={`font-inter text-[10px] uppercase tracking-tighter ${activeSurahId === s.id ? 'text-gray-300' : 'text-gray-400'}`}>
                    {/* Changed 'englishName' to 'englishMeaning' to fix the compilation error as it matches the MergedSurah type */}
                    {s.englishMeaning} • {s.total_verses} Verses
                  </p>
                </div>
              </div>
              <p className={`font-amiri text-lg ${activeSurahId === s.id ? 'text-white' : 'text-[#1f2937]'}`}>
                {s.name}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
