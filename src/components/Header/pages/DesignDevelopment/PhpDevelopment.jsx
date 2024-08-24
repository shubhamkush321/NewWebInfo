import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SERVERAPI } from '../../../../common/common'; 
import imageLocal from "../../../../assets/New folder/asset 4.jpeg";
import ContactForm from "../Extra/ContactForm";
import Services from '../Extra/Services';

const PhpDevelopment = () => {
  const [data, setData] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${SERVERAPI}/api/php-development`);
        console.log('API Response:', response.data);
        // Check if response.data is an array and contains items
        if (Array.isArray(response.data) && response.data.length > 0) {
          setData(response.data[0]); // Assuming you only need the first item
        } else {
          setError('No data found');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <div className="container mx-auto p-40 bg-white text-gray-900 -mt-10">
      {data.items.map((section, index) => {
        switch (section.type) {
          case 'heading':
            return React.createElement(
              `h${section.level}`,
              {
                key: index,
                className: `text-${section.level === 1 ? '3xl' : '2xl'} font-${section.level === 1 ? 'bold' : 'semibold'} mb-4`,
              },
              section.content
            );
          
          case 'paragraph':
            return (
              <p key={index} className="mb-6">
                <span dangerouslySetInnerHTML={{ __html: section.content }} />
                {section.continuation && (
                  <span dangerouslySetInnerHTML={{ __html: section.continuation }} />
                )}
                {section.boldText && <b>{section.boldText}</b>}
                {section.continuation2 && (
                  <span dangerouslySetInnerHTML={{ __html: section.continuation2 }} />
                )}
              </p>
            );
          
          case 'list':
            return (
              <ul key={index} className="list-disc list-inside mb-6 pl-5">
                <p className="mb-2">
                  <span dangerouslySetInnerHTML={{ __html: section.description }} />
                </p>
                {section.items.map((item, idx) => (
                  <li key={idx} className="mb-2">
                    <strong>{item}</strong>
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

export default PhpDevelopment;
