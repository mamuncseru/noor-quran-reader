
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { useQuranData } from './hooks/useQuranData';
import LoadingScreen from './components/LoadingScreen';
import Home from './components/Home';
import Reader from './components/Reader';

const App: React.FC = () => {
  const { surahs, loading, error } = useQuranData();

  if (loading) return <LoadingScreen />;
  
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fdfbf7] p-8 text-center">
        <div>
          <h2 className="text-red-500 font-bold mb-2">Error loading Quran data</h2>
          <p className="text-gray-600 font-inter">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-[#1f2937] text-white rounded font-inter text-sm"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home surahs={surahs} />} />
        <Route path="/surah/:id" element={<Reader surahs={surahs} />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
