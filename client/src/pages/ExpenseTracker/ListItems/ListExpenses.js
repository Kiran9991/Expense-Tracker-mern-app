import React, { useContext } from "react";

import { expenseContext } from "../../../store/expense-context";
import { LocalHost } from "../../../App";
import notify from "../../../hook/notify";
import fetchApi from "../../../hook/fetchApi";
import styles from "./ListItems.module.css";

export default function ListExpenses() {
  const { expenses, deleteExpense } = useContext(expenseContext);
  
  let content = (
    <div className={styles.listNoItem}>No Expenses! Add Expenses here</div>
  );
  
  const deleteButtonHandler = (id) => {
    async function deleteExpenseApi(id) {
      const response = await fetchApi(`${LocalHost}/expense/${id}`, 'Delete');
      const data = await response.json();
      console.log(response, 'call');
      notify(data.message, 'success');
    }
    deleteExpenseApi(id);
    deleteExpense(id);
  }

  if (expenses.length > 0) {
    content = expenses.map((ele) => (
      <div className={styles.listItem} key={Math.random()}>
        <div style={{ width: "28.2rem" }}>
          {ele.expense} - Rs. {ele.amount} - {ele.description}
        </div>
        <div>
          <button className={styles.editBtn}>Edit</button>
          <button
            className={styles.deleteBtn}
            onClick={() => deleteButtonHandler(ele.id)}
          >
            Delete
          </button>
        </div>
      </div>
    ));
  }


  return <div className={styles.listItemsContainer}>{content}</div>;
}
