import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SERVERAPI } from '../../../../common/common'; 
import Image from '../../../../assets/New folder/ppc-1.jpg'; 


// {
//   "title": "Pay Per Click Advertising Services",
//   "schemaName": "DigitalMarketing",
//   "sections": [
//     {
//       "header": "Introduction to PPC Advertising",
//       "description": [
//         "PPC Advertising is on a roll these days. It is one of the most effective advertising strategies of the Internet world, which has spread its wings brilliantly!",
//         "We at Web Infomatrix are bedecked to a dedicated, professional and qualified workforce that is especially linked with the department of PPC management only."
//       ],
//       "links": [],
//       "services": [],
//       "locations": []
//     },
//     {
//       "header": "PPC Campaign Management",
//       "description": [
//         "Every business has a different forte and offers various services. That means the implementation of the right keywords plays a very important role in PPC Campaigns."
//       ],
//       "links": [],
//       "services": [],
//       "locations": [],
//       "extraData": {
//         "list": [
//           { "text": "Strategy Building: Our aced team makes comprehensive strategies to improve the revenues, sales, and traffic to your site on a long-term basis.", "checked": true },
//           { "text": "At the same time, we create convincing Ad Campaigns for a perfect brand recall for you!", "checked": true },
//           { "text": "The knowledge of ongoing marketing trends is essential to keep track of your target audience. We do exactly that!", "checked": true }
//         ]
//       }
//     },
//     {
//       "header": "Pay Per Click Advertisement",
//       "description": [
//         "What is the importance of PPC marketing in India? Pay-per-click marketing might seem easy to implement as just a colossal system of channels that advertisers must use for promotion.",
//         "For genuine good quality digital marketing that will provide effective results, marketers need to find techniques that have an effect in successful implementation of digital marketing strategies."
//       ],
//       "links": [],
//       "services": [],
//       "locations": [],
//       "image": "static-image"
//     },
//     {
//       "header": "Importance of Digital Marketing in India",
//       "description": [],
//       "links": [],
//       "services": [],
//       "locations": [],
//       "extraData": {
//         "list": [
//           { "text": "Preference of consumers: if you implement digital marketing, it helps the business keep up with consumer tastes and their preferences.", "checked": false },
//           { "text": "Competition: implementation of digital marketing ensures severe competition among firms in similar industries. Proper use of digital marketing gives a business an edge over its competitors.", "checked": false },
//           { "text": "Larger economy: digital marketing maximizes the sale of any business. Thus it also increases its scale of production and with continued marketing it keeps on growing.", "checked": false },
//           { "text": "Target users: the target audience of a company expands when you use digital marketing for advertising and promotional purposes. Your business gets a wider consumer group.", "checked": false },
//           { "text": "Optimized results: you can monitor various plans and policies of your business when you implement digital marketing. So it helps in optimization of your strategies to get better results.", "checked": false }
//         ]
//       }
//     },
//     {
//       "header": "Benefit of Digital Marketing Strategy",
//       "description": [
//         "Implementing digital marketing in India for promotional or advertising or any other purposes for brand development is beneficial."
//       ],
//       "links": [],
//       "services": [],
//       "locations": [],
//       "extraData": {
//         "list": [
//           { "text": "Cost effective", "checked": false },
//           { "text": "Easily monitored.", "checked": false },
//           { "text": "Access to a large target audience.", "checked": false },
//           { "text": "Rise to digital revolution.", "checked": false },
//           { "text": "Helps economic development of a country.", "checked": false }
//         ]
//       }
//     },
//     {
//       "header": "Conclusion",
//       "description": [
//         "In conclusion, you should get in touch with our PPC firm Web Infomatrix for accurate implementation of digital marketing in the Indian economy."
//       ],
//       "links": [],
//       "services": [],
//       "locations": []
//     },
//     {
//       "header": "Contact Us",
//       "description": [
//         "So get in touch with us through call or visit our site for further details."
//       ],
//       "links": [],
//       "services": [],
//       "locations": []
//     }
//   ]
// }


const PayPer = () => {
  const [data, setData] = useState({ sections: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${SERVERAPI}/api/payper`);
        setData(response.data[0] || { sections: [] }); 
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-10 bg-gray-100 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center lg:text-left">{data.title}</h1>
      {data.sections.map((section, index) => (
        <div key={index} className="mb-8">
          {section.header && (
            <h2 className="text-2xl font-bold mb-4">{section.header}</h2>
          )}
          {section.description && section.description.map((paragraph, idx) => (
            <p key={idx} className="mb-6 text-gray-700">{paragraph}</p>
          ))}
          {section.extraData && section.extraData.list && section.header === "PPC Campaign Management" && (
            <ul className="list-disc list-inside mb-6 pl-5">
              {section.extraData.list.map((item, idx) => (
                <li key={idx} className="flex items-center mb-2 text-gray-700">
                  <input
                    type="checkbox"
                    checked={item.checked}
                    readOnly
                    className="mr-2"
                  />
                  {item.text}
                </li>
              ))}
            </ul>
          )}
          {section.extraData && section.extraData.list && section.header !== "PPC Campaign Management" && (
            <ul className="list-disc list-inside mb-6 pl-5">
              {section.extraData.list.map((item, idx) => (
                <li key={idx} className="mb-2 text-gray-700">
                  {item.text}
                </li>
              ))}
            </ul>
          )}
          {section.image === "static-image" && (
            <div className="flex justify-center mb-8">
              <img
                src={Image} // Static image
                alt={section.header || 'Pay Per Click Advertising'}
                className="w-full lg:w-2/3 h-auto object-cover"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PayPer;
