import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SERVERAPI } from '../../../../common/common'; 
import { FaPlus, FaMinus } from 'react-icons/fa';
import Image1 from '../../../../assets/New folder/asset 1.jpeg';
import Image2 from '../../../../assets/New folder/asset 2.jpeg';
import Image3 from '../../../../assets/New folder/asset 3.jpeg';
import localStorage from '../../../../assets/New folder/asset 4.jpeg';
import SeoCards from '../Extra/SeoCards';
import ContactForm from '../Extra/ContactForm';

const images = [Image1, Image2, Image3];

// const SeoData = {
//   title: "SEO Services Overview",
//   schemaName: "DigitalMarketing",
//   sections: [
//     {
//       header: "Guaranteed #1 SEO Service Provider",
//       description: [
//         "SEO is one of the best digital marketing strategies that can drive customers to a business through online platforms. It is crucial to consult SEO experts for proper implementation of SEO techniques.",
//         "Our SEO Company employs effective strategies to enhance your search engine ranking and boost traffic to your website."
//       ],
//       links: [
//         {
//           text: "SEO Company",
//           url: "https://www.aseo.com/"
//         }
//       ]
//     },
//     {
//       header: "Benefits of Internal Linking",
//       description: [
//         "Proper internal linking is beneficial as it directly affects ranking. Most websites with higher rankings utilize this.",
//         "SEO experts can help you achieve better search engine rankings and increase traffic to your site."
//       ],
//       services: [
//         {
//           title: "Keyword Addition",
//           description: "Adding relevant keywords to your content to improve visibility."
//         },
//         {
//           title: "SEO Friendly",
//           description: "Ensuring that your website adheres to SEO best practices."
//         },
//         {
//           title: "Social Media Optimization",
//           description: "Enhancing your social media presence to drive more traffic."
//         }
//       ]
//     },
//     {
//       header: "Monitor Your Competitors' Best Pages",
//       description: [
//         "Competing with the quality of content on your competitors’ pages can drive more visitors to your site. If your goal is to outrank competitors, thorough analysis is essential.",
//         "Our SEO agency assists with the entire process to help your website surpass competitors in search engines."
//       ]
//     },
//     {
//       header: "Best SEO Keywords",
//       description: [
//         "Utilize top-performing keywords from competitors to improve your website’s search engine ranking.",
//         "Regardless of your sector, we provide the tools and knowledge to attract more consumers and enhance your SEO beyond your expectations."
//       ],
//       locations: [
//         "Agencies",
//         "Dental Offices for Contractors",
//         "HVAC Service Providers"
//       ]
//     },
//     {
//       header: "Search Engine Optimization for Company Growth",
//       description: [
//         "SEO experts can help you achieve better search engine rankings and increase website traffic.",
//         "We offer free SEO audits to assess your website’s current performance."
//       ],
//       services: [
//         {
//           title: "SEO Audits",
//           description: "We provide free SEO audits so you can evaluate your website’s performance."
//         }
//       ]
//     }
//   ],
//   faqs: [
//     {
//       question: "What is SEO?",
//       answer: "SEO stands for Search Engine Optimization, which is the process of improving the visibility of a website in search engines."
//     },
//     {
//       question: "What services does Web Infomatrix provide?",
//       answer: "We provide a range of SEO services including keyword research, on-page and off-page optimization, and SEO consulting."
//     },
//     {
//       question: "What is your pricing model?",
//       answer: "Our pricing varies based on the services and scope of the project. Contact us for a customized quote."
//     }
//   ]
// };


const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between cursor-pointer" onClick={toggleOpen}>
        <h3 className='text-xl font-semibold mb-2 text-gray-800'>{question}</h3>
        {isOpen ? <FaMinus className='text-gray-700' /> : <FaPlus className='text-gray-700' />}
      </div>
      {isOpen && (
        <div className="transition-all duration-300 ease-in-out">
          <p className='text-gray-600'>{answer}</p>
        </div>
      )}
      <hr className='border-gray-300 mt-2' />
    </div>
  );
};

const SearchEngine = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState({ sections: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${SERVERAPI}/api/search-engine`);
        setData(response.data[0] || { sections: [] }); 
      } catch (error) {
        console.error(error);
        setError('Failed to fetch data.');
      } finally {
        setLoading(false); 
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  if (loading) {
    return <div className="text-center mt-8">Loading...</div>; // Loading message
  }

  if (error) {
    return <div className="text-center mt-8 text-red-600">{error}</div>; // Error message
  }

  return (
    <div>
      {/* Image Slider */}
      <div className="relative w-full h-[90vh] overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Content Section */}
      <div className="px-4 py-16 lg:px-40 lg:py-24">
        <h1 className="text-2xl md:text-4xl font-bold mb-6 text-gray-700 text-center">
          {data.title}
        </h1>
        <hr className="border-gray-300 mb-6" />

        {data.sections.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className='text-2xl md:text-4xl font-bold mb-4 text-gray-800'>{section.header}</h2>
            {section.description.map((desc, idx) => (
              <p key={idx} className='text-gray-700 mb-6'>{desc}</p>
            ))}
            {section.links && section.links.map((link, idx) => (
              <a key={idx} href={link.url} className="text-blue-500 hover:underline">
                {link.text}
              </a>
            ))}
            {section.services && (
              <div className="mb-8">
                {section.services.map((service, idx) => (
                  <div key={idx} className="mb-4">
                    <h3 className='text-xl font-semibold text-gray-800'>{service.title}</h3>
                    <p className='text-gray-600'>{service.description}</p>
                  </div>
                ))}
              </div>
            )}
            {section.locations && (
              <ul className="list-disc pl-6 mt-2">
                {section.locations.map((location, idx) => (
                  <li key={idx} className='text-gray-700'>{location}</li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <div className="mb-8">
          <img src={localStorage} alt="SEO Analysis" className="w-full rounded-lg" />
        </div>

        <SeoCards />

        <div>
          <h2 className='text-2xl md:text-4xl font-bold mb-4 text-gray-800'>FAQ</h2>
          {data.faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>

        <ContactForm />
      </div>
    </div>
  );
};

export default SearchEngine;
