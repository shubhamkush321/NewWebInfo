import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {SERVERAPI} from '../../../../../common/common'; 
import Services from '../../Extra/Services';
import ContactForm from '../../Extra/ContactForm';
import image1 from "../../../../../assets/New folder/asset 4.jpeg";

const OnlineReputation = () => {
const[data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await axios.get(`${SERVERAPI}/api/online-reputation`);
        setData(response.data[0]?.sections);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  console.log(data);

  return (
    <main className="p-48 -mt-16 bg-gray-50">
    {data.map((section, index) => (
      <section className="mb-8" key={index}>
        <h1 className={`text-2xl ${index === 0 ? 'flex justify-center' : 'text-xl'} font-bold text-gray-800 mb-4`}>
          {section.header}
        </h1>
        <div
          className={`text-lg ${index === 0 ? 'text-gray-800' : 'text-gray-700'} mb-4`}
          dangerouslySetInnerHTML={{ __html: section.description }}
        />
      </section>
    ))}
    <div>
      <Services />
      <img src={image1} alt="Online Reputation" />
      <ContactForm />
    </div>
  </main>
  );
};

export default OnlineReputation;
