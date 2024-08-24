import React, { useEffect, useState } from 'react';
import ContactForm from '../../Extra/ContactForm';
import Services from '../../Extra/Services';
import image1 from "../../../../../assets/New folder/asset 4.jpeg";
import axios from 'axios';
import {SERVERAPI} from '../../../../../common/common'; 

// Utility function to get link for a part of text
const getLink = (text, links = []) => {
  return links.find(link => link.text === text);
};

// Function to render text with embedded links
const renderTextWithLinks = (text, links = []) => {
  if (typeof text !== 'string') return text;

  return text.split(/(\b(?:Brand Reputation Management|SEO|social media|digital marketing services in India|Digital Marketing Agency|Brand Reputation Management services)\b)/g).map((part, index) => {
    const link = getLink(part, links);
    return link ? (
      <a key={index} href={link.url} className={`text-blue-600 ${link.bold ? 'font-bold' : ''}`}>
        {part}
      </a>
    ) : (
      <React.Fragment key={index}>{part}</React.Fragment>
    );
  });
};

const BrandReputations = () => {
  const[data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await axios.get(`${SERVERAPI}/api/brand-reputation`);
        setData(response.data[0]?.sections);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);


  return (
    <main className="p-48 -mt-12 bg-gray-50">
      {data.map((section, index) => (
        <section key={index} className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-4 flex justify-center">
            {section.title}
          </h1>
          {section.content && (
            <div className="text-gray-700 mb-4">
              {section.content.map((text, textIndex) => (
                <p key={textIndex}>{renderTextWithLinks(text, section.links)}</p>
              ))}
            </div>
          )}
          {section.list && (
            <ul className="list-disc list-inside text-gray-900 mb-4">
              {section.list.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
      <div>
        <Services />
        <img src={image1} alt="Brand" />
        <ContactForm />
      </div>
    </main>
  );
};

export default BrandReputations;
