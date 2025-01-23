import React, { useRef, useState } from "react";

import styles from "./form.module.css";
import { PulseLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import FormInput from "./components/FormInput";
import Button from "./components/Button";
import resetPasswordReq from "./apis/resetPasswordReq";

export default function ResetPassword() {
  const emailInputRef = useRef();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitFormHandler = (event) => {
    event.preventDefault();
    const obj = {
      email: emailInputRef.current.value,
    };
    resetPasswordReq(setLoading, obj);
    emailInputRef.current.value = '';
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <h2>Reset Password</h2>
        <form onSubmit={submitFormHandler}>
        <FormInput text={"Email id"} type={"text"} ref={emailInputRef} />
          {!loading && (
            <div style={{ display: "flex", gap: "15px" }}>
              <Button type={'button'} onClick={() => navigate("/sign-in")}>
                Go Back
              </Button>
              <Button type={"submit"}>Send Forgot password request</Button>
            </div>
          )}
          <PulseLoader loading={loading} />
        </form>
      </div>
    </div>
  );
}
