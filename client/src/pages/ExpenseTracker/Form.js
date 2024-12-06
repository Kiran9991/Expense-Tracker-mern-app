import React, { useContext, useRef } from "react";
import styles from "./Form.module.css";
import { expenseContext } from "../../store/expense-context";
import { LocalHost } from "../../App";

export default function Form() {
  const expenseRef = useRef(null);
  const amountRef = useRef(null);
  const descriptionRef = useRef(null);
  const categoryRef = useRef(null);
  const { addExpense } = useContext(expenseContext);

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
      console.log(expenseDataObj)
        const response = await fetch(`${LocalHost}/expense/expense-form`, {
          method: 'POST',
          body: JSON.stringify(expenseDataObj),
          headers: {
            'Content-Type':'application/json'
          }
        })
        const data = await response.json();
        console.log(data);
    }
    addExpense(expenseData)
    postExpenseApi(expenseData);
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formTitle}>Expense Tracker Form</div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <label>Expense</label>
          <input
            type="text"
            placeholder="Enter your Expense..."
            ref={expenseRef}
          />
        </div>
        <div>
          <label>Amount</label>
          <input
            type="number"
            placeholder="Enter your amount..."
            ref={amountRef}
          />
        </div>
        <div>
          <label>Description</label>
          <input
            type="text"
            placeholder="Enter your Description..."
            ref={descriptionRef}
          />
        </div>
        <div>
          <label>Category</label>
          <select id="category" className={styles.category} ref={categoryRef}>
            <option value="electricity">Electricity</option>
            <option value="travel">Travel</option>
            <option value="food">Food</option>
            <option value="home">Home</option>
          </select>
        </div>
        <div>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
}
