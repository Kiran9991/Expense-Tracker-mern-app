import React, { forwardRef } from "react";

const FloatInput = forwardRef(({text,}, ref) => {
  return (
    <select
      id="category"
      className="peer w-full border 
        border-gray-300 
        rounded-lg 
        px-4 py-2 
        focus:outline-none focus:ring-1 
        focus:ring-blue-500 
        focus:border-blue-500 
        placeholder-transparent mb-4"
      ref={ref}
    >
      <option value="electricity">Electricity</option>
      <option value="travel">Travel</option>
      <option value="food">Food</option>
      <option value="home">Home</option>
    </select>
  );
});

export default FloatInput;
