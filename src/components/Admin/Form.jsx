import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Form = ({ id }) => {
  const [name, setName] = useState('');
  const [permalink, setPermalink] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState('published');
  const [template, setTemplate] = useState('default');
  const [image, setImage] = useState(null);

  useEffect(() => {
    // Assuming you have an endpoint to get data by id
    fetch(`/api/data/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setName(data.name);
        setPermalink(data.permalink);
        setDescription(data.description);
        setContent(data.content);
        setStatus(data.status);
        setTemplate(data.template);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [id]);

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Create a formData object to handle image upload along with other data
    const formData = new FormData();
    formData.append('name', name);
    formData.append('permalink', permalink);
    formData.append('description', description);
    formData.append('content', content);
    formData.append('status', status);
    formData.append('template', template);
    if (image) formData.append('image', image);

    // Assuming you have an endpoint to update the data
    fetch(`/api/data/${id}`, {
      method: 'PUT',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle successful update, e.g., show a message or redirect
        console.log('Data updated successfully:', data);
      })
      .catch((error) => console.error('Error updating data:', error));
  };

  return (
    <form onSubmit={handleFormSubmit} className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Edit Form</h1>
      
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
        <ReactQuill
          value={content}
          onChange={handleContentChange}
          className="border rounded-md"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="status">
            Status
          </label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="published">Published</option>
            <option value="draft">Draft</option>
          </select>
        </div>
        
        <div>
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="template">
            Template
          </label>
          <select
            id="template"
            value={template}
            onChange={(e) => setTemplate(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="default">Default</option>
            <option value="custom">Custom</option>
          </select>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2" htmlFor="image">
          Image
        </label>
        <input
          id="image"
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex justify-end space-x-4">
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Save
        </button>
        <button type="button" className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">
          Save & Exit
        </button>
      </div>
    </form>
  );
};

export default Form;
