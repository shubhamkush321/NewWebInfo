import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {SERVERAPI} from '../../../../common/common'; 
import imageLocal from "../../../../assets/New folder/asset 4.jpeg";
import Services from '../Extra/Services';
import ContactForm from '../Extra/ContactForm';


const AmazonPost = () => {
  const[data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${SERVERAPI}/api/amazon-posts`);
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
    <div className="lg:p-44 bg-gray-50 -mt-14">
      {data.map((item, index) => {
        switch (item.type) {
          case 'heading':
            const HeadingTag = `h${item.level}`; 
            return (
              <HeadingTag key={index} className={item.className}>
                {item.text}
              </HeadingTag>
            );
          case 'paragraph':
            return (
              <p
                key={index}
                dangerouslySetInnerHTML={{ __html: item.text }}
                className={item.className}
              />
            );
          default:
            return null;
        }
      })}
      <div className="my-6">
        <Services />
        <img src={imageLocal} alt="Educational Content" className="my-6" />
        <ContactForm />
      </div>
    </div>
  );
};

export default AmazonPost;
