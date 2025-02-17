import React, { useContext, useState } from "react";
import { Pagination } from "react-bootstrap";

import styles from "./Pagination.module.css";
import { expenseContext } from "../../../store/expense-context";

export default function Paginations() {
  const { page, nextPage, prevPage, setPageLimit,
     limit, totalExpenses, setPage } =
    useContext(expenseContext);

  const paginationHandler = () => {
    nextPage();
  };

  const prevPaginationEffectHandler = () => {
    prevPage();
  };

  const totalNoOfPages = (total, limit) => {
    if(total % limit !== 0) return Math.floor(total/limit)+1;
    return total/limit;
  }

  return (
    // <div className={styles.paginationContainer}>
    //   <div
    //     className={styles.paginationButton}
    //     onClick={prevPaginationEffectHandler}
    //   >
    //     Prev Page - {page - 1}
    //   </div>
    //   <div className={styles.middleBtn}>
    //     <div className={styles.paginationButton}>Current Page - {page}</div>
    //     <select
    //       style={{ borderRadius: "5px" }}
    //       value={limit}
    //       onChange={(e) => setPageLimit(e.target.value)}
    //     >
    //       <option>5</option>
    //       <option>6</option>
    //       <option>7</option>
    //       <option>8</option>
    //       <option>9</option>
    //       <option>10</option>
    //     </select>
    //   </div>
    //   <div className={styles.paginationButton} onClick={paginationHandler}>
    //     Next Page - {page + 1}
    //   </div>
    // </div>
    <Pagination className="justify-center">
      <Pagination.First onClick={() => setPage(1)} />
      <Pagination.Prev onClick={() => prevPage()} />
      <Pagination.Item>{1}</Pagination.Item>
      {/* <Pagination.Ellipsis /> */}

      <Pagination.Item active>{page}</Pagination.Item>
      {/* <Pagination.Item>{page+1}</Pagination.Item>
      <Pagination.Item>{page+2}</Pagination.Item>
      <Pagination.Item>{page+3}</Pagination.Item>

      <Pagination.Ellipsis /> */}
      <Pagination.Item>{totalNoOfPages(totalExpenses, limit)}</Pagination.Item>
      <Pagination.Next onClick={() => nextPage()}/>
      <Pagination.Last onClick={() => 
        setPage(totalNoOfPages(totalExpenses, limit))
        }/>
    </Pagination>
  );
}
