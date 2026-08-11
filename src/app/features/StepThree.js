"use client";
import { useState } from "react";
export default function StepThree({ handleStep, handleBack }) {



  const [formData, setFormData] = useState({
    birthDate: "",
    image: null,
    imagePreview: "",
  });

  const [touched, setTouched] = useState(false);

  // Date өөрчлөх
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Image сонгох
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }

    setFormData((prev) => ({
      ...prev,
      image: file,
      imagePreview: URL.createObjectURL(file),
    }));

    setTouched(true);
  };

  // Validation
  const validation = {
    birthDate: formData.birthDate !== "",
    image: formData.image !== null,
  };

  // Form зөв эсэх
  const formValid = Object.values(validation).every(Boolean);

  // Submit
  const handleSubmit = () => {
    setTouched(true);

    if (formValid) {
      handleStep();
    }
  };

  
  return (
    <div>
      <h1 className="text-3xl font-bold mt-4">
        Join Us! 😎
      </h1>

      <p className="text-gray-500 mt-2 mb-8">
        Please provide all current information accurately.
      </p>

      {/* Date of birth */}
      <div className="mb-5">
        <label className="block font-semibold mb-2">
          Date of birth{" "}
          <span className="text-red-500">*</span>
        </label>

        <input
          type="date"
          name="birthDate"
          value={formData.birthDate}
          onChange={handleChange}
          onBlur={() => setTouched(true)}
          className="w-full border rounded-lg px-4 py-3"
        />

        {touched && !validation.birthDate && (
          <p className="text-red-500 text-sm mt-1">
            Please select a date.
          </p>
        )}
      </div>

      {/* Profile image */}
      <div className="mb-8">
        <label className="block font-semibold mb-2">
          Profile image{" "}
          <span className="text-red-500">*</span>
        </label>

        <label
          className="w-full h-52 border rounded-lg flex items-center justify-center cursor-pointer overflow-hidden "
        >
          {formData.imagePreview ? (
            <img
              src={formData.imagePreview}
              alt="Profile preview"
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-gray-500">
              Add image
            </span>
          )}

          <input
            type="file"
            accept="image/*"
            hidden
            onChange={handleImageChange}
          />
        </label>

        {touched && !validation.image && (
          <p className="text-red-500 text-sm mt-1">
            Image cannot be blank
          </p>
        )}
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          onClick={handleBack}
          className=" flex-1 border rounded-lg py-3">
          ← Back
        </button>

        <button
          onClick={handleSubmit}
          disabled={!formValid}
          className={`
            flex-1
            rounded-lg
            py-3
            text-white
            ${
              formValid
                ? "bg-black"
                : "bg-gray-300 cursor-not-allowed"
            }
          `}
        >
          Submit 3 / 3
        </button>
      </div>
    </div>
  );
}

