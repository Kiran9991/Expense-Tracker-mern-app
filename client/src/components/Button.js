import React from "react";

export default function Button({ type, children, onClick }) {
  return (
    <button
      type={type}
      className="w-full bg-slate-500
    text-white rounded-md p-2 font-medium 
    hover:bg-slate-700 cursor-pointer"
    onClick={onClick}
    >
      {children}
    </button>
  );
}
