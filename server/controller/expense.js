const Expense = require("../models/expense");
const User = require('../models/user');

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

    res.status(201).json({ message: "Successfully added Expense", expenseObj });
  } catch (error) {
    console.log(error, `Internal Server Error`);
    res.status(501).json({ message: error });
  }
};

// expense/expenses
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

// expense/:id
const deleteExpense = async (req, res) => {
  const { id } = req.params;
  try {
    const singleExpense = await Expense.findByPk(id);

    const result = await singleExpense.destroy();

    res.status(200).json({ message: "Successfully Deleted the Expense!", result });
  } catch (error) {
    console.log(error, "Internal Server Error!");
  }
};

const buyPremium = async (req, res) => {
  const { userId } = req.user;
  
  try {
    const userObjFromDb = await User.findByPk(userId);

    if(!userObjFromDb) throw new Error('Failed to find user Obj')

    userObjFromDb.isPremium = true;
    await userObjFromDb.save()

    const response = userObjFromDb.isPremium;

    // const response = await User.update({ isPremium: false }, { where: { id: userId }})
    // console.log(response)
    // if(!response) throw new Error('Failed to update isPremium')
    
    res.status(201).json({ message: 'Successfully buyed the premium', response })
  }catch(error) {
    res.status(401).json({ message: `${error}`})
  }
}

module.exports = {
  postExpense,
  getExpenses,
  deleteExpense,
  buyPremium
};
