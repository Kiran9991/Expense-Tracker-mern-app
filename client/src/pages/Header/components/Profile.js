import React from "react";

export default function Profile({ children }) {
  return (
    <div
      className="my-1 bg-purple-300 rounded-lg 
            flex items-center 
            w-fit border border-black p-3
            hover:bg-purple-800 hover:text-white 
            cursor-default "
    >
      {children}
    </div>
  );
}
