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
import SubNav from "./pages/Header/SubNavBar/SubNav";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Chat from "./pages/Chat/Chat";

function App() {
  const { token, setToken, isLogin, setIsLogin, setIsPremium } = useContext(UserContext);
  const { expenses, addExpense, page, limit } = useContext(expenseContext);
  const { isPremium } = decodeToken(token) || false;
  const location = useLocation();
  const navigate = useNavigate();
  const { data, loading, error } = useFetch(
    `${LocalHost}/expense/expenses?page=${page}&limit=${limit}`,
    "GET"
  );


  useEffect(() => {
    
    if(!token) return setIsLogin(false);
    setToken(localStorage.getItem('token'))
    token && setIsLogin(true);
    (isPremium || localStorage.getItem("isPremium")) &&  setIsPremium(true);
    // data && navigate(`/expense/expenses/${page}`)
    // data && console.log(data)
    // console.log(page)
    data && addExpense(data.expensesPerPage, data.totalAmount, data.totalExpenses);
  }, [ token, isLogin, isPremium, page, data, location.pathname, limit, expenses.length ]);

  return (
    <>
     <Toastify/>
      {isLogin && <> <Header/>
      <SubNav/>
      </>
    }
      <Routes>

        {/* Public Routes */}

        {!isLogin && <>
          <Route path="/home" element={<Home />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword/>} />
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

        {isLogin && <Route path="/chat" element={<Chat/>}/>}

      </Routes>
    </>
  );
}

export default App;

export const LocalHost = `http://localhost:4000`;

export const token = localStorage.getItem('token');