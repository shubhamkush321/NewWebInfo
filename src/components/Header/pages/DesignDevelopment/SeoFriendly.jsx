import React from 'react';
import SeoFriendlyImage from '../../../../assets/WedDesign/seo-friendly-2.png';
import imageLocal from "../../../../assets/New folder/asset 4.jpeg";
import ContactForm from "../Extra/ContactForm";
import Services from '../Extra/Services';

const contentData = [
  {
    type: 'heading1',
    content: 'SEO Friendly Web Design',
    className: 'text-3xl text-gray-800 font-bold mb-6 text-center'
  },
  {
    type: 'hr',
    className: 'border-black'
  },
  {
    type: 'paragraph',
    content: 'SEO is one of the best digital marketing techniques, which is designed to enhance your business and get you the perfect web traffic that your site deserves. Smart people like you understand that a website is as effective as the amount of traffic it manages to get on it.',
    className: 'mb-6'
  },
  {
    type: 'paragraph',
    content: 'The efficient designers of Web Infomatrix do the same for you!',
    className: 'mb-6'
  },
  {
    type: 'paragraph',
    content: (
      <>
        <a href="#" className='text-blue-600'>SEO friendly website designs</a> ensure that your website is geared up with the power of standing apart from the rest of the crowd. The layouts are created in such a way that the webmasters, Google spiders, your target audience, and a wide range of other visitors can easily access them.
      </>
    ),
    className: 'mb-6'
  },
  {
    type: 'heading2',
    content: 'Professional Web Design Company',
    className: 'text-2xl font-semibold mb-4'
  },
  {
    type: 'hr',
    className: 'border-black mb-4'
  },
  {
    type: 'image',
    src: SeoFriendlyImage,
    alt: 'SEO Friendly Web Design',
    className: 'w-full h-auto mb-6'
  },
  {
    type: 'heading3',
    content: 'SEO Friendly Web Design Services',
    className: 'text-xl font-semibold mb-4'
  },
  {
    type: 'paragraph',
    content: (
      <>
        Along with all these features, an SEO friendly <b>dynamic website</b> ensures that your site will get improved rankings, increased ROI and consequently higher profit for your online business. Our SEO techniques are safe, no matter whether you want to target Google, Yahoo! or any other search engine.
      </>
    ),
    className: 'mb-6'
  },
  {
    type: 'paragraph',
    content: (
      <>
        So it does not matter whether you want to go for an SEO-friendly website or a <a href="#" className="text-blue-600">website redesign</a>, or just an SEO campaign, we endeavor all these things with brilliance. That’s because we have those <b>SEO services</b> that are specially tailored to meet the demands and expectations of our clients with luminosity.
      </>
    ),
    className: 'mb-6'
  },
  {
    type: 'paragraph',
    content: 'It takes roughly 0.05 seconds to attract the attention of your audience and shape their perception of your brand. With Web Infomatrix’s bespoke web design services, you can provide your page visitors a one-of-a-kind online experience while also enhancing your brand’s reputation.',
    className: 'mb-6'
  },
  {
    type: 'heading2',
    content: 'Why Do You Need A Mobile-Friendly Website Design For Your Business?',
    className: 'text-2xl font-semibold mb-4'
  },
  {
    type: 'paragraph',
    content: (
      <>
        Your company’s backbone is your website. A responsive, SEO <a href="#" className="text-blue-600">E-Commerce website design</a> communicates your brand’s offerings, unique value propositions, and fundamental beliefs to online visitors.
      </>
    ),
    className: 'mb-6'
  },
  {
    type: 'paragraph',
    content: 'This should not be the case for your company. Ensure that your target clients can easily locate and browse your website. Invest in a mobile-friendly website, well-designed, and informative website.',
    className: 'mb-6'
  },
  {
    type: 'heading2',
    content: 'What’s Better for Your Business: SEO Friendly Web Design or Website Templates?',
    className: 'text-2xl font-semibold mb-4'
  },
  {
    type: 'paragraph',
    content: 'Your website is a strong communication platform that allows you to sell your business 24 hours a day, seven days a week, and connect with clients all over the world. However, not every website will provide you with the desired return on investment (ROI). Choosing between a website template and an SEO design website is the most important choice.',
    className: 'mb-6'
  },
  {
    type: 'paragraph',
    content: (
      <>
        SEO <a href="#" className="text-blue-600">website design packages</a> allow you to create a website that is tailored to your specific customer journey and brand messaging.
      </>
    ),
    className: 'mb-6'
  },
  {
    type: 'heading2',
    content: 'Why Is SEO Friendly Website Design and Development the Best Choice for Your Business?',
    className: 'text-2xl font-semibold mb-4'
  },
  {
    type: 'paragraph',
    content: (
      <>
        A SEO WordPress website design might be a crucial distinction for your organization in this congested industry. You may avoid extraneous functionality and bloatware with a SEO eCommerce site design
        which can minimize load times. Furthermore, no theme prevents you from customizing the look and functionality of a custom-designed website.
      </>
    ),
    className: 'mb-6'
  },
  {
    type: 'list',
    items: [
      'When a website’s page load time exceeds three seconds, 40% of internet consumers quit it (Kissmetrics)',
      'A brand that provides a great user experience (UX) is trusted by 90% of online shoppers (Toptal)',
      'Consumers cite website design as the most important aspect in determining a company’s legitimacy, with 48% citing it as the most important component (Ironpaper)'
    ],
    className: 'list-disc list-inside pl-5 mb-6 space-y-3'
  },
  {
    type: 'heading2',
    content: 'Website Design Services on Demand',
    className: 'text-2xl font-semibold mb-4'
  },
  {
    type: 'heading3',
    content: 'Experts in WordPress',
    className: 'text-xl font-semibold mb-4'
  },
  {
    type: 'paragraph',
    content: 'Put your website needs in the hands of our SEO website design business and work with seasoned WordPress experts.',
    className: 'mb-6'
  },
  {
    type: 'heading3',
    content: 'Designing a Logo',
    className: 'text-xl font-semibold mb-4'
  },
  {
    type: 'paragraph',
    content: 'With a personalized logo incorporated into your website, you may create a distinct brand identity. Our staff will produce three logo concepts based on your demands and criteria, and you will be able to choose the best one that best represents your business image.',
    className: 'mb-6'
  },
  {
    type: 'heading3',
    content: 'SEO Friendly Web Design Firm that Has Won Awards',
    className: 'text-xl font-semibold mb-4'
  },
  {
    type: 'paragraph',
    content: (
      <>
        One of the most pressing issues in today’s <a href="#" className="text-blue-600">digital marketing services for small businesses</a> is that small business owners are unaware of the importance of having a custom-designed website. Because of the high expense of bespoke web design, several business owners overlook the various advantages of investing in a website. Make sure you don’t make the same mistake. <br />
        The majority of brand interactions and purchase activities take place online in today’s internet-driven society. You risk losing potential consumers, business partners, and profitable long-term growth if your website does not stand out from the crowd. Let us help you connect with high-intent prospects and establish strong relationships with your current clients by calling us right now.
      </>
    ),
    className: 'mb-6'
  },
  {
    type: 'paragraph',
    content: (
      <>
        Web Infomatrix, one of the <a href="#" className="text-blue-600">digital marketing firms</a> offers perfect SEO and <b>web-marketing services</b> to accelerate your business in the most proficient manner. We make use of white-hat techniques that are in line with the search engine guidelines to ensure that your site experiences a hassle-free running in the future.
      </>
    ),
    className: 'mb-6'
  },
];

const SeoFriendly = () => {
  return (
    <div className="container mx-auto p-44 bg-white text-gray-900 -mt-16">
      {contentData.map((item, index) => {
        switch (item.type) {
          case 'heading1':
            return <h1 key={index} className={item.className}>{item.content}</h1>;
          case 'heading2':
            return <h2 key={index} className={item.className}>{item.content}</h2>;
          case 'heading3':
            return <h3 key={index} className={item.className}>{item.content}</h3>;
          case 'paragraph':
            return <p key={index} className={item.className}>{item.content}</p>;
          case 'list':
            return (
              <ul key={index} className={item.className}>
                {item.items.map((listItem, idx) => (
                  <li key={idx}>{listItem}</li>
                ))}
              </ul>
            );
          case 'hr':
            return <hr key={index} className={item.className} />;
          case 'image':
            return <img key={index} src={item.src} alt={item.alt} className={item.className} />;
          case 'component':
            return <div key={index} className={item.className}>{item.component}</div>;
          default:
            return null;
        }
      })}
      <div className="mt-8">
        <Services />
        <img src={imageLocal} alt="Local Asset" className="w-full h-auto mb-6" />
        <ContactForm />
      </div>
    </div>
  );
}

export default SeoFriendly;
