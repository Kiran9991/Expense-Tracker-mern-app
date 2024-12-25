import React, { lazy, useContext, useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
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
import {BarLoader} from 'react-spinners';

function App() {
  const { isLogin, setIsLogin, setIsPremium } = useContext(UserContext);
  const { expenses, addExpense, page } = useContext(expenseContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { isPremium } = decodeJWT(token) || "";
  const { data, loading, error } = useFetch(
    `${LocalHost}/expense/expenses?page=${page}?limit=${5}`,
    "GET"
  );

  useEffect(() => {
    if (!token) return;
    setIsLogin(true);
    if (isPremium || localStorage.getItem("isPremium")) setIsPremium(true);
    data && navigate(`/expense/expenses/${page}`)
    data && addExpense(data.expensesPerPage);
  }, [token, isPremium, page, data]);

  return (
    <>
    <Toastify/>
        <Header isLogin={isLogin} />
        <Routes>
          {!isLogin && <Route path="/home" element={<Home />} />}
          {isLogin && (
            <Route path="/expense/form" element={<ExpenseTracker />} />
          )}
          {isLogin && <Route path={`/expense/expenses/${page}`} element={<ListExpenses />} />}
          {!isLogin && <Route path="/sign-in" element={<Signin />} />}
          {!isLogin && <Route path="/sign-up" element={<Signup />} />}
          <Route path="*" element={<BarLoader loading/>} />
        </Routes>
    </>
  );
}

export default App;

export const token = localStorage.getItem("token");
export const LocalHost = `http://localhost:4000`;
