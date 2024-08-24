import React from 'react';
import { IoMdSearch } from 'react-icons/io';
import { Link } from 'react-router-dom';

const HealthCare = () => {
  return (
    <div className='bg-gray-50 p-4 m-40'>
      <h1 className='text-2xl font-bold mb-2'>Oops! That Page can't Be Found</h1>
      <p className='mb-4'>It looks nothing was found at this location. Maybe try another link.</p>
      <div className='relative'>
        <input
          type="text"
          placeholder="Search.."
          className='w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
        <Link to ="/Search">
          <IoMdSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500' />
        </Link>
      </div>
    </div>
  );
};

export default HealthCare;
