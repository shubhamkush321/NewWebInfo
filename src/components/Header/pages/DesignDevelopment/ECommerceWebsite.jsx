import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SERVERAPI } from '../../../../common/common'; 
import imageLocal from "../../../../assets/New folder/asset 4.jpeg";
import ContactForm from "../Extra/ContactForm";
import Services from '../Extra/Services';

const ECommerceWebsite = () => {
  const [data, setData] = useState(null); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${SERVERAPI}/api/design-ecommerce`);
        console.log("API Response:", response.data); 
        setData(response.data); // Adjust based on the data structure returned
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data. Please try again later."); 
      }
    };

    fetchData();
  }, []); 

  if (error) return <div>{error}</div>; 
  if (!data) return <div>Loading data...</div>; 

  const renderContent = (content) => {
    return content.map((item, index) => {
      switch (item.type) {
        case 'heading':
          const HeadingTag = `h${item.level}`;
          return <HeadingTag key={index} className="text-3xl font-semibold mb-4">{item.text}</HeadingTag>;

        case 'paragraph':
          return (
            <p key={index} className="mb-4">
              {item.text}
              {item.link && <a href={item.link.href} className={item.link.className}>{item.link.text}</a>}
              {item.continuation}
            </p>
          );

        case 'list':
          return (
            <ul key={index} className="list-disc list-inside mb-6 pl-5 space-y-3">
              {item.items.map((listItem, i) => (
                <li key={i}>{listItem}</li>
              ))}
            </ul>
          );

        default:
          return null;
      }
    });
  };

  return (
    <div className="container mx-auto p-44 -mt-16 bg-white text-gray-900">
      {renderContent(data)}

      <div className="mt-8">
        <Services />
        <img src={imageLocal} alt="Local Asset" className="w-full h-auto mb-6" />
        <ContactForm />
      </div>
    </div>
  );
};

export default ECommerceWebsite;
