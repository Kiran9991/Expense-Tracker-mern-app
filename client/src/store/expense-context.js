import { createContext, useState } from "react";

const obj = { expenses: [], addExpense: () => {}, deleteExpense: () => {} };

export const expenseContext = createContext(obj);

const ExpenseContextProvider = (props) => {
  const [expenses, setExpense] = useState([]);

  const addExpenseHandler = (expense) => {
    if(Array.isArray(expense)) {
      setExpense((prevArr) => [...prevArr, ...expense]);
    }else {
      setExpense((prevArr) => [...prevArr, expense]);
    }
  };

  const deleteExpenseHandler = (id) => {
    setExpense((prevArr) => {
      const newArr = prevArr.filter((ele) => ele.id !== id);
      return newArr;
    });
  };

  const editExpenseHandler = (id) => {};

  const expenseObj = {
    expenses: expenses,
    addExpense: addExpenseHandler,
    deleteExpense: deleteExpenseHandler,
  };

  return (
    <expenseContext.Provider value={expenseObj}>
      {props.children}
    </expenseContext.Provider>
  );
};

export default ExpenseContextProvider;
