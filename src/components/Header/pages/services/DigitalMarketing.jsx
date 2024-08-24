import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SERVERAPI } from '../../../../common/common'; 
import { Link } from 'react-router-dom';
import DigitalCards from "../Extra/DigitalCards";
import Services from "../Extra/Services";

const DigitalMarketing = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${SERVERAPI}/api/digital-marketing`);
        setData(response.data[0]?.sections || []);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="md:p-12 lg:p-44 -mt-12 bg-gray-50 text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 flex justify-center">
        Digital Marketing
      </h1>
      <hr className="mb-4 border-t-2 border-gray-300" />

      {data.map((section, index) => (
        <section className="mb-12" key={index}>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">{section.header}</h2>
          {section.description && Array.isArray(section.description) ? (
            section.description.map((paragraph, idx) => (
              <p className="text-lg mb-6" key={idx}>
                {paragraph}
              </p>
            ))
          ) : (
            <p className="text-lg mb-6">
              {section.description}
              {section.links && section.links.map((link, idx) => (
                <Link key={idx} to={link.url} className="text-blue-600 hover:text-blue-800">
                  {link.text}
                </Link>
              ))}
            </p>
          )}
          {section.services && (
            <div className="space-y-6">
              {section.services.map((service, idx) => (
                <div key={idx}>
                  <h3 className="text-xl md:text-2xl text-blue-600 font-bold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-lg">{service.description}</p>
                </div>
              ))}
            </div>
          )}
          {section.locations && (
            <div className="space-y-2 mb-6">
              {section.locations.map((location, idx) => (
                <p key={idx} className="text-blue-600 font-semibold">
                  {idx + 1}. {location}
                </p>
              ))}
            </div>
          )}
        </section>
      ))}

      <DigitalCards />

      <section className="mt-6 mb-12">
        <h2 className="text-xl md:text-2xl text-black font-bold mb-2">Want to Talk?</h2>
        <p className="text-lg">
          {data.find(section => section.header === "Want to Talk?")?.description}
        </p>
      </section>

      <Services />
    </div>
  );
};

export default DigitalMarketing;
