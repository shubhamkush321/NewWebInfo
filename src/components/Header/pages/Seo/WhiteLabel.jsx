import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SERVERAPI } from '../../../../common/common'; 
import Services from '../Extra/Services';
import ContactForm from '../Extra/ContactForm';
import imageLocal from "../../../../assets/New folder/asset 4.jpeg";


const WhiteLabel = () => {
  const [data, setData] = useState([]);

  // Fetch data from the server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${SERVERAPI}/api/white-label`);
        setData(response.data || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-full bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto p-6 bg-gray-50 rounded-lg">
        {data.map((item, index) => {
          if (item.type === 'header') {
            return React.createElement(`h${item.level}`, { key: index, className: item.className }, item.text);
          }
          if (item.type === 'paragraph') {
            return (
              <p key={index} className={item.className}>
                {item.text}
              </p>
            );
          }
          if (item.type === 'link') {
            return (
              <a key={index} href={item.href} className={item.className}>
                {item.text}
              </a>
            );
          }
          return null;
        })}
      </div>
      <div className='m-44 -mt-2'>
        <Services/>
        <img src={imageLocal} />
        <ContactForm/>
      </div>
    </div>
  );
};

export default WhiteLabel;
