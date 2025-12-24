
export interface VerseRaw {
  id: number;
  text: string;
  translation?: string;
}

export interface SurahRaw {
  id: number;
  name: string;
  transliteration: string;
  translation: string;
  type: string;
  total_verses: number;
  verses: VerseRaw[];
}

export interface MergedVerse {
  id: number;
  arabic: string;
  english: string;
  bengali: string;
}

export interface MergedSurah {
  id: number;
  name: string; // Arabic name
  transliteration: string; // English Translit
  englishMeaning: string; // English Translation of Name
  bengaliName: string; // Bengali Name/Translation
  type: string;
  total_verses: number;
  verses: MergedVerse[];
}

export interface QuranContextType {
  surahs: MergedSurah[];
  loading: boolean;
  error: string | null;
}
