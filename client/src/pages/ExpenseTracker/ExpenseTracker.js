import React, { useContext } from "react";
import { Route, Outlet } from "react-router-dom";

export default function ExpenseTracker() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
