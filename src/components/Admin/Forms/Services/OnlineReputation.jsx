import React, { useState, useEffect } from 'react';
import { FaPlus, FaSave, FaEdit, FaTrash } from 'react-icons/fa';
import axios from 'axios';

const ServicesForm = ({ onSave, isAdmin }) => {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const [newSection, setNewSection] = useState({ header: '', description: '' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/online-reputation');
        setSections(response.data[0]?.sections || []);
      } catch (error) {
        setError('Error fetching data');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSectionChange = (index, field, value) => {
    const updatedSections = [...sections];
    updatedSections[index] = { ...updatedSections[index], [field]: value };
    setSections(updatedSections);
  };

  const handleEditSection = (index) => {
    setEditIndex(index);
  };

  const handleSaveSection = async (index) => {
    const sectionToUpdate = sections[index];
    try {
      if (!sectionToUpdate._id) throw new Error('Section ID is missing');
      await axios.put(`http://localhost:5000/api/online-reputation/${sectionToUpdate._id}`, sectionToUpdate);
      alert('Save successful!');
      setEditIndex(null); // Clear the edit mode
      refetchData(); // Refetch data to update UI
    } catch (error) {
      console.error('Error saving data:', error);
      alert('Error saving data');
    }
  };

  const handleRemoveSection = async (index) => {
    const sectionToDelete = sections[index];
    try {
      // Ensure sectionToDelete._id is valid
      if (!sectionToDelete._id) throw new Error('Section ID is missing');
      await axios.delete(`http://localhost:5000/api/online-reputation/${sectionToDelete._id}`);
      alert('Delete successful!');
      refetchData(); // Refetch data to update UI
    } catch (error) {
      console.error('Error deleting data:', error);
      alert('Error deleting data');
    }
  };

  const handleAddSection = async () => {
    try {
      await axios.post('http://localhost:5000/api/online-reputation', newSection);
      setNewSection({ header: '', description: '' });
      alert('Add successful!');
      refetchData(); // Refetch data to update UI
    } catch (error) {
      console.error('Error adding data:', error);
      alert('Error adding data');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;


  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Online Reputation Form</h2>
      <form>
        <div className="mb-6">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-blue-950">
                <th className="p-2">Header</th>
                <th className="p-2">Description</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sections.map((section, index) => (
                <tr key={section._id || index} className={`border-b ${editIndex === index ? 'bg-yellow-100' : ''}`}>
                  <td className="p-2">
                    <input
                      type="text"
                      value={section.header || ''}
                      onChange={(e) => handleSectionChange(index, 'header', e.target.value)}
                      disabled={editIndex !== index}
                      className="w-full px-2 py-1 border border-gray-300 rounded-md text-gray-900"
                    />
                  </td>
                  <td className="p-2">
                    <textarea
                      value={section.description || ''}
                      onChange={(e) => handleSectionChange(index, 'description', e.target.value)}
                      disabled={editIndex !== index}
                      className="w-full px-2 py-1 border border-gray-300 rounded-md text-gray-900"
                    />
                  </td>
                  <td className="p-2">
                    {editIndex === index ? (
                      <>
                        <button
                          type="button"
                          className="inline-flex items-center px-2 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                          onClick={() => handleSaveSection(index)}
                        >
                          <FaSave className="mr-1" /> Save
                        </button>
                        <button
                          type="button"
                          className="inline-flex items-center px-2 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 ml-2"
                          onClick={() => handleRemoveSection(index)}
                        >
                          <FaTrash className="mr-1" /> Delete
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          type="button"
                          className="inline-flex items-center px-2 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                          onClick={() => handleEditSection(index)}
                        >
                          <FaEdit className="mr-1" /> Edit
                        </button>
                        <button
                          type="button"
                          className="inline-flex items-center px-2 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 ml-2"
                          onClick={() => handleRemoveSection(index)}
                        >
                          <FaTrash className="mr-1" /> Delete
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mb-6 p-4 border rounded-lg bg-gray-100">
          <div className="mb-4">
            <label htmlFor="new-header" className="block text-sm font-medium text-gray-700">Header:</label>
            <input
              type="text"
              id="new-header"
              value={newSection.header}
              onChange={(e) => setNewSection({ ...newSection, header: e.target.value })}
              placeholder="Enter header"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="new-description" className="block text-sm font-medium text-gray-700">Description:</label>
            <textarea
              id="new-description"
              value={newSection.description}
              onChange={(e) => setNewSection({ ...newSection, description: e.target.value })}
              placeholder="Enter description"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900"
            />
          </div>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            onClick={handleAddSection}
          >
            <FaPlus className="mr-1" /> Add Section
          </button>
        </div>
        <div className="flex items-center space-x-4 mb-6">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={onSave}
          >
            <FaSave className="mr-1" /> Save All
          </button>
        </div>
      </form>
    </div>
  );
};

export default ServicesForm;
