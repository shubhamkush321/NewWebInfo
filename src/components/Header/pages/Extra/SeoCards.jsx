import React from 'react';
import {
  MdOutlineLocationOn,
  MdHandshake,
  MdSettings,
  MdShoppingBag,
  MdOutlineArrowUpward,
} from 'react-icons/md';

const cardData = [
  {
    id: 1,
    icon: <MdOutlineLocationOn className="text-6xl text-gray-800" />,
    title: 'SEO PLANS',
    description: 'At Web Infomatrix, we concentrate on a number of factors when it comes to local SEO. When it comes to SEO',
  },
  {
    id: 2,
    icon: <MdHandshake className="text-6xl text-gray-800" />,
    title: 'SEO CONSULTING',
    description: 'At Web Infomatrix, we provide a wide range of SEO services to help your company rank higher in search results.',
  },
  {
    id: 3,
    icon: <MdSettings className="text-6xl text-gray-800" />,
    title: 'SEO RANKING',
    description: 'By focusing your SEO on certain keyword phrases that are relevant and targeted toward your small business\'s services or products.',
  },
  {
    id: 4,
    icon: <MdShoppingBag className="text-6xl text-gray-800" />,
    title: 'SEO TRAFFIC',
    description: 'When it comes to our websites, we all desire more traffic. The SEO services of Web Infomatrix can help your website rank higher',
  },
  {
    id: 5,
    icon: <MdOutlineArrowUpward className="text-6xl text-gray-800" />,
    title: 'SEO ADVISORY',
    description: 'We may start tracking development from month to month, quarter to quarter, or year to year after we know how the',
  },
];

const SeoCards = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-8">
        SEO ENGAGEMENT MODELS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cardData.map((card) => (
          <div key={card.id} className="p-8  rounded-lg flex flex-col items-center text-center ">
            <div className="flex justify-center items-center mb-4 rounded-full w-24 h-24  border-2 border-gray-800  hover:border-blue-400">
              {card.icon}
            </div>
            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
            <p className="text-gray-700">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeoCards;
