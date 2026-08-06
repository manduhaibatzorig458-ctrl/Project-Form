"use client";

import { useState } from "react";
import { PineconeLogo } from "../icons/PineconeLogo";
import { VectorLogo } from "../icons/VectorLogo";

export default function StepTwo({ handleStep, handleBack }) {

 
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const phoneValid = /^[0-9]{8}$/.test(phone);
  const passwordValid =
    /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(password);
  const passwordMatch =
    password === confirmPassword && confirmPassword !== "";

  const formValid =
    emailValid &&
    phoneValid &&
    passwordValid &&
    passwordMatch;




  return (
    <div>
      <PineconeLogo />

      <h1 className="text-3xl font-bold mt-4">
        Join Us! 😎
      </h1>

      <p className="text-gray-500 mt-2 mb-8">
        Please provide all current information accurately.
      </p>

      {/* Email */}
      <div className="mb-4">
        <label className="block font-semibold mb-2">
          Email <span className="text-red-500">*</span>
        </label>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Placeholder"
          className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {email && !emailValid && (
          <p className="text-red-500 text-sm mt-1">
            Please provide a valid email address.
          </p>
        )}
      </div>

      {/* Phone */}
      <div className="mb-4">
        <label className="block font-semibold mb-2">
          Phone number <span className="text-red-500">*</span>
        </label>

        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Placeholder"
          className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {phone && !phoneValid && (
          <p className="text-red-500 text-sm mt-1">
            Please enter a valid phone number.
          </p>
        )}
      </div>

      {/* Password */}
      <div className="mb-4">
        <label className="block font-semibold mb-2">
          Password <span className="text-red-500">*</span>
        </label>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Placeholder"
          className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {password && !passwordValid && (
          <p className="text-red-500 text-sm mt-1">
            Password must include letters and numbers.
          </p>
        )}
      </div>

      {/* Confirm Password */}
      <div className="mb-8">
        <label className="block font-semibold mb-2">
          Confirm password <span className="text-red-500">*</span>
        </label>

        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Placeholder"
          className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {confirmPassword && !passwordMatch && (
          <p className="text-red-500 text-sm mt-1">
            Passwords do not match. Please try again.
          </p>
        )}
      </div>

      <div className="flex gap-3">
        <button
          onClick={handleBack}
          className="flex-1 border rounded-lg py-3"
        >
          ← Back
        </button>

        <button
          onClick={handleStep}
          disabled={!formValid}
          className={`flex-1 rounded-lg py-3 text-white ${
            formValid
              ? "bg-black"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Continue 2/3 →
        </button>
      </div>
    </div>
  );
}
