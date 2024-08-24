import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SERVERAPI } from '../../../../common/common';
import Services from '../Extra/Services';
import ContactForm from '../Extra/ContactForm';
import imageLocal from "../../../../assets/New folder/asset 4.jpeg";


const Video = () => {
  const [data, setData] = useState([]);
 
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${SERVERAPI}/api/video-content`);
          setData(response.data || []);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, []);

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white mt-20">
      {data.map((item, index) => {
        if (item.type === 'header') {
          return (
            <h1 key={index} className="text-3xl font-bold text-gray-900 mb-6">
              {item.text}
            </h1>
          );
        }

        if (item.type === 'subheader') {
          return (
            <div key={index}>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {item.text}
              </h2>
              {item.list && (
                <ul className="list-decimal list-inside pl-5 mb-6 space-y-4">
                  {item.list.map((listItem, listIndex) => (
                    <li key={listIndex} className="text-lg text-gray-900 font-semibold">
                      {listItem}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        }

        if (item.type === 'paragraph') {
          return (
            <p key={index} className="text-lg text-gray-700 mb-6" dangerouslySetInnerHTML={{ __html: item.text }} />
          );
        }

        return null;
      })}

      <div className="flex flex-col mt-12">
        <Services />
        <img src={imageLocal} alt="Descriptive alt text" className="my-8 max-w-full h-auto" />
        <ContactForm />
      </div>
    </div>
  );
};

export default Video;
