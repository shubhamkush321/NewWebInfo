import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SERVERAPI } from '../../../../common/common'; 
import imageLocal from "../../../../assets/New folder/asset 4.jpeg";
import ContactForm from "../Extra/ContactForm";
import Services from '../Extra/Services';

const LaravelDevelopment = () => {
  const [data, setData] = useState([]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${SERVERAPI}/api/laravel`);
        console.log('API Response:', response.data);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  if (data.length === 0) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="container mx-auto p-44 bg-white text-gray-800 -mt-14">
      {data.map((section, index) => {
        switch (section.type) {
          case 'heading':
            return React.createElement(`h${section.level}`, { key: index, className: `text-${section.level === 1 ? '3xl' : '2xl'} font-${section.level === 1 ? 'bold' : 'semibold'} mb-6 text-center` }, section.content);

          case 'paragraph':
            return (
              <p key={index} className="mb-6 text-gray-500">
                {section.content}
                {section.boldText && <b>{section.boldText}</b>}
                {section.continuation}
                {section.link && (
                  <a href={section.link.href} className={section.link.className}>
                    {section.link.text}
                  </a>
                )}
                {section.continuation2}
              </p>
            );

          case 'list':
            return (
              <ul key={index} className="list-disc list-inside mb-6 pl-5 text-gray-500 space-y-2">
                {section.items.map((item, idx) => (
                  <li key={idx} className="mb-2">
                    <strong>{item.text}:</strong> {item.description}
                  </li>
                ))}
              </ul>
            );

          default:
            return null;
        }
      })}

      <div className="mt-8">
        <Services />
        <img src={imageLocal} alt="Local Asset" className="w-full h-auto mb-6" />
        <ContactForm />
      </div>
    </div>
  );
}

export default LaravelDevelopment;
