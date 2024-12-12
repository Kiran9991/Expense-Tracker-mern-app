import { createContext, useState } from "react";

const user = { isLogin: false, setIsLogin: () => {} };

export const UserContext = createContext(user);

const UserContextProvider = (props) => {
  const [isLogin, setIsLogin] = useState(false);

  const setAuth = (val) => {
    setIsLogin(val);
  };

  const user = { isLogin: isLogin, setIsLogin: setAuth };

  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};

export default UserContextProvider;
