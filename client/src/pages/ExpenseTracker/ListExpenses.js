import React, { useContext } from "react";

import styles from "./ListItems.module.css";
import { expenseContext } from "../../store/expense-context";

export default function ListExpenses() {
  const { expenses, deleteExpense } = useContext(expenseContext);

  let content = (
    <div className={styles.listNoItem}>No Expenses! Add Expenses here</div>
  );

  if (expenses.length > 0) {
    content = expenses.map((ele) => (
      <div className={styles.listItem} key={Math.random()}>
        <div>
          {ele.expense} - {ele.amount} - {ele.description}
        </div>
        <div>
          <button className={styles.itemOperation}>Edit</button>
          <button
            className={styles.itemOperation}
            onClick={() => {
              deleteExpense(ele.expense);
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
