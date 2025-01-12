import React, { lazy, useContext, useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import {
  Signup,
  Signin,
  useFetch,
  decodeToken,
  UserContext,
  expenseContext,
  Header,
  Home,
  ExpenseTracker,
  ListExpenses,
  Dashboard,
  ErrorPage,
  About,
  Form,
  SubNav,
  ForgotPassword,
  Chat,
  Toastify,
} from "./index";

import { ExpenseRoutes } from "./pages/ExpenseTracker/ExpenseTracker";

function App() {
  const { token, setToken, isLogin, setIsLogin, setIsPremium } = useContext(UserContext);
  const { expenses, addExpense, page, limit } = useContext(expenseContext);
  const { isPremium } = decodeToken(token) || false;
  const location = useLocation();
  const { data, loading, error } = useFetch(
    `${LocalHost}/expense/expenses?page=${page}&limit=${limit}`,
    "GET"
  );

  useEffect(() => {
    if (!token) return setIsLogin(false);
    setToken(localStorage.getItem("token"));
    token && setIsLogin(true);
    (isPremium || localStorage.getItem("isPremium")) && setIsPremium(true);
    // data && navigate(`/expense/expenses/${page}`)
    // data && console.log(data)
    // console.log(page)
    data &&
      addExpense(data.expensesPerPage, data.totalAmount, data.totalExpenses);
  }, [
    token,
    isLogin,
    isPremium,
    page,
    data,
    location.pathname,
    limit,
    expenses.length,
  ]);

  return (
    <>
      <Toastify />
      {isLogin && (
        <>
          {" "}
          <Header />
          <SubNav />
        </>
      )}
      <Routes>
        {/* Public Routes */}

        {!isLogin && (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/sign-in" element={<Signin />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="*" element={<ErrorPage />} />
          </>
        )}

        {/* Private Routes */}

        {isLogin && (
            <Route path="/expense" element={<ExpenseTracker />}>
              <ExpenseRoutes/>
            </Route>
        )}

        {isLogin && <Route path="/chat" element={<Chat />} />}
      </Routes>
    </>
  );
}

export default App;

export const LocalHost = `http://localhost:4000`;

export const token = localStorage.getItem("token");
