"use client";

export default function StepTwo({
  formData,
  setFormData,
  handleStep,
  handleBack,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validation = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
      formData.email
    ),

    phone: /^[0-9]{8}$/.test(formData.phone),

    password: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(
      formData.password
    ),

    confirmPassword:
      formData.password === formData.confirmPassword &&
      formData.confirmPassword !== "",
  };

  const formValid = Object.values(validation).every(Boolean);

  const fields = [
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Placeholder",
      error: "Please provide a valid email address.",
    },
    {
      name: "phone",
      label: "Phone number",
      type: "text",
      placeholder: "Placeholder",
      error: "Please enter a valid phone number.",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Placeholder",
      error: "Password must include letters and numbers.",
    },
    {
      name: "confirmPassword",
      label: "Confirm password",
      type: "password",
      placeholder: "Placeholder",
      error: "Passwords do not match. Please try again.",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mt-4">
        Join Us! 😎
      </h1>

      <p className="text-gray-500 mt-2 mb-8">
        Please provide all current information accurately.
      </p>

      {fields.map((field) => {
        const value = formData[field.name];
        const isValid = validation[field.name];

        return (
          <div
            key={field.name}
            className={
              field.name === "confirmPassword"
                ? "mb-8"
                : "mb-4"
            }
          >
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
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {value && !isValid && (
              <p className="text-red-500 text-sm mt-1">
                {field.error}
              </p>
            )}
          </div>
        );
      })}

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