
import React from 'react';

interface HeaderProps {
  currentSurahName: string;
  currentSurahTransliteration: string;
  showEnglish: boolean;
  setShowEnglish: (val: boolean) => void;
  showBengali: boolean;
  setShowBengali: (val: boolean) => void;
  onOpenSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({
  currentSurahName,
  currentSurahTransliteration,
  showEnglish,
  setShowEnglish,
  showBengali,
  setShowBengali,
  onOpenSidebar
}) => {
  return (
    <header className="sticky top-0 bg-[#fdfbf7]/90 backdrop-blur-md border-b border-gray-100 z-30 py-4 px-6 md:px-12">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <button 
          onClick={onOpenSidebar}
          className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm font-inter text-gray-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
          <span className="hidden sm:inline">Surahs</span>
        </button>

        <div className="flex flex-col items-center">
          <h2 className="font-amiri text-2xl text-[#1f2937] leading-none">{currentSurahName}</h2>
          <p className="font-inter text-xs text-gray-500 uppercase tracking-widest">{currentSurahTransliteration}</p>
        </div>

        <div className="flex items-center gap-1 md:gap-4">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input 
              type="checkbox" 
              className="hidden peer" 
              checked={showEnglish} 
              onChange={() => setShowEnglish(!showEnglish)} 
            />
            <div className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-xs font-inter text-gray-400 peer-checked:bg-[#1f2937] peer-checked:text-white peer-checked:border-transparent transition-all">
              EN
            </div>
          </label>
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input 
              type="checkbox" 
              className="hidden peer" 
              checked={showBengali} 
              onChange={() => setShowBengali(!showBengali)} 
            />
            <div className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-xs font-inter text-gray-400 peer-checked:bg-[#1f2937] peer-checked:text-white peer-checked:border-transparent transition-all">
              BN
            </div>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
