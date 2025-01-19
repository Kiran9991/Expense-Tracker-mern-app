import React from "react";
import { Link } from "react-router-dom";

export default function SwitchLink({ text, linkText, to }) {
  return (
    <div 
      className="
        text-sm 
        text-gray-500 
        inline
      "
    >
      {text}
      <Link
        to={to}
        className="
          underline 
          cursor-pointer 
          hover:text-gray-800 
          hover:font-medium
        "
      >
        {linkText}
      </Link>
    </div>
  );
}
