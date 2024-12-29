import { createContext, useState } from "react";

const obj = { 
  expenses: [],
  totalExpenses: 0,
  totalAmount:0,
  page: parseInt(localStorage.getItem('page')) || 1, 
  addExpense: () => {}, 
  deleteExpense: () => {},
  deleteAllExpense: () => {},
  prevPage: () => {},
  nextPage: () => {},
};

export const expenseContext = createContext(obj);

const ExpenseContextProvider = (props) => {
  const [expenses, setExpense] = useState([]);
  const [page, setPage] = useState(obj.page);
  const [total, setTotal] = useState(0);
  const [amount, setAmount] = useState(0);

// console.log(expenses)

  const addExpenseHandler = (expense, expenseAmount, noOfExpenses) => {
  //  console.log(expenseAmount)
    if(Array.isArray(expense)) {
      setExpense([...expense]);
      setTotal(parseInt(noOfExpenses));
      setAmount(expenseAmount);
    }else {
      setExpense((prevArr) => [ expense, ...prevArr ]);
      setTotal(prev => prev++);
      setAmount(prev => prev += expense.amount);
    }
  };

  const deleteExpenseHandler = (id) => {
    setExpense((prevArr) => {
      const newArr = prevArr.filter((ele) => ele.id !== id);
      return newArr;
    });
  };

  const deleteAllExpenseHandler = () => {
    setExpense([]);
  }

  const prevPageUpdateHandler = () => {
    page > 1 && setPage(prev => prev-1);
    page > 1 && localStorage.setItem('page', page-1);
  }

  const nextPageUpdateHandler = () => {
    // console.log(expenses.length);
    setPage(prev => expenses.length > 0 ? prev+1 : 1);
    localStorage.setItem('page', expenses.length > 0 ? page+1 : 1);
  }

  const expenseObj = {
    expenses: expenses,
    page: page,
    totalExpenses: total,
    totalAmount: amount, 
    addExpense: addExpenseHandler,
    deleteExpense: deleteExpenseHandler,
    deleteAllExpense: deleteAllExpenseHandler,
    prevPage: prevPageUpdateHandler,
    nextPage: nextPageUpdateHandler
  };

  return (
    <expenseContext.Provider value={expenseObj}>
      {props.children}
    </expenseContext.Provider>
  );
};

export default ExpenseContextProvider;
