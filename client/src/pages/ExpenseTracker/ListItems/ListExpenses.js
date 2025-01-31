import React, { useContext } from "react";
import { expenseContext } from "../../../store/expense-context";
import { UserContext } from "../../../store/user-context";
import { LocalHost } from "../../..";
import notify from "../../../hook/notify";
import FetchApi from "../../../hook/FetchApi";
import styles from "./ListItems.module.css";
import Containers from "../../../components/Containers";
import Pagination from "./Pagination";
import ExpenseRow from "./ExpenseRow";

export default function ListExpenses() {
  const { expenses, deleteExpense } = useContext(expenseContext);
  const { token } = useContext(UserContext);

  const deleteButtonHandler = (id) => {
    async function deleteExpenseApi(id) {
      const response = await FetchApi(`${LocalHost}/expense/${id}`, "Delete", token);
      const data = await response.json();
      notify(data.message, "success");
    }
    deleteExpenseApi(id);
    deleteExpense(id);
  };

  return (
    <Containers>
      {expenses.length > 0 ? (
        expenses.map((ele) => (
          <ExpenseRow
            key={ele.id}
            expense={ele.expense}
            amount={ele.amount}
            description={ele.description}
            onDelete={() => deleteButtonHandler(ele.id)}
          />
        ))
      ) : (
        <div className={styles.listNoItem}>No Expenses! Add Expenses here</div>
      )}
      <Pagination />
    </Containers>
  );
}
