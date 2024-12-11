const Expense = require("../models/expense");

const postExpense = async (req, res) => {
  const { expense, amount, description, category } = req.body;
  console.log(">>>>", req.user.dataValues);
  try {
    const expenseObj = await Expense.create({
      expense,
      amount,
      description,
      category,
    });

    res.status(201).json({ message: "Successfully add form data", expenseObj });
  } catch (error) {
    console.log(error, `Internal Server Error`);
    res.status(501).json({ message: error });
  }
};

const getExpenses = async (req, res) => {
  const user = req.user;
  try {

    const expensesArr = await Expense.findAll({
      where: { UserId: user.userId },
    });

    if(expensesArr.length === 0) throw Error('No Expenses!')
    
    res.status(201).json({ expensesArr });
  } catch (error) {
    console.log(error, "Internal Server Error!");
  }
};

const deleteExpense = async (req, res) => {
  const { id } = req.params;
  try {
    const singleExpense = await Expense.findByPk(id);

    const result = await singleExpense.destroy();

    res.status(200).json({ message: "Deleted the Expense!", result });
  } catch (error) {
    console.log(error, "Internal Server Error!");
  }
};

module.exports = {
  postExpense,
  getExpenses,
  deleteExpense,
};
