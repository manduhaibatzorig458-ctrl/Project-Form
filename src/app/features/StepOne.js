"use client";

import { useState } from "react";
import { PineconeLogo } from "../icons/PineconeLogo";
import { VectorLogo } from "../icons/VectorLogo";

export default function StepOne({ handleStep }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");

  const nameRegex = /^[A-Za-z]+$/;

  const takenUsernames = ["admin", "test", "pinecone", "amgaa"];

  const firstNameValid = firstName.trim() !== "" && nameRegex.test(firstName);

  const lastNameValid = lastName.trim() !== "" && nameRegex.test(lastName);

  const usernameTaken = takenUsernames.includes(username.toLowerCase());

  const formValid =
    firstNameValid && lastNameValid && username.trim() !== "" && !usernameTaken;

  return (
    <div>
      <PineconeLogo />

      <h1 className="text-4xl font-bold mt-4">Join Us! 😎</h1>

      <p className="text-gray-500 mt-2 mb-8">
        Please provide all current information accurately.
      </p>

      {/* First Name */}
      <div className="mb-5">
        <label className="block font-semibold mb-2">
          First name <span className="text-red-500">*</span>
        </label>

        <input
          type="text"
          placeholder="Placeholder"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full border rounded-md px-4 py-3"
        />
        

        {firstName && !firstNameValid && (
          <p className="text-red-500 text-sm mt-1">
            First name cannot contain special characters or numbers.
          </p>
        )}
      </div>

      {/* Last Name */}
      <div className="mb-5">
        <label className="block font-semibold mb-2">
          Last name <span className="text-red-500">*</span>
        </label>

        <input
          type="text"
          placeholder="Placeholder"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full border rounded-md px-4 py-3"
        />

        {lastName && !lastNameValid && (
          <p className="text-red-500 text-sm mt-1">
            Last name cannot contain special characters or numbers.
          </p>
        )}
      </div>

      {/* Username */}
      <div className="mb-5">
        <label className="block font-semibold mb-2">
          Username <span className="text-red-500">*</span>
        </label>

        <input
          type="text"
          placeholder="Placeholder"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border rounded-md px-4 py-3"
        />
        
 {usernameTaken && (
          <p className="text-red-500 text-sm mt-1">
            This username is already taken. Please choose another one.
          </p>
        )}
      </div>

      <button
        onClick={handleStep}
        disabled={!formValid}
        className={`w-full mt-20 py-3 rounded-lg text-white ${
          formValid ? "bg-black" : "bg-gray-300 cursor-not-allowed"
        }`}
      >
        Continue 1/3
        <VectorLogo className="inline-flex ml-2" />
      </button>
    </div>
  );
}
