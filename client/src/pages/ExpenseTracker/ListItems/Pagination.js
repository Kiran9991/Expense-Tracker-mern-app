import React, { useContext, useState } from "react";

import styles from "./Pagination.module.css";
import { expenseContext } from "../../../store/expense-context";
import { useLocation, useNavigate } from "react-router-dom";

export default function Pagination() {
  const { page, nextPage, prevPage, setPageLimit, limit } = useContext(expenseContext);

  const paginationHandler = () => {
    nextPage();
  };

  const prevPaginationEffectHandler = () => {
    prevPage();
  };

  return (
    <div className={styles.paginationContainer}>
      <div
        className={styles.paginationButton}
        onClick={prevPaginationEffectHandler}
      >
        Prev Page - {page - 1}
      </div>
      <div className={styles.middleBtn}>
        <div className={styles.paginationButton}>Current Page - {page}</div>
        <select style={{ borderRadius: '5px' }} value={limit} onChange={(e) => setPageLimit(e.target.value)}>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
      </div>
      <div className={styles.paginationButton} onClick={paginationHandler}>
        Next Page - {page + 1}
      </div>
    </div>
  );
}
