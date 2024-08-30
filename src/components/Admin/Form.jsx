import React, { useState, useRef, useMemo } from 'react';
import { FaImage, FaLink } from 'react-icons/fa';
import JoditEditor from 'jodit-react';

const Form = ({ setFormData, formData }) => {
  const [name, setName] = useState('');
  const [permalink, setPermalink] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState('published');
  const [template, setTemplate] = useState('default');
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [isChoosingImage, setIsChoosingImage] = useState(true);
  const editor = useRef(null);

  const handleContentChange = (newContent) => {
    setContent(newContent);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  console.log(formData)


  return (
    <div className="flex gap-4 p-36 -mt-20 ml-14">
      {/* Main form section */}
      <form onSubmit={handleFormSubmit} className="w-full p-6 bg-gray-100">
        <h1 className="text-2xl font-bold mb-6">Edit Form</h1>

        {/* Gallery Images Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="image">
            Gallery images
          </label>
          <input
            id="image"
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="permalink">
            Permalink
          </label>
          <input
            id="permalink"
            type="text"
            value={permalink}
            onChange={(e) => setPermalink(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <small className="text-gray-500">Preview: https://www.example.com/{permalink}</small>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Content
          </label>
          <JoditEditor
            ref={editor}
            value={content}
            onChange={handleContentChange}
            config={{
              readonly: false,
            }}
            className="border rounded-md"
          />
        </div>

        {/* SEO Optimization Section */}
        <div className="bg-white shadow-md rounded-md p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Search Engine Optimize</h2>
            <button className="text-blue-500 hover:underline">Edit SEO meta</button>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Refund Policy | Web Infomatrix - Transparent and Client-Focused Service</h3>

            <p className="text-gray-700 mt-2">
              Dec 29, 2023 - Learn about Web Infomatrix's transparent refund policy, designed to protect your investment and ensure
              satisfaction with our web development, SEO, SEM, and SMO services.
            </p>
          </div>
        </div>
      </form>

      {/* Side section for Status and Template */}
      <div className="w-80 flex flex-col gap-4 -mr-28">
        <div className="p-6 bg-gray-100 shadow-md rounded-lg">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="status">
            Publish
          </label>
          <hr className="border-gray-300 mb-4" />
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mb-2">Save</button>
          <br />
          <button className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">Save & Exit</button>
        </div>

        <div className="p-8 bg-gray-100 shadow-md rounded-lg">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="status">
            Status
          </label>
          <hr className="border-gray-300 mb-4" />
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="published">Published</option>
            <option value="draft">Draft</option>
            <option value="pending">Pending</option>
          </select>
        </div>

        <div className="p-8 bg-gray-100 shadow-md rounded-lg">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="template">
            Template
          </label>
          <hr className="border-gray-300 mb-4" />
          <select
            id="template"
            value={template}
            onChange={(e) => setTemplate(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="default">Full width</option>
            <option value="custom">HomePage</option>
          </select>
        </div>

        <div className="p-8 bg-gray-100 shadow-md rounded-lg">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="template">
            Image
          </label>
          <hr className="border-gray-300 mb-4" />

          <div className="flex items-center justify-center space-x-4">
            <button
              type="button"
              className={`flex items-center px-4 py-2 text-gray-700 rounded-md hover:bg-gray-200 ${isChoosingImage ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
              onClick={() => setIsChoosingImage(true)}
            >
              <FaImage className='w-20 h-20' />
            </button>
            <button
              type="button"
              className={`flex items-center text-gray-700  hover:bg-gray-200 ${!isChoosingImage ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
              onClick={() => setIsChoosingImage(false)}
            >
              <FaLink /> Add URL
            </button>
          </div>

          {isChoosingImage ? (
            <div className="mt-4">
              <input
                id="image"
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ) : (
            <div className="mt-4">
              <input
                id="imageUrl"
                type="text"
                placeholder="Enter Image URL"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
