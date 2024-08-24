import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SERVERAPI } from '../../../../common/common';
import image1 from "../../../../assets/New folder/ppc-1.jpg";

const PayPer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${SERVERAPI}/api/payper`);
        if (Array.isArray(response.data)) {
          setData(response.data); // Set the data
        } else {
          setData([]); // If response is not an array, set empty array
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setData([]); // Handle errors by setting empty array
      }
    };
    fetchData();
  }, []);

  if (data.length === 0) {
    return <p>Loading or no data available...</p>; // Handle empty or loading state
  }

  return (
    <main className="mt-4 p-20 bg-blue-50">
      {data.map((item, index) => {
        switch (item.type) {
          case 'header':
            return (
              <header key={index} className="mt-8 text-center">
                <h1 className="text-xl font-bold text-gray-800 uppercase">
                  {item.content.title}
                </h1>
                <hr className="border-black mt-4" />
              </header>
            );
          case 'intro':
            return (
              <section key={index} className="mt-8">
                {item.content.map((paragraph, idx) => (
                  <p key={idx} className="text-gray-700 mb-2">
                    {paragraph}
                  </p>
                ))}
              </section>
            );
          case 'campaignManagement':
            return (
              <article key={index}>
                <h3 className="text-xl font-bold text-gray-800 uppercase">
                  PPC Campaign Management
                </h3>
                <div className="flex flex-col items-start mt-4">
                  {item.content.map((text, idx) => (
                    <div key={idx} className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        id={`campaign-management-${idx}`}
                        className="form-checkbox h-5 w-5 text-gray-600 focus:ring-blue-500"
                      />
                      <label htmlFor={`campaign-management-${idx}`} className="ml-2 text-gray-700 text-sm">
                        {text}
                      </label>
                    </div>
                  ))}
                </div>
              </article>
            );
          case 'image':
            return (
              <section key={index} className="flex justify-center bg-gray-100 mt-8">
                <img src={item.content.src || image1} alt={item.content.alt || 'Pay per click advertising'} className="border-transparent" />
              </section>
            );
          case 'section':
            return (
              <section key={index} className="mt-8 text-start">
                <h1 className="text-xl font-bold text-gray-800 uppercase">
                  {item.content.title}
                </h1>
                <p className="text-gray-700 mt-4">
                  {item.content.description}
                </p>
                <ul className="mt-4">
                  {item.content.points?.map((point, idx) => (
                    <li key={idx} className="text-gray-500 mt-2">
                      <strong>{point.title}:</strong> {point.details}
                    </li>
                  ))}
                </ul>
              </section>
            );
          case 'importance':
            return (
              <section key={index} className="mt-8">
                <h2 className="text-xl font-bold text-gray-800 uppercase">Importance of Digital Marketing in India</h2>
                <p className="text-gray-700 mt-4">
                  {item.content.description}
                </p>
                <ul className="mt-4">
                  {item.content.points?.map((point, idx) => (
                    <li key={idx} className="text-gray-500 mt-2">
                      <strong>{point.title}:</strong> {point.details}
                    </li>
                  ))}
                </ul>
              </section>
            );
          case 'benefits':
            return (
              <section key={index} className="mt-8">
                <h2 className="text-xl font-bold text-gray-800 uppercase">
                  {item.content.title}
                </h2>
                <p className="text-gray-700 mt-4">
                  {item.content.description}
                </p>
                <ul className="mt-4">
                  {item.content.points?.map((benefit, idx) => (
                    <li key={idx} className="text-gray-500 mt-2">
                      {benefit}
                    </li>
                  ))}
                </ul>
              </section>
            );
          case 'conclusion':
            return (
              <section key={index} className="mt-8">
                <p className="text-gray-500">
                  {item.content}
                </p>
              </section>
            );
          default:
            return null;
        }
      })}
    </main>
  );
};

export default PayPer;
