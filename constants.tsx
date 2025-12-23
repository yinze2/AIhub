
import { AITool, Category } from './types';

export const CATEGORIES: Category[] = [
  'Text', 'Image', 'Video', 'Audio', 'Coding', 'Productivity', 'Research', 'Business'
];

export const INITIAL_TOOLS: AITool[] = [
  {
    id: '1',
    name: 'ChatGPT',
    description: 'The world\'s most popular conversational AI by OpenAI. Capable of writing, coding, and brainstorming.',
    category: 'Text',
    tags: ['Chatbot', 'Writing', 'Code'],
    url: 'https://chat.openai.com',
    imageUrl: 'https://picsum.photos/seed/chatgpt/400/250',
    rating: 4.8,
    reviewCount: 1250,
    isVipEnabled: true,
    pricing: 'Freemium',
    reviews: []
  },
  {
    id: '2',
    name: 'Midjourney',
    description: 'Advanced AI image generation known for high artistic quality and stunning detail.',
    category: 'Image',
    tags: ['Art', 'Design', 'Generative'],
    url: 'https://www.midjourney.com',
    imageUrl: 'https://picsum.photos/seed/midjourney/400/250',
    rating: 4.9,
    reviewCount: 890,
    isVipEnabled: true,
    pricing: 'Paid',
    reviews: []
  },
  {
    id: '3',
    name: 'Claude 3.5 Sonnet',
    description: 'Anthropic\'s most powerful model, known for nuanced reasoning and exceptional coding ability.',
    category: 'Text',
    tags: ['Chatbot', 'Reasoning', 'Technical'],
    url: 'https://claude.ai',
    imageUrl: 'https://picsum.photos/seed/claude/400/250',
    rating: 4.7,
    reviewCount: 450,
    isVipEnabled: true,
    pricing: 'Freemium',
    reviews: []
  },
  {
    id: '4',
    name: 'GitHub Copilot',
    description: 'Your AI pair programmer. Provides auto-completions and code suggestions in real-time.',
    category: 'Coding',
    tags: ['Programming', 'IDE', 'Automation'],
    url: 'https://github.com/features/copilot',
    imageUrl: 'https://picsum.photos/seed/copilot/400/250',
    rating: 4.6,
    reviewCount: 1100,
    isVipEnabled: false,
    pricing: 'Paid',
    reviews: []
  },
  {
    id: '5',
    name: 'Runway Gen-2',
    description: 'Powerful text-to-video and video-to-video AI tool for creative storytelling.',
    category: 'Video',
    tags: ['Video Editing', 'Creative', 'Cinematic'],
    url: 'https://runwayml.com',
    imageUrl: 'https://picsum.photos/seed/runway/400/250',
    rating: 4.5,
    reviewCount: 320,
    isVipEnabled: true,
    pricing: 'Freemium',
    reviews: []
  },
  {
    id: '6',
    name: 'ElevenLabs',
    description: 'The most realistic AI speech and voice synthesis platform available today.',
    category: 'Audio',
    tags: ['Voice', 'Text-to-Speech', 'Cloning'],
    url: 'https://elevenlabs.io',
    imageUrl: 'https://picsum.photos/seed/eleven/400/250',
    rating: 4.8,
    reviewCount: 670,
    isVipEnabled: true,
    pricing: 'Freemium',
    reviews: []
  }
];
