import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBarLink({ to, children }) {

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? 
      "underline font-medium text-gray-950" : 
      "font-medium text-gray-400 hover:text-gray-950"
      }
    >
      {children}
    </NavLink>
  );
}
