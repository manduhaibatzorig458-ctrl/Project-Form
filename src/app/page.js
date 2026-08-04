"use client";
import Image from "next/image";
import { PineconeLogo } from "./icons/PineconeLogo";
import { VectorLogo } from "./icons/VectorLogo";
import { useState } from "react";
export default function Home() {

  const[steps, setStep] = useState(1);
  const firstStep = steps === 1;
  const secondStep = steps === 2;
  const thirdStep = steps === 3;
  const final = steps === 4;
  
  const handleStep = () => {
    setStep(steps + 1);
  }
  const handleBack = () => {
    setStep(steps - 1);
  }

return (
 
 
  <div className="min-h-screen flex items-center justify-center bg-white">
     <div className=" rounded-3xl border-4 border-white-500 p-8">

   
           
      

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
     className="w-full mt-28 bg-black text-white py-3 rounded-lg text-lg">
          Continue 1/3 <VectorLogo className=" inline-flex ml-2" />
        </button> 


  </div>
</div>


  )
} 