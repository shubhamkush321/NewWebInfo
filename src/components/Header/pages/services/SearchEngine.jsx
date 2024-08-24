import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IoMdAdd, IoMdRemove } from 'react-icons/io';
import ContactForm from '../Extra/ContactForm'; 
import Cards from '../Extra/Cards'; 
import { SERVERAPI } from '../../../../common/common';

const SearchEngine = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState({});
  const [isOpen, setIsOpen] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${SERVERAPI}/api/search-engines`);
        if (response.data.length > 0) {
          setData(response.data[0]); 
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (data.heroImage?.length || 1));
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [data.heroImage]);

  const toggleOpen = (index) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div>
      {data.heroImage && (
        <img
          src={data.heroImage[currentIndex]}
          alt="Slider"
          style={{ width: "100%", height: "auto" }}
        />
      )}
      <div className="lg:p-44 ">
        <div className="container mx-auto px-4">
          {data.sections && data.sections.length > 0 && (
            <div className="text-center">
              <h1 className="-mt-20 text-xl font-semibold text-gray-800">
                {data.sections[0].title}
              </h1>
            </div>
          )}
          <hr className="my-8" />
          {data.sections && data.sections[0] && data.sections[0].content.map((paragraph, index) => (
            <div key={index} className="mt-8">
              <p className="text-lg text-gray-700">{paragraph}</p>
            </div>
          ))}
          <hr />
          <div className="mt-8 text-center">
            <h1 className="text-xl font-bold text-gray-800">
              Organic White Hat SEO Company
            </h1>
          </div>
          <div className="mt-8">
            <ul className="list-disc pl-8">
              {data.servicesAndBenefits && data.servicesAndBenefits.services.map((service, index) => (
                <li key={index} className="text-gray-700">{service}</li>
              ))}
            </ul>
          </div>
          <div className="mt-8">
            <h1 className="text-xl font-bold text-gray-800 text-center">
              A Watch on the Best Pages of Your Competitors
            </h1>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="bg-white rounded-md shadow-md p-4">
              <h4 className="text-lg font-bold text-gray-700 mb-2">Services</h4>
              <ul className="list-disc pl-8">
                {data.servicesAndBenefits && data.servicesAndBenefits.services.map((service, index) => (
                  <li key={index} className="text-gray-700">{service}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-md shadow-md p-4">
              <h4 className="text-lg font-bold text-gray-700 mb-2">Benefits</h4>
              <ul className="list-disc pl-8">
                {data.servicesAndBenefits && data.servicesAndBenefits.benefits.map((benefit, index) => (
                  <li key={index} className="text-gray-700">{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        
          <br />
          <div>
            <h1 className="text-xl font-bold text-gray-800">Frequently Asked Questions</h1>
            <div className="mt-4">
              {data.faqs && data.faqs.map((faq, index) => (
                <div key={index} className="mb-4">
                  <h3
                    onClick={() => toggleOpen(index)}
                    className="text-lg font-bold cursor-pointer text-blue-500 flex items-center"
                  >
                    {faq.question}
                    {isOpen[index] ? <IoMdRemove className="ml-2" /> : <IoMdAdd className="ml-2" />}
                  </h3>
                  {isOpen[index] && (
                    <p className="text-gray-700 mt-2">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="p-24">
        <ContactForm />
      </div>
      <Cards />
    </div>
  );
};

export default SearchEngine;
