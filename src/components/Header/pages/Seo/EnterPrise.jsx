import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SERVERAPI } from '../../../../common/common'; 
import Services from '../Extra/Services';
import ContactForm from '../Extra/ContactForm';

// Function to format text with bold and links
const formatText = (text, bold = [], links = []) => {
  let formattedText = text;

  // Add bold formatting
  bold.forEach((boldText) => {
    const boldTag = `<b>${boldText}</b>`;
    formattedText = formattedText.replace(new RegExp(`(${boldText})`, 'g'), boldTag);
  });

  // Add links
  links.forEach((link) => {
    const linkTag = `<a href="${link.href}" class="text-blue-600">${link.text}</a>`;
    formattedText = formattedText.replace(new RegExp(`(${link.text})`, 'g'), linkTag);
  });

  return formattedText;
};

const Enterprise = () => {
  const [data, setData] = useState([]);

  // Fetch data from the server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${SERVERAPI}/api/enterPriceContent`);
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
            return (
              <h1 key={index} className={item.className}>
                {item.text}
              </h1>
            );
          }

          if (item.type === 'paragraph') {
            return (
              <p
                key={index}
                className={item.className}
                dangerouslySetInnerHTML={{ __html: formatText(item.text, item.bold || [], item.links || []) }}
              />
            );
          }

          if (item.type === 'list') {
            return (
              <ul key={index} className="list-disc pl-5">
                {item.items.map((listItem, itemIndex) => (
                  <li
                    key={itemIndex}
                    className={listItem.className}
                    dangerouslySetInnerHTML={{ __html: formatText(listItem.text, listItem.bold || [], listItem.links || []) }}
                  />
                ))}
              </ul>
            );
          }

          return null;
        })}
        <Services />
        <ContactForm />
      </div>
    </div>
  );
};

export default Enterprise;
