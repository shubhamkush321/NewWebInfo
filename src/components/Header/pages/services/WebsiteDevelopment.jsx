import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SERVERAPI } from '../../../../common/common'; 
import image1 from "../../../../assets/WedDesign/web-development-1.jpg";

const imageOnRightSectionIndex = 1;

const WebsiteDevelopment = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${SERVERAPI}/api/website`);
        console.log('API Response:', response.data); // Log the entire response
        setData(response.data || []); // Directly use the array from the response
      } catch (error) {
        console.error('API Error:', error); // Log the error details
        setError('Failed to fetch content.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-center py-8 text-red-500">{error}</div>;

  return (
    <div className="max-w-4xl mt-10 mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">Website Development</h1>
      {data.length === 0 ? (
        <div className="text-center py-8">No content available.</div>
      ) : (
        data.map((section, index) => (
          <div key={section._id} className="mb-8">
            {index === imageOnRightSectionIndex ? (
              <div className="flex items-start">
                <div className={`flex-1 pr-4 ${section.className || ''}`}>
                  {section.title && (
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">{section.title}</h2>
                  )}
                  <div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: section.text }} />
                </div>
                <div className="flex-shrink-0">
                  <img src={image1} alt="Web Development" className="w-full max-w-xs mt-6" />
                </div>
              </div>
            ) : (
              <div className={`${section.className || ''}`}>
                {section.title && (
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">{section.title}</h2>
                )}
                <div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: section.text }} />
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default WebsiteDevelopment;
