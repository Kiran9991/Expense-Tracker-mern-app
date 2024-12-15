import React, { useContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Signup from "./pages/auth/Signup";
import Signin from "./pages/auth/Signin";
import Header, { decodeJWT } from "./components/Header";
import Home from "./pages/Home";
import ExpenseTracker from "./pages/ExpenseTracker/ExpenseTracker";
import { UserContext } from "./store/user-context";
import { expenseContext } from "./store/expense-context";
import ListExpenses from "./pages/ExpenseTracker/ListItems/ListExpenses";
export const LocalHost = `http://localhost:4000`;

function App() {
  const token = localStorage.getItem("token");
  const { isLogin, setIsLogin, setIsPremium } = useContext(UserContext);
  const { expenses, addExpense } = useContext(expenseContext);
  const { isPremium } = decodeJWT(token) || '';

  useEffect(() => {
    if (!token) return;
    setIsLogin(true) 
    if(isPremium || localStorage.getItem('isPremium')) setIsPremium(true);
    async function getExpensesApi() {
      try {
        const response = await fetch(`${LocalHost}/expense/expenses`, {
          method: "GET",
          headers: {
            "Content-Type": "Application/json",
            "Authorization": `${token}`,
          },
        });
        const data = await response.json();
        if (!response.ok) {
          throw Error(data.message);
        }
        // console.log(token);
        addExpense(data.expensesArr);
        console.log('expenses added')
      } catch (error) {
        console.log(error.message);
        // alert(error.message)
      }
    }
    // const output = getExpensesApi();
    // addExpense(output);
    // console.log(output);
    getExpensesApi();
  }, [token]);

  return (
    <>
      <Header isLogin={isLogin} />
      <Routes>
        {!isLogin && <Route path="/home" element={<Home />} />}
        {isLogin && <Route path="/expense/form" element={<ExpenseTracker />} />}
        {isLogin && <Route path="/expense/list" element={<ListExpenses/>}/>}
        {!isLogin && <Route path="/sign-in" element={<Signin />} />}
        {!isLogin && <Route path="/sign-up" element={<Signup />} />}
        <Route path="*" element={<h2>404: Page Not Found</h2>} />
      </Routes>
    </>
  );
}

export default App;
