import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SERVERAPI } from '../../../../common/common';
import flash from '../../../../assets/WedDesign/flash.jpg'; 
import imageLocal from "../../../../assets/New folder/asset 4.jpeg";
import ContactForm from "../Extra/ContactForm";
import Services from '../Extra/Services';

const FlashAnimation = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${SERVERAPI}/api/flash-data`);
        console.log('API Response:', response.data);
        setData(response.data || []);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto md:p-16 lg:p-44 -mt-14">
      {data.map((section, index) => {
        if (section.heading === 'Corporate Flash Presentation Services') {
          // Display the image above this specific heading
          return (
            <div key={index} className="mb-8">
              <img
                src={flash} // Display the image above this specific heading
                alt="Flash Animation"
                className="w-full h-auto object-cover rounded-lg mb-4"
              />
              <h1 className="text-3xl font-bold mb-6 text-center lg:text-left">{section.heading}</h1>
              {section.paragraphs && section.paragraphs.map((paragraph, idx) => (
                <p key={idx} className="mb-6 text-gray-700">{paragraph}</p>
              ))}
            </div>
          );
        }
        // Render other sections as usual
        return (
          <div key={index} className="mb-8">
            {section.heading && (
              <h1 className="text-3xl font-bold mb-6 text-center lg:text-left">{section.heading}</h1>
            )}
            {section.paragraphs && section.paragraphs.map((paragraph, idx) => (
              <p key={idx} className="mb-6 text-gray-700">{paragraph}</p>
            ))}
            {section.listItems && (
              <ul className="list-disc list-inside mb-6 text-gray-700">
                {section.listItems.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
            {section.heading === 'Technical SEO Audit of a Website' && (
              <hr className="border-black mt-4 mb-4" />
            )}
          </div>
        );
      })}
      <div className="mt-8">
        <Services />
        <img src={imageLocal} alt="Local Asset" className="w-full h-auto mb-6" />
        <ContactForm />
      </div>
    </div>
  );
};

export default FlashAnimation;
