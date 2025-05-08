import React from 'react';
import feature from '../assets/feature.png';
import news2 from '../assets/news1.png';
import news1 from '../assets/news2.png';

function InsightsNews() {
  const articles = [
    {
      id: 1,
      title: 'What is Microsoft Loop and how does it work',
      date: '15/06/2024',
      image: feature,
      featured: true,
    },
    {
      id: 2,
      title: 'Boost productivity within your law firm with xerox technology',
      date: '15/06/2024',
      image: news1,
      featured: false,
    },
    {
      id: 3,
      title: 'What is Microsoft Loop and how does it work',
      date: '15/06/2024',
      image: news2,
      featured: false,
    },
  ];

  // Get featured article
  const featuredArticle = articles.find((article) => article.featured);

  // Get regular articles
  const regularArticles = articles.filter((article) => !article.featured);

  return (
    <div className="py-10 md:py-20 text-white">
      <h2 className="mb-12 text-4xl/14 font-bold">Insights & News</h2>

      <div className="space-y-12">
        {/* Featured Article */}
        {featuredArticle && (
          <div className="grid grid-cols-1">
            <a href="#" className="group">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="h-64 w-full object-cover"
                />
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-500">{featuredArticle.date}</p>
                <h3 className="mt-2 text-2xl font-bold transition-colors group-hover:text-brand">
                  {featuredArticle.title}
                </h3>
              </div>
            </a>
          </div>
        )}

        {/* Regular Articles - Side by Side */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {regularArticles.map((article) => (
            <a key={article.id} href="#" className="group">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-44 w-full object-cover"
                />
              </div>
              <div className="mt-4 pe-4">
                <p className="text-sm text-gray-500">{article.date}</p>
                <h3 className="mt-2 text-2xl/8 font-bold transition-colors group-hover:text-brand">
                  {article.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InsightsNews;
