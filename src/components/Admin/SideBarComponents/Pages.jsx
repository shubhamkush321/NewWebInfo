import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SERVERAPI } from '../../../common/common';
import EditFormData from '../EditFormData'; // Import the EditFormData component

const Pages = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingItem, setEditingItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [digitalMarketingResponse, searchEnginesResponse] = await Promise.all([
          axios.get(`${SERVERAPI}/api/digital-marketing`),
          axios.get(`${SERVERAPI}/api/search-engines`),
        ]);

        const digitalMarketingData = digitalMarketingResponse.data.map(item => ({
          id: item._id || '',
          title: item.title || 'Untitled',
          createdAt: item.createdAt || 'Unknown Date',
          sections: item.sections || [],
        }));

        const searchEnginesData = searchEnginesResponse.data.map(item => ({
          id: item._id || '',
          title: item.title || 'Untitled',
          createdAt: item.createdAt || 'Unknown Date',
          sections: item.sections || [],
        }));

        const combinedData = [...digitalMarketingData, ...searchEnginesData];
        setData(combinedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
  };

  const handleEditClick = (item) => {
    setEditingItem(item);
  };

  const handleDeleteClick = async (id) => {
    try {
      await axios.delete(`${SERVERAPI}/api/items/${id}`);
      setData(data.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white w-full max-w-screen-lg mx-auto p-4 rounded shadow-md">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
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

            <div className="space-y-4">
              {filteredData.length === 0 ? (
                <p>No data found.</p>
              ) : (
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border px-4 py-2">ID</th>
                      <th className="border px-4 py-2">Name</th>
                      <th className="border px-4 py-2">Created At</th>
                      <th className="border px-4 py-2">Status</th>
                      <th className="border px-4 py-2">Operations</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map(item => (
                      <tr key={item.id} className="text-center">
                        <td className="border px-4 py-2">{item.id}</td>
                        <td className="border px-4 py-2">{item.title || 'No Title'}</td>
                        <td className="border px-4 py-2">{item.createdAt}</td>
                        <td className="border px-4 py-2">
                          <span className="bg-green-200 text-green-800 px-2 py-1 rounded">Published</span>
                        </td>
                        <td className="border px-4 py-2">
                          <button
                            className="bg-blue-500 text-white font-bold py-1 px-3 rounded mx-1"
                            onClick={() => handleEditClick(item)}
                          >
                            Edit
                          </button>
                          <button
                            className="bg-red-500 text-white font-bold py-1 px-3 rounded mx-1"
                            onClick={() => handleDeleteClick(item.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>

          {editingItem && (
            <EditFormData
              initialData={editingItem}
              onClose={() => setEditingItem(null)}
              onSave={(updatedData) => {
                // Update the state with the updated data
                setData(data.map(item => item.id === updatedData.id ? updatedData : item));
                setEditingItem(null);
              }}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Pages;
