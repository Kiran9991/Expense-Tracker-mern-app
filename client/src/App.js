import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Header from "./components/Header";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  const setAuth = () => {
    setIsLogin(() => !isLogin)
  }

  return (
    <>
    <Header isLogin={isLogin}/>
    <Routes>
      <Route path="/signin" element={<Signin setAuth={setAuth}/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="*" element={<h2>404: Page Not Found</h2>} />
    </Routes>
    </>
  );
}

export default App;
