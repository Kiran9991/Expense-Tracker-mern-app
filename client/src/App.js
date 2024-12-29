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
import Dashboard from './pages/ExpenseTracker/Dashboard/Dashboard';
import useFetch from "./hook/useFetch";
import Toastify from "./components/Toastify";
import About from "./pages/ExpenseTracker/About/About";
import ErrorPage from "./pages/Error/ErrorPage";
import Form from "./pages/ExpenseTracker/FormInput/Form";

function App() {
  const { token, setToken, isLogin, setIsLogin, setIsPremium } = useContext(UserContext);
  const { expenses, addExpense, page } = useContext(expenseContext);
  const { isPremium } = decodeToken(token) || false;
  const location = useLocation();
  const navigate = useNavigate();
  const { data, loading, error } = useFetch(
    `${LocalHost}/expense/expenses?page=${page}&limit=${expenses.length}`,
    "GET"
  );

  console.log(isLogin, 'global')

  useEffect(() => {
    // console.log(token)
    console.log(isLogin, 'before token gone')
    if(!token) return setIsLogin(false);
    setToken(localStorage.getItem('token'))
    console.log(isLogin, 'useEffect')
    token && setIsLogin(true);
    (isPremium || localStorage.getItem("isPremium")) &&  setIsPremium(true);
    // isLogin && navigate(`/expense/expenses/${page}`)
    // data && console.log(data)
    // console.log(page)
    data && addExpense(data.expensesPerPage, data.totalAmount, data.totalExpenses);
  }, [ token, isLogin, isPremium, page, data, location.pathname ]);

  return (
    <>
     <Toastify/>
      <Header isLogin={isLogin} />
      <Routes>

        {/* Public Routes */}

        {!isLogin && <>
          <Route path="/home" element={<Home />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="*" element={<ErrorPage/>} />
          </>}

        {/* Private Routes */}

        {isLogin && <>
          <Route path="/expense" element={<ExpenseTracker/>}>
            <Route index path="dashboard" element={<Dashboard/>} />
            <Route path="form" element={<Form/>} />
            <Route path={`expenses/:id`}element={<ListExpenses />}/>
            <Route path="about-us" element={<About/>} />
            <Route path="*" element={<ErrorPage/>} />
          </Route>
          </>}

      </Routes>
    </>
  );
}

export default App;

export const LocalHost = `http://localhost:4000`;

export const token = localStorage.getItem('token');