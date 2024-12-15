import { createContext, useState } from "react";

const user = {
  isLogin: false,
  setIsLogin: () => {},
  isPremium: false,
  setIsPremium: () => {},
};

export const UserContext = createContext(user);

const UserContextProvider = (props) => {
  const [isLogin, setIsLogin] = useState(false);
  const [isPremium, setIsPremium] = useState(false);

  const setAuth = (val) => {
    setIsLogin(val);
  };

  const setPremiumStatusHandler = (val) => {
    setIsPremium(val);
  };

  const user = { 
    isLogin: isLogin, 
    setIsLogin: setAuth,
    isPremium: isPremium,
    setIsPremium: setPremiumStatusHandler 
  };

  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};

export default UserContextProvider;
