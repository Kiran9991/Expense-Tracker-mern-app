const Expense = require("../models/expense");
const User = require("../models/user");

const arrOfObjectOfExpenses = [
  {
    expense: "Rent",
    amount: 1200,
    description: "Monthly house rent",
    category: "Housing",
    UserId: 1,
  },
  {
    expense: "Groceries",
    amount: 300,
    description: "Weekly grocery shopping",
    category: "Food",
    UserId: 2,
  },
  {
    expense: "Electricity Bill",
    amount: 100,
    description: "Monthly electricity charges",
    category: "Utilities",
    UserId: 3,
  },
  {
    expense: "Internet",
    amount: 50,
    description: "Monthly internet bill",
    category: "Utilities",
    UserId: 1,
  },
  {
    expense: "Gym Membership",
    amount: 40,
    description: "Monthly gym fees",
    category: "Fitness",
    UserId: 2,
  },
  {
    expense: "Fuel",
    amount: 150,
    description: "Car refueling",
    category: "Transportation",
    UserId: 3,
  },
  {
    expense: "Netflix Subscription",
    amount: 15,
    description: "Monthly subscription",
    category: "Entertainment",
    UserId: 1,
  },
  {
    expense: "Dining Out",
    amount: 60,
    description: "Dinner with friends",
    category: "Food",
    UserId: 2,
  },
  {
    expense: "Books",
    amount: 25,
    description: "Purchase of novels",
    category: "Education",
    UserId: 3,
  },
  {
    expense: "Clothing",
    amount: 100,
    description: "Shopping for clothes",
    category: "Apparel",
    UserId: 1,
  },
  {
    expense: "Medical Expenses",
    amount: 200,
    description: "Doctor visit and medicines",
    category: "Health",
    UserId: 2,
  },
  {
    expense: "Coffee",
    amount: 10,
    description: "Morning coffee",
    category: "Food",
    UserId: 3,
  },
  {
    expense: "Movie Tickets",
    amount: 30,
    description: "Cinema outing",
    category: "Entertainment",
    UserId: 1,
  },
  {
    expense: "Phone Bill",
    amount: 80,
    description: "Monthly phone bill",
    category: "Utilities",
    UserId: 2,
  },
  {
    expense: "Charity",
    amount: 50,
    description: "Donation to local charity",
    category: "Miscellaneous",
    UserId: 3,
  },
  {
    expense: "Software Subscription",
    amount: 20,
    description: "Monthly software fees",
    category: "Work",
    UserId: 1,
  },
  {
    expense: "Pet Food",
    amount: 40,
    description: "Food for pets",
    category: "Pets",
    UserId: 2,
  },
  {
    expense: "Travel",
    amount: 500,
    description: "Flight tickets",
    category: "Transportation",
    UserId: 3,
  },
  {
    expense: "Haircut",
    amount: 25,
    description: "Salon visit",
    category: "Personal Care",
    UserId: 1,
  },
  {
    expense: "Party Supplies",
    amount: 100,
    description: "Birthday party decorations",
    category: "Events",
    UserId: 2,
  },
  {
    expense: "Savings",
    amount: 300,
    description: "Monthly savings deposit",
    category: "Savings",
    UserId: 3,
  },
  {
    expense: "Gas Bill",
    amount: 30,
    description: "Monthly gas charges",
    category: "Utilities",
    UserId: 1,
  },
  {
    expense: "Bike Repair",
    amount: 120,
    description: "Repair and maintenance",
    category: "Transportation",
    UserId: 2,
  },
  {
    expense: "Music Subscription",
    amount: 10,
    description: "Spotify monthly fee",
    category: "Entertainment",
    UserId: 3,
  },
  {
    expense: "Yoga Class",
    amount: 35,
    description: "Monthly yoga classes",
    category: "Fitness",
    UserId: 1,
  },
  {
    expense: "Insurance",
    amount: 150,
    description: "Health insurance premium",
    category: "Health",
    UserId: 2,
  },
  {
    expense: "Cleaning Services",
    amount: 60,
    description: "Monthly house cleaning",
    category: "Housing",
    UserId: 3,
  },
  {
    expense: "Snacks",
    amount: 15,
    description: "Evening snacks",
    category: "Food",
    UserId: 1,
  },
  {
    expense: "Laundry",
    amount: 25,
    description: "Dry cleaning",
    category: "Personal Care",
    UserId: 2,
  },
  {
    expense: "Vacation",
    amount: 2000,
    description: "Holiday trip",
    category: "Travel",
    UserId: 3,
  },
  {
    expense: "Furniture",
    amount: 400,
    description: "New chair and desk",
    category: "Housing",
    UserId: 1,
  },
  {
    expense: "Concert Tickets",
    amount: 120,
    description: "Live concert event",
    category: "Entertainment",
    UserId: 2,
  },
  {
    expense: "Tuition Fees",
    amount: 600,
    description: "College semester fees",
    category: "Education",
    UserId: 3,
  },
  {
    expense: "Groceries",
    amount: 200,
    description: "Weekly grocery shopping",
    category: "Food",
    UserId: 1,
  },
  {
    expense: "Car Wash",
    amount: 15,
    description: "Monthly car cleaning",
    category: "Transportation",
    UserId: 2,
  },
  {
    expense: "Childcare",
    amount: 500,
    description: "Daycare services",
    category: "Family",
    UserId: 3,
  },
  {
    expense: "Hobbies",
    amount: 80,
    description: "Craft supplies",
    category: "Miscellaneous",
    UserId: 1,
  },
  {
    expense: "Streaming Service",
    amount: 12,
    description: "Disney+ subscription",
    category: "Entertainment",
    UserId: 2,
  },
  {
    expense: "Utilities",
    amount: 90,
    description: "Water and sewerage",
    category: "Utilities",
    UserId: 3,
  },
  // (repeat similar objects ensuring variety and alternating UserId values for 100 examples)
];

const postExpense = async (req, res) => {
  // console.log(arrOfObjectOfExpenses.length);
  const { expense, amount, description, category } = req.body;
  //   console.log(">>>>", req.user.dataValues);
  try {
    // for(let obj of arrOfObjectOfExpenses) {
    const expenseObj = await Expense.create({
      expense,
      amount,
      description,
      category,
      UserId: req.user.userId,
    });
    // }

    res.status(201).json({ message: "Successfully added Expense", expenseObj });
  } catch (error) {
    console.log(error, `Internal Server Error`);
    res.status(501).json({ message: error });
  }
};

// expense/expenses
const getExpenses = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;
  const user = req.user;
  try {
    const limit = 5;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const allExpenses = await Expense.findAll({
      where: {
        userId: user.userId,
      },
      order: [["id", "DESC"]],
    });

    // const nextPage = endIndex < allExpenses.length ? page + 1  : null;
    // const prevPage = startIndex > 0 ? page - 1 : null;
    const totalAmount = allExpenses.reduce((total, ele) => total += ele.amount ? parseInt(ele.amount) : 0 , 0);
    const expensesPerPage = allExpenses.slice(startIndex, endIndex);
    res.status(201).json({
        expensesPerPage,
        currentPage: page,
        totalExpenses: allExpenses.length,
        totalAmount
      });
  } catch (error) {
    res.status(40).json({ error: `${error.message}` });
    // console.log(error, "Internal Server Error!");
  }
};

// expense/:id
const deleteExpense = async (req, res) => {
  const { id } = req.params;
  try {
    const singleExpense = await Expense.findByPk(id);

    const result = await singleExpense.destroy();

    res
      .status(200)
      .json({ message: "Successfully Deleted the Expense!", result });
  } catch (error) {
    console.log(error, "Internal Server Error!");
  }
};

const buyPremium = async (req, res) => {
  const { userId } = req.user;

  try {
    const userObjFromDb = await User.findByPk(userId);

    if (!userObjFromDb) throw new Error("Failed to find user Obj");

    userObjFromDb.isPremium = true;
    await userObjFromDb.save();

    const response = userObjFromDb.isPremium;

    // const response = await User.update({ isPremium: false }, { where: { id: userId }})
    // console.log(response)
    // if(!response) throw new Error('Failed to update isPremium')

    res
      .status(201)
      .json({ message: "Successfully buyed the premium", response });
  } catch (error) {
    res.status(401).json({ message: `${error}` });
  }
};

// const pagination = async(req, res) => {
//   const { page, limit } = req.query;
//   try {
//     console.log(page, limit);
// return;
//   }catch(error) {
//     res.status(401).json({ message: error });
//   }
// }

module.exports = {
  postExpense,
  getExpenses,
  deleteExpense,
  buyPremium,
  // pagination
};
