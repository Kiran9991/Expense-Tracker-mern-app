import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./form.module.css";
import signupIcon from "../../images/signup.png";
import FormInput from "./components/FormInput";
import Button from "./components/Button";
import SwitchLink from "./components/SwitchLink";
import { validatePassword } from "./utils/validatePassword";
import { postAuth } from "./apis/postAuth";

const Signup = () => {
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
        const response = await postAuth('sign-up', obj);
        const message = await response.json();
        if (!response.ok) throw new Error(message.message);

        alert(message.message);
        navigate("/sign-in");
      } catch (error) {
        alert(error);
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
        <div className="h-10 flex justify-center">
          <img src={signupIcon} alt="Sign up Icon" />
        </div>
        <h2>Sign up</h2>
        <form onSubmit={submitFormHandler}>
          <FormInput text={"Email id"} type={"text"} ref={enteredEmail} />
          <FormInput text={"Password"} type={"password"} ref={enteredPassword}/>
          <FormInput text={"Confirm Password"} type={"password"} ref={enteredConfirmPassword}/>
          <Button type={'submit'}>Sign up</Button>
          <SwitchLink text={`Already signed up? `} linkText={`Sign in`} to={'/sign-in'} />
        </form>
      </div>
    </div>
  );
};

export default Signup;
