import React from 'react';
import multimedia from '../../../../assets/WedDesign/multimedia.jpg'; 
import ContactForm from '../Extra/ContactForm';
import Testimonial from '../Extra/Testimonial';

// Define the content data
const contentData = [
  {
    type: 'section',
    id: 'intro',
    title: 'Multimedia Designing Services',
    paragraphs: [
      'This is the age of cutthroat competition, and that is why it is necessary that your product should stand out in order to be noticed. Internet marketing is a tool that allows you to enhance your goods and services in the most creative manner as it implements the use of strong visuals and advanced multimedia technologies for your websites with extreme perfection. It keeps a visitor’s attention.',
      'It does not matter whether you are a minor business person or have a big MNC working under your supervision; multimedia goes a long way in ensuring that you can efficiently and eminently communicate your message while keeping in view your brand image, target positioning, and market positioning.',
    ],
    image: multimedia,
    imageAlt: 'Multimedia',
  },
  {
    type: 'section',
    id: 'website-multimedia',
    title: 'Website Multimedia Graphic Designing Services',
    paragraphs: [
      'Let your business makeover be done by Web Infomatrix and easily connect with your target audience. With a creative logo, business card, or brochure, you don’t need to do much to introduce yourself to your consumers. Those are self-explanatory if done properly. We help you reach the highest potential of your business with our creative multimedia design solutions, focusing on retaining market attention and improving market appearance. This gives you a competitive edge in the market. We provide a wide range of multimedia design services, including creative and unique logos, envelopes, brochures, and more.',
      'Our team of expert creative professionals provides the necessary guidance to understand the work done for your project. You will have a clear understanding of our plans and execution strategies.',
    ],
  },
  {
    type: 'section',
    id: 'standout',
    title: 'Want your product to stand out? Let it…',
    paragraphs: [
      'With an amazing design and look, we help you grab the attention you demand from your customers and clients. It is crucial to connect with your customers on an interactive platform through effective marketing tools and visual images of products/services. We offer innovative multimedia solutions to highlight your product’s features and establish your branding. We help you strengthen your market position and stand out to consumers. To improve your brand image, we use video, text, audio, graphics, and animation. Our team designs multimedia presentations for various business needs, including employee training, customer presentations, corporate presentations, etc.',
      'At Web Infomatrix, we have a creative and professional team to build your projects within your timeline and budget. We are experts at creating logos that reflect your company and its values. Additionally, we create multimedia campaigns, online posters, and customized social media posts to connect with consumers on a deeper level.',
      'Our services also include creative book designing to reflect the core theme of the book and ensure it stands out in the competitive market. Our services boost your sales and help your business achieve good market value.',
    ],
  },
  {
    type: 'section',
    id: 'why-us',
    title: 'Why Web Infomatrix?',
    paragraphs: [
      'We use a wide range of tools, platforms, and web services to provide our clients with top-notch multimedia design services. Our main focus is understanding your needs and delivering the best service to meet your criteria. Our client-centric approach makes us the best agency in the market for multimedia design services. We ensure clients receive daily and weekly reports, providing complete transparency. Our client relationships are built on trust and honesty. We have successfully served businesses from various industries and continuously update our practices to stay current with the latest trends.',
    ],
  },
  {
    type: 'section',
    id: 'contact',
    paragraphs: [
      'Get in touch with us if you want top multimedia design services for your business.',
    ],
  },
];

const Multimedia = () => {
  return (
    <div className="p-44 -mt-10 bg-gray-50">
      {contentData.map((section) => (
        <div key={section.id} className="mb-8">
          {section.title && (
            <h1 className="text-3xl font-bold mb-6 text-center lg:text-left">{section.title}</h1>
          )}
          {section.image && (
            <div className="flex flex-col lg:flex-row items-center lg:items-start mb-8">
              <div className="lg:w-2/3 mb-6 lg:mb-0">
                {section.paragraphs && section.paragraphs.map((paragraph, index) => (
                  <p key={index} className="mb-6 text-gray-700">{paragraph}</p>
                ))}
              </div>
              <div className="lg:w-1/1 mt-20">
                <img
                  src={section.image}
                  alt={section.imageAlt}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          )}
          {!section.image && (
            <>
              <hr className="border-black mb-6" />
              {section.paragraphs && section.paragraphs.map((paragraph, index) => (
                <p key={index} className="mb-6 text-gray-700">{paragraph}</p>
              ))}
            </>
          )}
          {section.id === 'contact' && (
            <div className='mt-6'>
              <Testimonial />
              <ContactForm />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Multimedia;
