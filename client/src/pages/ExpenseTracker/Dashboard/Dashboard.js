import React, { useContext } from "react";

import styles from "./Dashboard.module.css";
import { expenseContext } from "../../../store/expense-context";

export default function Dashboard() {
  const { totalExpenses, totalAmount } = useContext(expenseContext);
  // console.log(totalExpenses)
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.dashboardCards}>
        <div className={styles.card1Title}>
          <h3>Total Amount</h3>
        </div>
        <span className={styles.card1Title}>{totalAmount}</span>
      </div>
      <div className={styles.dashboardCards}>
        <div className={styles.card1Title}>
          <h3>Total Expenses</h3>
        </div>
        <span className={styles.card1Title}>{totalExpenses}</span>
      </div>
    </div>
  );
}
