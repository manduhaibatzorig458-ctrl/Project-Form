// "use client";

// import Image from "next/image";
// import { PineconeLogo } from "./icons/PineconeLogo";
// import { VectorLogo } from "./icons/VectorLogo";
// import { useState } from "react";

// import StepOne from "./features/StepOne";
// import StepTwo from "./features/StepTwo"
// import StepThree from "./features/StepThree";
// import StepFinal from "./features/StepFinal"


// export default function Home() {
//   const [steps, setStep] = useState(1);
//   const firstStep = steps === 1;
//   const secondStep = steps === 2;
//   const thirdStep = steps === 3;
//   const final = steps === 4;

//   const handleStep = () => {
//     setStep(steps + 1);
//   };
//   const handleBack = () => {
//     setStep(steps - 1);
//   };

  

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-white">
//       <div className=" rounded-3xl border-4 border-white-500 p-8">

//         {firstStep && (
//           <StepOne
//             handleStep={handleStep}
//             />
//         )}

//         {secondStep && (
//           <StepTwo
//           handleStep={handleStep}
//           handleBack={handleBack}
//         />
//         )}

//         {thirdStep && (
//           <StepThree
//           handleStep={handleStep}
//           handleBack={handleBack}
//          />
//         )}
 
//         {final && ( <StepFinal/>
//         )}

        
//      </div>
//    </div> 
//   );
// }





"use client";

import { useState } from "react";

import StepOne from "./features/StepOne";
import StepTwo from "./features/StepTwo";
import StepThree from "./features/StepThree";
import StepFinal from "./features/StepFinal";

export default function Home() {
  const [step, setStep] = useState(1);

  // Бүх form-ийн мэдээллийг энд хадгална
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",

    email: "",
    phone: "",
    password: "",
    confirmPassword: "",

    birthDate: "",
    image: null,
    imagePreview: "",
  });

  const handleStep = () => {
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md rounded-3xl border-4 border-black p-8">

        {step === 1 && (
          <StepOne
            formData={formData}
            setFormData={setFormData}
            handleStep={handleStep}
          />
        )}

        {step === 2 && (
          <StepTwo
            formData={formData}
            setFormData={setFormData}
            handleStep={handleStep}
            handleBack={handleBack}
          />
        )}

        {step === 3 && (
          <StepThree
            formData={formData}
            setFormData={setFormData}
            handleStep={handleStep}
            handleBack={handleBack}
          />
        )}

        {step === 4 && (
          <StepFinal />
        )}

      </div>
    </div>
  );
}