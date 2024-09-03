import React, { useState, useContext } from "react";
import axios from "axios";
import { SERVERAPI } from "../../../common/common";
import Form from "../Form";
import { InfoContext } from "../../context/InfoContext";
import BackButton from "../../Admin/SideBarComponents/BackButton";
import CircleLoader from "react-spinners/CircleLoader";
import { toast } from "react-toastify";

const Pages = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { infoDetails, setInfoDetails } = useContext(InfoContext);
  const [formData, setFormData] = useState();
  const [loading, setLoading] = useState(false);
  const [EditForm, setEditForm] = useState(false);

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
  };

  const handleEditClick = (item) => {
    setFormData(item);
    setEditForm(true);
  };

  const handleDeleteClick = async (id) => {
    try {
      await axios.delete(`${SERVERAPI}/api/items/${id}`);
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleCancelEdit = () => {
    setEditForm(false);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        items: [formData], // Wrap formData in an array
      };
  
      await axios.post(`${SERVERAPI}/api/items`, payload);
      
      const updatedData = infoDetails?.map((item) => {
        if (item._id == formData._id) {
          return formData;
        }
        return item;
      });
  
      toast.success("Item added successfully");
      setEditForm(false);
      setInfoDetails(updatedData);
    } catch (error) {
      console.error("Error adding item:", error);
      toast.error("Error adding item");
    }
  };
  
  // Filter data based on the search term
  const filteredInfoDetails = infoDetails.filter((item) =>
    item?.items[0]?.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-blue-200 p-2">
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <CircleLoader color="#00abff" />
        </div>
      ) : (
        <>
          {!EditForm ? (
            <div className="flex flex-col space-y-4 mb-4">
              <div className="flex justify-between items-center mb-4">
                <div className="flex space-x-4">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="bg-gray-200 text-gray-800 rounded px-3 py-2 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded transition-transform duration-300 transform hover:scale-105 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    onClick={handleSearch}
                  >
                    Search
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {filteredInfoDetails.length === 0 ? (
                  <div className="bg-gradient-to-r from-red-100 to-red-300 border border-red-500 text-red-800 px-6 py-4 w-80 mx-auto mt-36 max-h-screen mb-96 rounded-lg shadow-lg flex flex-col items-center">
                    <p className="text-red-700 text-center font-semibold text-lg mb-6">
                      No Data Found. Please Check the Server.
                    </p>
                    <div className="flex items-center justify-center">
                      <CircleLoader color="#00abff" size={50} />
                    </div>
                  </div>
                ) : (
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-blue-300">
                        <th className="border text-blue-900 px-4 py-2">SN</th>
                        <th className="border text-blue-900 px-4 py-2">Name</th>
                        <th className="border text-blue-900 px-4 py-2">
                          Created At
                        </th>
                        <th className="border text-blue-900 px-4 py-2">
                          Status
                        </th>
                        <th className="border text-blue-900 px-4 py-2">
                          Operations
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredInfoDetails.map((item, i) => (
                        <tr
                          key={item.id}
                          className="text-center transition duration-100 hover:bg-blue-50"
                        >
                          <td className="border px-4 py-2 text-blue-900">
                            {i + 1}
                          </td>
                          <td className="border px-4 py-2 text-gray-900">
                            {item?.items[0].title || "No Title"}
                          </td>
                          <td className="border px-4 py-2 text-gray-900">
                            {item.createdAt || "No Date"}
                          </td>
                          <td className="border px-4 py-2">
                            <span className="bg-green-300 text-green-800 px-2 py-1 rounded">
                              Published
                            </span>
                          </td>
                          <td className="border px-4 py-2">
                            <button
                              className="bg-blue-500 text-white font-bold py-1 px-3 rounded mx-1 transition-transform duration-300 transform hover:scale-105 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                              onClick={() => handleEditClick(item)}
                            >
                              Edit
                            </button>
                            <button
                              className="bg-red-500 text-white font-bold py-1 px-3 rounded mx-1 transition-transform duration-300 transform hover:scale-105 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
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
          ) : (
            <>
              <BackButton />
              <Form
                handleFormSubmit={handleFormSubmit}
                setFormData={setFormData}
                formData={formData}
              />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Pages;
