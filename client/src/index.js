import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./index.css";
import App from "./App";
import UserContextProvider from "./store/user-context";
import ExpenseContextProvider from "./store/expense-context";
import ChatContextProvider from "./store/Chat";

// auth
export { default as Signup } from "./pages/auth/pages/Signup";
export { default as Signin } from "./pages/auth/pages/Signin";

// hooks
export { default as useFetch } from "./hook/useFetch";
export { default as decodeToken } from "./hook/decodeToken";

// store
export { UserContext } from "./store/user-context";
export { expenseContext } from "./store/expense-context";

// pages
export { default as Header } from "./pages/Header/Header";
export { default as Home } from "./pages/Home";
export { default as ExpenseTracker } from "./pages/ExpenseTracker/ExpenseTracker";
export { default as ListExpenses } from "./pages/ExpenseTracker/ListItems/ListExpenses";
export { default as Dashboard } from "./pages/Dashboard/Dashboard";
export { default as ErrorPage } from "./pages/Error/ErrorPage";
export { default as About } from "./pages/ExpenseTracker/About/About";
export { default as Form } from "./pages/ExpenseTracker/FormInput/Form";
export { default as SubNav } from "./pages/Header/SubNavBar/SubNav";
export { default as ForgotPassword } from "./pages/auth/pages/ForgotPassword";
export { default as Chat } from "./pages/Chat/Chat";

// components
export { default as Toastify } from "./components/Toastify";

//
export const LocalHost = `http://localhost:4000`;
export const token = localStorage.getItem("token");

//
export { default as ExpenseRoutes } from "./routes/ExpenseRoutes";
export { default as AuthRoutes } from "./routes/AuthRoutes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChatContextProvider>
    <ExpenseContextProvider>
      <UserContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserContextProvider>
    </ExpenseContextProvider>
  </ChatContextProvider>,
);
