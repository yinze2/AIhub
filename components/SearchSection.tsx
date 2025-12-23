
import React, { useState } from 'react';
import { CATEGORIES } from '../constants';
import { Category } from '../types';
import { getSmartRecommendations } from '../services/geminiService';
import { translations, Language } from '../translations';

interface SearchSectionProps {
  onSearch: (term: string) => void;
  onCategoryFilter: (category: Category | 'All') => void;
  selectedCategory: string;
  currentLang: Language;
}

const SearchSection: React.FC<SearchSectionProps> = ({ onSearch, onCategoryFilter, selectedCategory, currentLang }) => {
  const [query, setQuery] = useState('');
  const [aiTip, setAiTip] = useState<string | null>(null);
  const [loadingAi, setLoadingAi] = useState(false);
  const t = translations[currentLang].hero;

  const handleAiAsk = async () => {
    if (!query) return;
    setLoadingAi(true);
    const tip = await getSmartRecommendations(query);
    setAiTip(tip || (currentLang === 'zh' ? '请尝试描述得更具体一些！' : 'Try being more specific!'));
    setLoadingAi(false);
  };

  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white pt-16 pb-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
          {t.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">{t.titleAccent}</span>
        </h1>
        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
          {t.subtitle}
        </p>
        
        <div className="relative max-w-2xl mx-auto mb-8">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="h-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            className="block w-full pl-12 pr-24 py-4 bg-white border border-slate-200 rounded-2xl shadow-xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition-all text-slate-800"
            placeholder={t.placeholder}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              onSearch(e.target.value);
            }}
          />
          <button 
            onClick={handleAiAsk}
            disabled={loadingAi}
            className="absolute right-2 top-2 bottom-2 bg-slate-900 text-white px-5 rounded-xl font-medium hover:bg-slate-800 transition-colors flex items-center"
          >
            {loadingAi ? '...' : t.aiSuggest}
          </button>
        </div>

        {aiTip && (
          <div className="max-w-2xl mx-auto mb-10 p-4 bg-indigo-50 border border-indigo-100 rounded-xl text-left animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="flex items-start">
               <div className="bg-indigo-600 p-1.5 rounded-md mr-3 shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
               </div>
               <div>
                 <p className="text-indigo-900 text-sm font-semibold mb-1">{t.aiAssistant}</p>
                 <p className="text-indigo-800 text-sm">{aiTip}</p>
                 <button onClick={() => setAiTip(null)} className="mt-2 text-indigo-600 text-xs font-bold hover:underline">
                    {currentLang === 'zh' ? '关闭' : 'Dismiss'}
                 </button>
               </div>
            </div>
          </div>
        )}

        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => onCategoryFilter('All')}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
              selectedCategory === 'All' 
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' 
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {t.all}
          </button>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => onCategoryFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                selectedCategory === cat 
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
