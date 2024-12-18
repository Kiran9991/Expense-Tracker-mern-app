import React, { useContext, useRef, useState } from "react";
import styles from "./Form.module.css";
import { expenseContext } from "../../../store/expense-context";
import { LocalHost } from "../../../App";
import fetchApi from "../../../hook/fetchApi";
import notify from "../../../hook/notify";

export default function Form() {
  const [isWrap, setIsWrap] = useState(false);
  const expenseRef = useRef(null);
  const amountRef = useRef(null);
  const descriptionRef = useRef(null);
  const categoryRef = useRef(null);
  const { addExpense } = useContext(expenseContext);

  let content = isWrap ? "Show Form" : "Hide Form";

  const wraphandler = (e) => {
    e.preventDefault();
    setIsWrap((prev) => !prev);
  };
  // console.log(isWrap);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const expenseData = {
      expense: expenseRef.current.value,
      amount: amountRef.current.value,
      description: descriptionRef.current.value,
      category: categoryRef.current.value,
    };

    try {
      const response = await fetchApi(`${LocalHost}/expense/expense-form`, 'POST', expenseData);
      const json = await response.json();
      if(!response.ok) throw new Error(json.message);
      addExpense(json.expenseObj)
      notify(json.message, 'success')
    }catch(error) {
      notify(error.message, 'error')
    }
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formTitle}>Expense Tracker Form</div>
      <form className={styles.form} onSubmit={handleSubmit} typeof="submit">
        <div className={isWrap ? styles.inputFormBox : ''}>
          <label>Expense</label>
          <input
            type="text"
            placeholder="Enter your Expense..."
            ref={expenseRef}
          />
        </div>
        <div className={isWrap ? styles.inputFormBox : ''}>
          <label>Amount</label>
          <input
            type="number"
            placeholder="Enter your amount..."
            ref={amountRef}
          />
        </div>
        <div className={isWrap ? styles.inputFormBox : ''}>
          <label>Description</label>
          <input
            type="text"
            placeholder="Enter your Description..."
            ref={descriptionRef}
          />
        </div>
        <div className={isWrap ? styles.inputFormBox : ''}>
          <label>Category</label>
          <select id="category" className={styles.category} ref={categoryRef}>
            <option value="electricity">Electricity</option>
            <option value="travel">Travel</option>
            <option value="food">Food</option>
            <option value="home">Home</option>
          </select>
        </div>
        <div>
          <button type='button' onClick={wraphandler}>{content}</button>
        </div>
        <div className={isWrap ? styles.inputFormBox : ''}>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
}
