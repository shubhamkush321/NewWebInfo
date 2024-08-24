import React from 'react'
import GrDesign from '../../../../assets/WedDesign/GrDesign.jpg';
import ContactForm from '../Extra/ContactForm';

// Store text data in arrays
const textData = {
  title: "Creative Graphic Design Services Company",
  introduction: [
    "Web Infomatrix is an ",
    { text: "online marketing agency", href: "#" },
    " where you can get a wide range of services. One of our core services includes graphic design. We have a team of creative designers who provide outstanding and attention-grabbing ideas for your business. They can create eye-catching flyers, business cards, banners, etc. for your business."
  ],
  description: [
    "Our team of ",
    { text: "graphic designers", strong: true },
    " is good at developing a great impression on the mind of the prospect through their work. They are individuals with professional experience and stunning creativity skills. Thus with their help, you can establish a bright profile for your business on the internet."
  ],
  commitment: [
    "Since we are a pioneer in the ",
    { text: "graphic design industry", strong: true },
    ", we can create magnificent designs for your business across various platforms. Our designers transform the standard of your online business and make you stand out to your consumers. They do creative and smart work so as to convey your business ideas to the audience through their graphic designs. Our agency uses the best graphic design tools like Adobe Creative Cloud, Corel Draw, Canva, etc. We commit to:"
  ],
  commitmentsList: [
    "Providing professional and unique graphic design at an affordable price.",
    "Having a streamlined communication channel with clients.",
    "Providing regular follow-ups on the work done.",
    "Delivering the projects on time."
  ],
  industries: [
    "Our graphic designing team at Web Infomatrix is focused on creating innovative solutions for our clients. So far we have helped businesses across various industries succeed with our help. With us, you get more leads, have greater conversion rates, and build a loyal consumer base. Some of the industries we have served are:"
  ],
  industriesList: [
    "Travel and tourism.",
    "Hospitality industry.",
    "Healthcare industry.",
    "Real estate."
  ],
  serviceOffer: [
    "With our great website design services, you will retain the audience’s attention for a long time. Our team is an expert in various designing tools and has remarkable experience when it comes to providing tailored graphic design solutions. They understand the project and the industry before starting with the formulation of ideas.",
    "We invest our time in understanding your business and requirements before we start with the work. Based on our market analysis and your suggestions, we start creating innovative designs personalized for your business."
  ],
  graphicDesignServices: [
    "We offer a wide range of services to our clients. Some of our graphic design services include:"
  ],
  graphicDesignServicesList: [
    "Logo design and branding: We help you create a logo that best defines your brand message.",
    "Social media design: Get personalized social media design solutions that expand your visibility and create a powerful bond with your audience.",
    "Website UI and UX design: Win the heart of users both new and old with user-centric graphic design.",
    "Mobile application design: Enhance your online business growth with engaging and intuitive mobile app design.",
    "Presentation design: We give a professional look to your typical presentations.",
    "E-book design: Get professional ebook designs with various elements to retain the audience’s attention."
  ],
  servicesList: [
    "We offer graphic designing services in the following areas:",
    "Visiting Card",
    "Envelopes",
    "Package Design",
    "Naming & Tag line Writing",
    "Business Card Design",
    "Flyers, catalogs, print advertisements",
    "Brand Foundation",
    "Corporate Presentation",
    "Letterhead Design",
    "Logo and Icon Design",
    "Stationery Design",
    "CD Cover Design"
  ],
  closing: "You just have to trust us and we will deliver for you!"
};

const GraphicDesign = () => {
  return (
    <div className="p-44 -mt-12">
      <h1 className="text-3xl font-bold mb-6 justify-center flex">{textData.title}</h1>
      <hr className='border-black mb-4'/>
      <p className="mb-4 text-gray-700">
        {textData.introduction.map((item, index) =>
          typeof item === 'string' ? item : (
            <a href={item.href} className="text-blue-600" key={index}>{item.text}</a>
          )
        )}
      </p>
      <p className="mb-6 text-gray-700">
        {textData.description.map((item, index) =>
          typeof item === 'string' ? (
            <strong key={index}>{item}</strong>
          ) : (
            item.strong ? (
              <strong key={index}>{item.text}</strong>
            ) : (
              item.text
            )
          )
        )}
      </p>
      
      <h2 className="text-2xl font-semibold mb-4">Hire a Professional Graphic Design Agency</h2>
      <hr className='border-black mb-4'/>
      <div className='flex justify-center'>
        <img src={GrDesign} alt="Graphic Design"/>
      </div>
      <h3 className="text-xl font-semibold mb-2">Graphic Design Services</h3>
      <p className="mb-4 text-gray-700">
        {textData.commitment.map((item, index) =>
          typeof item === 'string' ? (
            item
          ) : (
            item.strong ? (
              <strong key={index}>{item.text}</strong>
            ) : (
              item.text
            )
          )
        )}
      </p>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        {textData.commitmentsList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      
      <h3 className="text-xl font-semibold mb-2">Industries that have benefited from our graphic design services</h3>
      <p className="mb-4 text-gray-700">
        {textData.industries[0]}
      </p>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        {textData.industriesList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p className="mb-4 text-gray-700">
        {textData.serviceOffer.map((item, index) => (
          <React.Fragment key={index}>{item}<br /></React.Fragment>
        ))}
      </p>
      
      <h2 className="text-2xl font-semibold mb-4">Get a Result-Driven Graphic Design Service</h2>
      <p className="mb-4 text-gray-700">
        {textData.graphicDesignServices[0]}
      </p>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        {textData.graphicDesignServicesList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      
      <p className="mb-4 text-gray-700">
        Get in touch with us for further information regarding our graphic design services.
      </p>
      
      <h3 className="text-xl font-semibold mb-2">We offer graphic designing services in the following areas:</h3>
      <ul className="text-gray-700 space-y-2">
        {textData.servicesList.map((item, index) => (
          <li className="flex items-center" key={index}>
            <input type="checkbox" checked className="mr-2 form-checkbox h-4 w-4 text-blue-600 border-gray-300 rounded" />
            {item}
          </li>
        ))}
      </ul>
      
      <p className="text-gray-700">
        {textData.closing}
      </p>
      <div>
      <ContactForm/>
      </div>
    </div>
  )
}

export default GraphicDesign
