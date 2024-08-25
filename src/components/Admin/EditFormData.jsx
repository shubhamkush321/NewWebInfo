import React, { useState, useEffect } from 'react';

function EditFormData({ initialData, onClose, onSave }) {
  const [name, setName] = useState('');
  const [permalink, setPermalink] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState('Published');
  const [template, setTemplate] = useState('Default');
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (initialData) {
      setName(initialData.title || '');
      setPermalink(initialData.permalink || '');
      setDescription(initialData.description || '');
      setContent(initialData.content || '');
      setStatus(initialData.status || 'Published');
      setTemplate(initialData.template || 'Default');
      // Handle image as needed, e.g., display a preview
    }
  }, [initialData]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Make API request to save updated data
      const updatedData = {
        title: name,
        permalink,
        description,
        content,
        status,
        template,
        image,
      };
      await axios.put(`${SERVERAPI}/api/items/${initialData.id}`, updatedData);
      onSave(updatedData);
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Item</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name *</label>
            <input
              type="text"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="permalink" className="block text-gray-700 font-bold mb-2">Permalink *</label>
            <input
              type="text"
              id="permalink"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={permalink}
              onChange={(e) => setPermalink(e.target.value)}
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
            <textarea
              id="description"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="content" className="block text-gray-700 font-bold mb-2">Content</label>
            <textarea
              id="content"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="4"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="status" className="block text-gray-700 font-bold mb-2">Status *</label>
            <select
              id="status"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Published">Published</option>
              <option value="Draft">Draft</option>
            </select>
          </div>
          <div>
            <label htmlFor="template" className="block text-gray-700 font-bold mb-2">Template *</label>
            <input
              type="text"
              id="template"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={template}
              onChange={(e) => setTemplate(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="image" className="block text-gray-700 font-bold mb-2">Image</label>
            <input
              type="file"
              id="image"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button
            type="button"
            className="bg-gray-500 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditFormData;
