
import React from 'react';
import { translations, Language } from '../translations';

interface HeaderProps {
  onNavClick: (view: 'home' | 'pricing' | 'submit') => void;
  activeView: string;
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavClick, activeView, currentLang, onLanguageChange }) => {
  const t = translations[currentLang].nav;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => onNavClick('home')}
          >
            <div className="bg-indigo-600 p-2 rounded-lg group-hover:bg-indigo-700 transition-colors">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="ml-3 text-xl font-bold text-slate-900 tracking-tight">AI Hub</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => onNavClick('home')}
              className={`text-sm font-medium transition-colors ${activeView === 'home' ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-600'}`}
            >
              {t.explore}
            </button>
            <button 
              onClick={() => onNavClick('pricing')}
              className={`text-sm font-medium transition-colors ${activeView === 'pricing' ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-600'}`}
            >
              {t.pricing}
            </button>
            <button 
              onClick={() => onNavClick('submit')}
              className={`text-sm font-medium transition-colors ${activeView === 'submit' ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-600'}`}
            >
              {t.submit}
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative group mr-2">
              <button className="flex items-center space-x-1 text-slate-600 hover:text-indigo-600 transition-colors py-2 px-3 rounded-lg hover:bg-slate-50">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9h18" />
                </svg>
                <span className="text-sm font-bold uppercase">{currentLang}</span>
              </button>
              <div className="absolute right-0 top-full mt-1 w-24 bg-white border border-slate-200 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <button 
                  onClick={() => onLanguageChange('en')}
                  className={`w-full text-left px-4 py-3 text-sm font-medium hover:bg-indigo-50 first:rounded-t-xl ${currentLang === 'en' ? 'text-indigo-600' : 'text-slate-600'}`}
                >
                  English
                </button>
                <button 
                  onClick={() => onLanguageChange('zh')}
                  className={`w-full text-left px-4 py-3 text-sm font-medium hover:bg-indigo-50 last:rounded-b-xl ${currentLang === 'zh' ? 'text-indigo-600' : 'text-slate-600'}`}
                >
                  简体中文
                </button>
              </div>
            </div>

            <button className="hidden sm:block text-slate-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition-all">
              {t.login}
            </button>
            <button 
               onClick={() => onNavClick('pricing')}
               className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md shadow-indigo-200 hover:bg-indigo-700 hover:scale-105 transition-all"
            >
              {t.getVip}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
