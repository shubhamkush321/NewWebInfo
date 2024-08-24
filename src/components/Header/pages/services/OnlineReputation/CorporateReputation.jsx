import React from 'react';
import { useState , useEffect } from 'react';
import ContactForm from '../../Extra/ContactForm';
import Services from '../../Extra/Services';
import image1 from "../../../../../assets/New folder/asset 4.jpeg";
import {SERVERAPI} from '../../../../../common/common';
import axios from 'axios';


const CorporateReputation = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${SERVERAPI}/api/corporate-reputation`);
        setData(response.data[0]?.sections || []);
      } catch (error) {
        console.error('API fetch error:', error);
        setError('Failed to load data.');
      } 
    };
    fetchData();
  }, []);

  return (
    <main className="p-48 -mt-16 bg-gray-50">
      {data.length > 0 ? (
        data.map((section, index) => (
          <section key={index} className="mb-8">
            <h1 className="text-3xl flex text-gray-800 mb-3 justify-center">
              {section.title}
            </h1>
            <div className="text-lg text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: section.content }}></div>
            {section.list && (
              <ul className="list-inside text-lg text-gray-700 mb-4">
                {section.list.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    {typeof item === 'string' ? (
                      <span dangerouslySetInnerHTML={{ __html: item }}></span>
                    ) : (
                      <>
                        <strong>{item.title}</strong> <br />
                        {item.description}
                      </>
                    )}
                  </li>
                ))}
              </ul>
            )}
            {section.additionalContent && (
              <div dangerouslySetInnerHTML={{ __html: section.additionalContent }}></div>
            )}
          </section>
        ))
      ) : (
        <p>No data available.</p>
      )}
      <div>
        <Services />
        <img src={image1} alt="Corporate" />
        <ContactForm />
      </div>
    </main>
  );
};

export default CorporateReputation;
