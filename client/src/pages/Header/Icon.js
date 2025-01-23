import React from "react";
// import symbols from "../../images/Symbol";

export default function Icon({ src }) {
  return (
    <div>
      <img className="h-10 w-10" 
      src={src} 
      alt="Expense Tracker symbol" />
    </div>
  );
}


