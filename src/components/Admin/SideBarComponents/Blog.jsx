import React, { useState, useRef } from 'react';
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

  return (
    <div className='flex bg-blue-300'>
    <div className=" mt-24 min-h-screen p-6">
      {/* Main form section */}
      <form onSubmit={handleFormSubmit} className="w-full max-w-6xl mx-auto bg-white bg-opacity-50 backdrop-blur-md p-6 shadow-lg h-full max-h-3xl">
        <h1 className="text-2xl font-bold mb-6 text-gray-900">Edit Form</h1>
        <div className="mb-4">
          <label className="block text-xl text-gray-800 font-semibold mb-2" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="relative w-full px-4 py-2 border border-blue-300 bg-white rounded-md text-gray-800 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-xl text-gray-800 font-semibold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="relative w-full px-4 py-2 border border-blue-300 bg-white rounded-md text-gray-800 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-xl text-gray-800 font-semibold mb-2">
            Content
          </label>
          <JoditEditor
            ref={editor}
            value={content}
            onChange={handleContentChange}
            config={{
              readonly: false,
            }}
            className="rounded-md bg-transparent text-gray-900"
          />
        </div>
      
      </form>
    </div>
    {/* Side section for Status and Template */}
    <div className="w-60 flex flex-col gap-4 mt-5 mr-2">
    <div className="p-3 bg-white bg-opacity-50 backdrop-blur-md shadow-lg">
      <label className="block text-xl text-gray-800 font-semibold mb-2" htmlFor="status">
        Publish
      </label>
      <hr className="border-gray-500 mb-4" />
      <button className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 mb-2">Save</button>
      <br />
      <button className="px-3 py-1 bg-gray-500 text-white rounded-md hover:bg-gray-600">Save & Exit</button>
    </div>

    <div className="p-4 bg-white bg-opacity-50 backdrop-blur-md shadow-lg">
      <label className="block text-xl text-gray-700 font-semibold mb-2" htmlFor="status">
        Status
      </label>
      <hr className="border-gray-500 mb-4" />
      <select
  id="status"
  value={status}
  onChange={(e) => setStatus(e.target.value)}
  className="relative w-full px-1 py-1 border border-blue-300 bg-white text-gray-800 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
>
  {/* Custom Arrow */}
  <option value="published">Published</option>
  <option value="draft">Draft</option>
  <option value="pending">Pending</option>
</select>
    </div>

    <div className="p-4 bg-white bg-opacity-50 backdrop-blur-md shadow-lg">
      <label className="block text-xl text-gray-700 font-semibold mb-2" htmlFor="template">
        Template
      </label>
      <hr className="border-gray-500 mb-4" />
      <select
        id="template"
        value={template}
        onChange={(e) => setTemplate(e.target.value)}
        className="relative w-full px-1 py-1 border border-blue-300 bg-white text-gray-800 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="default">Full width</option>
        <option value="custom">HomePage</option>
      </select>
    </div>
    </div>
  </div>
  );
};

export default Form;
