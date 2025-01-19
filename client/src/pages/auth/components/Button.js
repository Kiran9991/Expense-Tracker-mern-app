import React from "react";

export default function Button({ type, children }) {
  return (
    <button
      type={type}
      className="w-full bg-black
    text-white rounded-md p-2 font-medium 
    hover:bg-slate-700 cursor-pointer"
    >
      {children}
    </button>
  );
}
