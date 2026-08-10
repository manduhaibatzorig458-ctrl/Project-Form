"use client";

import Image from "next/image";
import { PineconeLogo } from "./icons/PineconeLogo";
import { VectorLogo } from "./icons/VectorLogo";
import { useState } from "react";

import StepOne from "./features/StepOne";
import StepTwo from "./features/StepTwo"
import StepThree from "./features/StepThree";
import StepFinal from "./features/StepFinal"


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
          <StepOne
            handleStep={handleStep}
            />
        )}

        {secondStep && (
          <StepTwo
          handleStep={handleStep}
          handleBack={handleBack}
        />
        )}

        {thirdStep && (
          <StepThree
          handleStep={handleStep}
          handleBack={handleBack}
         />
        )}
 
        {final && ( <StepFinal/>
        )}

        
     </div>
   </div> 
  );
}





