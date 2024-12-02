import React, { useContext } from 'react'
import Form from './Form'

import styles from './ListItems.module.css';
import userContext from '../../store/user-context';

export default function ExpenseTracker() {
  const { expenses } = useContext(userContext);

  let content = 'No Expenses!';

  // console.log(expenses)

  return (
    <div>
      <Form/>
      <div className={styles.listItemsContainer}>
        {/* <div className={styles.listItem}>Expense Items - Item 1 </div> */}
        {expenses.map((ele) => 
          <div className={styles.listItem}>{ele.expense} - {ele.amount} - {ele.description}</div>
        )}
      </div>
    </div>
  )
}
