
export interface Step {
  id: string;
  title: string;
  description: string;
  guiInstructions: string[];
  cliCommand: string;
  explanation: string;
  imageUrl?: string;
}

export interface Topic {
  id: string;
  title: string;
  category: 'Basic' | 'Security' | 'Routing' | 'Management' | 'Wireless' | 'Optical' | 'VPN' | 'Advanced Config' | 'Monitoring' | 'Security Hardening';
  difficulty: 'Beginner' | 'Intermediate' | 'Expert';
  steps: Step[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
  isScript?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Troubleshooting' | 'Security';
}

export enum AppView {
  GUIDE = 'GUIDE',
  AI_ASSISTANT = 'AI_ASSISTANT',
  TOPICS = 'TOPICS',
  FAQ = 'FAQ',
  ABOUT = 'ABOUT'
}
