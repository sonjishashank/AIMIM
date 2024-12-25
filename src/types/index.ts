export interface Leader {
  id: string;
  name: string;
  designation: string;
  bio: string;
  image: string;
  socialLinks: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
  };
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  content: string;
  image?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  stats?: {
    label: string;
    value: string;
  }[];
}

export interface TimelineEvent {
  year: number;
  title: string;
  description: string;
}