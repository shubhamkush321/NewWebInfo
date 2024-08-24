import React, { useState, useEffect } from 'react';
import ContactForm from '../../Extra/ContactForm';
import Services from '../../Extra/Services';
import image1 from "../../../../../assets/New folder/asset 4.jpeg";
import { SERVERAPI } from '../../../../../common/common';
import axios from 'axios';

const CelebrityReputation = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${SERVERAPI}/api/celebrity-reputation`);
        if (Array.isArray(response.data) && response.data.length > 0) {
          setData(response.data); 
        } else {
          console.error("No valid data returned from API");
          setData([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="p-48 -mt-16 bg-gray-50">
      {data.length > 0 ? (
        data.map((section, index) => (
          <section key={index} className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
              {section.title}
            </h1>
            <div className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: section.content || '' }}></div>
            {Array.isArray(section.list) && section.list.length > 0 && (
              <ul className="list-disc list-inside text-gray-800 mb-4">
                {section.list.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))
      ) : (
        <p>No data available.</p>
      )}
      <div>
        <Services />
        <img src={image1} alt="Illustration of celebrity reputation management" />
        <ContactForm />
      </div>
    </main>
  );
};

export default CelebrityReputation;
