import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SERVERAPI } from '../../../../common/common'; 
import imageLocal from "../../../../assets/New folder/asset 4.jpeg";
import ContactForm from "../Extra/ContactForm";
import Services from '../Extra/Services';

const MagentoDevelopment = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${SERVERAPI}/api/magento-development`);
        console.log("API Response:", response.data); 
        setData(response.data[0] || {}); 
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data. Please try again later."); 
      }
    };

    fetchData();
  }, []);

  if (error) return <p>{error}</p>;
  if (!data.introduction) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-44 bg-white text-gray-800 -mt-16">
      <h1 className="text-3xl font-bold mb-6 text-center">Magento E-Commerce Development Services</h1>

      {data.introduction.map((text, index) => (
        <p key={index} className="mb-6" dangerouslySetInnerHTML={{ __html: text }} />
      ))}

      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Magento Development Services at Web Infomatrix</h2>
      <div className="space-y-6">
        <ul className="list-decimal list-inside pl-5 space-y-3">
          {data.services && data.services.map((service, index) => (
            <li key={index}>
              <strong>{service.title}:</strong> {service.description}
            </li>
          ))}
        </ul>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Why Web Infomatrix?</h2>
      <p className="mb-6 text-gray-500" dangerouslySetInnerHTML={{ __html: data.whyUs }} />

      <div className="mt-8">
        <Services />
        <img src={imageLocal} alt="Local Asset" className="w-full h-auto mb-6" />
        <ContactForm />
      </div>
    </div>
  );
}

export default MagentoDevelopment;
