import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SERVERAPI } from '../../../../common/common';
import Services from '../Extra/Services';
import ContactForm from '../Extra/ContactForm';
import imageLocal from "../../../../assets/New folder/asset 4.jpeg";


const Reseller = () => {
  const [data, setData] = useState([]);
  // Fetch data from the server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${SERVERAPI}/api/reseller`);
        setData(response.data || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  
  const renderHTML = (html) => {
    return { __html: html };
  };

  return (
    <div className="max-w-5xl mx-auto p-4 bg-white rounded-lg mt-14">
      {data.map((section, index) => {
        const { type, text, title, items } = section;

        switch (type) {
          case 'header':
            return (
              <h1 key={index} className="text-3xl font-semibold text-gray-900 mb-6 flex justify-center">
                {text}
              </h1>
            );
          case 'subheader':
            return (
              <h2 key={index} className="text-2xl font-semibold text-gray-800 mb-4">
                {text}
              </h2>
            );
          case 'paragraph':
            return (
              <p key={index} className="text-lg text-gray-700 mb-4" dangerouslySetInnerHTML={renderHTML(text)} />
            );
          case 'section':
            return (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
                <p className="text-lg text-gray-700 mb-4" dangerouslySetInnerHTML={renderHTML(text)} />
              </div>
            );
          case 'list':
            return (
              <ul key={index} className="list-disc list-inside pl-5 mb-4 text-lg text-gray-700">
                {items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            );
          default:
            return null;
        }
      })}
      
      {/* New Section for Services, Image, and ContactForm */}
      <div className="flex flex-col mt-12">
        <Services />
        <img src={imageLocal} alt="Descriptive alt text" className="my-8 max-w-full h-auto" />
        <ContactForm />
      </div>
    </div>
  );
};

export default Reseller;
