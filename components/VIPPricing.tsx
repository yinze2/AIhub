
import React from 'react';
import { Language, translations } from '../translations';

interface VIPPricingProps {
  currentLang: Language;
}

const VIPPricing: React.FC<VIPPricingProps> = ({ currentLang }) => {
  const t = translations[currentLang].pricing;

  return (
    <div className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">{t.title}</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Tier */}
          <div className="border border-slate-200 rounded-3xl p-8 hover:shadow-lg transition-all flex flex-col">
            <h3 className="text-xl font-bold mb-2">{t.tiers.basic}</h3>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-extrabold">$0</span>
              <span className="text-slate-500 ml-2">/month</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1 text-sm">
              <li className="flex items-center text-slate-600">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                {t.features.browse}
              </li>
              <li className="flex items-center text-slate-600">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                {t.features.info}
              </li>
              <li className="flex items-center text-slate-300">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                {t.features.partner}
              </li>
            </ul>
            <button className="w-full py-4 rounded-xl border-2 border-slate-200 font-bold hover:bg-slate-50 transition-colors">{t.buttons.current}</button>
          </div>

          {/* VIP Tier */}
          <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl shadow-indigo-200 transform md:scale-110 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-indigo-500 text-white px-4 py-1 rounded-bl-xl text-xs font-bold uppercase tracking-widest">
              {currentLang === 'zh' ? '最值推荐' : 'Best Value'}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{t.tiers.premium}</h3>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-extrabold text-white">$29</span>
              <span className="text-slate-400 ml-2">/month</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1 text-sm">
              <li className="flex items-center text-slate-300">
                <svg className="w-5 h-5 text-indigo-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                {t.features.access50}
              </li>
              <li className="flex items-center text-slate-300">
                <svg className="w-5 h-5 text-indigo-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                {t.features.quota}
              </li>
              <li className="flex items-center text-slate-300">
                <svg className="w-5 h-5 text-indigo-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                {t.features.priority}
              </li>
              <li className="flex items-center text-slate-300">
                <svg className="w-5 h-5 text-indigo-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                {t.features.exclusive}
              </li>
            </ul>
            <button className="w-full py-4 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-500 shadow-xl shadow-indigo-900/20 transition-all">{t.buttons.getNow}</button>
          </div>

          {/* Dev Tier */}
          <div className="border border-slate-200 rounded-3xl p-8 hover:shadow-lg transition-all flex flex-col">
            <h3 className="text-xl font-bold mb-2">{t.tiers.dev}</h3>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-extrabold">$99</span>
              <span className="text-slate-500 ml-2">/month</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1 text-sm">
              <li className="flex items-center text-slate-600">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                {t.features.list5}
              </li>
              <li className="flex items-center text-slate-600">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                {t.features.featured}
              </li>
              <li className="flex items-center text-slate-600">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                {t.features.analytics}
              </li>
            </ul>
            <button className="w-full py-4 rounded-xl border-2 border-slate-200 font-bold hover:bg-slate-50 transition-colors">{t.buttons.join}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VIPPricing;
