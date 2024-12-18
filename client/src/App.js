import React, { lazy, useContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";

import Signup from "./pages/auth/Signup";
import Signin from "./pages/auth/Signin";
import Header, { decodeJWT } from "./components/Header/Header";
import Home from "./pages/Home";
import ExpenseTracker from "./pages/ExpenseTracker/ExpenseTracker";
import { UserContext } from "./store/user-context";
import { expenseContext } from "./store/expense-context";
import ListExpenses from "./pages/ExpenseTracker/ListItems/ListExpenses";
import useFetch from "./hook/useFetch";
import Toastify from "./components/Toastify";

function App() {
  const { isLogin, setIsLogin, setIsPremium } = useContext(UserContext);
  const { expenses, addExpense } = useContext(expenseContext);
  const { isPremium } = decodeJWT(token) || "";
  const { data, loading, error } = useFetch(
    `${LocalHost}/expense/expenses`,
    "GET"
  );

  // data && console.log(data.expensesArr, loading, error);

  useEffect(() => {
    if (!token) return;
    setIsLogin(true);
    if (isPremium || localStorage.getItem("isPremium")) setIsPremium(true);
    data && addExpense(data.expensesArr);
  }, [token, isPremium, data]);

  return (
    <>
    <Toastify/>
        <Header isLogin={isLogin} />
        <Routes>
          {!isLogin && <Route path="/home" element={<Home />} />}
          {isLogin && (
            <Route path="/expense/form" element={<ExpenseTracker />} />
          )}
          {isLogin && <Route path="/expense/list" element={<ListExpenses />} />}
          {!isLogin && <Route path="/sign-in" element={<Signin />} />}
          {!isLogin && <Route path="/sign-up" element={<Signup />} />}
          <Route path="*" element={<h2>404: Page Not Found</h2>} />
        </Routes>
    </>
  );
}

export default App;

export const token = localStorage.getItem("token");
export const LocalHost = `http://localhost:4000`;
