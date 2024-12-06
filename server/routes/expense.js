const express = require('express');

const router = express.Router();

const expenseController = require('../controller/expense');

router.post('/expense-form', expenseController.postExpense);

router.delete('/:id', expenseController.deleteExpense);

module.exports = router;