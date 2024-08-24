import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Real from "../../../../assets/WedDesign/Real.png";
import imageLocal from "../../../../assets/New folder/asset 4.jpeg";
import Services from '../Extra/Services';
import Testimonial from '../Extra/Testimonial';
import DigitalCards from '../Extra/DigitalCards';
import ContactForm from '../Extra/ContactForm';

// Combined Data
const RealData = {
  seo: {
    title: "Digital Marketing Services for Real Estate | Web Infomatrix",
    description: "Explore digital marketing services for real estate, including SEO, social media marketing, PPC, web design, and content marketing by Web Infomatrix.",
    keywords: "digital marketing, real estate marketing, SEO, social media marketing, PPC, web design, content marketing",
    author: "Web Infomatrix"
  },
  content: [
    {
      type: 'heading',
      level: 2,
      content: "Digital Marketing Services For Real Estate"
    },
    {
      type: 'text',
      content: "Digital marketing is crucial for brands to increase their visibility and sales. With the majority of the global population online, leveraging digital marketing can expose your brand to a larger audience and attract potential customers. This holds true for the real estate industry, where digital marketing has significantly boosted business performance."
    },
    {
      type: 'heading',
      level: 2,
      content: "Importance of Digital Marketing for Real Estate Business"
    },
    {
      type: 'text',
      content: "Property developers can use digital marketing to connect with potential customers and expand their business. Both consumers and developers recognize that real estate digital marketing fosters strong connections and generates valuable leads. However, implementing effective digital marketing strategies requires expertise."
    },
    {
      type: 'text',
      content: "At Web Infomatrix, our team of digital marketing experts can create and implement effective real estate marketing strategies. We offer affordable digital marketing services tailored to your business needs."
    },
    {
      type: 'heading',
      level: 2,
      content: "SEO Services for Real Estate"
    },
    {
      type: 'text',
      content: "Our digital marketing services for real estate include:"
    },
    {
      type: 'list-decimal',
      items: [
        {
          title: "SEO",
          description: "Essential for driving traffic and improving search engine rankings. Our knowledgeable SEO experts will implement SEO strategies effectively to enhance your website’s visibility."
        },
        {
          title: "Social Media Marketing",
          description: "Social media platforms have grown dramatically. We will implement effective social media marketing strategies and maintain your online reputation among clients."
        }
      ]
    },
    {
      type: 'heading',
      level: 2,
      content: "Why Web Infomatrix is the Best Choice for Real Estate Digital Marketing"
    },
    {
      type: 'text',
      content: "At Web Infomatrix, we provide cutting-edge digital marketing strategies that enhance your business growth. Our team stays updated with the latest trends to maximize lead generation. Partner with us to leverage our expertise and transform your real estate business."
    },
    {
      type: 'heading',
      level: 2,
      content: "Renter/Buyers Console"
    },
    {
      type: 'text',
      content: "Our talented and experienced team has worked on numerous real estate and vacation rental portals. Here is a list of features included in our projects:"
    },
    {
      type: 'list',
      items: [
        "My Account: Profile, settings, and subscriptions.",
        "Add/Delete/Modify property details including facilities, pictures, videos, maps, and location.",
        "Manage rental availability and pricing.",
        "Manage payments and special offers.",
        "Receive leads and inquiries."
      ]
    },
    {
      type: 'heading',
      level: 2,
      content: "Website Moderator's Console"
    },
    {
      type: 'text',
      content: "Features include:"
    },
    {
      type: 'list',
      items: [
        "Advanced AJAX-based property search.",
        "Submit booking inquiries and interest requests.",
        "Manage users, estate owners, and vendors.",
        "Content management and site news updates.",
        "Manage regional information and multimedia content.",
        "Handle subscription payments and lead management."
      ]
    },
    {
      type: 'heading',
      level: 2,
      content: "Real Estate Solution: Our Expertise"
    },
    {
      type: 'text',
      content: "Looking for affordable digital marketing services? Increase traffic and sales with Web Infomatrix’s full suite of digital marketing services, including SEO, SMO, PPC, web design, and more."
    },
    {
      type: 'faq',
      items: [
        {
          question: "What sort of businesses do you work with?",
          answer: "Webinfomatrix works with businesses of all sizes, providing tailored solutions with the right professionals for each scale and specialization."
        },
        {
          question: "What services does Webinfomatrix provide?",
          answer: "We offer a range of services including SEO, PPC, social media marketing, web design, and more."
        }
      ]
    }
  ]
};

const RealEstate = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAnswer = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <HelmetProvider>
      <div className="container mx-auto lg:p-44 text-gray-800 -mt-16">
        <Helmet>
          <title>{RealData.seo.title}</title>
          <meta name="description" content={RealData.seo.description} />
          <meta name="keywords" content={RealData.seo.keywords} />
          <meta name="author" content={RealData.seo.author} />
        </Helmet>

        {RealData.content.map((item, index) => {
          switch (item.type) {
            case 'text':
              return (
                <p key={index} className="text-lg mb-4">{item.content}</p>
              );
            case 'heading':
              const HeadingTag = `h${item.level}`;
              return (
                <HeadingTag key={index} className="text-3xl font-semibold mt-6 mb-4">
                  {item.content}
                </HeadingTag>
              );
            case 'list':
              return (
                <ul key={index} className="list-none pl-0 mb-6">
                  {item.items.map((listItem, i) => (
                    <li key={i} className="flex items-center mb-2">
                      <input type="checkbox" checked readOnly className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                      <span className="ml-3 text-lg">{listItem}</span>
                    </li>
                  ))}
                </ul>
              );
            case 'list-decimal':
              return (
                <ol key={index} className="list-decimal list-inside pl-6 mb-6">
                  {item.items.map((listItem, i) => (
                    <li key={i} className="mb-2">
                      <strong>{listItem.title}</strong>: {listItem.description}
                    </li>
                  ))}
                </ol>
              );
            default:
              return null;
          }
        })}
        <div>
        <img src={Real} alt="Real Estate" className="my-6 m-auto" />
        <Services />
        <img src={imageLocal} alt="Local Image" className="my-6" />
        <DigitalCards />
        <Testimonial />
       
        </div>
        {/* FAQ section rendered at the end */}
        {RealData.content.filter(item => item.type === 'faq').map((item, index) => (
          <ul key={index} className="list-inside pl-6 mt-6">
            <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
            {item.items.map((faq, i) => (
              <li key={i} className="mb-4">
                <button
                  onClick={() => toggleAnswer(i)}
                  className="flex items-center justify-between w-full p-4 bg-white shadow-md rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <strong className="text-lg">{faq.question}</strong>
                  <span className="text-xl ml-4">{expandedIndex === i ? '-' : '+'}</span>
                </button>
                {expandedIndex === i && (
                  <p className="text-lg mt-2 p-4 bg-gray-40 border border-gray-300 rounded-lg transition-all duration-300 ease-in-out">
                    {faq.answer}
                  </p>
                )}
              </li>
            ))}
          </ul>
        ))}
         <ContactForm />
      </div>
    </HelmetProvider>
  );
};

export default RealEstate;