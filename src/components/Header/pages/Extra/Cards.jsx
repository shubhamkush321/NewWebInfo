import React from 'react'
import { FaEarthAfrica } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";
import { IoBookSharp } from "react-icons/io5";

const Cards = () => {
  return (
    <div className="container mx-auto px-4">
        <hr className="border-black my-8"/>
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        SEO Engagement Models
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-32 -mt-10">
        <div className="bg-white rounded-lg shadow-md p-4 w-72">
          <div className="flex justify-center mb-4">
          <div className="border-gray-500 border-2 rounded-full p-4 hover:border-blue-400">
          <FaEarthAfrica  className="size-10 text-gray-400 hover:text-blue-500"/>
          </div>
          </div>
          <h1
           className="text-xl font-bold mb-2 text-gray-700 flex justify-center">SEO PLANS</h1
          >
          <p className="text-gray-700 flex justify-center">
          At Web Infomatrix, we concentrate on a number of factors when it comes to local SEO. When it comes to SEO
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 w-72">
          <div className="flex justify-center mb-4">
          <div className="border-gray-500 border-2 rounded-full p-4 hover:border-blue-400">
          <FaHandshake  className="size-10 text-gray-400 hover:text-blue-500"/>
          </div>
          </div>
          <h1
           className="text-xl font-bold mb-2 text-gray-700 flex justify-center">SEO CONSULTING</h1
          >
          <p className="text-gray-700">
          At Web Infomatrix, we provide a wide range of SEO services to help your company rank higher in search results.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 w-72">
          <div className="flex justify-center mb-4">
          <div className="border-gray-500 border-2 rounded-full p-4 hover:border-blue-400">
          <IoIosSettings   className="size-10 text-gray-400 hover:text-blue-500"/>
          </div>
          </div>
          <h1
           className="text-xl font-bold mb-2 text-gray-700 flex justify-center">SEO RANKING</h1
          >
          <p className="text-gray-700 flex justify-center">
          By focusing your SEO on certain keyword phrases that are relevant and targeted toward your small business's services or products.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 w-72">
          <div className="flex justify-center mb-4">
          <div className="border-gray-500 border-2 rounded-full p-4 hover:border-blue-400">
          <FaBagShopping  className="size-10 text-gray-400 hover:text-blue-500"/>
          </div>
          </div>
          <h1
           className="text-xl font-bold mb-2 text-gray-700 flex justify-center">SEO TRAFFIC</h1
          >
          <p className="text-gray-700">
          When it comes to our websites, we all desire more traffic. The SEO services of Web Infomatrix can help your website rank higher
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 w-72">
          <div className="flex justify-center mb-4">
          <div className="border-gray-500 border-2 rounded-full p-4 hover:border-blue-400">
          <IoBookSharp  className="size-10 text-gray-400 hover:text-blue-500"/>
          </div>
          </div>
          <h1
           className="text-xl font-bold mb-2 text-gray-700 flex justify-center">SEO ADVISORY</h1
          >
          <p className="text-gray-700 flex justify-center">
          We may start tracking development from month to month, quarter to quarter, or year to year after we know how the website is functioning from an analytical and statistical aspect.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Cards;