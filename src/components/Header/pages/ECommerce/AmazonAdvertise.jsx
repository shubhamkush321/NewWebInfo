import React from 'react';

// Sub-Component for Section Titles
const SectionTitle = ({ children }) => (
  <h2 className="mt-8 text-2xl font-semibold text-gray-800">{children}</h2>
);

// Sub-Component for Paragraphs
const Paragraph = ({ children }) => (
  <p className="mb-4 leading-relaxed text-gray-700">{children}</p>
);

// Sub-Component for List Items
const ListItem = ({ children }) => (
  <li className="mb-2 text-gray-600">{children}</li>
);

// JSON Data
const data = {
  title: "Optimize Your Ecommerce Site for Search Engines",
  content: "Welcome to Webinfomatrix, your gateway to unparalleled success in the e-commerce landscape. Discover the power of our Ecommerce Website Optimization Services designed to elevate your online presence, drive targeted traffic, and maximize your return on investment. As a leading agency, we specialize in affordable solutions that encompass everything from SEO to PPC management, ensuring your e-commerce venture thrives in the competitive digital marketplace.",
  richText: "<p>It is a holistic approach that is implemented in order to improve your website and allow visitors to convert to customers. Everything in your website from navigation and design to content and product descriptions, everything should intentionally guide users to make a purchase from you.</p><h2>Ecommerce Optimization Services</h2><p>Experience Holistic Ecommerce Optimization Services designed to enhance every aspect of your online store. From website performance to user experience, our optimizations aim to provide a seamless journey for your customers.</p><h2>Work with eCommerce Optimization Experts</h2><p>Our team of optimization experts either creates or optimizes your website to increase the conversion rate. With our help, you can easily capture the online target consumer’s attention. We use effective eCommerce optimization techniques like:</p><ul><li>SEO: Optimize your website for Google, Bing, Yahoo, etc. with profitable keywords and analysis of the competitor’s strategy.</li><li>Site Layout and Structure: We work with you to ensure your online store is presented in a structured way that users can easily navigate and understand. It is also made search engine friendly.</li></ul><h2>Why Choose Webinfomatrix for Ecommerce Website Optimization Services</h2><p><strong>Expertise and Experience:</strong> Benefit from our profound understanding of the e-commerce landscape, backed by years of experience. Our team brings a wealth of expertise to the table, ensuring your business stands out in the competitive digital marketplace.</p><ul><li>Google Analytics reports that give an overview of your site’s activity.</li><li>Regularly updated ranking of keywords used on the eCommerce site.</li><li>Detailed reports of the work being done on the site, showing how we spend our hours and your money on your website.</li></ul>"
};

const AmazonAdvertise = () => {
  return (
    <div className="p-8 font-sans bg-gray-50">
      <SectionTitle>{data.title}</SectionTitle>

      <Paragraph>{data.content}</Paragraph>
      
      {/* Using dangerouslySetInnerHTML to render rich text content */}
      <div className="prose prose-gray" dangerouslySetInnerHTML={{ __html: data.richText }} />
    </div>
  );
}

export default AmazonAdvertise;
