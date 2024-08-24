import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {SERVERAPI} from '../../../../common/common';
import imageLocal from "../../../../assets/New folder/asset 4.jpeg";
import Services from '../Extra/Services';
import ContactForm from '../Extra/ContactForm';


const LawFirms = () => {
  const[data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${SERVERAPI}/api/lawfirmcontent`);
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
    <div className="lg:p-44 -mt-16">
      {data.map((section, index) => {
        switch (section.type) {
          case 'header':
            const HeaderTag = `h${section.level}`;
            return (
              <HeaderTag key={index} className={section.className}>
                {section.text}
              </HeaderTag>
            );
          case 'paragraph':
            return (
              <p key={index} className={section.className}>
                {section.text}
              </p>
            );
          case 'list':
            return (
              <div key={index}>
                <h4 className={section.className}>{section.title}</h4>
                <ul className={section.listClassName}>
                  {section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          default:
            return null;
        }
      })}
      <div className="my-6">
        <Services />
        <img src={imageLocal} alt="Local Image" className="my-6" />
        <ContactForm />
      </div>
    </div>
  );
}

export default LawFirms;
