import React, { useContext } from "react";

import styles from "./ListItems.module.css";
import { expenseContext } from "../../../store/expense-context";
import { LocalHost } from "../../../App";

export default function ListExpenses() {
  const { expenses, deleteExpense } = useContext(expenseContext);
  const token = localStorage.getItem('token');

  let content = (
    <div className={styles.listNoItem}>No Expenses! Add Expenses here</div>
  );

  async function deleteExpenseApi(id) {
    try {
      const response = await fetch(`${LocalHost}/expense/${id}`, {
        method:'DELETE',
        headers: {
          'Authorization':`${token}`
        }
      })
      const data = await response.json();
      console.log(data);
      if(!response.ok) throw new Error(`Couldn't Delete the Expense`);
      alert(`Successfully Deleted the Expense`)
    }catch(error) {
      console.log(error);
      alert(`Error: ${error.message}`)
    }
  }

  if (expenses.length > 0) {
    content = expenses.map((ele) => (
      <div className={styles.listItem} key={Math.random()}>
        <div style={{ width: '28.2rem'}}>
          {ele.expense} - Rs. {ele.amount} - {ele.description}
        </div>
        <div>
          <button className={styles.editBtn}>Edit</button>
          <button
            className={styles.deleteBtn}
            onClick={() => {
              deleteExpense(ele.id);
              deleteExpenseApi(ele.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    ));
  }

  return <div className={styles.listItemsContainer}>{content}</div>;
}
