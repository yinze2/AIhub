
import React from 'react';
import { AITool } from '../types';

interface ToolCardProps {
  tool: AITool;
  onSelect: (tool: AITool) => void;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool, onSelect }) => {
  return (
    <div 
      className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-indigo-400 hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer group"
      onClick={() => onSelect(tool)}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={tool.imageUrl} 
          alt={tool.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 flex flex-col gap-2">
           <span className="bg-white/90 backdrop-blur-sm text-slate-900 px-3 py-1 rounded-full text-xs font-bold border border-slate-200">
            {tool.category}
          </span>
          {tool.isVipEnabled && (
            <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
              VIP Enabled
            </span>
          )}
        </div>
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{tool.name}</h3>
          <div className="flex items-center text-amber-500">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-1 text-sm font-bold text-slate-700">{tool.rating}</span>
          </div>
        </div>
        
        <p className="text-slate-600 text-sm line-clamp-2 mb-4 flex-1">
          {tool.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tool.tags.map(tag => (
            <span key={tag} className="bg-slate-100 text-slate-600 text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded-md">
              #{tag}
            </span>
          ))}
        </div>
        
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs font-medium text-slate-400">{tool.pricing}</span>
          <button 
            className="text-indigo-600 text-sm font-bold flex items-center group-hover:translate-x-1 transition-transform"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(tool);
            }}
          >
            Details
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;
