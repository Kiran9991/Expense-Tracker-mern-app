import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Signup from "./pages/auth/Signup";
import Signin from "./pages/auth/Signin";
import Header from "./components/Header";
import Home from "./pages/Home";
import ExpenseTracker from "./pages/ExpenseTracker/ExpenseTracker";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const token = localStorage.getItem('token');

  const setAuth = () => {
    setIsLogin(() => !isLogin)
  }

  useEffect(() => {
    if(token) setAuth();
  },[])

  return (
    <>
    <Header isLogin={isLogin}/>
    <Routes>
      {!isLogin && <Route path="/home" element={<Home/>}/>}
      {!isLogin && <Route path="/expense/form" element={<ExpenseTracker/>}/>}
      {!isLogin && <Route path="/sign-in" element={<Signin setAuth={setAuth}/>} />}
      {!isLogin && <Route path="/sign-up" element={<Signup/>} />}
      <Route path="*" element={<h2>404: Page Not Found</h2>} />
    </Routes>
    </>
  );
}

export default App;
