import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SERVERAPI } from '../../../common/common';


const Pages = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAction, setSelectedAction] = useState('bulkActions');
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [digitalMarketingResponse, searchEnginesResponse] = await Promise.all([
          axios.get(`${SERVERAPI}/api/digital-marketing`),
          axios.get(`${SERVERAPI}/api/search-engines`)
        ]);
        console.log(digitalMarketingResponse);
        const digitalMarketingData = digitalMarketingResponse.data[0]?.sections || [];
        console.log(searchEnginesResponse);
        const searchEnginesData = searchEnginesResponse.data.length > 0 ? searchEnginesResponse.data[0] : {};
  
        // Normalize the data
        const normalizedData = [
          ...digitalMarketingData.map(item => ({
            id: item.id || '',
            name: item.name || '',
            createdAt: item.createdAt || 'Unknown',
            status: item.status || 'Unknown',
          })),
          {
            id: searchEnginesData.id || 'N/A',
            name: searchEnginesData.name || 'Unnamed',
            createdAt: searchEnginesData.createdAt || 'Unknown',
            status: searchEnginesData.status || 'Unknown',
          }
        ];
  
        setData(normalizedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);  
  console.log(data);

  

  const handleSearch = () => {
    // Implement search functionality
    console.log('Searching for:', searchTerm);
  };

  const handleEditClick = (item) => {
    setFormData(item);
    setEditingItem(item);
  };

  const handleDeleteClick = async (id) => {
    // Implement delete functionality
    console.log('Deleting item with ID:', id);
    try {
      await axios.delete(`${SERVERAPI}/api/items/${id}`); // Modify endpoint as needed
      setData(data.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement update functionality
    console.log('Updating item:', formData);
    try {
      await axios.put(`${SERVERAPI}/api/items/${formData.id}`, formData); // Modify endpoint as needed
      setData(data.map(item => (item.id === formData.id ? formData : item)));
      setEditingItem(null);
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white w-full max-w-screen-lg mx-auto p-4 rounded shadow-md">
      <div className="flex flex-col space-y-4 mb-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-200 text-gray-700 rounded px-3 py-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
  
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 text-sm font-bold border-b">ID</th>
              <th className="px-4 py-2 text-sm font-bold border-b">Name</th>
              <th className="px-4 py-2 text-sm font-bold border-b">Created</th>
              <th className="px-4 py-2 text-sm font-bold border-b">Status</th>
              <th className="px-4 py-2 text-sm font-bold border-b">Operations</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map(item => (
              <tr key={item.id}>
                <td className="px-4 py-2 border-b">{item.id}</td>
                <td className="px-4 py-2 border-b">{item.name || 'N/A'}</td>
                <td className="px-4 py-2 border-b">{item.createdAt || 'Unknown'}</td>
                <td className="px-4 py-2 border-b">
                  <span
                    className={`px-2 py-1 rounded-full ${
                      item.status === 'Published'
                        ? 'bg-green-500 text-white'
                        : 'bg-red-500 text-white'
                    }`}
                  >
                    {item.status || 'Unknown'}
                  </span>
                </td>
                <td className="px-4 py-2 border-b">
                  <div className="flex space-x-2">
                    <button
                      className="bg-blue-500 text-white font-bold py-1 px-3 rounded"
                      onClick={() => handleEditClick(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white font-bold py-1 px-3 rounded"
                      onClick={() => handleDeleteClick(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  
      {editingItem && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-md w-1/2">
            <h2 className="text-xl font-bold mb-4">Edit Item</h2>
            <form onSubmit={handleSubmit}>
              {Object.keys(formData).map(key => (
                <div key={key} className="mb-4">
                  <label className="block text-gray-700">{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
                  <input
                    type="text"
                    name={key}
                    value={formData[key] || ''}
                    onChange={handleFormChange}
                    className="bg-gray-200 text-gray-700 rounded px-3 py-2 w-full"
                  />
                </div>
              ))}
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setEditingItem(null)} // Close the form
                  className="bg-gray-500 text-white font-bold py-2 px-4 rounded"
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
        </div>
      )}
    </div>
  );
  
  
};

export default Pages;
