import React from "react";

import styles from "./Form.module.css";

export default function Form() {
  return (
    <div className={styles.formContainer}>
      <div className={styles.formTitle}>Expense Tracker Form</div>
      <form className={styles.form}>
        <div>
        <label>Expense</label>
        <input type="text" placeholder="Enter your Expense..." />
        </div>

        <div>
        <label>Amout</label>
        <input type="number" placeholder="Enter your amount..." />
        </div>

        <div>
        <label>Description</label>
        <input type="text" placeholder="Enter your Description..." />
        </div>
        
        <div>
        <label>Category</label>
        <select id="category" className={styles.category}>
          <option value="electricity">Electricity</option>
          <option value="travel">Travel</option>
          <option value="food">Food</option>
          <option value="home">Home</option>
        </select>
        </div>

        <div>
        <button>Add Expense</button>
        </div>

      </form>
    </div>
  );
}
