import { createContext, useState } from "react";

const user = {
  token: localStorage.getItem('token') || null,
  isLogin: false,
  setIsLogin: () => {},
  isPremium: localStorage.getItem('isPremium') || false,
  setIsPremium: () => {},
  setToken: () => {},
};

export const UserContext = createContext(user);

const UserContextProvider = (props) => {
  const [isLogin, setIsLogin] = useState(false);
  const [isPremium, setIsPremium] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  const updateToken = (val) => {
    // console.log(val)
    // console.log(token);
    setToken(val);
    // console.log(token);
  } 

  const setAuth = (val) => {
    setIsLogin(val);
  };

  const setPremiumStatusHandler = (val) => {
    setIsPremium(val);
  };

  const user = { 
    token: token,
    isLogin: isLogin, 
    setIsLogin: setAuth,
    isPremium: isPremium,
    setIsPremium: setPremiumStatusHandler,
    setToken: updateToken 
  };

  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};

export default UserContextProvider;
