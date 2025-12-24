
import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MergedSurah } from '../types';
import Header from './Header';
import Sidebar from './Sidebar';
import VerseItem from './VerseItem';

interface ReaderProps {
  surahs: MergedSurah[];
}

const Reader: React.FC<ReaderProps> = ({ surahs }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const activeSurahId = parseInt(id || '1');
  const activeSurah = surahs.find(s => s.id === activeSurahId);

  const [showEnglish, setShowEnglish] = useState(true);
  const [showBengali, setShowBengali] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSurahId]);

  if (!activeSurah) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fdfbf7] font-inter">
        <div className="text-center">
          <p className="text-gray-500 mb-4">Surah not found.</p>
          <button onClick={() => navigate('/')} className="text-[#1f2937] font-bold border-b-2 border-[#1f2937]">Back to Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col font-inter selection:bg-yellow-100">
      <Header 
        currentSurahName={activeSurah.name}
        currentSurahTransliteration={activeSurah.transliteration}
        showEnglish={showEnglish}
        setShowEnglish={setShowEnglish}
        showBengali={showBengali}
        setShowBengali={setShowBengali}
        onOpenSidebar={() => setSidebarOpen(true)}
      />

      <Sidebar 
        surahs={surahs}
        activeSurahId={activeSurahId}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onSelectSurah={(id) => navigate(`/surah/${id}`)}
      />

      <main ref={mainRef} className="flex-1 max-w-5xl mx-auto w-full px-6 md:px-12 py-12 md:py-20">
        <div className="text-center mb-24 flex flex-col items-center">
          <h1 className="font-amiri text-6xl md:text-8xl text-[#1f2937] mb-2">{activeSurah.name}</h1>
          <p className="font-inter text-xs tracking-[0.3em] uppercase text-gray-400 border-t border-gray-100 pt-4 w-40">
            {activeSurah.type} • {activeSurah.total_verses} Verses
          </p>
          
          {activeSurahId !== 1 && activeSurahId !== 9 && (
            <div className="mt-16 mb-8">
              <p className="font-amiri text-4xl text-[#1f2937]" dir="rtl">
                بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
              </p>
            </div>
          )}
        </div>

        <div className="flex flex-col">
          {activeSurah.verses.map((verse, idx) => (
            <VerseItem 
              key={verse.id}
              verse={verse}
              verseNumber={idx + 1}
              showEnglish={showEnglish}
              showBengali={showBengali}
            />
          ))}
        </div>

        <footer className="mt-20 py-12 border-t border-gray-100 text-center">
          <p className="font-inter text-xs text-gray-400 uppercase tracking-widest">
            End of {activeSurah.transliteration}
          </p>
          <div className="mt-12 flex justify-center gap-6">
            {activeSurahId > 1 && (
              <button 
                onClick={() => navigate(`/surah/${activeSurahId - 1}`)}
                className="text-sm font-inter text-gray-500 hover:text-gray-800 transition-colors"
              >
                Previous Surah
              </button>
            )}
            <button 
              onClick={() => navigate('/')}
              className="text-sm font-inter text-gray-800 font-bold hover:text-black transition-colors"
            >
              Home
            </button>
            {activeSurahId < 114 && (
              <button 
                onClick={() => navigate(`/surah/${activeSurahId + 1}`)}
                className="text-sm font-inter text-gray-500 hover:text-gray-800 transition-colors"
              >
                Next Surah
              </button>
            )}
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Reader;
