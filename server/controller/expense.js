const Expense = require("../models/expense");

const postExpense = async (req, res) => {
  const { expense, amount, description, category } = req.body;
//   console.log(">>>>", req.user.dataValues);
  try {
    const expenseObj = await Expense.create({
      expense,
      amount,
      description,
      category,
      UserId:req.user.userId
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
      where: { userId: user.userId },
    });
    
    res.status(201).json({ expensesArr });

  } catch (error) {
    res.status(40).json({ error: `${error.message}`})
    // console.log(error, "Internal Server Error!");
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
