import React, { useState } from 'react';

const ContactForm = () => {
  const [isTermsChecked, setIsTermsChecked] = useState(false);

  const handleTermsChange = () => {
    setIsTermsChecked(!isTermsChecked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isTermsChecked) {
      alert('Form submitted successfully!');
    } else {
      alert('Please check the "I\'m not a robot" box.');
    }
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg">
          {/* Contact Information */}
          <div className="md:w-1/2 p-8">
            <div className="text-center md:text-left ml-36 mt-36">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Contact Us
              </h2>
              <p className="text-2xl text-gray-700 mb-4">
                Call Now at <b className="text-blue-600 font-bold">+91 9212306116</b>
              </p>
              <p className="text-2xl text-gray-700 mb-4">
                Info@webinfomatrix.com
              </p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Request Free SEO Audit
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2 p-8">
            <div className="text-center md:text-left mb-6">
              <h2 className="text-3xl font-bold text-gray-800">
                Let's increase your sales.
              </h2>
            </div>
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="flex flex-col mb-4">
                <label htmlFor="full-name" className="text-gray-700 text-sm font-bold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="full-name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="email" className="text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="phone" className="text-gray-700 text-sm font-bold mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="website-url" className="text-gray-700 text-sm font-bold mb-2">
                  Website Url
                </label>
                <input
                  type="url"
                  id="website-url"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="comment" className="text-gray-700 text-sm font-bold mb-2">
                  Comment
                </label>
                <textarea
                  id="comment"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                ></textarea>
              </div>
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id="terms"
                  className="form-checkbox h-5 w-5 text-gray-600 focus:ring-blue-500"
                  checked={isTermsChecked}
                  onChange={handleTermsChange}
                  required
                />
                <span className="ml-2 text-gray-700 text-sm">
                  I'm not a robot
                </span>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
