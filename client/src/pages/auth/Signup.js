import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./form.module.css";
import signupIcon from "../../images/signup.png";
import { LocalHost } from "../../App";

export const validatePassword = (password, confirmPassword) => {
  if (password.length < 6) return false;

  if (password !== confirmPassword) return false;

  return true;
};

const Signup = (prop) => {
  const navigate = useNavigate();
  const enteredEmail = useRef();
  const enteredPassword = useRef();
  const enteredConfirmPassword = useRef();

  const submitFormHandler = async (e) => {
    e.preventDefault();
    let email = enteredEmail.current.value;
    let password = enteredPassword.current.value;
    let confirmPassword = enteredConfirmPassword.current.value;

    let obj = {
      email,
      password,
      confirmPassword,
    };

    if (validatePassword(password, confirmPassword)) {
      try {
        const response = await fetch(`${LocalHost}/user/signup`, {
          method:'POST',
          headers: {
            'Content-Type':'application/json',
          },
          body:JSON.stringify(obj)
        })
        const message = await response.json();
        if(!response.ok) throw new Error(message.message);
        alert(message.message);
        navigate('/sign-in')
      } catch(error) {
        alert(error)
      }
      
      enteredEmail.current.value = "";
      enteredPassword.current.value = "";
      enteredConfirmPassword.current.value = "";
      // console.log("submitted", obj);
    } else {
      alert("Please Enter correct Password");
      enteredPassword.current.value = "";
      enteredConfirmPassword.current.value = "";
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <div className={styles.loginIcon}>
          <img src={signupIcon} alt="Sign up Icon" />
        </div>
        <h2>Sign up</h2>
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
          <div className={styles.inputGroup}>
            <input
              type="password"
              placeholder="Confirm Password"
              required
              ref={enteredConfirmPassword}
            />
          </div>
          {/* <div className={styles.forgotPassword}>
            <a href="#">Forgot password?</a>
          </div> */}
          <button type="submit" className={styles.btnPrimary}>
            Sign up
          </button>

          <div className={styles.signInText}>
            Already signed up?{" "}
            <Link to={"/sign-in"} className={styles.signInLink}>Sign in</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
