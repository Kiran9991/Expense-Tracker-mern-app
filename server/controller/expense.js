const Expense = require("../models/expense");
const User = require("../models/user");

// const arrOfObjectOfExpenses = [

//   {
//     expense: 'Rent',
//     amount: 1200,
//     description: 'Monthly house rent',
//     category: 'Housing',
//     UserId: 3
//   },
//   {
//     expense: 'Electricity',
//     amount: 150,
//     description: 'Monthly electricity bill',
//     category: 'Utilities',
//     UserId: 3
//   },
//   {
//     expense: 'Water',
//     amount: 50,
//     description: 'Monthly water bill',
//     category: 'Utilities',
//     UserId: 3
//   },
//   {
//     expense: 'Internet',
//     amount: 60,
//     description: 'Monthly internet bill',
//     category: 'Utilities',
//     UserId: 3
//   },
//   {
//     expense: 'Groceries',
//     amount: 400,
//     description: 'Weekly grocery shopping',
//     category: 'Food',
//     UserId: 3
//   },
//   {
//     expense: 'Dining Out',
//     amount: 75,
//     description: 'Dinner at a restaurant',
//     category: 'Food',
//     UserId: 3
//   },
//   {
//     expense: 'Gym Membership',
//     amount: 40,
//     description: 'Monthly gym subscription',
//     category: 'Fitness',
//     UserId: 3
//   },
//   {
//     expense: 'Car Payment',
//     amount: 300,
//     description: 'Monthly car loan payment',
//     category: 'Transportation',
//     UserId: 3
//   },
//   {
//     expense: 'Gas',
//     amount: 120,
//     description: 'Fuel for car',
//     category: 'Transportation',
//     UserId: 3
//   },
//   {
//     expense: 'Public Transport',
//     amount: 50,
//     description: 'Monthly bus pass',
//     category: 'Transportation',
//     UserId: 3
//   },
//   {
//     expense: 'Health Insurance',
//     amount: 200,
//     description: 'Monthly health insurance premium',
//     category: 'Health',
//     UserId: 3
//   },
//   {
//     expense: 'Doctor Visit',
//     amount: 100,
//     description: 'Consultation fee',
//     category: 'Health',
//     UserId: 3
//   },
//   {
//     expense: 'Medication',
//     amount: 60,
//     description: 'Monthly prescription refill',
//     category: 'Health',
//     UserId: 3
//   },
//   {
//     expense: 'Streaming Subscription',
//     amount: 15,
//     description: 'Monthly streaming service',
//     category: 'Entertainment',
//     UserId: 3
//   },
//   {
//     expense: 'Movie Night',
//     amount: 30,
//     description: 'Tickets for a movie',
//     category: 'Entertainment',
//     UserId: 3
//   },
//   {
//     expense: 'Clothing',
//     amount: 200,
//     description: 'New clothes',
//     category: 'Shopping',
//     UserId: 3
//   },
//   {
//     expense: 'Shoes',
//     amount: 100,
//     description: 'Pair of sneakers',
//     category: 'Shopping',
//     UserId: 3
//   },
//   {
//     expense: 'Books',
//     amount: 50,
//     description: 'Purchase of new books',
//     category: 'Education',
//     UserId: 3
//   },
//   {
//     expense: 'Online Course',
//     amount: 150,
//     description: 'Subscription to an online course',
//     category: 'Education',
//     UserId: 3
//   },
//   {
//     expense: 'Childcare',
//     amount: 800,
//     description: 'Daycare for kids',
//     category: 'Family',
//     UserId: 3
//   },
//   {
//     expense: 'Pet Food',
//     amount: 60,
//     description: 'Food for pet',
//     category: 'Pets',
//     UserId: 3
//   },
//   {
//     expense: 'Vet Visit',
//     amount: 120,
//     description: 'Annual checkup for pet',
//     category: 'Pets',
//     UserId: 3
//   },
//   {
//     expense: 'Home Repair',
//     amount: 250,
//     description: 'Fixing plumbing issues',
//     category: 'Housing',
//     UserId: 3
//   },
//   {
//     expense: 'Furniture',
//     amount: 500,
//     description: 'New sofa purchase',
//     category: 'Housing',
//     UserId: 3
//   },
//   {
//     expense: 'Phone Bill',
//     amount: 70,
//     description: 'Monthly mobile plan',
//     category: 'Utilities',
//     UserId: 3
//   },
//   {
//     expense: 'Charity',
//     amount: 100,
//     description: 'Donation to a local charity',
//     category: 'Miscellaneous',
//     UserId: 3
//   },
//   {
//     expense: 'Vacation',
//     amount: 1500,
//     description: 'Family trip expenses',
//     category: 'Travel',
//     UserId: 3
//   },
//   {
//     expense: 'Hotel Stay',
//     amount: 300,
//     description: 'Overnight hotel booking',
//     category: 'Travel',
//     UserId: 3
//   },
//   {
//     expense: 'Airfare',
//     amount: 600,
//     description: 'Flight tickets',
//     category: 'Travel',
//     UserId: 3
//   },
//   {
//     expense: 'Concert Tickets',
//     amount: 120,
//     description: 'Tickets for a live concert',
//     category: 'Entertainment',
//     UserId: 3
//   },
//   {
//     expense: 'Photography Equipment',
//     amount: 800,
//     description: 'New camera purchase',
//     category: 'Hobbies',
//     UserId: 3
//   },
//   {
//     expense: 'Gardening Supplies',
//     amount: 70,
//     description: 'Tools and seeds',
//     category: 'Hobbies',
//     UserId: 3
//   },
//   {
//     expense: 'Snacks',
//     amount: 20,
//     description: 'Chips and drinks',
//     category: 'Food',
//     UserId: 3
//   },
//   {
//     expense: 'Alcohol',
//     amount: 50,
//     description: 'Wine for a party',
//     category: 'Food',
//     UserId: 3
//   },
//   {
//     expense: 'Parking Fees',
//     amount: 25,
//     description: 'Monthly parking pass',
//     category: 'Transportation',
//     UserId: 3
//   },
//   {
//     expense: 'Bike Maintenance',
//     amount: 60,
//     description: 'Tune-up for bike',
//     category: 'Transportation',
//     UserId: 3
//   },
//   {
//     expense: 'Conference Fee',
//     amount: 200,
//     description: 'Registration for a work conference',
//     category: 'Work',
//     UserId: 3
//   },
//   {
//     expense: 'Work Tools',
//     amount: 150,
//     description: 'New tools for work',
//     category: 'Work',
//     UserId: 3
//   },
//   {
//     expense: 'Birthday Gift',
//     amount: 100,
//     description: 'Gift for a friend',
//     category: 'Gifts',
//     UserId: 3
//   },
//   {
//     expense: 'Anniversary Celebration',
//     amount: 300,
//     description: 'Dinner and flowers',
//     category: 'Gifts',
//     UserId: 3
//   },
//   {
//     expense: 'Insurance Premium',
//     amount: 400,
//     description: 'Quarterly insurance payment',
//     category: 'Finance',
//     UserId: 3
//   },
//   {
//     expense: 'Loan Payment',
//     amount: 500,
//     description: 'Monthly personal loan',
//     category: 'Finance',
//     UserId: 3
//   },
//   {
//     expense: 'Savings Contribution',
//     amount: 700,
//     description: 'Monthly savings deposit',
//     category: 'Finance',
//     UserId: 3
//   },
//   {
//     expense: 'Furniture Assembly',
//     amount: 80,
//     description: 'Hiring a handyman',
//     category: 'Housing',
//     UserId: 3
//   },
//   {
//     expense: 'Home Security',
//     amount: 100,
//     description: 'Security system subscription',
//     category: 'Housing',
//     UserId: 3
//   },
//   {
//     expense: 'Streaming Equipment',
//     amount: 200,
//     description: 'Microphone and lights',
//     category: 'Entertainment',
//     UserId: 3
//   },
//   {
//     expense: 'Music Lessons',
//     amount: 150,
//     description: 'Guitar classes',
//     category: 'Education',
//     UserId: 3
//   },
//   {
//     expense: 'Cooking Class',
//     amount: 100,
//     description: 'Learning new recipes',
//     category: 'Education',
//     UserId: 3
//   },
//   {
//     expense: 'House Cleaning',
//     amount: 150,
//     description: 'Cleaning services',
//     category: 'Housing',
//     UserId: 3
//   },
//   {
//     expense: 'Babysitter',
//     amount: 120,
//     description: 'Evening childcare',
//     category: 'Family',
//     UserId: 3
//   },
//   {
//     expense: 'Birthday Party',
//     amount: 500,
//     description: 'Event arrangements',
//     category: 'Family',
//     UserId: 3
//   },
//   {
//     expense: 'Tech Gadget',
//     amount: 300,
//     description: 'Purchase of a new gadget',
//     category: 'Shopping',
//     UserId: 3
//   },
//   {
//     expense: "Rent",
//     amount: 1200,
//     description: "Monthly house rent",
//     category: "Housing",
//     UserId: 1,
//   },
//   {
//     expense: "Groceries",
//     amount: 300,
//     description: "Weekly grocery shopping",
//     category: "Food",
//     UserId: 2,
//   },
//   {
//     expense: "Electricity Bill",
//     amount: 100,
//     description: "Monthly electricity charges",
//     category: "Utilities",
//     UserId: 3,
//   },
//   {
//     expense: "Internet",
//     amount: 50,
//     description: "Monthly internet bill",
//     category: "Utilities",
//     UserId: 1,
//   },
//   {
//     expense: "Gym Membership",
//     amount: 40,
//     description: "Monthly gym fees",
//     category: "Fitness",
//     UserId: 2,
//   },
//   {
//     expense: "Fuel",
//     amount: 150,
//     description: "Car refueling",
//     category: "Transportation",
//     UserId: 3,
//   },
//   {
//     expense: "Netflix Subscription",
//     amount: 15,
//     description: "Monthly subscription",
//     category: "Entertainment",
//     UserId: 1,
//   },
//   {
//     expense: "Dining Out",
//     amount: 60,
//     description: "Dinner with friends",
//     category: "Food",
//     UserId: 2,
//   },
//   {
//     expense: "Books",
//     amount: 25,
//     description: "Purchase of novels",
//     category: "Education",
//     UserId: 3,
//   },
//   {
//     expense: "Clothing",
//     amount: 100,
//     description: "Shopping for clothes",
//     category: "Apparel",
//     UserId: 1,
//   },
//   {
//     expense: "Medical Expenses",
//     amount: 200,
//     description: "Doctor visit and medicines",
//     category: "Health",
//     UserId: 2,
//   },
//   {
//     expense: "Coffee",
//     amount: 10,
//     description: "Morning coffee",
//     category: "Food",
//     UserId: 3,
//   },
//   {
//     expense: "Movie Tickets",
//     amount: 30,
//     description: "Cinema outing",
//     category: "Entertainment",
//     UserId: 1,
//   },
//   {
//     expense: "Phone Bill",
//     amount: 80,
//     description: "Monthly phone bill",
//     category: "Utilities",
//     UserId: 2,
//   },
//   {
//     expense: "Charity",
//     amount: 50,
//     description: "Donation to local charity",
//     category: "Miscellaneous",
//     UserId: 3,
//   },
//   {
//     expense: "Software Subscription",
//     amount: 20,
//     description: "Monthly software fees",
//     category: "Work",
//     UserId: 1,
//   },
//   {
//     expense: "Pet Food",
//     amount: 40,
//     description: "Food for pets",
//     category: "Pets",
//     UserId: 2,
//   },
//   {
//     expense: "Travel",
//     amount: 500,
//     description: "Flight tickets",
//     category: "Transportation",
//     UserId: 3,
//   },
//   {
//     expense: "Haircut",
//     amount: 25,
//     description: "Salon visit",
//     category: "Personal Care",
//     UserId: 1,
//   },
//   {
//     expense: "Party Supplies",
//     amount: 100,
//     description: "Birthday party decorations",
//     category: "Events",
//     UserId: 2,
//   },
//   {
//     expense: "Savings",
//     amount: 300,
//     description: "Monthly savings deposit",
//     category: "Savings",
//     UserId: 3,
//   },
//   {
//     expense: "Gas Bill",
//     amount: 30,
//     description: "Monthly gas charges",
//     category: "Utilities",
//     UserId: 1,
//   },
//   {
//     expense: "Bike Repair",
//     amount: 120,
//     description: "Repair and maintenance",
//     category: "Transportation",
//     UserId: 2,
//   },
//   {
//     expense: "Music Subscription",
//     amount: 10,
//     description: "Spotify monthly fee",
//     category: "Entertainment",
//     UserId: 3,
//   },
//   {
//     expense: "Yoga Class",
//     amount: 35,
//     description: "Monthly yoga classes",
//     category: "Fitness",
//     UserId: 1,
//   },
//   {
//     expense: "Insurance",
//     amount: 150,
//     description: "Health insurance premium",
//     category: "Health",
//     UserId: 2,
//   },
//   {
//     expense: "Cleaning Services",
//     amount: 60,
//     description: "Monthly house cleaning",
//     category: "Housing",
//     UserId: 3,
//   },
//   {
//     expense: "Snacks",
//     amount: 15,
//     description: "Evening snacks",
//     category: "Food",
//     UserId: 1,
//   },
//   {
//     expense: "Laundry",
//     amount: 25,
//     description: "Dry cleaning",
//     category: "Personal Care",
//     UserId: 2,
//   },
//   {
//     expense: "Vacation",
//     amount: 2000,
//     description: "Holiday trip",
//     category: "Travel",
//     UserId: 3,
//   },
//   {
//     expense: "Furniture",
//     amount: 400,
//     description: "New chair and desk",
//     category: "Housing",
//     UserId: 1,
//   },
//   {
//     expense: "Concert Tickets",
//     amount: 120,
//     description: "Live concert event",
//     category: "Entertainment",
//     UserId: 2,
//   },
//   {
//     expense: "Tuition Fees",
//     amount: 600,
//     description: "College semester fees",
//     category: "Education",
//     UserId: 3,
//   },
//   {
//     expense: "Groceries",
//     amount: 200,
//     description: "Weekly grocery shopping",
//     category: "Food",
//     UserId: 1,
//   },
//   {
//     expense: "Car Wash",
//     amount: 15,
//     description: "Monthly car cleaning",
//     category: "Transportation",
//     UserId: 2,
//   },
//   {
//     expense: "Childcare",
//     amount: 500,
//     description: "Daycare services",
//     category: "Family",
//     UserId: 3,
//   },
//   {
//     expense: "Hobbies",
//     amount: 80,
//     description: "Craft supplies",
//     category: "Miscellaneous",
//     UserId: 1,
//   },
//   {
//     expense: "Streaming Service",
//     amount: 12,
//     description: "Disney+ subscription",
//     category: "Entertainment",
//     UserId: 2,
//   },
//   {
//     expense: "Utilities",
//     amount: 90,
//     description: "Water and sewerage",
//     category: "Utilities",
//     UserId: 3,
//   },
// ];

const postExpense = async (req, res) => {
  // console.log(arrOfObjectOfExpenses.length);
  const { expense, amount, description, category } = req.body;
  //   console.log(">>>>", req.user.dataValues);
  try {
    // expenseObj
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
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const user = req.user;
  try {
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
