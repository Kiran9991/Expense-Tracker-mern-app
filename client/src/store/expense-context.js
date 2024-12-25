import { createContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const obj = { 
  expenses: [],
  page: parseInt(localStorage.getItem('page')), 
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
  
  const addExpenseHandler = (expense) => {
    // console.log(expense)
    if(Array.isArray(expense)) {
      setExpense([...expense]);
    }else {
      setExpense((prevArr) => [ expense, ...prevArr ]);
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
