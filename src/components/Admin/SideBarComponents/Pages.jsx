import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SERVERAPI } from '../../../common/common';
import EditFormData from '../EditFormData';
import { toast } from 'react-toastify';

const Pages = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    sections: [],
  });
  const [loading, setLoading] = useState(true);
  const [EditForm, setEditForm] = useState(
    false
  )

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [digitalMarketingResponse, payperResponse, searchEngineResponse] = await Promise.all([
          axios.get(`${SERVERAPI}/api/digital-marketing`),
          axios.get(`${SERVERAPI}/api/payper`),
          axios.get(`${SERVERAPI}/api/search-engine`),
        ]);

        const digitalMarketingData = digitalMarketingResponse.data.map((item) => {
          return {
            ...item,
            id: item._id || '',
            title: item.title || 'Untitled',
            createdAt: item.createdAt || 'Unknown Date',
            sections: item.sections || [],
          }
        })

        const payper = payperResponse.data.map((item) => {
          return {
            ...item,
            id: item._id || '',
            title: item.title || 'Untitled',
            createdAt: item.createdAt || 'Unknown Date',
            sections: item.sections || [],
          }
        })
        const searchEngine = searchEngineResponse.data.map((item) => {
          return {
            ...item,
            id: item._id || '',
            title: item.title || 'Untitled',
            createdAt: item.createdAt || 'Unknown Date',
            sections: item.sections || [],
          }
        })

        const combinedData = [...digitalMarketingData, ...payper, ...searchEngine];
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
    setFormData(item);
    setEditingItem(item);
    setEditForm(true);
  };

  const handleDeleteClick = async (id) => {
    try {
      await axios.delete(`${SERVERAPI}/api/items/${id}`);
      setData(data.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith('sections[')) {
      const sectionIndex = parseInt(name.match(/sections\[(\d+)\]/)[1]);
      const field = name.replace(`sections[${sectionIndex}]`, '');
      setFormData(prev => ({
        ...prev,
        sections: prev.sections.map((section, index) =>
          index === sectionIndex ?
            { ...section, [field]: value } :
            section
        ),
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${SERVERAPI}/api/items/${formData.id}`, formData);
      setData(data.map(item => (item.id === formData.id ? formData : item)));
      setEditingItem(null);
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log(data)

  const onEditHandler = async (updateData, schemaName) => {
    if (!updateData) {
      toast.warning("Please select correct data.");
      retrurn;
    }
    if (!schemaName) {
      toast.warning("Please select Schema name.");
      retrurn;
    }

    try {
      await axios.put(`${SERVERAPI}/api/updateBySchema`, {
        schemaName: schemaName,
        updateData: updateData
      });
      const completeUpdated = data?.map((item) => {
        if (item?.schemaName === schemaName) {
          return { ...item, sections: updateData }
        }
        else {
          return item;
        }
      })
      toast.success("Data updated successfully.");
      setData(completeUpdated);
    }
    catch (error) {
      toast.error("Something went wrong.");
      console.log(error);
    }
  }

  return (
    <div className="bg-white  item-center lg:p-4">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {
            !EditForm ? <div className="flex flex-col space-y-4 mb-4">
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
            </div> : <EditFormData onEditHandler={onEditHandler} formData={formData} />
          }
        </>
      )}
    </div>
  );
};

export default Pages;
