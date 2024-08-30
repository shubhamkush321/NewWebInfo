import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SERVERAPI } from '../../../../common/common';
import { FaPlus, FaMinus } from 'react-icons/fa';
import SocialContentImg from "../../../../assets/New folder/asset 1.png";

// Integrated Data
// const data = {
//   title: "Outsource Social Media Marketing Services",
//   schemaName: "DigitalMarketing",
//   sections: [
//     {
//       header: "Social Media Optimization",
//       description: [
//         "We at Web Infomatrix have a dedicated team of Social Media Optimization Services. Social media marketing is an integral part of digital marketing. There has always been a lot of discussion related to the role of social media marketing in increasing brand awareness. Our digital marketing agency has experience in providing social media marketing services in an optimized manner.",
//         "It has proven to increase brand awareness with an ever-increasing number of individuals using social media. Successful brands usually have good social media presence and apply effective social media marketing techniques for increasing brand awareness. Our experts implement this technique to generate quality customers for our clients on a regular basis."
//       ],
//       links: [],
//       services: [],
//       locations: [],
//       list: [] // No lists in this section
//     },
//     {
//       header: "Social Media Marketing for a Successful Business Start-Up",
//       description: [
//         "Social media marketing is the use of social media platforms to link your business to your customers. Using social media marketing, you can communicate your idea with your customers and increase sales.",
//         "Social media marketing mainly involves posting engaging content on social media platforms like Instagram, Facebook, etc. It helps you gain the trust of your followers and you can influence them to spread good words about you.",
//         "Our digital marketing company Web Infomatrix provides affordable social media marketing services. You should be aware of the importance of social media marketing when you choose to implement it for your business."
//       ],
//       links: [],
//       services: [],
//       locations: [],
//       list: [] // No lists in this section
//     },
//     {
//       header: "Importance of Social Media Marketing",
//       description: [
//         "Social media marketing is important for several reasons:"
//       ],
//       list: [
//         "Cost-effective: Advertising your business on social media saves cost compared to traditional marketing.",
//         "Customer loyalty: Your customers can easily find you if you have a social media presence. Social media marketing is a great way of proving your loyalty among your customers. As a result, they connect with you on a deeper level and become loyal customers of your brand.",
//         "SEO Rank: It is not enough to just update your websites and blogs to get a good search engine rank. To get a good score in the marketing society, you need to implement social media marketing.",
//         "Increased traffic: If you have a social media presence and implement all the rules of proper social media marketing, then you will see an increased footfall on your website."
//       ],
//       links: [],
//       services: [],
//       locations: []
//     },
//     {
//       header: "Social Media Strategy",
//       description: [
//         "It can be defined as the ways and protocols to spread awareness regarding a business. It involves the usage of a collection of tools so as to use social media platforms for company sales. You can also engage followers and create smooth communication when you use a social media marketing strategy.",
//         "The importance of social media marketing strategy includes:"
//       ],
//       list: [
//         "Better branding of the company.",
//         "Good exposure to sales and leads.",
//         "Increased approach towards website traffic.",
//         "Less marketing cost.",
//         "Improved SEO.",
//         "Improved customer interests and reviews.",
//         "Good start-up foundation."
//       ],
//       links: [],
//       services: [],
//       locations: []
//     },
//     {
//       header: "Conclusion",
//       description: [
//         "Increases your linkability.",
//         "Make tagging and book marketing easy and extremely beneficial.",
//         "Inbound links to endeavor success.",
//         "Submitting relevant content to different sites ensures that it travels distance and catches your target audience on a global level.",
//         "Build ways that the fans and users of a particular brand or company are automatically engaged in promoting it and the success ratio is really high."
//       ],
//       links: [],
//       services: [],
//       locations: [],
//       list: [] // No lists in this section
//     },
//     {
//       header: "Social Media Marketing Strategy",
//       description: [
//         "What is the role of social media in increasing brand awareness?",
//         "Commitment empowerment: Our social media marketing company ensures that your business has a marketing strategy where you can draw in customers at each phase of their journeys with your business. Through discussions, retargeting, etc., you can make customers engage with your brand on social media.",
//         "Effective content: Your social media marketing strategy should include posting informative content regarding your business on social media. It will allow your customer to get a detailed idea of your product and services. As a result, your client base will increase and make it easier for individuals to discover you.",
//         "Client association: You should build healthy client connections through social media marketing. As a result, your brand awareness will increase and boost deals for your business. Moreover, different supporters or guests can also get familiar with your business and it will help you build trust with your clients."
//       ],
//       list: [] // No lists in this section
//     },
//     {
//       header: "Why Choose Us as Your Social Media Marketing Agency?",
//       description: [
//         "Web Infomatrix is a digital marketing company where many different services, including social media marketing, are provided. If you are starting a business start-up, then you should most definitely get in touch with us for a proper social media marketing strategy. With that, you can make your business grow and reach a wide range of audiences.",
//         "We have been providing social media services for many years now. Our company has social media marketing experts who guide your company to get the best services and enhance brand awareness. Social media has emerged as an integral part of ensuring that you can reach potential customers and build a trusted relationship with them.",
//         "Get in touch with us to get the best social media marketing services in India. Visit our website or call us to get further details."
//       ],
//       links: [],
//       services: [],
//       locations: [],
//       list: [] // No lists in this section
//     }
//   ],
//   faqs: [ // Correctly define FAQs here
//     {
//       question: "What is the purpose of digital marketing in the education sector?",
//       answer: "Digital marketing aims to reach and engage potential students and parents, enhance the institution's online presence, and promote educational programs effectively."
//     },
//     {
//       question: "What is an educational institution’s social media marketing?",
//       answer: "It involves creating and sharing content on social media platforms to attract and engage prospective students, showcase achievements, and communicate with current students and alumni."
//     }
//   ]
// };

// FAQ Item Component
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between cursor-pointer" onClick={toggleOpen}>
        <h1 className='text-xl font-semibold mb-2 text-gray-800'>{question}</h1>
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

// Main Component
const SocialContent = () => {

  const [data, setData] = useState({ sections: [] });
  const faqs = data.faqs || [];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${SERVERAPI}/api/socialcontent`);
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

  return (
    <div className="bg-gray-100 text-gray-800 lg:p-40 -mt-14">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">{data.title}</h1>
        {data.sections.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-semibold mt-6 mb-4">{section.header}</h2>
            {section.description?.map((desc, i) => (
              <p key={i} className="mb-6">{desc}</p>
            ))}
            {section.list?.length > 0 && (
              <ul className="list-disc list-inside pl-4 mb-6">
                {section.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
            {section.header === "Social Media Optimization" && (
              <img src={SocialContentImg} className='max-w px-28' alt="Social Media Optimization" />
            )}
          </div>
        ))}
        <div className= "p-6 mt-8">
          <h1 className="text-2xl font-semibold mb-4">FAQ</h1>
          {faqs.length > 0 ? (
            faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))
          ) : (
            <p>No FAQs available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SocialContent;
