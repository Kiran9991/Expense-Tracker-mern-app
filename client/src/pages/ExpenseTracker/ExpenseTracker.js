import React from "react";

import { Outlet } from "react-router-dom";

export default function ExpenseTracker() {
  return (
    <div>
      <Outlet/>
    </div>
  );
}
