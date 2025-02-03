import React from "react";
import { Link } from "react-router-dom";

import symbols from "../../../images/Symbol";

export default function SubNav() {
  return (
    <nav className='h-9 bg-orange-200
     flex items-center
     '>
      {<img className="h-full p-[5px] 
      transition duration-500 hover:bg-gray-400
      " src={symbols.sidebar} alt="sidebar" />}
      <Link to={"/users"} className="
      no-underline text-black font-bold px-1
      font-sans transition duration-300 hover:bg-slate-300
      h-full flex items-center
      ">
        Users Lists
      </Link>
      <Link to={"/chat"} className="
      no-underline text-black font-bold px-1
      font-sans transition duration-300 hover:bg-slate-300
      h-full flex items-center
      ">
        Chat
      </Link>
    </nav>
  );
}
