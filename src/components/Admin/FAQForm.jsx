import React, { useState, useEffect, useRef } from 'react';
import JoditEditor from 'jodit-react';

const FAQs = ({ FAQData, setFAQData }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState('published');
  const [template, setTemplate] = useState('default');
  const editor = useRef(null);

  useEffect(() => {
    if (FAQData) {
      setName(FAQData.items[0]?.title || '');
      setDescription(FAQData.items[0]?.description || '');
      setContent(FAQData.items[0]?.content || '');
      setStatus(FAQData.status || 'published');
      setTemplate(FAQData.template || 'default');
    }
  }, [FAQData]);

  const handleContentChange = (newContent) => {
    setContent(newContent);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission (e.g., send data to server)
    // For example:
    // const updatedData = { ...FAQData, items: [{ title: name, description, content }], status, template };
    // updateFAQ(updatedData); // Function to send updated data to server
    console.log('Form submitted:', { name, description, content, status, template });
  };

  return (
    <div className='flex bg-blue-300'>
      <div className="mt-24 min-h-screen p-6">
        <form onSubmit={handleFormSubmit} className="w-full max-w-6xl mx-auto bg-white bg-opacity-50 backdrop-blur-md p-6 shadow-lg h-full max-h-3xl">
          <h1 className="text-2xl font-bold mb-6 text-gray-900">FAQ Form</h1>
        
          <div className="mb-4">
            <label className="block text-xl text-gray-800 font-semibold mb-2" htmlFor="description">
              Question
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
              Answer
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

          <div className="flex justify-between mt-6">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Save
            </button>
            
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
          <button
            type="submit"
            className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 mb-2"
            onClick={handleFormSubmit}
          >
            Save
          </button>
          <button
            type="button"
            className="px-3 py-1 bg-gray-500 text-white rounded-md hover:bg-gray-600"
            onClick={() => setFAQData(null)} 
          >
            Save & Exit
          </button>
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

export default FAQs;
