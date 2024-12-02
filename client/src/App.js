import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Signup from "./pages/auth/Signup";
import Signin from "./pages/auth/Signin";
import Header from "./components/Header";
import Home from "./pages/Home";
import ExpenseTracker from "./pages/ExpenseTracker/ExpenseTracker";
import userContext from "./store/user-context";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const token = localStorage.getItem('token');

  const setAuth = () => {
    setIsLogin(prev => !prev);
  }

  const pushExpenses = (expense) => {
    // console.log(setExpenses())
    setExpenses(prev => [...prev, expense]);
  }

  console.log(expenses)

  // useEffect(() => {
  //   if(token) setIsLogin((prevLogin) => !prevLogin)
  // },[])

  return (
    <userContext.Provider value={{ isLogin, setIsLogin:setAuth, expenses, setExpenses:pushExpenses }}>
    <Header isLogin={isLogin}/>
    <Routes>
      {!isLogin && <Route path="/home" element={<Home/>}/>}
      {isLogin && <Route path="/expense/form" element={<ExpenseTracker/>}/>}
      {!isLogin && <Route path="/sign-in" element={<Signin/>} />}
      {!isLogin && <Route path="/sign-up" element={<Signup/>} />}
      <Route path="*" element={<h2>404: Page Not Found</h2>} />
    </Routes>
    </userContext.Provider>
  );
}

export default App;
