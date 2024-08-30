import React from 'react';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/admin'); 
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Blog</h1>
      {/* Add your blog content here */}
      <button
        className="bg-gray-500 text-white font-bold py-2 px-4 rounded mb-4 transition-transform duration-300 transform hover:scale-105 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
        onClick={handleBackClick}
      >
        Back to Blog
      </button>
    </div>
  );
};

export default Blog;
