import { Routes, Route } from "react-router-dom";

import { Dashboard, Form, ListExpenses, About, ErrorPage } from "../index";

function ExpenseRoutes() {
  return (
    <Routes>
      <Route index path="dashboard" element={<Dashboard />} />
      <Route path="form" element={<Form />} />
      <Route path="expenses/:id" element={<ListExpenses />} />
      <Route path="about-us" element={<About />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default ExpenseRoutes;
