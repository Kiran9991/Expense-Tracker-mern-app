const express = require("express");
const middleware = require("../middleware/middleware");

const router = express.Router();

const expenseController = require("../controller/expense");

router.post("/expense-form", middleware, expenseController.postExpense);

router.get("/expenses", middleware, expenseController.getExpenses);

router.delete("/:id", middleware, expenseController.deleteExpense);

router.post("/buy-premium", middleware, expenseController.buyPremium);

// router.get('/', middleware, expenseController.pagination);

module.exports = router;
