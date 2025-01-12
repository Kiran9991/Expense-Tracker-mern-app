import React, { useContext } from "react";
import { Route, Outlet } from "react-router-dom";
import { Dashboard, Form, ListExpenses, About, ErrorPage } from "../../index";

import { UserContext } from "../../store/user-context";

export function ExpenseRoutes() {
  return (
    <>
      <Route index path="dashboard" element={<Dashboard />} />
      <Route path="form" element={<Form />} />
      <Route path={`expenses/:id`} element={<ListExpenses />} />
      <Route path="about-us" element={<About />} />
      <Route path="*" element={<ErrorPage />} />
    </>
  );
}

export default function ExpenseTracker() {
  const { isLogin } = useContext(UserContext);

  return (
    <div>
      <Outlet />
    </div>
  );
}
