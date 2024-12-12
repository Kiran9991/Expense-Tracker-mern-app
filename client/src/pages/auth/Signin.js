import React, { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./form.module.css";
import signupIcon from "../../images/signup symbol.png";
import { UserContext } from "../../store/user-context";
import { LocalHost } from "../../App";

const Signin = () => {
  const enteredEmail = useRef();
  const enteredPassword = useRef();
  const { setIsLogin } = useContext(UserContext);
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
        const { message, token } = await response.json();
        if (!response.ok) throw new Error(message);
        localStorage.setItem("token", token);
        setIsLogin(true);
        navigate('/expense/form')
        // prop.setAuth();
        alert(message);
      } catch (error) {
        console.log(error)
        alert(error);
      }

      enteredEmail.current.value = "";
      enteredPassword.current.value = "";
      // console.log("submitted", obj);
    } else {
      alert("Please Enter correct Password");
      enteredPassword.current.value = "";
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <div className={styles.loginIcon}>
          <img src={signupIcon} alt="Sign up Icon" />
        </div>
        <h2>Signin</h2>
        <form onSubmit={submitFormHandler}>
          <div className={styles.inputGroup}>
            <input
              type="email"
              placeholder="Email"
              required
              ref={enteredEmail}
            />
          </div>
          <div className={styles.inputGroup}>
            <input
              type="password"
              placeholder="Password"
              required
              ref={enteredPassword}
            />
          </div>

          {/* <div className={styles.forgotPassword}>
              <a href="#">Forgot password?</a>
            </div> */}
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
