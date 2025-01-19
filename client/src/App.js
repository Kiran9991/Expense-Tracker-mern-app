import React, { lazy, useContext, useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import {
  useFetch,
  decodeToken,
  UserContext,
  expenseContext,
  Header,
  ExpenseTracker,
  SubNav,
  Chat,
  Toastify,
  LocalHost,
  token,
  ExpenseRoutes,
  AuthRoutes,
} from "./index";

function App() {
  const { token, setToken, isLogin, setIsLogin, setIsPremium } = useContext(UserContext);
  const { expenses, addExpense, page, limit } = useContext(expenseContext);
  const { isPremium } = decodeToken(token) || false;
  const location = useLocation();
  const { data, loading, error } = useFetch(
    `${LocalHost}/expense/expenses?page=${page}&limit=${limit}`,
    "GET",
  );

  useEffect(() => {
    if (!token) return setIsLogin(false);
    setToken(localStorage.getItem("token"));
    token && setIsLogin(true);
    (isPremium || localStorage.getItem("isPremium")) && setIsPremium(true);
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
          <Header />
          <SubNav />
        </>
      )}
      <Routes>
        {/* Public Routes */}
        {!isLogin && <Route path="*" element={<AuthRoutes />} />}

        {/* Private Routes */}
        {isLogin && (
          <Route path="/expense" element={<ExpenseTracker />}>
            <Route path="*" element={<ExpenseRoutes />} />
          </Route>
        )}
        {isLogin && <Route path="/chat" element={<Chat />} />}
      </Routes>
    </>
  );
}

export default App;
