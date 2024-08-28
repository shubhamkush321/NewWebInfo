import React, { useState } from "react";
import ConfirmationModel from "../ConfirmationModel/ConfirmationModel"
function EditFormData({ formData, onEditHandler, setRemoveData,
  onRemoveHandler, setConfirmationModel,
  confirmationModel }) {
  const [sections, setSections] = useState(formData?.sections || []);

  const handleInputChange = (index, field, value) => {
    const updatedSections = sections.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    setSections(updatedSections);
  };

  return (
    <div>
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
              <button onClick={() => onEditHandler(sections, formData?.schemaName)} className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition duration-300 ease-in-out transform hover:scale-105">
                Edit
              </button>
              <button
                onClick={() => {
                  setConfirmationModel(true)
                  setRemoveData((prev) => ({ ...prev, id: item?._id, sections: sections, schemaName: formData?.schemaName }))
                }}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <ConfirmationModel
        confirmationModal={confirmationModel}
        onSubmitHandler={onRemoveHandler}
        setConfirmationModal={setConfirmationModel}
        heading="Are you sure you want to remove this form?"
        message="This action cannot be undone."
      />
    </div>
  );
}

export default EditFormData;
