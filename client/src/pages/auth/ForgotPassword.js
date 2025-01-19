import React, { useRef, useState } from "react";

import styles from "./form.module.css";
import FetchApi from "../../hook/FetchApi";
import { LocalHost } from "../..";
import { PulseLoader } from "react-spinners";
import notify from "../../hook/notify";
import { useNavigate } from "react-router-dom";
import FormInput from "./components/FormInput";

export default function ResetPassword() {
  const emailInputRef = useRef();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitFormHandler = (event) => {
    event.preventDefault();
    const obj = {
      email: emailInputRef.current.value,
    };

    const sendForgotPasswordReq = async () => {
      setLoading(true);
      try {
        const response = await FetchApi(
          `${LocalHost}/user/reset-password`,
          "POST",
          "",
          obj,
        );
        const data = await response.json();
        console.log(data);
        if (!response.ok) throw new Error(`Email sending Failed!`);
      } catch (error) {
        console.log(error);
        notify(error.message, "error");
      }
      setLoading(false);
    };

    sendForgotPasswordReq();
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <h2>Reset Password</h2>
        <form onSubmit={submitFormHandler}>
        <FormInput text={"Email id"} type={"text"} ref={emailInputRef} />
          {!loading && (
            <div style={{ display: "flex", gap: "15px" }}>
              <button
                className={styles.btnPrimary}
                onClick={() => navigate("/sign-in")}
              >
                Go Back
              </button>
              <button type="submit" className={styles.btnPrimary}>
                Send Forgot password request
              </button>
            </div>
          )}
          <PulseLoader loading={loading} />
        </form>
      </div>
    </div>
  );
}
