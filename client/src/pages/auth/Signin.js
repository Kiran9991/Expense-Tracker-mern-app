import React, { useRef } from "react";
import { Link } from "react-router-dom";

import styles from "./form.module.css";
import signupIcon from "../../images/signup symbol.png";

const Signin = (prop) => {
  const enteredEmail = useRef();
  const enteredPassword = useRef();

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
        const response = await fetch("http://localhost:3000/user/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        });
        const { message, token } = await response.json();
        if(!response.ok) throw new Error(message);
        localStorage.setItem('token', token);
        prop.setAuth();
        alert(message);
      }catch(error) {
        alert(error)
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
            <Link to={"/signup"} className={styles.signInLink}>
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
