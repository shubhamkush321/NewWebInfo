import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/solid'; // Import the left arrow icon

const Cards = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/admin'); 
  };

  return (
    <div>
      <button
        className="flex items-center bg-gray-500 text-white font-bold py-2 px-4 rounded mb-4 transition-transform duration-300 transform hover:scale-105 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
        onClick={handleBackClick}
      >
        <ChevronLeftIcon className="w-5 h-5 mr-2" /> {/* Arrow icon */}
        Back
      </button>
    </div>
  );
};

export default Cards;
