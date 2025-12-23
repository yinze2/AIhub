
import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import SearchSection from './components/SearchSection';
import ToolCard from './components/ToolCard';
import VIPPricing from './components/VIPPricing';
import SubmitToolModal from './components/SubmitToolModal';
import ToolDetail from './components/ToolDetail';
import { INITIAL_TOOLS } from './constants';
import { AITool, Category, Review } from './types';
import { Language, translations } from './translations';

const App: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [activeView, setActiveView] = useState<'home' | 'pricing' | 'submit'>('home');
  const [tools, setTools] = useState<AITool[]>(INITIAL_TOOLS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [selectedTool, setSelectedTool] = useState<AITool | null>(null);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  const t = translations[currentLang];

  const filteredTools = useMemo(() => {
    return tools.filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            tool.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [tools, searchQuery, selectedCategory]);

  const handleNavClick = (view: 'home' | 'pricing' | 'submit') => {
    if (view === 'submit') {
      setIsSubmitModalOpen(true);
    } else {
      setActiveView(view);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleAddReview = (toolId: string, reviewData: Omit<Review, 'id' | 'date'>) => {
    setTools(prev => prev.map(tool => {
      if (tool.id === toolId) {
        const newReview: Review = {
          ...reviewData,
          id: Date.now().toString(),
          date: new Date().toLocaleDateString(),
        };
        const updatedReviews = [newReview, ...tool.reviews];
        const totalRating = updatedReviews.reduce((sum, r) => sum + r.rating, 0);
        const newRating = parseFloat((totalRating / updatedReviews.length).toFixed(1));
        
        const updatedTool = {
          ...tool,
          reviews: updatedReviews,
          rating: newRating,
          reviewCount: tool.reviewCount + 1
        };
        
        if (selectedTool?.id === toolId) setSelectedTool(updatedTool);
        return updatedTool;
      }
      return tool;
    }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        onNavClick={handleNavClick} 
        activeView={activeView} 
        currentLang={currentLang} 
        onLanguageChange={setCurrentLang}
      />

      <main className="flex-1">
        {activeView === 'home' && (
          <>
            <SearchSection 
              onSearch={setSearchQuery}
              onCategoryFilter={setSelectedCategory}
              selectedCategory={selectedCategory}
              currentLang={currentLang}
            />
            
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="flex justify-between items-end mb-10">
                <div>
                   <h2 className="text-3xl font-bold text-slate-900 mb-2">
                    {selectedCategory === 'All' ? (currentLang === 'zh' ? '全部分类工具' : 'All Featured Tools') : `${selectedCategory} Tools`}
                   </h2>
                   <p className="text-slate-500">
                    {currentLang === 'zh' ? `显示 ${filteredTools.length} 个结果` : `Showing ${filteredTools.length} results`}
                   </p>
                </div>
              </div>

              {filteredTools.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                  {filteredTools.map(tool => (
                    <ToolCard 
                      key={tool.id} 
                      tool={tool} 
                      onSelect={(t) => setSelectedTool(t)} 
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                   <div className="inline-block p-6 bg-slate-100 rounded-full mb-6">
                      <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                   </div>
                   <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {currentLang === 'zh' ? '未找到工具' : 'No tools found'}
                   </h3>
                </div>
              )}
            </section>
          </>
        )}

        {activeView === 'pricing' && <VIPPricing currentLang={currentLang} />}
      </main>

      <footer className="bg-slate-950 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
             <div className="flex items-center mb-6">
               <div className="bg-indigo-600 p-2 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="ml-3 text-2xl font-bold">AI Hub</span>
             </div>
             <p className="text-slate-400 max-w-sm mb-6">{t.footer.desc}</p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase text-sm tracking-widest text-slate-500">{t.footer.platform}</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><button onClick={() => handleNavClick('home')} className="hover:text-white transition-colors">{t.nav.explore}</button></li>
              <li><button onClick={() => handleNavClick('pricing')} className="hover:text-white transition-colors">{t.nav.pricing}</button></li>
              <li><button onClick={() => setIsSubmitModalOpen(true)} className="hover:text-white transition-colors">{t.nav.submit}</button></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.footer.api}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-sm tracking-widest text-slate-500">{t.footer.support}</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">{t.footer.help}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.footer.community}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.footer.contact}</a></li>
            </ul>
          </div>
        </div>
      </footer>

      {isSubmitModalOpen && (
        <SubmitToolModal 
          currentLang={currentLang}
          onClose={() => setIsSubmitModalOpen(false)} 
          onSubmit={(data) => console.log('New tool submitted:', data)} 
        />
      )}

      {selectedTool && (
        <ToolDetail 
          currentLang={currentLang}
          tool={selectedTool} 
          onClose={() => setSelectedTool(null)} 
          onAddReview={handleAddReview}
        />
      )}
    </div>
  );
};

export default App;
