import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home, Signin, Signup, ForgotPassword, ErrorPage } from "../index";

export default function AuthRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/sign-in" element={<Signin />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
