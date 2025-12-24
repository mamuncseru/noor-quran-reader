
import React from 'react';
import { MergedVerse } from '../types';

interface VerseItemProps {
  verse: MergedVerse;
  verseNumber: number;
  showEnglish: boolean;
  showBengali: boolean;
}

const VerseItem: React.FC<VerseItemProps> = ({ verse, verseNumber, showEnglish, showBengali }) => {
  return (
    <div className="group border-b border-gray-100 py-10 transition-all hover:bg-[#fbf9f4]">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-start">
          <span className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-200 text-xs text-gray-400 font-inter">
            {verseNumber}
          </span>
          <p className="font-amiri text-4xl md:text-5xl text-right leading-[3] text-[#1f2937] max-w-4xl" 
          dir="rtl"
          style={{ lineHeight: '2' }}
          >
            {verse.arabic}
        </p>
        </div>
        
        <div className="flex flex-col gap-4 pl-4 md:pl-12 border-l border-gray-100">
          {showEnglish && (
            <p className="font-inter text-lg text-gray-700 leading-relaxed italic">
              {verse.english}
            </p>
          )}
          {showBengali && (
            <p className="font-hind text-lg text-gray-700 leading-relaxed">
              {verse.bengali}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerseItem;
