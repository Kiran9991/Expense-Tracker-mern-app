import { createContext, useState } from "react";

const obj = { 
  expenses: [],
  totalExpenses: 0,
  totalAmount:0,
  limit:parseInt(localStorage.getItem('limit')) || 5,
  page: parseInt(localStorage.getItem('page')) || 1, 
  addExpense: () => {}, 
  deleteExpense: () => {},
  deleteAllExpense: () => {},
  prevPage: () => {},
  nextPage: () => {},
  setPageLimit: () => {},
};

export const expenseContext = createContext(obj);

const ExpenseContextProvider = (props) => {
  const [expenses, setExpense] = useState([]);
  const [page, setPage] = useState(obj.page);
  const [total, setTotal] = useState(0);
  const [amount, setAmount] = useState(0);
  const [limit, setLimit] = useState(obj.limit);

  const addExpenseHandler = (expense, expenseAmount, noOfExpenses) => {
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
    setPage(prev => expenses.length > 0 ? prev+1 : 1);
    localStorage.setItem('page', expenses.length > 0 ? page+1 : 1);
  }

  const setLimitHandler = (val) => {
    setLimit(val);
    localStorage.setItem('limit', val);
  }

  const expenseObj = {
    expenses: expenses,
    page: page,
    totalExpenses: total,
    totalAmount: amount,
    limit: limit, 
    addExpense: addExpenseHandler,
    deleteExpense: deleteExpenseHandler,
    deleteAllExpense: deleteAllExpenseHandler,
    prevPage: prevPageUpdateHandler,
    nextPage: nextPageUpdateHandler,
    setPageLimit: setLimitHandler
  };

  return (
    <expenseContext.Provider value={expenseObj}>
      {props.children}
    </expenseContext.Provider>
  );
};

export default ExpenseContextProvider;
