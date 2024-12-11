const express = require('express');
const middleware = require('../middleware/middleware');

const router = express.Router();

const expenseController = require('../controller/expense');

router.post('/expense-form', middleware, expenseController.postExpense);

router.get('/expenses', middleware, expenseController.getExpenses);

router.delete('/:id',middleware, expenseController.deleteExpense);


module.exports = router;