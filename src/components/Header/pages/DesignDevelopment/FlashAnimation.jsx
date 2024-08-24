import React from 'react';
import flash from '../../../../assets/WedDesign/flash.jpg';
import imageLocal from "../../../../assets/New folder/asset 4.jpeg";
import ContactForm from "../Extra/ContactForm";
import Services from '../Extra/Services';

// Define the content data
const FlashData = [
  {
    type: 'section',
    id: 'intro',
    title: 'Flash Animation Design Services',
    paragraphs: [
      'Our ace designers at Web Infomatrix are perfect artisans who produce high-end interactive Flash solutions, including 2-D and 3-D animations, sound, user-friendly designs, easy navigation, and quality multimedia content.',
      'We also offer proficient and slick services in Flash Action Scripting, flash intros for your corporate site, Flash Game Development, flash banners, Flash Streaming, Flash web design, or anything that deals with Flash designs, at an affordable price range. Our creative designers crave to bring life to the product with their mind-boggling animations and designs.',
    ],
  },
  {
    type: 'section',
    id: 'corporate',
    title: 'Corporate Flash Presentation Services',
    image: flash,
    imageAlt: 'Flash Animation Example',
    paragraphs: [
      'Flash is a versatile and powerful technology for creating gorgeous web pages, animations, and graphics. Because of the high quality of its graphics and its interactive nature, it’s a popular web development option.',
      'We have a professional team of Flash developers who can help you with any Flash animation project, whether it’s a new website or animated graphics for a marketing campaign.',
    ],
  },
  {
    type: 'section',
    id: 'services',
    title: 'Services for Flash Animation',
    paragraphs: [
      'We have staff with over ten years of expertise and are industry leaders. We offer a wide range of Flash animation services to fulfill your specific requirements, including:',
    ],
    listItems: [
      'Banners and advertisements – High-quality, interactive banner ads that engage your viewers and motivate them to take action.',
      'Websites in Flash — Completely interactive, professional websites that look great, attract and retain visitors, and are search engine optimized.',
      'Personalized cartoons and animations – Our Flash programming team can generate animations and cartoons tailored to your needs.',
      'We also provide 2D and 3D animation, as well as 3D modeling, rigging, and cartoons.',
    ],
  },
  {
    type: 'section',
    id: 'seo-audit',
    title: 'Technical SEO Audit of a Website',
    paragraphs: [
      'An SEO website audit is a useful tool for determining how well your website is functioning. Websites can accumulate a backlog of broken or irrelevant links, as well as out-of-date material, over time. This type of excess content can cause your site to slow down and frustrate your users.',
      'We execute detailed website SEO audits to look at every part of your site’s performance, from site speed, keyword density, and metadata to conversion and bounce rates, traffic quality, and analytics.',
    ],
  },
  {
    type: 'section',
    id: 'social-bookmarking',
    title: 'Bookmarking on Social Media',
    paragraphs: [
      'With the use of metadata, social bookmarking is a technique for saving, organizing, and searching for bookmarks of sources online. Members of social bookmarking services like Digg, StumbleUpon, and Twitter can save links to websites they want to visit again or share with others.',
      'Social bookmarking can help you establish a reputation in a specific sector or field of expertise, as well as enhance your visibility by exposing your site to thousands of daily visitors.',
    ],
  },
  {
    type: 'section',
    id: 'benefits',
    title: 'What Are The Benefits Of Flash Animation?',
    paragraphs: [
      'Because of its high-quality graphics, adaptability, and excellent user experience, Flash animation is becoming increasingly popular among animators and developers.',
      'Flash animation may bring a lot of value to your website by making it more appealing and user-friendly for your visitors to interact with. This raises the likelihood of attracting guests in the first place, as well as encouraging them to stay once they come.',
    ],
    listItems: [
      'A better user experience – Flash allows you to add interactive and graphic components to your website that you wouldn’t be able to do with HTML. It also enables sound, animation, and interactivity, allowing visitors to your website or banner ad to have a completely dynamic experience.',
      'Images of higher quality – Flash produces images of higher quality than any other web graphics format.',
      'Control over the product — Because Flash is versatile and adaptable, you may customize the look, feel, and functionality of your website, advertisement, or animation.',
      'Optimization – Flash files don’t have to be big; it’s simple to optimize individual files to make them smaller and load faster.',
    ],
  },
  {
    type: 'section',
    id: 'custom-solutions',
    paragraphs: [
      'We not only offer ready-made templates but also a wide range of custom-based solutions, which are specifically designed and delivered to fulfill your exact requirements. Our dedicated designers are bedecked with a deep and professional knowledge of Flash coupled with our ability to offer competitive solutions for our clients.',
    ],
  },
];

const FlashAnimation = () => {
  return (
    <div className="container mx-auto md:p-16 lg:p-44 -mt-14">
      {FlashData.map((section) => (
        <div key={section.id} className="mb-8">
          <h1 className="text-3xl font-bold mb-6 text-center lg:text-left">{section.title}</h1>
          {section.image && (
            <>
              <hr className="border-gray-300 mb-6" />
              <img src={section.image} alt={section.imageAlt} className="w-full h-auto object-cover rounded-lg mb-4" />
            </>
          )}
          {section.paragraphs && section.paragraphs.map((paragraph, index) => (
            <p key={index} className="mb-6 text-gray-700">{paragraph}</p>
          ))}
          {section.listItems && (
            <ul className="list-disc list-inside mb-6 text-gray-700">
              {section.listItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
          {section.id === 'seo-audit' && (
            <hr className="border-black mt-4 mb-4" />
          )}
        </div>
      ))}
      <div className="mt-8">
        <Services />
        <img src={imageLocal} alt="Local Asset" className="w-full h-auto mb-6" />
        <ContactForm />
      </div>
    </div>
  );
};

export default FlashAnimation;
