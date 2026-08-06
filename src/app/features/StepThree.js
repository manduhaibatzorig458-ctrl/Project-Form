"use client";

import { useState } from "react";
import { PineconeLogo } from "../icons/PineconeLogo";

export default function StepThree({ handleStep, handleBack }) {
  const [birthDate, setBirthDate] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [touched, setTouched] = useState(false);

  const formValid = birthDate && image;

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }

    setTouched(true);
  };

  return (
    <div>
      <PineconeLogo />

      <h1 className="text-3xl font-bold mt-4">Join Us! 😎</h1>

      <p className="text-gray-500 mt-2 mb-8">
        Please provide all current information accurately.
      </p>

      {/* Date of birth */}

      <div className="mb-5">
        <label className="block font-semibold mb-2">
          Date of birth <span className="text-red-500">*</span>
        </label>

        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          onBlur={() => setTouched(true)}
          className="w-full border rounded-lg px-4 py-3"
        />

        {touched && !birthDate && (
          <p className="text-red-500 text-sm mt-1">Please select a date.</p>
        )}
      </div>

      {/* Profile image */}

      <div className="mb-8">
        <label className="block font-semibold mb-2">
          Profile image <span className="text-red-500">*</span>
        </label>

        <label
          className="
          w-full
          h-52
          border
          rounded-lg
          flex
          items-center
          justify-center
          cursor-pointer
          overflow-hidden
          "
        >
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Profile preview"
              className="
              w-full
              h-full
              object-cover
              "
            />
          ) : (
            <span className="text-gray-500">Add image</span>
          )}

          <input
            type="file"
            accept="image/*"
            hidden
            onChange={handleImageChange}
          />
        </label>

        {touched && !image && (
          <p className="text-red-500 text-sm mt-1">Image cannot be blank</p>
        )}
      </div>

      {/* Buttons */}

      <div className="flex gap-3">
        <button
          onClick={handleBack}
          className="
          flex-1
          border
          rounded-lg
          py-3
          "
        >
          ← Back
        </button>

        <button
          disabled={!formValid}
          onClick={() => {
            setTouched(true);

            if (formValid) {
              handleStep();
            }
          }}
          className={`
          flex-1
          rounded-lg
          py-3
          text-white
          ${formValid ? "bg-black" : "bg-gray-300 cursor-not-allowed"}
          `}
        >
          Submit
        </button>
      </div>

      <p className="text-center mt-4">3 / 3</p>
    </div>
  );
}
