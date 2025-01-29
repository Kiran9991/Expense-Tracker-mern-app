import React, { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import { styles, signupIcon, UserContext, notify, decodeToken, FormInput, Button,
   SwitchLink, postAuth, validatePassword } from '../index';

const Signin = () => {
  const enteredEmail = useRef();
  const enteredPassword = useRef();
  const { setIsLogin, setToken, setIsPremium } = useContext(UserContext);
  const navigate = useNavigate();

  const submitFormHandler = async (e) => {
    e.preventDefault();
    let email = enteredEmail.current.value;
    let password = enteredPassword.current.value;

    let user = { email, password };

    if (validatePassword(password)) {
      try {
        const response = await postAuth('sign-in', user); 
        const data = await response.json()

        if (!response.ok) throw new Error(data.message);

        localStorage.setItem("token", data.token);
        setToken(data.token);
        const { isPremium } = decodeToken(data.token);
        // localStorage.setItem('isPremium', isPremium);
        setIsPremium(isPremium);
        setIsLogin(true);
        navigate("/expense/dashboard");
        localStorage.setItem("page", 1);
        notify(data.message, "success");
      } catch (error) {
        console.log(error);
        notify(error.message, "error");
      }
    } else {
      notify("Password strength should be greate than 6", 'error');
      enteredPassword.current.value = "";
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <div className="h-10 flex justify-center">
          <img src={signupIcon} alt="Sign up Icon" />
        </div>
        <h2>Signin</h2>
        <form onSubmit={submitFormHandler}>
          <FormInput text={"Email id"} type={"text"} ref={enteredEmail} />
          <FormInput text={"Password"} type={"password"} ref={enteredPassword}/>
          <Button type={'submit'}>Sign in</Button>
          <SwitchLink text={`Click here for `} linkText={`Forgot Password`} to={`/forgot-password`} /><br/>
          <SwitchLink text={`New User? Signup here `} linkText={`Sign up`} to={`/sign-up`} />
        </form>
      </div>
    </div>
  );
};

export default Signin;
