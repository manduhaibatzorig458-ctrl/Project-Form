"use client";

import { useState } from "react";
import { VectorLogo } from "../icons/VectorLogo";

export default function StepOne({ handleStep }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
  });

  // Бүртгэлтэй username-ууд
  const takenUsernames = [
    "admin",
    "test",
    "pinecone",
    "amgaa",
  ];

  // Input өөрчлөх
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Validation
  const nameRegex = /^[A-Za-z]+$/;

  const validation = {
    firstName:
      formData.firstName.trim() !== "" &&
      nameRegex.test(formData.firstName),

    lastName:
      formData.lastName.trim() !== "" &&
      nameRegex.test(formData.lastName),

    username:
      formData.username.trim() !== "" &&
      !takenUsernames.includes(
        formData.username.toLowerCase()
      ),
  };

  // Бүх input зөв эсэх
  const formValid = Object.values(validation).every(Boolean);

  // Input-уудын мэдээлэл
  const fields = [
    {
      name: "firstName",
      label: "First name",
      type: "text",
      placeholder: "Placeholder",
      error:
        "First name cannot contain special characters or numbers.",
    },
    {
      name: "lastName",
      label: "Last name",
      type: "text",
      placeholder: "Placeholder",
      error:
        "Last name cannot contain special characters or numbers.",
    },
    {
      name: "username",
      label: "Username",
      type: "text",
      placeholder: "Placeholder",
      error:
        "This username is already taken. Please choose another one.",
    },
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold mt-4">
        Join Us! 😎
      </h1>

      <p className="text-gray-500 mt-2 mb-8">
        Please provide all current information accurately.
      </p>

      {/* Inputs */}
      {fields.map((field) => {
        const value = formData[field.name];
        const isValid = validation[field.name];

        return (
          <div key={field.name} className="mb-5">
            <label className="block font-semibold mb-2">
              {field.label}{" "}
              <span className="text-red-500">*</span>
            </label>

            <input
              type={field.type}
              name={field.name}
              value={value}
              onChange={handleChange}
              placeholder={field.placeholder}
              className="w-full border rounded-md px-4 py-3"
            />

            {value && !isValid && (
              <p className="text-red-500 text-sm mt-1">
                {field.error}
              </p>
            )}
          </div>
        );
      })}

      {/* Continue button */}
      <button
        onClick={handleStep}
        disabled={!formValid}
        className={`w-full mt-20 py-3 rounded-lg text-white ${
          formValid
            ? "bg-black"
            : "bg-gray-300 cursor-not-allowed"
        }`}
      >
        Continue 1/3
        <VectorLogo className="inline-flex ml-2" />
      </button>
    </div>
  );
}
