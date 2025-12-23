
import React from 'react';
import { NewsItem } from '../types';
import { Language, translations } from '../translations';

interface NewsSectionProps {
  currentLang: Language;
  news: NewsItem[];
  loading: boolean;
  onRefresh: () => void;
  lastUpdated: string | null;
}

const NewsSection: React.FC<NewsSectionProps> = ({ currentLang, news, loading, onRefresh, lastUpdated }) => {
  const t = translations[currentLang].news;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">{t.title}</h1>
          <p className="text-slate-600 max-w-2xl">{t.subtitle}</p>
        </div>
        <div className="flex items-center gap-4">
          {lastUpdated && (
            <span className="text-xs font-medium text-slate-400">
              {t.lastUpdated}: {lastUpdated}
            </span>
          )}
          <button 
            onClick={onRefresh}
            disabled={loading}
            className={`px-6 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
              loading 
                ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
                : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-100'
            }`}
          >
            {loading ? (
              <svg className="animate-spin h-4 w-4 text-slate-400" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            )}
            {t.refresh}
          </button>
        </div>
      </div>

      {loading && news.length === 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="bg-white rounded-3xl p-6 border border-slate-100 animate-pulse">
              <div className="h-4 bg-slate-100 rounded w-3/4 mb-4"></div>
              <div className="h-3 bg-slate-50 rounded w-full mb-2"></div>
              <div className="h-3 bg-slate-50 rounded w-full mb-2"></div>
              <div className="h-3 bg-slate-50 rounded w-2/3 mb-6"></div>
              <div className="flex justify-between">
                <div className="h-3 bg-slate-100 rounded w-20"></div>
                <div className="h-3 bg-slate-100 rounded w-16"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <a 
              key={item.id} 
              href={item.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-white rounded-3xl p-7 border border-slate-200 hover:border-indigo-500 hover:shadow-2xl transition-all duration-300 flex flex-col relative"
            >
              <div className="flex justify-between items-start mb-4">
                <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded ${
                  item.sentiment === 'POSITIVE' ? 'bg-emerald-50 text-emerald-600' : 
                  item.sentiment === 'NEGATIVE' ? 'bg-rose-50 text-rose-600' : 'bg-slate-50 text-slate-500'
                }`}>
                  {item.sentiment}
                </span>
                <span className="text-[11px] font-bold text-slate-400">{item.publishedAt}</span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 leading-snug">
                {item.title}
              </h3>
              
              <p className="text-slate-600 text-sm mb-6 flex-1 line-clamp-4 leading-relaxed">
                {item.summary}
              </p>
              
              <div className="pt-5 border-t border-slate-50 flex items-center justify-between mt-auto">
                <span className="text-xs font-bold text-slate-400 truncate max-w-[150px]">
                  {item.source}
                </span>
                <span className="text-indigo-600 text-xs font-black uppercase flex items-center gap-1">
                  {t.readMore}
                  <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsSection;
