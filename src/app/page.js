"use client";

import Image from "next/image";
import { PineconeLogo } from "./icons/PineconeLogo";
import { VectorLogo } from "./icons/VectorLogo";
import { useState } from "react";
export default function Home() {
  const [steps, setStep] = useState(1);
  const firstStep = steps === 1;
  const secondStep = steps === 2;
  const thirdStep = steps === 3;
  const final = steps === 4;

  const handleStep = () => {
    setStep(steps + 1);
  };
  const handleBack = () => {
    setStep(steps - 1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className=" rounded-3xl border-4 border-white-500 p-8">
        {firstStep && (
          <div>
            <PineconeLogo />
            <h1 className="text-4xl font-bold">Join Us! 😎</h1>
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
              Continue 1/3 <VectorLogo className=" inline-flex ml-2" />
            </button>
          </div>
        )}

        {secondStep && (
          <div>
            <div>
              <PineconeLogo />
            </div>

            <h1 className="text-3xl font-bold">Join Us! 😎</h1>

            <p className="text-gray-500 mt-2 mb-8">
              Please provide all current information accurately.
            </p>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">
                Email <span className="text-red-500">*</span>
              </label>

              <input
                type="email"
                placeholder="Placeholder"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-lg px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">
                Phone number <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                placeholder="Placeholder"
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border rounded-lg px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">
                Password <span className="text-red-500">*</span>
              </label>

              <input
                type="password"
                placeholder="Placeholder"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded-lg px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-10">
              <label className="block text-sm font-semibold mb-2">
                Confirm password <span className="text-red-500">*</span>
              </label>

              <input
                type="password"
                placeholder="Placeholder"
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full border rounded-lg px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleBack}
                className=" mt-15 flex-1 border rounded-lg py-3 "
              >
                ← Back
              </button>

              <button
                onClick={handleStep}
                className="mt-15 flex-1 bg-black text-white rounded-lg py-3"
              >
                Continue 2/3 →
              </button>
            </div>
          </div>
        )}

        {thirdStep && (
          <div>
            <div>
              <PineconeLogo />
            </div>

            <h1 className="text-3xl font-bold">Join Us! 😎</h1>

            <p className="text-gray-500 mt-2 mb-8">
              Please provide all current information accurately.
            </p>

            <div className="mb-5">
              <label className="block text-sm font-semibold mb-2">
                Date of birth <span className="text-red-500">*</span>
              </label>

              <input
                type="date"
                onChange={(e) => setBirthDate(e.target.value)}
                className="w-full border rounded-lg px-4 py-3"
              />
            </div>

            <div className="mb-10">
              <label className="block text-sm font-semibold mb-2">
                Profile image <span className="text-red-500">*</span>
              </label>

              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                className="w-full border rounded-lg px-4 py-20"
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleBack}
                className=" mt-15 flex-1 border rounded-lg py-3"
              >
                ← Back
              </button>

              <button
                onClick={handleStep}
                className="mt-15 flex-1 bg-black text-white rounded-lg py-3"
              >
                Continue 3/3 →
              </button>
            </div>
          </div>
        )}

        {final && (
          <div>
            <div>
              <PineconeLogo />
            </div>

            <h1 className="text-3xl font-bold mt-4 mb-4">You Are All Set 🔥</h1>

            <p className="text-gray-500 mb-8">
              We have received your submission. Thank you for joining us!
            </p>
            
          </div>
        )}
      </div>
    </div>
  );
}



        