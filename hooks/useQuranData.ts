import { useState, useEffect } from 'react';
import { SurahRaw, MergedSurah } from '../types';

// 1. IMPORT DATA DIRECTLY
// This bundles the data into your app so it can never be "missing"
import dataArRaw from '../data/quran.json';
import dataBnRaw from '../data/quran_bn.json';
import dataEnRaw from '../data/quran_en.json';

export const useQuranData = () => {
  const [surahs, setSurahs] = useState<MergedSurah[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // We wrap this in a tiny timeout just to let the UI show the loading screen 
    // for a split second (feels smoother), but the data is actually instant.
    const loadData = async () => {
      try {
        setLoading(true);

        // 2. CAST TO TYPES
        // We treat the imported JSON as the raw type immediately
        const dataAr = dataArRaw as unknown as SurahRaw[];
        const dataBn = dataBnRaw as unknown as SurahRaw[];
        const dataEn = dataEnRaw as unknown as SurahRaw[];

        // 3. MERGE LOGIC (Same as before, but synchronous)
        const merged: MergedSurah[] = dataAr.map((sAr, sIdx) => {
          // Safety check: ensure the other languages exist at this index
          const sBn = dataBn[sIdx] || sAr; 
          const sEn = dataEn[sIdx] || sAr;

          return {
            id: sAr.id,
            name: sAr.name,
            transliteration: sAr.transliteration,
            englishMeaning: sEn.translation,
            bengaliName: sBn.translation, // Check if your JSON has 'translation' field for name
            type: sAr.type,
            total_verses: sAr.total_verses,
            verses: sAr.verses.map((vAr, vIdx) => {
              const vBn = sBn.verses[vIdx];
              const vEn = sEn.verses[vIdx];
              
              return {
                id: vAr.id,
                arabic: vAr.text,
                english: vEn ? (vEn.translation || vEn.text) : "",
                bengali: vBn ? (vBn.translation || vBn.text) : "",
              };
            }),
          };
        });

        setSurahs(merged);
        setError(null);
      } catch (err) {
        console.error('Quran Data Processing Error:', err);
        setError('Failed to process Quran data files.');
      } finally {
        // Keep the loading screen for 1s just for the "vibe", then remove it
        setTimeout(() => setLoading(false), 1000);
      }
    };

    loadData();
  }, []);

  return { surahs, loading, error };
};