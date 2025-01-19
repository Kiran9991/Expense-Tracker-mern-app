import React, { useContext, useRef, useState } from "react";
import styles from "./Form.module.css";
import { expenseContext } from "../../../store/expense-context";
import { LocalHost } from "../../..";
import FetchApi from "../../../hook/FetchApi";
import notify from "../../../hook/notify";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../store/user-context";

export default function Form() {
  const [isWrap, setIsWrap] = useState(false);
  const { token } = useContext(UserContext);
  const formRefs = useRef({
    expense: null,
    amount: null,
    description: null,
    category: null,
  });
  const { addExpense } = useContext(expenseContext);
  const navigate = useNavigate();

  let content = isWrap ? "Show Form" : "Hide Form";

  const wraphandler = (e) => {
    e.preventDefault();
    setIsWrap((prev) => !prev);
  };
  // console.log(isWrap);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formRefs)
    const expenseData = {
      expense: formRefs.current.expense.value,
      amount: formRefs.current.amount.value,
      description: formRefs.current.description.value,
      category: formRefs.current.category.value,
    };

    try {
      const response = await FetchApi(
        `${LocalHost}/expense/expense-form`,
        "POST",
        token,
        expenseData,
      );
      const json = await response.json();
      if (!response.ok) throw new Error(json.message);
      addExpense(json.expenseObj, 1);
      notify(json.message, "success");
    } catch (error) {
      notify(error.message, "error");
    }
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formTitle}>Expense Tracker Form</div>
      <form className={styles.form} onSubmit={handleSubmit} typeof="submit">
        <div className={isWrap ? styles.inputformBox : styles.formGroup}>
          <input
            type="text"
            placeholder=" "
            ref={(ele) => (formRefs.current.expense = ele)}
            className={styles.formInput}
          />
          <label className={styles.formLabel}>Enter Expense</label>
        </div>
        <div className={isWrap ? styles.inputFormBox : styles.formGroup}>
          <input
            type="number"
            placeholder=" "
            ref={(el) => (formRefs.current.amount = el)}
            className={styles.formInput}
          />
          <label className={styles.formLabel}>Enter your amount...</label>
        </div>
        <div className={isWrap ? styles.inputFormBox : styles.formGroup}>
          <input
            type="text"
            placeholder=" "
            ref={(el) => (formRefs.current.description = el)}
            className={styles.formInput}
          />
          <label className={styles.formLabel}>Enter your Description...</label>
        </div>
        <div className={isWrap ? styles.inputFormBox : styles.formGroup}>
          <label className={styles.formLabel}>Category</label>
          <select
            id="category"
            className={styles.category}
            ref={(el) => (formRefs.current.category = el)}
          >
            <option value="electricity">Electricity</option>
            <option value="travel">Travel</option>
            <option value="food">Food</option>
            <option value="home">Home</option>
          </select>
        </div>
        <div>
          <button type="button" onClick={wraphandler}>
            {content}
          </button>
        </div>
        <div className={isWrap ? styles.inputFormBox : ""}>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
}
