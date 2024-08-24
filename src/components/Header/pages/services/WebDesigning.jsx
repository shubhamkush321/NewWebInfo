import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SERVERAPI } from '../../../../common/common'; 
import process from "../../../../assets/WedDesign/process-1.png";
import image1 from "../../../../assets/New folder/asset 1.jpeg";
import image2 from "../../../../assets/New folder/asset 2.jpeg";
import image3 from "../../../../assets/New folder/asset 3.jpeg";
import image4 from "../../../../assets/WedDesign/creativity-1.png";
import image5 from "../../../../assets/WedDesign/user-1.png";
import image6 from "../../../../assets/WedDesign/responsive-1.png";
import image7 from "../../../../assets/WedDesign/flask-1.png";
import image8 from "../../../../assets/WedDesign/loupe-1.png";


const WebDesigning = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState(null); 

  useEffect(() => {
    const interval = setInterval(() => {
      if (data?.heroImage?.length) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.heroImage.length);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [data]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${SERVERAPI}/api/web-designing`);
        console.log('API Response:', response.data);
        setData(response.data[0] || {}); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  console.log(data);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className='relative'>
        {data.heroImage && data.heroImage.length > 0 ? (
          <img
            src={data.heroImage[currentIndex]}
            alt="Slider"
            style={{ width: "100%", height: "auto" }}
          />
        ) : (
          <div>No images available</div>
        )}
      </div>  

      <div className='p-44 -mt-10'>
        <h1 className='text-3xl font-bold text-center text-gray-800 mb-4 uppercase'>Web Designing Outsourcing Company</h1>
        <hr className='border-black m-4'/>
        <div className='flex gap-11 m-4 pl-2'>
          <img src={image4} className='border border-black p-2' alt="Design Feature"/>
          <img src={image5} className='border border-black p-2' alt="User Experience"/>
          <img src={image6} className='border border-black p-2' alt="Responsiveness"/>
          <img src={image7} className='border border-black p-2' alt="Innovation"/>
          <img src={image8} className='border border-black p-2' alt="Analysis"/>
        </div>
        <hr className='border-black m-4'/>
        <h1 className='text-3xl font-bold text-center text-gray-800 mb-4 uppercase'>Hire a Web Designer</h1>
        <hr className='border-black m-4' />
        <section className="flex items-center mt-8">
          <div className="flex-1 p-4">
            {data.introduction && data.introduction.length > 0 ? (
              data.introduction.map((paragraph, index) => (
                <p key={index} className="mt-4 text-gray-700" dangerouslySetInnerHTML={{ __html: paragraph }}></p>
              ))
            ) : (
              <p>No introduction content available</p>
            )}
          </div>
          <div className="flex-1">
            <img src={process} alt="Web Design" className='w-full h-auto object-cover' />
          </div>
        </section>

        <hr className='border-black my-8' />

        <section>
          <div className="p-4">
            {data.webDesign && data.webDesign.length > 0 ? (
              data.webDesign.map((paragraph, index) => (
                <p key={index} className="mt-4 text-gray-700" dangerouslySetInnerHTML={{ __html: paragraph }}></p>
              ))
            ) : (
              <p>No web design content available</p>
            )}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mt-8">{data.competitiveAdvantage?.title || 'Competitive Advantage'}</h2>
          <div className="p-4">
            {data.competitiveAdvantage?.benefits && data.competitiveAdvantage.benefits.length > 0 ? (
              <ul className="list-disc pl-8">
                {data.competitiveAdvantage.benefits.map((benefit, index) => (
                  <li key={index} className="mt-2 text-gray-700" dangerouslySetInnerHTML={{ __html: benefit }}></li>
                ))}
              </ul>
            ) : (
              <p>No competitive advantage content available</p>
            )}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mt-8">Website Designing Services</h2>
          <div className="p-4">
            {data.services && data.services.length > 0 ? (
              <ul className="list-disc pl-8">
                {data.services.map((service, index) => (
                  <li key={index} className="mt-2 text-gray-700">{service}</li>
                ))}
              </ul>
            ) : (
              <p>No services listed</p>
            )}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mt-8">Why Choose Us?</h2>
          <div className="p-4">
            {data.reasonsToChoose && data.reasonsToChoose.length > 0 ? (
              <ul className="list-disc pl-8">
                {data.reasonsToChoose.map((reason, index) => (
                  <li key={index} className="mt-2 text-gray-700">{reason}</li>
                ))}
              </ul>
            ) : (
              <p>No reasons to choose available</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default WebDesigning;
