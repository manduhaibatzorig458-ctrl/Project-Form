"use client";

import { useState } from "react";
import { PineconeLogo } from "../icons/PineconeLogo";
import { VectorLogo } from "../icons/VectorLogo";

export default function StepOne({ handleStep }) {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");


  const nameRegex = /^[a-zA-Zа-яА-ЯөӨүҮ\s]+$/;


  const firstNameValid =
    firstName.trim() !== "" &&
    nameRegex.test(firstName);


  const lastNameValid =
    lastName.trim() !== "" &&
    nameRegex.test(lastName);


  const takenUsernames = [
    "admin",
    "test",
    "pinecone",
    "amgaa"
  ];


  const usernameTaken = takenUsernames.includes(
    username.toLowerCase()
  );


  const formValid =
    firstNameValid &&
    lastNameValid &&
    username.trim() !== "" &&
    !usernameTaken;



  return (
    <div>
      <PineconeLogo />

      <h1 className="text-4xl font-bold">
        Join Us! 😎
      </h1>

      <p className="text-gray-500 mt-2 mb-8">
        Please provide all current information accurately.
      </p>


      <div className="mb-5">
        <label className="block font-semibold mb-2">
          First name <span className="text-red-500">*</span>
        </label>

        <input
          type="text"
          placeholder="Placeholder"
          className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>


      <div className="mb-5">
        <label className="block font-semibold mb-2">
          Last name <span className="text-red-500">*</span>
        </label>

        <input
          type="text"
          placeholder="Placeholder"
          className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>


      <div className="mb-5">
        <label className="block font-semibold mb-2">
          Username <span className="text-red-500">*</span>
        </label>

        <input
          type="text"
          placeholder="Placeholder"
          className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>


      <button
        onClick={handleStep}
        className="w-full mt-28 bg-black text-white py-3 rounded-lg text-lg"
      >
        Continue 1/3
        <VectorLogo className="inline-flex ml-2" />
      </button>

    </div>
  );
}