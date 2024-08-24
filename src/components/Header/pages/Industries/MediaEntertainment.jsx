import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {SERVERAPI} from '../../../../common/common'; 

const MediaEntertainment = () => {

  const[data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${SERVERAPI}/api/media-content`);
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
    <div className="lg:p-44 -mt-16 bg-gray-50">
      {data.map((item, index) => {
        switch (item.type) {
          case 'heading':
            const HeadingTag = `h${item.level}`; // Dynamic heading level
            return (
              <HeadingTag key={index} className={item.className}>
                {item.text}
              </HeadingTag>
            );
          case 'paragraph':
            return (
              <p
                key={index}
                className={item.className}
                dangerouslySetInnerHTML={{ __html: item.isHtml ? item.text : item.text }}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

export default MediaEntertainment;
