import React, { useContext } from "react";
import { expenseContext } from "../../../store/expense-context";
import { UserContext } from "../../../store/user-context";
import { LocalHost } from "../../..";
import notify from "../../../hook/notify";
import FetchApi from "../../../hook/FetchApi";
import styles from "./ListItems.module.css";
import { Container, Row, Col } from "react-bootstrap";
import ExpenseRow from "./ExpenseRow";
import Paginations from "./Pagination";

export default function ListExpenses() {
  const { expenses, deleteExpense } = useContext(expenseContext);
  const { token } = useContext(UserContext);

  const deleteButtonHandler = (id) => {
    async function deleteExpenseApi(id) {
      const response = await FetchApi(
        `${LocalHost}/expense/${id}`,
        "Delete",
        token
      );
      const data = await response.json();
      notify(data.message, "success");
    }
    deleteExpenseApi(id);
    deleteExpense(id);
  };
  return (
    <Container>
      <Row>
        <Col>
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
      <Paginations/>
        </Col>
      </Row>
    </Container>
  );
}
