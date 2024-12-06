import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import UserContextProvider from "./store/user-context";
import ExpenseContextProvider from "./store/expense-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ExpenseContextProvider>
    <UserContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserContextProvider>
  </ExpenseContextProvider>
);
