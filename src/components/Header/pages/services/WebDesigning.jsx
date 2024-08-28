import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SERVERAPI } from '../../../../common/common';
import processImg from "../../../../assets/WedDesign/process-1.png";
import localStorage from '../../../../assets/New folder/asset 4.jpeg'; 
import image1 from "../../../../assets/WedDesign/creativity-1.png";
import image2 from "../../../../assets/WedDesign/user-1.png";
import image3 from "../../../../assets/WedDesign/responsive-1.png";
import image4 from "../../../../assets/WedDesign/flask-1.png";
import image5 from "../../../../assets/WedDesign/loupe-1.png";
import Slide1 from "../../../../assets/New folder/asset 1.jpeg";
import Slide2 from "../../../../assets/New folder/asset 2.jpeg";
import Slide3 from "../../../../assets/New folder/asset 3.jpeg";

// Combined Data
// const webDesignData = {
//   title: "Web Designing Outsourcing Company",
//   schemaName: "webDesigns",
//   sections: [
//     {
//       header: "Web Design",
//       description: [
//         "Creating a website and making it go online is not enough! There are loads of other aspects that are important to provide a professional touch to your website as well. One of them is an ace website design. Until and unless your design is not good, it will not provide a taste of credibility to your target audience.",
//         "A well-designed website holds the power to grab attention and create a feeling of desire in your potential customers. Web Infomatrix does the same for you. Our creative team of web designers is equipped with a vast experience of designing ablaze websites, in accordance with the requirements and preference levels of our customers.",
//         "We believe in designing business and customer-oriented websites, apt from a search engine point of view, to make it stand apart from the rest of the crowd. All our designers have a common motto to create impressive looks along with an effective online presence that represents the unique individuality of your company/firm or business in a major way. Apart from being influential, we endeavor fast loading, SEO friendly and user-friendly websites for our clients.",
//         "Our creative teams know how to create a perfect equilibrium between professionalism and artistry to design a masterpiece for you! We follow the trends and techniques of the modern market to offer you the best pudding in your serving tray at the end of the day!"
//       ]
//     },
//     {
//       header: "In the Digital Era",
//       description: [
//         "It is important to stay connected to your customers and prospects so that you can expand your business. According to statistics, approximately 4.57 billion people are active internet users i.e., 59 percent of the world population. Out of this, 92 percent of consumers usually visit a brand's website for multiple purposes other than buying.",
//         "We can understand from the data that consumers do not buy on impulse. Thus without a web presence, you automatically lose out on reaching your target audience. With a custom, interactive web page design, you can build consumer trust and gain market referrals.",
//         "However, just creating a website and making it go online is not enough. It is a conversion machine for your business and helps customers relate to your brand. So, you should ensure that your website has a good ranking on search engines and stands out to your customers in the competitive market.",
//         "It is critical to maintain a responsive website design that appeals to your consumers and the search engines. As a business owner, you must make sure that your customers find a legit business site when they search for your company on the internet. Otherwise, you may lose their trust and it would dissuade them from engaging with your business.",
//         "So, you should invest in responsible web designing and partner with our website designing agency. At Web Infomatrix, we provide affordable website design services and build responsive websites that are optimized to rank high on search engines, increase your brand visibility, and improve your conversion rate."
//       ]
//     },
//     {
//       header: "Website Designing Services at Web Infomatrix",
//       list: [
//         "Content writing",
//         "Video production",
//         "Logo design",
//         "Search engine optimization",
//         "Conversion rate optimization",
//         "Website analysis",
//         "Website hosting",
//         "Ecommerce web design"
//       ]
//     },
//     {
//       header: "Why Choose Our Website Design Agency?",
//       list: [
//         "You can directly communicate with our website designing team, which helps in getting your point across and allows you to be personally involved in the process.",
//         "Our team at Web Infomatrix focuses on client satisfaction so clients get the final say on how their website designing project would go. We follow an approval process for each step of the website designing journey.",
//         "We provide mobile-friendly, optimal web design that can be easily accessed on all devices and browsers.",
//         "Our team builds optimized websites so that they rank higher on the search engine result page and you can reach your target audience."
//       ]
//     },
//     {
//       description: [
//         "Contact us to get affordable website design service from Web Infomatrix."
//       ]
//     }
//   ]
// };

const images = [Slide1, Slide2, Slide3];

const WebDesigning = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = 5000; // 5 seconds
  const [data, setData] = useState({ sections: [] });
  const faqs = data.faqs || [];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${SERVERAPI}/api/web-designing`);
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
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, slideInterval);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full mx-auto py-8 mt-8 text-gray-800">
      {/* Slider Section */}
      <div className="relative w-full h-[75vh] overflow-hidden mb-8">
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
<div className='lg:p-40 -mt-36'>
      {/* Main Heading */}
      <h1 className="text-3xl font-bold mb-6 text-center">{data.title}</h1>
      <hr className="border-black mb-8" />

      {/* Image Gallery */}
      <div className="flex gap-4 mb-4">
        <img src={image1} alt="Creative Web Design" className="w-56 border border-black" />
        <img src={image2} alt="Creative Web Design" className="w-56 border border-black" />
        <img src={image3} alt="Creative Web Design" className="w-56 border border-black" />
        <img src={image4} alt="Creative Web Design" className="w-56 border border-black" />
        <img src={image5} alt="Creative Web Design" className="w-56 border border-black" />
      </div>

      {/* Sections with Process Image */}
      {data.sections.map((section, index) => (
        <section key={index} className="mb-8">
          <div className="flex items-start gap-4">
            <div className="flex-1">
              {section.header && (
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">{section.header}</h2>
              )}
              {section.description && section.description.map((description, i) => (
                <p key={i} className="mb-4 text-gray-500">{description}</p>
              ))}
              {section.list && (
                <ul className="list-disc list-inside mb-4">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
            {index === 0 && ( // Ensure process image is only displayed for the first section
              <div className="flex-shrink-0">
                <img src={processImg} alt="Process" className="w-72 h-auto mt-10" />
              </div>
            )}
          </div>
        </section>
      ))}
    </div>
    <img src={localStorage} alt="Local Storage" className='-mt-20'/>
    </div>
  );
};

export default WebDesigning;
