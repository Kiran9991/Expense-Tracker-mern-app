const Expense = require('../models/expense');

const postExpense = async(req, res) => {
    const { expense, amount, description, category } = req.body;

    try {
        const expenseObj = await Expense.create({ expense, amount, description, category });

        res.status(201).json({ message: 'Successfully add form data', expenseObj})
    }catch(error) {
        console.log(error, `Internal Server Error`);
    }
}

const deleteExpense = async(req, res) => {
    const obj = req.params;
    console.log('>>>', obj);
    try {
        const response = await Expense.findByPk({ where: { id: obj }});
        console.log('response',response);
        const result = await Expense.destroy(response)
        console.log( 'result',result);
        res.status(200).json({ message: 'Deleted the Expense!' })
    }catch(error) {
        console.log(error, 'Internal Server Error!');
    }
}

module.exports = {
    postExpense, 
    deleteExpense,
};