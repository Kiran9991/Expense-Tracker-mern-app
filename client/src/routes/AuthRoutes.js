import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home, Signin, Signup, ForgotPassword, ErrorPage } from "../index";
import ResetPassForm from "../pages/auth/pages/ResetPassForm";

export default function AuthRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/sign-in" element={<Signin />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassForm/>}/>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
