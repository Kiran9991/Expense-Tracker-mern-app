import React, { useContext, } from 'react'

import styles from './Pagination.module.css';
import { expenseContext } from '../../../store/expense-context';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Pagination() {
  const { page, nextPage, prevPage } = useContext(expenseContext)
  const navigate = useNavigate();
// console.log(pages)
    const paginationHandler = () => {
        // setPages();
        // console.log(page)
        // navigate(`/expense/expenses/${page}`)
        nextPage();
        // console.log(page)
    }    

    const prevPaginationEffectHandler = () => {
      // console.log(page);
      // navigate(`/expense/expenses/${page}`)
      prevPage();

    }

  return (
    <div className={styles.paginationContainer}>
      <div className={styles.paginationButton} onClick={prevPaginationEffectHandler}>Prev Page - {page-1}</div>
      <div className={styles.paginationButton} >Current Page - {page}</div>
      <div className={styles.paginationButton} onClick={paginationHandler}>Next Page - {page+1}</div>
    </div>
  )
}
