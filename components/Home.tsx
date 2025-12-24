
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MergedSurah } from '../types';

interface HomeProps {
  surahs: MergedSurah[];
}

const Home: React.FC<HomeProps> = ({ surahs }) => {
  const [search, setSearch] = useState('');

  const filteredSurahs = surahs.filter(s => 
    s.transliteration.toLowerCase().includes(search.toLowerCase()) || 
    s.bengaliName.toLowerCase().includes(search.toLowerCase()) ||
    s.id.toString().includes(search)
  );

  return (
    <div className="min-h-screen bg-[#fdfbf7] selection:bg-yellow-100">
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-24">
        {/* Header Section */}
        <header className="text-center mb-12 md:mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <h1 className="font-inter font-bold text-3xl md:text-4xl text-[#1f2937] tracking-tight">
              The Noble Quran
            </h1>
            <span className="font-amiri text-2xl text-[#1f2937] opacity-60">القرآن الكريم</span>
          </div>
          <p className="font-inter text-gray-500 italic text-lg">
            Read, reflect, and find peace.
          </p>
        </header>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-16 md:mb-24 sticky top-6 z-20">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>
            <input 
              type="text"
              placeholder="Search by Surah name, number, or meaning..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white border border-gray-100 rounded-2xl pl-12 pr-6 py-5 text-lg font-inter shadow-sm outline-none transition-all focus:border-yellow-200 focus:ring-4 focus:ring-yellow-50/50"
            />
          </div>
        </div>

        {/* Surah List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredSurahs.map((surah) => (
            <Link 
              key={surah.id}
              to={`/surah/${surah.id}`}
              className="group bg-white border border-gray-100 rounded-2xl p-6 flex items-center gap-6 transition-all hover:bg-[#fbf9f4] hover:border-yellow-100 hover:-translate-y-1 shadow-sm"
            >
              {/* Surah Number */}
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-gray-50 border border-gray-100 text-[#1f2937] font-inter font-semibold group-hover:bg-white group-hover:border-yellow-200 transition-colors">
                {surah.id}
              </div>

              {/* Middle Section: Titles */}
              <div className="flex-1 min-w-0">
                <h3 className="font-inter font-bold text-[#1f2937] text-lg truncate group-hover:text-black transition-colors">
                  {surah.transliteration}
                </h3>
                <p className="font-hind text-sm text-gray-600 truncate mt-0.5">
                  {surah.bengaliName}
                </p>
                <p className="font-inter text-[10px] uppercase tracking-wider text-gray-400 mt-1">
                  {surah.englishMeaning}
                </p>
              </div>

              {/* Right Side: Arabic & Meta */}
              <div className="text-right">
                <p className="font-amiri text-2xl text-[#1f2937] leading-none mb-2">
                  {surah.name}
                </p>
                <div className="flex items-center justify-end gap-2 text-[10px] text-gray-400 font-inter uppercase tracking-tighter">
                  <span>{surah.total_verses} Ayahs</span>
                  <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                  <span className="truncate max-w-[50px] md:max-w-none">{surah.type}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredSurahs.length === 0 && (
          <div className="text-center py-20 text-gray-400 font-inter italic">
            No Surahs found matching "{search}"
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
