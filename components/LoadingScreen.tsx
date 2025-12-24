
import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#fdfbf7] z-50">
      <div className="text-center">
        <h1 className="font-amiri text-5xl md:text-7xl mb-6 text-[#1f2937] animate-bismillah">
          بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
        </h1>
        <p className="font-inter text-sm tracking-[0.2em] uppercase text-gray-400">
          Loading Noor Quran
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
