import React, { lazy, useContext, useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { BarLoader } from "react-spinners";

import Signup from "./pages/auth/Signup";
import Signin from "./pages/auth/Signin";
import decodeToken from "./hook/decodeToken";
import Header from "./pages/Header/Header";
import Home from "./pages/Home";
import ExpenseTracker from "./pages/ExpenseTracker/ExpenseTracker";
import { UserContext } from "./store/user-context";
import { expenseContext } from "./store/expense-context";
import ListExpenses from "./pages/ExpenseTracker/ListItems/ListExpenses";
import useFetch from "./hook/useFetch";
import Toastify from "./components/Toastify";
import Dashboard from "./pages/ExpenseTracker/Dashboard/Dashboard";
import About from "./pages/ExpenseTracker/About/About";

function App() {
  const { token, setToken, isLogin, setIsLogin, setIsPremium } = useContext(UserContext);
  const { expenses, addExpense, page } = useContext(expenseContext);
  const location = useLocation();
  const { isPremium } = decodeToken(token) || false;
  const navigate = useNavigate();
  const { data, loading, error } = useFetch(
    `${LocalHost}/expense/expenses?page=${page}&limit=${expenses.length}`,
    "GET"
  );

  useEffect(() => {
    // console.log(token)
    if(!token) return;
    setToken(localStorage.getItem('token'))
    setIsLogin(true);
    (isPremium || localStorage.getItem("isPremium")) &&  setIsPremium(true);
    console.log(data)
    data && addExpense(data.expensesPerPage, data.totalAmount, data.totalExpenses);
  }, [ token, isLogin, isPremium, token, page, data, ]);

  return (
    <>
      <Toastify />
      <Header isLogin={isLogin} />
      <Routes>
        {!isLogin && <Route path="/home" element={<Home />} />}
        {isLogin && <Route path="/dashboard" element={<Dashboard />} />}
        {isLogin && <Route path="/expense/form" element={<ExpenseTracker />} />}
        {isLogin && (
          <Route
            path={`/expense/expenses/${page}`}
            element={<ListExpenses />}
          />
        )}
        {!isLogin && <Route path="/sign-in" element={<Signin />} />}
        {!isLogin && <Route path="/sign-up" element={<Signup />} />}
        {isLogin && <Route path="/about-us" element={<About />} />}
        {isLogin && <Route
          path="*"
          element={
            <h1
              style={{
                margin: "50px",
                textAlign: "center",
              }}
            >
              Error: No Page Found!
            </h1>
          }
        />}
      </Routes>
    </>
  );
}

export default App;

export const LocalHost = `http://localhost:4000`;
