const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("expense_tracker", "root", "nodecomplete", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

module.exports = sequelize;
