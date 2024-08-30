import React, { useState, useContext } from 'react';
import axios from 'axios';
import { SERVERAPI } from '../../../common/common';
import Form from '../Form';
import { toast } from 'react-toastify';
import { InfoContext } from "../../context/InfoContext";

const Pages = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [confirmationModel, setConfirmationModel] = useState(false);
  const { infoDetails, setInfoDetails } = useContext(InfoContext)
  const [formData, setFormData] = useState();
  const [loading, setLoading] = useState(false);
  const [EditForm, setEditForm] = useState(false)


  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
  };

  const handleEditClick = (item) => {
    setFormData(item);
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


  return (
    <div className="h-[100vh] bg-gray-100 p-2">
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
                {infoDetails.length === 0 ? (
                  <p>No data found.</p>
                ) : (
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border px-4 py-2">SN</th>
                        <th className="border px-4 py-2">Name</th>
                        <th className="border px-4 py-2">Created At</th>
                        <th className="border px-4 py-2">Status</th>
                        <th className="border px-4 py-2">Operations</th>
                      </tr>
                    </thead>
                    <tbody>
                      {infoDetails && infoDetails.map((item, i) => (
                        <tr key={item.id} className="text-center">
                          <td className="border px-4 py-2">{i + 1}</td>
                          <td className="border px-4 py-2">{item?.items[0].title || 'No Title'}</td>
                          <td className="border px-4 py-2">{item.createdAt || 'No Date'}</td>
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
                            // onClick={() => handleDeleteClick(item.id)}
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
            </div> :
              <Form setFormData={setFormData} formData={formData} />
          }
        </>
      )}
    </div>
  );
};

export default Pages;
