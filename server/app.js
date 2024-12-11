const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const User = require('./models/user');
const Expense = require('./models/expense');

const database = require("./database/db");
const userRoutes = require('./routes/user');
const expenseRoutes = require('./routes/expense');

let app = express();
const PORT = 4000;

app.use(cors({ origin: "http://localhost:3000" }));

app.use(bodyParser.json());

app.use('/user',userRoutes);
app.use('/expense', expenseRoutes);

User.hasMany(Expense);
Expense.belongsTo(User);

database.sync().then(() => {
    console.log('Database connected!')
}).catch((err) => {
    console.log(err);
})

app.listen(PORT, () => {
  console.log(`Server is listening on Port ${PORT}`);
});
