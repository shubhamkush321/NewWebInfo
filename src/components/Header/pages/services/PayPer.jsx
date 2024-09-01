import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SERVERAPI } from '../../../../common/common'; 
import Image from '../../../../assets/New folder/ppc-1.jpg'; 

const PayPer = () => {
  const [data, setData] = useState({ sections: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${SERVERAPI}/api/payper`);
        setData(response.data[0] || { sections: [] }); 
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-10 bg-gray-100 text-gray-800 mt-40">
      <h1 className="text-3xl font-bold mb-6 text-center lg:text-left">{data.title}</h1>
      {data.sections.map((section, index) => (
        <div key={index} className="mb-8">
          {section.header && (
            <h2 className="text-2xl font-bold mb-4">{section.header}</h2>
          )}
          {section.description && section.description.map((paragraph, idx) => (
            <p key={idx} className="mb-6 text-gray-700">{paragraph}</p>
          ))}
          {section.extraData && section.extraData.list && section.header === "PPC Campaign Management" && (
            <ul className="list-disc list-inside mb-6 pl-5">
              {section.extraData.list.map((item, idx) => (
                <li key={idx} className="flex items-center mb-2 text-gray-700">
                  <input
                    type="checkbox"
                    checked={item.checked}
                    readOnly
                    className="mr-2"
                  />
                  {item.text}
                </li>
              ))}
            </ul>
          )}
          {section.extraData && section.extraData.list && section.header !== "PPC Campaign Management" && (
            <ul className="list-disc list-inside mb-6 pl-5">
              {section.extraData.list.map((item, idx) => (
                <li key={idx} className="mb-2 text-gray-700">
                  {item.text}
                </li>
              ))}
            </ul>
          )}
          {section.image === "static-image" && (
            <div className="flex justify-center mb-8">
              <img
                src={Image} // Static image
                alt={section.header || 'Pay Per Click Advertising'}
                className="w-full lg:w-2/3 h-auto object-cover"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PayPer;
