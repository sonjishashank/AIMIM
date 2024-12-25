import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const NewsSection = () => {
  const [news, setNews] = useState([]);
  const API_KEY = 'pub_1313412bae4f1565a138983a939197b33f26e';

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsdata.io/api/1/news?apikey=${API_KEY}&q=Asaduddin-Owaisi&country=in&language=en`
        );
        const data = await response.json();
        setNews(data.results.slice(0, 3)); // Limit to top 3 articles
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {news.length > 0 ? (
        news.map((article, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            {article.image_url && (
              <img
                src={article.image_url}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">{article.title}</h3>
              <p className="mt-2 text-gray-600">
                {article.description || 'No description available.'}
              </p>
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center text-green-600 hover:text-green-700"
              >
                Read more
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-600">Loading news...</p>
      )}
    </div>
  );
};

export default NewsSection;
