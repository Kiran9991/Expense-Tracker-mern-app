import React, { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./form.module.css";
import signupIcon from "../../images/signup.png";
import { UserContext } from "../../store/user-context";
import { LocalHost } from "../..";
import notify from "../../hook/notify";
import decodeToken from "../../hook/decodeToken";
import FormInput from "./components/FormInput";

const Signin = () => {
  const enteredEmail = useRef();
  const enteredPassword = useRef();
  const { setIsLogin, token, setToken, setIsPremium } = useContext(UserContext);
  const navigate = useNavigate();

  const submitFormHandler = async (e) => {
    e.preventDefault();
    let email = enteredEmail.current.value;
    let password = enteredPassword.current.value;

    let obj = {
      email,
      password,
    };

    if (password.length >= 6) {
      try {
        const response = await fetch(`${LocalHost}/user/signin`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        });
        const data = await response.json();
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
      alert("Please Enter correct Password");
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
          <div className={styles.forgotPassword}>
            <Link to={"/forgot-password"} className={styles.signInLink}>
              Forgot Password
            </Link>
          </div>
          <button type="submit" className={styles.btnPrimary}>
            Sign up
          </button>

          <div className={styles.signInText}>
            New User? Signup here{" "}
            <Link to={"/sign-up"} className={styles.signInLink}>
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
