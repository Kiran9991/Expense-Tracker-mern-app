const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const User = require('./models/user');
const Expense = require('./models/expense');

const database = require("./database/db");
const userRoutes = require('./routes/user');
const expenseRoutes = require('./routes/expense');
const resetRoutes = require('./routes/resest-password');
const chatRoutes = require('./routes/chat');

let app = express();
const PORT = process.env.PORT_NUMBER;

app.use(cors({ origin: "http://localhost:3000" }));

app.use(bodyParser.json());

app.use('/user', userRoutes);
app.use('/expense', expenseRoutes);
app.use('/user', resetRoutes);
app.use('/chat', chatRoutes);

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
