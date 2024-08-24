import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SERVERAPI } from '../../../../common/common';
import Services from '../Extra/Services';
import ContactForm from '../Extra/ContactForm';
import imageLocal from "../../../../assets/New folder/asset 4.jpeg";

const SmallBusiness = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await axios.get(`${SERVERAPI}/api/business-content`);
        setData(response.data[0]?.sections);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  console.log(data);

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white mt-20">
      {data.map((section, index) => {
        if (section.type === 'header') {
          return (
            <h1 key={index} className="text-3xl font-bold text-gray-900 mb-6">
              {section.text}
            </h1>
          );
        }

        if (section.type === 'paragraph') {
          return (
            <p key={index} className="text-lg text-gray-700 mb-6">
              {section.highlight ? (
                section.text.split(section.highlight[0]).map((part, i) =>
                  i === 0 ? (
                    <>
                      {part}
                      <b>{section.highlight[0]}</b>
                    </>
                  ) : (
                    <>{part}</>
                  )
                )
              ) : section.link ? (
                <>
                  {section.text.split(section.link.text)[0]}
                  <a href={section.link.href} className="text-blue-500">
                    {section.link.text}
                  </a>
                  {section.text.split(section.link.text)[1]}
                </>
              ) : (
                section.text
              )}
            </p>
          );
        }

        if (section.type === 'section') {
          return (
            <div key={index} className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {section.title}
              </h2>
              <div className="space-y-6">
                {section.content.map((subsection, subIndex) => (
                  <div key={subIndex}>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {subsection.title}
                    </h3>
                    <p className="text-lg text-gray-700">
                      {subsection.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
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

export default SmallBusiness;
