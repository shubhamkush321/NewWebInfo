import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SERVERAPI } from '../../../../common/common';
import Services from '../Extra/Services';
import ContactForm from '../Extra/ContactForm';
import imageLocal from "../../../../assets/New folder/asset 4.jpeg";



const Technical = () => {
  const [data, setData] = useState([]);
  // Fetch data from the server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${SERVERAPI}/api/technical-content`);
        setData(response.data || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg mt-24">
      {/* Main Content */}
      <div className="mb-12">
        {data.map((section, index) => {
          switch (section.type) {
            case 'header':
              return (
                <h1 key={index} className="text-3xl font-semibold text-gray-900 mb-6">
                  {section.text}
                </h1>
              );
            case 'subheader':
              return (
                <h2 key={index} className="text-2xl font-semibold text-gray-800 mb-4">
                  {section.text}
                </h2>
              );
            case 'paragraph':
              return (
                <p key={index} className="text-lg text-gray-700 mb-4">
                  {section.text}
                </p>
              );
            default:
              return null;
          }
        })}
      </div>

      {/* Additional Components */}
      <div className="flex flex-col">
        <Services />
        <img src={imageLocal} alt="Descriptive alt text" className="my-8 max-w-full h-auto" />
        <ContactForm />
      </div>
    </div>
  );
};

export default Technical;
