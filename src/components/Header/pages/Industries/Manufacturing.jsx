import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {SERVERAPI} from '../../../../common/common'; 
import imageLocal from "../../../../assets/New folder/asset 4.jpeg";
import Services from '../Extra/Services';
import ContactForm from '../Extra/ContactForm';


const Manufacturing = () => {
  const[data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${SERVERAPI}/api/manufacturing`);
        console.log("Fetched data:", response.data);
        // Directly use the response data array
        if (Array.isArray(response.data)) {
          setData(response.data);
        } else {
          console.error("Unexpected data format:", response.data);
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
    <div className="container mx-auto lg:p-44 -mt-16 bg-white shadow-lg rounded-lg">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 flex justify-center">Manufacturing Digital Marketing Agency</h1>
      </header>
      
      {data.map((section, index) => (
        <section key={index} className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">{section.header}</h2>
          {section.paragraphs.map((paragraph, i) => (
            <p key={i} className="text-gray-700 mt-2" dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}
        </section>
      ))}

      <div>
        <Services/>
        <img src={imageLocal} alt="Local Image" className="my-6" />
        <ContactForm/>
      </div>
    </div>
  );
};

export default Manufacturing;
