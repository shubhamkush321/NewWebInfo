import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SERVERAPI } from '../../../../common/common'; 
import image1 from '../../../../assets/WedDesign/ecomm-development-1.png';
import imageLocal from "../../../../assets/New folder/asset 4.jpeg";
import ContactForm from "../Extra/ContactForm";
import Services from '../Extra/Services';

const ECommerceDevelopment = () => {
  const [data, setData] = useState(null); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${SERVERAPI}/api/ecommerce`);
        console.log("API Response:", response.data); 
        setData(response.data[0] || {}); 
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data. Please try again later."); 
      }
    };

    fetchData();
  }, []); 

  if (error) return <div>{error}</div>; 
  if (!data) return <div>Loading data...</div>; 

  return (
    <div className="container mx-auto p-44 bg-white text-gray-900 -mt-10">
      <h1 className="text-3xl font-bold mb-4 flex justify-center">{data.title}</h1>
      <p className="mb-4">{data.introduction}</p>
      <div className="flex items-start mb-4 gap-6">
        <img src={data.image1} alt="E-commerce Services" />
        <ul className="list-inside flex-1 mt-16">
          <h3 className='mb-2'>Expertise lies in the following <b>E-commerce services :</b></h3>
          {data.servicesList && data.servicesList.map((service, index) => (
            <li className="flex items-center mb-2" key={index}>
              <input type="checkbox" checked readOnly className="mr-2" />
              {service}
            </li>
          ))}
        </ul>
      </div>
      <hr className='border-black border-dashed'/>
      <h2 className="text-2xl font-semibold mb-4 flex justify-center mt-2">{data.customDesignTitle}</h2>
      <hr className='border-black border-dashed'/>
      <p className="mb-4">{data.customDesignContent}</p>
      {data.benefits && data.benefits.map((benefit, index) => (
        <p className="mb-4" key={index}>{benefit}</p>
      ))}
      {data.expertise && data.expertise.map((item, index) => (
        <div key={index}>
          <h2 className="text-2xl font-semibold mb-4">{item.title}</h2>
          <p className="mb-4">{item.description}</p>
        </div>
      ))}
      {data.process && data.process.map((step, index) => (
        <div key={index}>
          <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
          <p className="mb-4">{step.description}</p>
        </div>
      ))}
      <h2 className="text-2xl font-semibold mb-4">The following E-commerce services are among our specialties:</h2>
      <ul className="list-disc list-inside mb-4">
        {data.additionalServices && data.additionalServices.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
      <div>
        {data.servicesComponent && <Services />}
        <img src={data.imageLocal} alt="Local Asset" />
        {data.contactForm && <ContactForm />}
      </div>
    </div>
  );
}

export default ECommerceDevelopment;
