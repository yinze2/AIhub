
import React from 'react';
import { AITool } from '../types';
import { Language, translations } from '../translations';

interface AdminDashboardProps {
  currentLang: Language;
  pendingTools: AITool[];
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ currentLang, pendingTools, onApprove, onReject }) => {
  const t = translations[currentLang].admin;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">{t.title}</h1>
        <p className="text-slate-600">{t.subtitle}</p>
      </div>

      {pendingTools.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border-2 border-dashed border-slate-200">
          <div className="inline-block p-4 bg-slate-50 rounded-full mb-4">
             <svg className="w-10 h-10 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
             </svg>
          </div>
          <p className="text-slate-500 font-medium">{t.noPending}</p>
        </div>
      ) : (
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-6 py-4 text-sm font-bold text-slate-700">{t.table.tool}</th>
                  <th className="px-6 py-4 text-sm font-bold text-slate-700">{t.table.category}</th>
                  <th className="px-6 py-4 text-sm font-bold text-slate-700">{t.table.date}</th>
                  <th className="px-6 py-4 text-sm font-bold text-slate-700 text-right">{t.table.actions}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {pendingTools.map((tool) => (
                  <tr key={tool.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <img src={tool.imageUrl} className="w-10 h-10 rounded-lg object-cover mr-3" />
                        <div>
                          <p className="font-bold text-slate-900">{tool.name}</p>
                          <p className="text-xs text-slate-500 truncate max-w-[200px]">{tool.description}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold">
                        {tool.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">
                      {tool.submittedAt || 'N/A'}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button 
                          onClick={() => onReject(tool.id)}
                          className="px-4 py-2 text-sm font-bold text-rose-600 hover:bg-rose-50 rounded-xl transition-colors"
                        >
                          {t.reject}
                        </button>
                        <button 
                          onClick={() => onApprove(tool.id)}
                          className="px-4 py-2 text-sm font-bold bg-emerald-600 text-white hover:bg-emerald-700 rounded-xl shadow-sm shadow-emerald-100 transition-all"
                        >
                          {t.approve}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
