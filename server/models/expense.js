const { INTEGER, STRING } = require('sequelize');

const sequelize = require('../database/db');

const Expense = sequelize.define('Expense', {
    id: {
        type: INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: true
    },
    expense: {
        type: STRING,
        allowNull: false,
    },
    amount: {
        type: STRING,
        allowNull: false,
    },
    description: {
        type: STRING,
        allowNull: false,
    },
    category: {
        type: STRING,
        allowNull: false,
    }
})

module.exports = Expense;