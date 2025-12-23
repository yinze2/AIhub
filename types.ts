
export type Category = 
  | 'General LLM' | 'AI Search' | 'Image Gen' | 'Video Gen' | 'Audio & Music' 
  | 'Coding AI' | 'Web Generation' | 'PPT & Slides' | 'Excel & Data' | 'Document AI'
  | 'Task Agents' | 'Productivity' | 'Research' | 'Marketing' | 'Writing'
  | 'Design & UI' | 'Education' | 'Translation' | 'Finance' | 'Legal' 
  | 'Medical' | 'Agent Frameworks' | 'Character & Social' | 'Developer Tools'
  | 'Gaming AI' | 'Hardware AI' | 'Enterprise AI';

export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
  recommended: boolean;
}

export interface AITool {
  id: string;
  name: string;
  description: string;
  category: Category;
  tags: string[];
  url: string;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  clickCount: number;
  favoritesCount: number;
  isVipEnabled: boolean;
  pricing: 'Free' | 'Freemium' | 'Paid';
  reviews: Review[];
  status: 'approved' | 'pending';
  submittedAt?: string;
  origin: 'Global' | 'China';
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  source: string;
  url: string;
  publishedAt: string;
  sentiment: 'POSITIVE' | 'NEGATIVE' | 'NEUTRAL';
}
