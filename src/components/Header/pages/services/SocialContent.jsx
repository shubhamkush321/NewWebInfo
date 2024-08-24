import React, { useState, useEffect } from "react";
import axios from "axios"; 
import image1 from "../../../../assets/New folder/asset 1.png";
import { IoMdAdd, IoMdRemove } from 'react-icons/io';
import ContactForm from "../Extra/ContactForm";
import Testimonial from "../Extra/Testimonial";

// Reusable component for FAQ section
const FAQItem = ({ question, answer, isOpen, toggleOpen }) => (
  <div className="bg-white shadow-md rounded-lg p-6 cursor-pointer">
    <div onClick={() => toggleOpen(question)} className="flex items-center justify-between">
      <h3 className="text-xl font-bold mb-2 text-gray-800">{question}</h3>
      {isOpen ? <IoMdRemove /> : <IoMdAdd />}
    </div>
    <div
      className={`transition-max-height duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-40' : 'max-h-0'}`}
    >
      <p className="mt-4 text-gray-700">{answer}</p>
    </div>
  </div>
);

const Social = () => {
  const [isOpen, setIsOpen] = useState({});
  const [socialContent, setSocialContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSocialContent = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/social-content');
        setSocialContent(response.data[0]); // Assuming you're retrieving a single document
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSocialContent();
  }, []);

  const toggleOpen = (question) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [question]: !prevState[question],
    }));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Construct the full image URL
  const imageUrl = socialContent?.introduction?.image 
    ? `http://localhost:5000/images/${socialContent.introduction.image}` 
    : ''; 

  return (
    <div className="container mx-auto p-20">
      {socialContent?.introduction && (
        <>
          <h3 className="text-gray-800 text-2xl font-bold text-center mb-4">
            {socialContent.introduction.title}
          </h3>
          <hr className="border-black" />
          <div className="flex">
            <div className="text-gray-800 mt-10 text-start">
              {socialContent.introduction.content.map((paragraph, index) => (
                <React.Fragment key={index}>
                  {paragraph}
                  <br />
                  <br />
                </React.Fragment>
              ))}
            </div>
            {imageUrl && (
              <img 
                src={imageUrl}
                className="w-1/2 h-auto" 
                alt="Introduction"
                onError={(e) => {
                  e.target.src = ''; 
                  console.error("Error loading image:", e.target.src);
                }}
              />
            )}
          </div>
        </>
      )}

      {socialContent?.businessStartUp && (
        <div className="mt-10">
          <h4 className="text-gray-800 text-xl font-bold text-start mb-4">
            {socialContent.businessStartUp.title}
          </h4>
          <div className="text-gray-800">
            {socialContent.businessStartUp.content.map((paragraph, index) => (
              <React.Fragment key={index}>
                {paragraph}
                <br />
                <br />
              </React.Fragment>
            ))}
          </div>
        </div>
      )}

      {socialContent?.importance && (
        <div className="mt-10">
          <h4 className="text-gray-800 text-xl font-bold text-start mb-4">
            {socialContent.importance.title}
          </h4>
          <div className="text-gray-800">
            {socialContent.importance.content.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
      )}

      {socialContent?.strategy && (
        <div className="mt-10">
          <h4 className="text-gray-800 text-xl font-bold text-start mb-4">
            {socialContent.strategy.title}
          </h4>
          <div className="text-gray-800">
            {socialContent.strategy.content.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
      )}

      {socialContent?.proposal && (
        <div className="mt-10">
          <h4 className="text-gray-800 text-xl font-bold text-start mb-4">
            {socialContent.proposal.title}
          </h4>
          <div className="text-gray-800">
            {socialContent.proposal.content.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
      )}

      {socialContent?.conclusion && (
        <div className="mt-10">
          <h4 className="text-gray-800 text-xl font-bold text-start mb-4">
            {socialContent.conclusion.title}
          </h4>
          <div className="text-gray-800">
            {socialContent.conclusion.content.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
      )}

      {socialContent?.faqs && (
        <>
          <h3 className="text-gray-800 text-2xl font-bold text-center mt-12">Frequently Asked Questions</h3>
          <div className="space-y-6 mt-6">
            {socialContent.faqs.map((faq) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={isOpen[faq.question] || false}
                toggleOpen={toggleOpen}
              />
            ))}
          </div>
        </>
      )}

      <hr className="border-gray-800 mt-6" />
      <h3 className="text-gray-800 text-xl font-bold text-start mt-12 mb-6">Contact Form</h3>
      
      <ContactForm />
      
      <Testimonial />
    </div>
  );
};

export default Social;
