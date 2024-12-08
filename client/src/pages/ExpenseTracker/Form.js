import React, { useContext, useRef, useState } from "react";
import styles from "./Form.module.css";
import { expenseContext } from "../../store/expense-context";
import { LocalHost } from "../../App";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const expenseData = {
      expense: expenseRef.current.value,
      amount: amountRef.current.value,
      description: descriptionRef.current.value,
      category: categoryRef.current.value,
    };
    // console.log(formData);
    async function postExpenseApi(expenseDataObj) {
      console.log(expenseDataObj);
      const response = await fetch(`${LocalHost}/expense/expense-form`, {
        method: "POST",
        body: JSON.stringify(expenseDataObj),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      addExpense(data.expenseObj);
    }
    postExpenseApi(expenseData);
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formTitle}>Expense Tracker Form</div>
      <form className={styles.form} onSubmit={handleSubmit}>
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
          <button onClick={wraphandler}>{content}</button>
        </div>
        <div className={isWrap ? styles.inputFormBox : ''}>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
}
