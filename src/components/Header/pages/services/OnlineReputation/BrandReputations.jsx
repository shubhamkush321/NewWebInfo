import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SERVERAPI } from '../../../../../common/common'; 
import ContactForm from '../../Extra/ContactForm';
import Services from '../../Extra/Services';
import image1 from "../../../../../assets/New folder/asset 4.jpeg";

// const data = {
//   schemaName: "BrandReputation",
//   sections: [
//     {
//       header: "Brand Reputation Management – Your Keys to Success",
//       description: [
//         `Our company recognizes the critical relevance of <a href='#' class="text-blue-500">Brand Reputation Management</a> in a world fueled by lightning-fast responses, social media trending, and an abundance of online review options. That is why, at Our company, we impart the same values.`,
//         `As with all of our services, the Advantage policy is dedicated to preserving your brand. We develop a broad and inclusive digital plan to combat and manage your brand’s online reputation using our highly-trained teams of professionals. With our knowledge in <a href='#' class="text-blue-500">SEO</a> and <a href='#' class="text-blue-500">social media</a>, we can implement it with accuracy, allowing you to continue to flourish and grow with confidence.`
//       ],
//       links: [],
//       services: [],
//       locations: [],
//       list: [] // No lists in this section
//     },
//     {
//       header: "The following are some of Our company’s Brand Reputation Services",
//       list: [
//         "Creating a positive online presence that is consistent with your company’s objective.",
//         "All causes of a negative online presence must be removed or diminished.",
//         "This includes eliminating unfavorable reviews and photographs.",
//         "Suppressing any content that is in direct opposition to your brand’s awareness."
//       ],
//       links: [],
//       services: [],
//       locations: []
//     },
//     {
//       header: "Digital Excellence is our motto.",
//       description: [
//         `At Our company, we have spent over years navigating the rapidly changing digital scene and providing high-quality <a href='#' class="text-blue-500">digital marketing services</a> in India and around the world. We have a long track record of producing positive business outcomes for clients in a variety of industries.`,
//         `Our success can be attributed to our motto, “Digital Excellence.” Our culture of consistently going above and beyond to achieve results!`,
//         `Our <a href='#' class="text-blue-500">Digital Marketing Agency</a> is made up of dedicated marketers and certified professionals who are skilled in all parts of digital marketing, including search, content, social media, paid media, and design. Each of us lives by our #Digital Excellence credo and understands what it takes to achieve.`
//       ],
//       links: [],
//       services: [],
//       locations: [],
//       list: [] 
//     },
//     {
//       header: "Why did you choose Our company?",
//       description: [
//         `We recognize the importance of <a href='#' class="text-blue-500">Brand Reputation Management</a> to the success of any brand, big or small. Without deploying a digital defense, it is absurd to expect an individual or Your employees should be prepared for the far reaches of reviews, social media, and brand references, regardless of how big or little your firm is.`,
//         `After all, you and your team have worked hard to get to where you are today. A company’s internet presence should always be exciting and enjoyable. But, realistically, poor brand reviews and underappreciation for your services and products will occur from time to time. <b>Our company’s Brand Reputation Management Strategy</b> prioritizes removing negative reviews and unfavorable images connected with your brand, regardless of source.`,
//         `Our company will build and implement a brand-specific digital-defense strategy to not only resist any existing negative attacks but also to clean up and eliminate any future incidents before they spread.`
//       ],
//       links: [],
//       services: [],
//       locations: [],
//       list: [] 
//     }
//   ],
// };

// Main Component
const BrandReputations = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${SERVERAPI}/api/brand-reputation`);
        setData(response.data[0] || { schemaName: '', sections: [] });
      } catch (error) {
        console.error(error);
        // Optionally, set error state
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-100 text-gray-800 lg:p-40 -mt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl justify-center flex font-bold mb-6 text-center">{data.schemaName}</h1>
        {data.sections.map((section, index) => (
          <div key={index} className="mb-8">
            <h1 className="text-2xl font-semibold mt-6 mb-4">{section.header}</h1>
            {section.description?.map((desc, i) => (
              <p key={i} className="mb-6" dangerouslySetInnerHTML={{ __html: desc }}></p>
            ))}
            {section.list?.length > 0 && (
              <ul className="list-disc list-inside pl-4 mb-6">
                {section.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
        <Services />
        <img src={image1} alt="Illustration of celebrity reputation management" />
        <ContactForm />
      </div>
    </div>
  );
};

export default BrandReputations;
