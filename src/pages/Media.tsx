import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import SectionTitle from '../components/shared/SectionTitle';
import Card from '../components/shared/Card';

const Media = () => {
  const newsItems = [
    {
      id: 1,
      title: 'AIMIM Launches New Education Initiative',
      date: 'March 15, 2024',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80',
      excerpt: 'New program aims to provide quality education to underprivileged students...',
    },
    // Add more news items
  ];

  return (
    <div>
      <PageHeader
        title="Media Center"
        subtitle="Stay updated with our latest news, events, and press releases."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <SectionTitle
              title="Latest News"
              subtitle="Updates from our recent activities and initiatives"
            />
            
            <div className="space-y-8">
              {newsItems.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-48 w-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <p className="text-sm text-gray-500">{item.date}</p>
                      <h3 className="mt-2 text-xl font-bold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-gray-600">{item.excerpt}</p>
                      <a
                        href="#"
                        className="mt-4 inline-flex items-center text-green-600 hover:text-green-700"
                      >
                        Read more
                        <span className="ml-2">→</span>
                      </a>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            {/* <SectionTitle
              title="Press Kit"
              subtitle="Resources for media professionals"
            /> */}
            
            {/* <Card className="p-6">
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="flex items-center text-gray-600 hover:text-green-600"
                  >
                    <svg
                      className="h-5 w-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" />
                    </svg>
                    Download Logo Pack
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center text-gray-600 hover:text-green-600"
                  >
                    <svg
                      className="h-5 w-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" />
                    </svg>
                    Brand Guidelines
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center text-gray-600 hover:text-green-600"
                  >
                    <svg
                      className="h-5 w-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" />
                    </svg>
                    Press Releases
                  </a>
                </li>
              </ul>
            </Card> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;