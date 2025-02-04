import { createContext, useState } from "react";

const user = {
  token: localStorage.getItem("token") || null,
  isLogin: false,
  setIsLogin: () => {},
  isPremium: localStorage.getItem("isPremium") || false,
  setIsPremium: () => {},
  setToken: () => {},
  users:[],
  setUsers:()=>{},
};

export const UserContext = createContext(user);

const UserContextProvider = (props) => {
  const [isLogin, setIsLogin] = useState(false);
  const [isPremium, setIsPremium] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [users, setUsers] = useState([]);

  const updateToken = (val) => {
    setToken(val);
  };

  const setAuth = (val) => {
    setIsLogin(val);
  };

  const setPremiumStatusHandler = (val) => {
    setIsPremium(val);
  };

  const setUsersHandler = (val) => {
    if(Array.isArray(val)) {
      setUsers([...val])
    }else {
      setUsers(prev => [...prev, val]);
    }
  }

  const user = {
    token: token,
    isLogin: isLogin,
    setIsLogin: setAuth,
    isPremium: isPremium,
    setIsPremium: setPremiumStatusHandler,
    setToken: updateToken,
    users: users,
    setUsers: setUsersHandler
  };

  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};

export default UserContextProvider;
