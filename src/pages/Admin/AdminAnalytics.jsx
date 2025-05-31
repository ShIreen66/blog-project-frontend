import React from 'react';

const AdminAnalytics = () => {
  const analyticsData = [
    {
      title: 'Introduction to Blogging',
      author: 'John Doe',
      date: 'Apr 21, 2024',
      views: 850,
    },
    {
      title: 'Tips for Writing Engaging Content',
      author: 'John Doe',
      date: 'Apr 19, 2024',
      views: 350,
    },
    {
      title: 'How to Optimize Your Blog for SEO',
      author: 'John Doe',
      date: 'Apr 17, 2024',
      views: 670,
    },
    {
      title: 'The Importance of Social Media Sharing',
      author: 'John Doe',
      date: 'Apr 16, 2024',
      views: 440,
    },
  ];

  return (
    <div className="p-6 w-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Admin analytics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {analyticsData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow p-6 flex flex-col gap-2 hover:shadow-lg transition duration-200 border border-gray-100"
          >
            <h3 className="text-lg font-bold text-gray-800 mb-1 truncate">{item.title}</h3>
            <div className="flex items-center text-sm text-gray-500 mb-1">
              <span className="mr-2">👤 {item.author}</span>
              <span className="ml-auto">📅 {item.date}</span>
            </div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 self-start mt-2">
              Views: {item.views}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminAnalytics;
