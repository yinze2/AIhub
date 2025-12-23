
export type Category = 'Text' | 'Image' | 'Video' | 'Audio' | 'Coding' | 'Productivity' | 'Research' | 'Business';

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
  isVipEnabled: boolean;
  pricing: 'Free' | 'Freemium' | 'Paid';
  reviews: Review[];
}

export interface NavItem {
  label: string;
  path: string;
}
