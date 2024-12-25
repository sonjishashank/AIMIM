import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Education Initiative',
    category: 'Education',
    description: 'Providing quality education and scholarships to underprivileged students.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80',
    stats: [
      { label: 'Students Benefited', value: '5000+' },
      { label: 'Schools Supported', value: '50' },
    ],
  },
  // Add more projects
];