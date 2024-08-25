import React, { useState } from 'react';

// Reusable Text Input Component
const TextInput = ({ id, label, value, onChange, required }) => (
  <div>
    <label htmlFor={id} className="block text-gray-700 font-bold mb-2">
      {label} {required && '*'}
    </label>
    <input
      type="text"
      id={id}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      value={value}
      onChange={onChange}
    />
  </div>
);

// Reusable Text Area Component
const TextArea = ({ id, label, value, onChange }) => (
  <div className="col-span-2">
    <label htmlFor={id} className="block text-gray-700 font-bold mb-2">
      {label}
    </label>
    <textarea
      id={id}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      value={value}
      onChange={onChange}
    ></textarea>
  </div>
);

function EditFormData({formData}) { 
  const [name, setName] = useState('');
  const [permalink, setPermalink] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState('Published');
  const [template, setTemplate] = useState('Default');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');

  const handleNameChange = (event) => setName(event.target.value);
  const handlePermalinkChange = (event) => setPermalink(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);
  const handleContentChange = (event) => setContent(event.target.value);
  const handleStatusChange = (event) => setStatus(event.target.value);
  const handleTemplateChange = (event) => setTemplate(event.target.value);

  console.log(formData)
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!name || !permalink || !status || !template) {
      alert('Please fill out all required fields.');
      return;
    }

    // Handle form submission logic here
    console.log('Form submitted:', {
      name,
      permalink,
      description,
      content,
      status,
      template,
      image,
    });
  };

  const handleReset = () => {
    setName('');
    setPermalink('');
    setDescription('');
    setContent('');
    setStatus('Published');
    setTemplate('Default');
    setImage(null);
    setImagePreview('');
  };

  const handleSaveExit = () => {
    handleSubmit();
    handleReset();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit "Refund Policy"</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <TextInput
            id="name"
            label="Name"
            value={name}
            onChange={handleNameChange}
            required={true}
          />
          <TextInput
            id="permalink"
            label="Permalink"
            value={permalink}
            onChange={handlePermalinkChange}
            required={true}
          />
          <TextArea
            id="description"
            label="Description"
            value={description}
            onChange={handleDescriptionChange}
          />
          <TextArea
            id="content"
            label="Content"
            value={content}
            onChange={handleContentChange}
          />
          <div>
            <label htmlFor="status" className="block text-gray-700 font-bold mb-2">
              Status *
            </label>
            <select
              id="status"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={status}
              onChange={handleStatusChange}
            >
              <option value="Published">Published</option>
              <option value="Draft">Draft</option>
            </select>
          </div>
          <div>
            <label htmlFor="template" className="block text-gray-700 font-bold mb-2">
              Template *
            </label>
            <select
              id="template"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={template}
              onChange={handleTemplateChange}
            >
              <option value="Default">Default</option>
              {/* Add other template options here */}
            </select>
          </div>
          <div className="col-span-2">
            <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
              Image
            </label>
            <input
              type="file"
              id="image"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleImageChange}
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="mt-2 max-w-full h-auto"
              />
            )}
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Save
          </button>
          <button
            type="button"
            onClick={handleSaveExit}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2 focus:outline-none focus:shadow-outline"
          >
            Save & Exit
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditFormData;
