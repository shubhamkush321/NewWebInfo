import React, { useState } from "react";
function EditFormData({ formData, onEditHandler }) {
  const [name, setName] = useState(formData.name || "");
  const [permalink, setPermalink] = useState(formData.permalink || "");
  const [description, setDescription] = useState(formData.description || "");
  const [content, setContent] = useState(formData.content || "");
  const [status, setStatus] = useState(formData.status || "Published");
  const [template, setTemplate] = useState(formData.template || "Default");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [sections, setSections] = useState(formData?.sections || []);

  const handleSectionChange = (index, field, value) => {
    const updatedSections = [...sections];
    updatedSections[index][field] = value;
    setSections(updatedSections);
  };

  const handleAddSection = () => {
    setSections([...sections, { title: "", content: "" }]);
  };

  const handleRemoveSection = (index) => {
    const updatedSections = sections.filter((_, i) => i !== index);
    setSections(updatedSections);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !permalink || !status || !template) {
      alert("Please fill out all required fields.");
      return;
    }

    // Handle form submission logic here
    console.log("Form submitted:", {
      name,
      permalink,
      description,
      content,
      status,
      template,
      image,
      sections,
    });
  };

  const handleReset = () => {
    setName("");
    setPermalink("");
    setDescription("");
    setContent("");
    setStatus("Published");
    setTemplate("Default");
    setImage(null);
    setImagePreview("");
    setSections([]);
  };


  const handleInputChange = (index, field, value) => {
    const updatedSections = sections.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    setSections(updatedSections);
  };

  return (
    <div className="flex flex-col gap-6 mx-auto p-6 justify-center bg-white shadow-lg rounded-lg w-full">
      <h1 className="text-4xl font-bold text-center my-8 text-blue-600">
        {formData?.title}
      </h1>
      {sections.map((item, index) => (
        <div key={index} className="bg-gray-50 p-5 rounded-lg shadow-md mb-6">
          <label
            htmlFor={`title-${index}`}
            className="block text-lg text-gray-800 font-semibold mb-2"
          >
            Title:
          </label>
          <input
            id={`title-${index}`}
            type="text"
            value={item.header}
            onChange={(e) =>
              handleInputChange(index, "header", e.target.value)
            }
            className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
          />

          <label
            htmlFor={`description-${index}`}
            className="block text-lg text-gray-800 font-semibold mt-4 mb-2"
          >
            Description:
          </label>
          <textarea
            id={`description-${index}`}
            value={item.description}
            onChange={(e) =>
              handleInputChange(index, "description", e.target.value)
            }
            className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 text-gray-700 h-28 resize-none"
          />

          <div className="flex justify-end gap-3 mt-5">
            <button onClick={() => onEditHandler(sections , formData?.schemaName)} className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition duration-300 ease-in-out transform hover:scale-105">
              Edit
            </button>
            <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105">
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EditFormData;
