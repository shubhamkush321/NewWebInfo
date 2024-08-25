import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SERVERAPI } from '../../../../common/common'; 
import Images from '../../../../assets/New folder/ppc-1.jpg'; 

// Define the content data for Pay Per Click services
const payPerData = [
  {
    type: 'section',
    id: 'intro',
    title: 'Pay Per Click Advertising Services',
    paragraphs: [
      'PPC Advertising is on a roll these days. It is one of the most effective advertising strategies of the Internet world, which has spread its wings brilliantly! It is one of the most effective ways to reach your target audience, have business with them and get an increased ROI in return. What else can you ask for!',
      'We at Web Infomatrix are bedecked to a dedicated, professional and qualified workforce that is especially linked with the department of PPC management only. Wow! A dedicated staff that works day and night just to make sure that your PPC advertisement turns into a huge success. That’s great! We don’t just believe in making promises, but fulfilling them as well.'
    ],
  },
  {
    type: 'section',
    id: 'ppc-management',
    title: 'PPC Campaign Management',
    paragraphs: [
      'Every business has a different forte and offers various services. That means the implementation of the right keywords plays a very important role in PPC Campaigns. PPC professionals bid on keywords that match your products and services with radiance! PPC not only deals with effective keywords but should have a compelling Ad copy as well. It should be attractive, informative and at the end of the day, convince your audience to buy your services as well. We track PPC ROI on a regular basis and maintain our PPC and Google Adwords Campaigns in a professional manner. Our professionals monitor your campaigns on a daily basis. This is done to cope up with the highs and lows of the internet world!'
    ],
    list: [
      { text: 'Strategy Building: Our aced team makes comprehensive strategies to improve the revenues, sales, and traffic to your site on a long-term basis.', checked: true },
      { text: 'At the same time, we create convincing Ad Campaigns for a perfect brand recall for you!', checked: true },
      { text: 'The knowledge of ongoing marketing trends is essential to keep track of your target audience. We do exactly that!', checked: true }
    ]
  },
  {
    type: 'section',
    id: 'advertisement',
    title: 'Pay Per Click Advertisement',
    paragraphs: [
      'What is the importance of PPC marketing in India? Pay-per-click marketing might seem easy to implement as just a colossal system of channels that advertisers must use for promotion. But it is actually a complex process and you need to work with a well-known digital marketing company like Web Infomatrix to successfully implement digital marketing.',
      'For genuine good quality digital marketing that will provide effective results, marketers need to find techniques that have an effect in successful implementation of digital marketing strategies.'
    ],
  },
  {
    type: 'section',
    id: 'importance',
    title: 'Importance of Digital Marketing in India',
    list: [
      { text: 'Preference of consumers: if you implement digital marketing, it helps the business keep up with consumer tastes and their preferences.', checked: false },
      { text: 'Competition: implementation of digital marketing ensures severe competition among firms in similar industries. Proper use of digital marketing gives a business an edge over its competitors. Thus it also increases brand awareness.', checked: false },
      { text: 'Larger economy: digital marketing maximizes the sale of any business. Thus it also increases its scale of production and with continued marketing it keeps on growing.', checked: false },
      { text: 'Target users: the target audience of a company expands when you use digital marketing for advertising and promotional purposes. Your business gets a wider consumer group.', checked: false },
      { text: 'Optimized results: you can monitor various plans and policies of your business when you implement digital marketing. So it helps in optimization of your strategies to get better results.', checked: false }
    ]
  },
  {
    type: 'section',
    id: 'benefits',
    title: 'Benefit of Digital Marketing Strategy',
    paragraphs: [
      'Implementing digital marketing in India for promotional or advertising or any other purposes for brand development is beneficial. It can help you reach 26 crore people in India and help your business grow.'
    ],
    list: [
      { text: 'Cost effective', checked: false },
      { text: 'Easily monitored.', checked: false },
      { text: 'Access to a large target audience.', checked: false },
      { text: 'Rise to digital revolution.', checked: false },
      { text: 'Helps economic development of a country.', checked: false }
    ]
  },
  {
    type: 'section',
    id: 'conclusion',
    paragraphs: [
      'In conclusion, you should get in touch with our PPC firm Web Infomatrix for accurate implementation of digital marketing in the Indian economy. It is important that digital marketing is properly used so that you get to scale the market of your business. It will bring in more clients and increase customer engagement with your business.'
    ],
  },
  {
    type: 'section',
    id: 'contact',
    paragraphs: [
      'So get in touch with us through call or visit our site for further details.'
    ],
  }
];

const PayPer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${SERVERAPI}/api/payper`);
        setData(response.data[0]?.sections || []);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-44 bg-gray-100 text-gray-800">
      {payPerData.map((section, index) => (
        <div key={section.id} className="mb-8">
          {section.title && (
            <h1 className="text-3xl font-bold mb-6 text-center lg:text-left">{section.title}</h1>
          )}
          {section.paragraphs && section.paragraphs.map((paragraph, index) => (
            <p key={index} className="mb-6 text-gray-700">{paragraph}</p>
          ))}
          {section.list && section.id === 'ppc-management' && (
            <ul className="list-disc list-inside mb-6 pl-5">
              {section.list.map((item, index) => (
                <li key={index} className="flex items-center">
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
          {section.list && section.id !== 'ppc-management' && (
            <ul className="list-disc list-inside mb-6 pl-5">
              {section.list.map((item, index) => (
                <li key={index}>{item.text}</li>
              ))}
            </ul>
          )}
          {section.id === 'advertisement' && (
            <div className="flex justify-center mb-8">
              <img
                src={Images}
                alt="Pay Per Click Advertising"
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
