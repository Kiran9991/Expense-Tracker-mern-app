import React, { forwardRef } from "react";

const FormInput = forwardRef(({ text, type }, ref) => {
  return (
    <div className="relative mb-4">
      <input
        ref={ref}
        type={type}
        placeholder={text}
        required
        className="peer w-full border 
        border-gray-300 
        rounded-lg 
        px-4 py-2 
        focus:outline-none focus:ring-1 
        focus:ring-blue-500 
        focus:border-blue-500 
        placeholder-transparent"
      />
      <label
        className="absolute 
        -top-2.5 left-3 
        text-blue-500 
        transition-all duration-300 
        bg-white px-1 
        text-sm 
        peer-placeholder-shown:text-gray-500 
        peer-placeholder-shown:top-2.5 
        peer-placeholder-shown:left-3 
        peer-placeholder-shown:text-base 
        peer-focus:-top-2.5 
        peer-focus:left-3 
        peer-focus:text-blue-500 
        peer-focus:text-sm"
      >
        {text}
      </label>
    </div>
  );
});

export default FormInput;
