import React, { useContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Signup from "./pages/auth/Signup";
import Signin from "./pages/auth/Signin";
import Header from "./components/Header";
import Home from "./pages/Home";
import ExpenseTracker from "./pages/ExpenseTracker/ExpenseTracker";
import { UserContext } from "./store/user-context";
import { expenseContext } from "./store/expense-context";
export const LocalHost = `http://localhost:4000`;

function App() {
  const token = localStorage.getItem("token");
  const { isLogin, setIsLogin } = useContext(UserContext);
  const { expenses, addExpense } = useContext(expenseContext);
  // console.log(expenses)

  useEffect(() => {
    if (token) setIsLogin();
    async function getExpensesApi() {
      const response = await fetch(`${LocalHost}/expense/expenses`);
      const data = await response.json();
      addExpense(data.expensesArr);
    }
    // const output = getExpensesApi();
    // addExpense(output);
    // console.log(output);
    getExpensesApi();
  }, []);

  return (
    <>
      <Header isLogin={isLogin} />
      <Routes>
        {!isLogin && <Route path="/home" element={<Home />} />}
        {isLogin && <Route path="/expense/form" element={<ExpenseTracker />} />}
        {!isLogin && <Route path="/sign-in" element={<Signin />} />}
        {!isLogin && <Route path="/sign-up" element={<Signup />} />}
        <Route path="*" element={<h2>404: Page Not Found</h2>} />
      </Routes>
    </>
  );
}

export default App;
