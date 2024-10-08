import React, { useState, useRef } from "react";
import { FaImage, FaLink } from "react-icons/fa";
import JoditEditor from "jodit-react";
import CircleLoader from "react-spinners/CircleLoader"; // Import the spinner

const Form = ({ setFormData, formData, handleFormSubmit }) => {
  const [status, setStatus] = useState("published");
  const [template, setTemplate] = useState("default");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [isChoosingImage, setIsChoosingImage] = useState(true);
  const [loading, setLoading] = useState(false); // State for loading
  const editor = useRef(null);

  // Function to update formData
  const handleInputChange = (field, value) => {
    const updatedItems = formData.items.map((item, index) => {
      if (index === 0) {
        // Assuming you're only updating the first item
        return {
          ...item,
          [field]: value,
        };
      }
      return item;
    });

    setFormData({
      ...formData,
      items: updatedItems,
    });
  };

  const handleContentChange = (value) => {
    handleInputChange("content", value);
  };

  const handleAddFAQ = () => {
    
    console.log("Add FAQ clicked!");
  };

  return (
    <div className="relative">
      <div className="flex">
        <div className="mt-20 min-h-screen p-6">
          {/* Main form section */}
          <form
            onSubmit={handleFormSubmit}
            className="w-full max-w-6xl mx-auto bg-white bg-opacity-50 backdrop-blur-md p-6 rounded-lg shadow-lg h-full max-h-3xl"
          >
            <h1 className="text-2xl font-bold mb-6 text-gray-900">Edit Form</h1>
            <div className="mb-4">
              <label
                className="block text-xl text-gray-800 font-semibold mb-2"
                htmlFor="name"
              >
                Title
              </label>
              <input
                id="name"
                type="text"
                value={formData?.items[0]?.title || ""}
                // onChange={(e) => handleInputChange("title", e.target.value)}
                className="relative w-full px-4 py-2 border border-blue-300 bg-white rounded-md text-gray-800 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-xl text-gray-800 font-semibold mb-2"
                htmlFor="permalink"
              >
                Permalink
              </label>
              <input
                id="permalink"
                type="text"
                value={formData?.items[0]?.link?.text || ""}
                className="relative w-full px-4 py-2 border border-blue-300 bg-white rounded-md text-gray-800 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <small className="text-gray-500 text-xl">
                Preview: https://www.example.com
              </small>
            </div>

            <div className="mb-4">
      <label
        className="block text-xl text-gray-800 font-semibold mb-2"
        htmlFor="faq"
      >
        FAQ
      </label>
      
      <textarea
        id="faq"
        rows="4"
        value={formData?.items[0]?.description || ""}
        onChange={(e) =>
          handleInputChange("description", e.target.value)
        }
        className="relative w-full px-4 py-2 border border-blue-300 bg-white rounded-md text-gray-800 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>
      <button
        onClick={handleAddFAQ}
        className="mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add FAQ
      </button>
      &nbsp;
      <button
      
        className="mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Edit FAQ
      </button>
    </div>

            <div className="mb-4">
              <label className="block text-xl text-gray-800 font-semibold mb-2">
                Content
              </label>
              <JoditEditor
                ref={editor}
                value={formData?.items[0]?.content || ""}
                onBlur={(newContent) => handleContentChange(newContent)}
                className="rounded-md bg-transparent text-gray-900 overflow-hidden"
              />
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mb-2">
                Save
              </button>
            </div>
            {/* SEO Optimization Section */}
            <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-md p-4 shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  Search Engine Optimize
                </h2>
                <button className="text-blue-500 hover:underline">
                  Edit SEO meta
                </button>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Refund Policy | Web Infomatrix - Transparent and
                  Client-Focused Service
                </h3>
                <p className="text-gray-700 mt-2">
                  Dec 29, 2023 - Learn about Web Infomatrix's transparent refund
                  policy, designed to protect your investment and ensure
                  satisfaction with our web development, SEO, SEM, and SMO
                  services.
                </p>
              </div>
            </div>
          </form>
        </div>

        {/* Side section for Status and Template */}
        <div className="w-96 flex flex-col gap-4 mt-1">
          <div className="p-6 bg-white bg-opacity-50 backdrop-blur-md shadow-lg rounded-lg">
            <label
              className="block text-xl text-gray-800 font-semibold mb-2"
              htmlFor="status"
            >
              Publish
            </label>
            <hr className="border-gray-500 mb-4" />
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mb-2">
              Save
            </button>
            <br />
          </div>

          <div className="p-8 bg-white bg-opacity-50 backdrop-blur-md shadow-lg rounded-lg">
            <label
              className="block text-xl text-gray-700 font-semibold mb-2"
              htmlFor="status"
            >
              Status
            </label>
            <hr className="border-gray-500 mb-4" />
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="relative w-full px-4 py-2 border border-blue-300 bg-white rounded-md text-gray-800 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {/* Custom Arrow */}
              <option value="published">Published</option>
              <option value="draft">Draft</option>
              <option value="pending">Pending</option>
            </select>
          </div>

       

          <div className="p-8 bg-white bg-opacity-50 backdrop-blur-md shadow-lg rounded-lg">
            <label
              className="block text-xl text-gray-700 font-semibold mb-2"
              htmlFor="template"
            >
              Image
            </label>
            <hr className="border-gray-500 mb-4" />

            <div className="flex items-center justify-center space-x-4">
              <button
                type="button"
                className={`flex items-center px-4 text-gray-700 rounded-md hover:bg-gray-200 ${
                  isChoosingImage ? " text-white" : "bg-gray-100"
                }`}
                onClick={() => setIsChoosingImage(true)}
              >
                <FaImage className="w-20 h-20 text-gray-500" />
              </button>
              <button
                type="button"
                className={`flex items-center text-gray-700 hover:bg-gray-200 ${
                  !isChoosingImage ? "text-white" : "bg-gray-100"
                }`}
                onClick={() => setIsChoosingImage(false)}
              >
                <FaLink className="w-20 h-20 text-gray-500" />
              </button>
            </div>

            <div className="mt-4">
              {isChoosingImage ? (
                <input
                  type="file"
                  className="relative w-full px-4 py-2 border border-blue-300 bg-white rounded-md text-gray-800 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              ) : (
                <input
                  type="text"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  className="relative w-full px-4 py-2 border border-blue-300 bg-white rounded-md text-gray-800 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter image URL"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Spinner overlay */}
      {loading && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-75">
          <CircleLoader color="#4A90E2" loading={loading} size={150} />
        </div>
      )}
    </div>
  );
};

export default Form;
