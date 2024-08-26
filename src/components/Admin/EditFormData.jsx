import React, { useState } from "react";
function EditFormData({ formData }) {
  const [name, setName] = useState(formData.name || "");
  const [permalink, setPermalink] = useState(formData.permalink || "");
  const [description, setDescription] = useState(formData.description || "");
  const [content, setContent] = useState(formData.content || "");
  const [status, setStatus] = useState(formData.status || "Published");
  const [template, setTemplate] = useState(formData.template || "Default");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [sections, setSections] = useState(formData.sections || []);

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

  return (
    <div className="flex flex-col gap-4 mx-auto p-4 -mt-14">
    <h1 className="text-3xl font-bold text-center my-6">{formData?.title}</h1>
    {formData?.sections?.map((item, index) => (
      <div
        key={index}
        className="-mt-10"
      >
        <label
          htmlFor={`title-${index}`}
          className="block text-gray-700 font-medium mb-2"
        >
          Title:
        </label>
        <input
          id={`title-${index}`}
          type="text"
          value={item.header}
          readOnly
          className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
        />

        <label
          htmlFor={`description-${index}`}
          className="block text-gray-700 font-medium mt-4 mb-2"
        >
          Description:
        </label>
        <input
          id={`description-${index}`}
          type="text"
          value={item.description}
          readOnly
          className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
        />

        <div className="flex justify-end gap-2 mt-4">
          <button
            className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
          >
            Edit
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Remove
          </button>
        </div>
      </div>
    ))}
  </div>
  );
}

export default EditFormData;
